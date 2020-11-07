const fetch = require("./apolloFetch")

const ticketCreate = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params.auth
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nCreating ticket.........................\n")

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

  const fetchObject = {
    query: TICKET_CREATE_MUTATION,
    variables: {
      idOwner,
      idWorkflow,
      idStage,
      idClients,
      description,
    },
  }

  try {
    const result = await fetch(fetchObject)

    return {
      statusCode: 200,
      body: JSON.stringify(result),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}

module.exports = ticketCreate
