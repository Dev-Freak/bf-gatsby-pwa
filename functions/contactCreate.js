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

  console.log("\nCreating contact.........................\n");

  const CONTACT_CREATE_MUTATION = `mutation ContactCreate(
    $idOwner: ID!,
    $idLabels: [ID!]!,
    $firstName: String!,
    $familyName: String!,
    $email: String!,
    $primaryCode: String!,
    $primary: String!,
    ) {
    contactCreate (contact: {
      idOwner: $idOwner
      isActive: true
      person: {
        information: {
          firstName: $firstName
          familyName: $familyName
        }
        contact: {
          email: $email
          primaryCode: $primaryCode
          primary: $primary
        }
      }
      idLabels: $idLabels
    })
  }`;

  const { idLabels } = params;
  const { idOwner } = params.workflow;
  const { firstName, familyName, email, primaryCode, primary } = params.contact;

  const fetchObject = {
    query: CONTACT_CREATE_MUTATION,
    variables: {
      idOwner,
      idLabels,
      firstName,
      familyName,
      email,
      primaryCode,
      primary,
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
