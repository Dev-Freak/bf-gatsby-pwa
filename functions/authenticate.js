const { SALESTREKKER_API_KEY } = process.env
const fetch = require("./apolloFetch")

const authenticate = async () => {
  console.log("\nAuthenticating.........................\n")

  const AUTHENTICATE_MUTATION = `mutation Authenticate($apiKey: String!) {
    authenticate(apiKey: $apiKey) {
      token
    }
  }`

  const fetchObject = {
    query: AUTHENTICATE_MUTATION,
    variables: { apiKey: SALESTREKKER_API_KEY },
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

module.exports = authenticate
