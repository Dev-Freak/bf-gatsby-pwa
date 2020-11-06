exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);

  //#region Function setup
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  //#region GraphQL SetUp
  const { createApolloFetch } = require("apollo-fetch");

  const fetch = createApolloFetch({
    uri: "https://sfg.salestrekker.com/graphql",
  });

  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {}; // Create the headers object if needed.
    }

    const { token } = params;
    options.headers["Authorization"] = `Bearer ${token}`;

    next();
  });
  //#endregion
  //#endregion

  console.log("\nGetting workflow.........................\n");

  const WORKFLOW_BY_ID_QUERY = `query GetWorkflowById($id: ID!) {
    workflow (id: $id) {
      id
      idOwner
      name
      isProject
      description
      idTeamMembers
      type {
          name
      }
      stages {
          id
          name
      }
    }
  }`;

  const { idWorkflow } = params;

  const fetchObject = {
    query: WORKFLOW_BY_ID_QUERY,
    variables: { id: idWorkflow },
  };

  try {
    const result = await fetch(fetchObject);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "applicantion/json",
      },
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    };
  }
};
