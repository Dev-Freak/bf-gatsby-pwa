const fetch = require("node-fetch").default;

const authenticateFunction = `http://localhost:9000/.netlify/functions/authenticate`;

const auth = async () => {
  const authData = await fetch(authenticateFunction, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return authData;
};

exports.handler = async (event, context) => {
  const { authenticate } = await auth();

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

    const { token } = authenticate;
    options.headers["Authorization"] = `Bearer ${token}`;

    next();
  });
  //#endregion
  //#endregion

  console.log("Authenticating.........................");
  const WORKFLOWS_QUERY = `query GetAllWorkflows {
    workflows {
      id
      name
    }
  }`;

  const fetchObject = {
    query: WORKFLOWS_QUERY,
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
