const { SALESTREKKER_API_KEY } = process.env

exports.handler = async (event, context) => {
  //#region Function setup
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  //#region GraphQL SetUp
  const { createApolloFetch } = require("apollo-fetch")

  const fetch = createApolloFetch({
    uri: "https://sfg.salestrekker.com/graphql",
  })
  //#endregion
  //#endregion

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
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "applicantion/json",
      },
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}
