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

    const { token } = params.auth;
    options.headers["Authorization"] = `Bearer ${token}`;

    next();
  });
  //#endregion
  //#endregion

  console.log("\nCreating ticket.........................\n");

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
  }`;

  const { idClients, description } = params;
  const { idOwner, idWorkflow, idStage } = params.workflow;

  const fetchObject = {
    query: TICKET_CREATE_MUTATION,
    variables: {
      idOwner,
      idWorkflow,
      idStage,
      idClients,
      description,
    },
  };

  try {
    const result = await fetch(fetchObject);

    return {
      statusCode: 200,
      body: JSON.stringify(result),
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
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
