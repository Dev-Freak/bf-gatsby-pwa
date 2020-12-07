const { SALESTREKKER_API_KEY } = process.env
const fetch = require("./apolloFetch")
const FetchException = require("./fetchException")

const authenticate = async () => {
  console.log("\nAuthenticating.........................")

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

    return result.data
  } catch (error) {
    throw new FetchException("Authenticate", error)
  }
}

module.exports = authenticate
