const fetch = require("./apolloFetch")
const FetchException = require("./fetchException")

const findClientLabel = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nFinding client label.........................")

  const FIND_LABELS_QUERY = `query FindContactLabels {
    labels {
      id
      name
    }
  }`

  const fetchObject = {
    query: FIND_LABELS_QUERY,
  }

  try {
    const result = await fetch(fetchObject)

    const { labels } = result.data
    const contactLabels = labels
      .filter(label => label.name === "Client")
      .map(label => label.id)

    const resultObject = {
      clientLabels: [...contactLabels],
    }

    return resultObject
  } catch (error) {
    throw FetchException("FindClientLabel", error)
  }
}

module.exports = findClientLabel
