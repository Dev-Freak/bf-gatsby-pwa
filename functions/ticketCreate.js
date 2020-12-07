const fetch = require("./apolloFetch")
const FetchException = require("./fetchException")

const capitalizeWord = word => (word = word.charAt(0).toUpperCase() + word.slice(1))

const formatKey = key => {
  const keyWords = key.split("_")
  const keyName = keyWords
    .map((keyWord, index) => (index === 0 ? capitalizeWord(keyWord) : keyWord))
    .join(" ")

  return keyName
}

const formatApplicantsArray = arr => {
  let text = ""

  arr.forEach((item, index) => {
    text += `\nApplicant ${index + 1}:`
    Object.keys(item).forEach(key => {
      const value = item[key]

      if (typeof value === "string") text += `\n${formatKey(key)}: ${value}`
      else if (Array.isArray(value))
        text += `\n${formatKey(key)}: ${value.join(", ")}`
    })
  })

  return text
}

const formatTicketDescription = obj => {
  const description = Object.keys(obj)
    .map(key => {
      const value = obj[key]

      if (typeof value === "string") return `\n${formatKey(key)}: ${value}`
      else if (key === "applicants")
        return `${formatKey(key)}: ${formatApplicantsArray(value)}`
    })
    .join("\n")

  return description
}

const ticketCreate = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params.auth
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nCreating ticket.........................")

  const TICKET_CREATE_MUTATION = `mutation ContactCreate($idOwner: ID!, $idWorkflow: ID!, $idStage: ID!, $idClients: [ID!]!, $description: String!) {
    ticketCreate (ticket: {
      idOwner: $idOwner
      idWorkflow: $idWorkflow
      idStage: $idStage
      idClients: $idClients
      isActive: true
      name: "WebSite Lead"
      ticketClientTypes: {}
      values: {
        onceOff: 0
      }
      description: $description
    })
  }`

  const { idClients, description } = params
  const { idOwner, idWorkflow, idStage } = params.workflow
  const formattedDescription = formatTicketDescription(description)

  const fetchObject = {
    query: TICKET_CREATE_MUTATION,
    variables: {
      idOwner,
      idWorkflow,
      idStage,
      idClients,
      description: formattedDescription,
    },
  }

  try {
    const result = await fetch(fetchObject)

    return result.data
  } catch (error) {
    throw FetchException("TicketCreate", error)
  }
}

module.exports = ticketCreate
