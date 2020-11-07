const fetch = require("./apolloFetch")

const findClientLabel = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nFinding client label.........................\n")

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
      data: {
        clientLabels: [...contactLabels],
      },
    }

    return {
      statusCode: 200,
      body: JSON.stringify(resultObject),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}

module.exports = findClientLabel
