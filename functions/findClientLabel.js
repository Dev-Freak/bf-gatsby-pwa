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

  console.log("\nFinding client label.........................\n");

  const FIND_LABELS_QUERY = `query FindContactLabels {
    labels {
      id
      name
    }
  }`;

  const fetchObject = {
    query: FIND_LABELS_QUERY,
  };

  try {
    const result = await fetch(fetchObject);

    const { labels } = result.data;
    const contactLabels = labels
      .filter((label) => label.name === "Client")
      .map((label) => label.id);

    const resultObject = {
      data: {
        clientLabels: [...contactLabels],
      },
    };

    return {
      statusCode: 200,
      body: JSON.stringify(resultObject),
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
