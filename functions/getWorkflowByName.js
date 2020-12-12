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

  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    options.headers["Authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRjZTdkOTE3LWYwZTctNDNiZC1hMDM0LTgxMmNjNjk4MGIyMiIsImlkQ3VycmVudE9yZ2FuaXphdGlvbiI6IjM4MTc0NTNmLWNkMzQtNDViNS05MGUxLTkxNjZmMDI1ZmRkNCIsImlhdCI6MTU5OTEyOTgxNCwiZXhwIjoxNjAwMzM5NDE0fQ.MIRbZqm4-AcLIH4Q1RtVzu3_w2Ahc0t_FHcKnoPW_Xs"

    next()
  })
  //#endregion
  //#endregion

  const WORKFLOW_BY_NAME_QUERY = `query GetWorkflowByName($query: String!) {
    workflowsSearch(query: $query) {
      id
      name
      isProject
    }
  }`

  const { workflowName } = JSON.parse(event.body)

  const fetchObject = {
    query: WORKFLOW_BY_NAME_QUERY,
    variables: { query: workflowName },
  }

  try {
    const result = await fetch(fetchObject)
    const workflows = result.data.workflowsSearch

    let returnObject = {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "applicantion/json",
      },
    }

    if (workflows.length === 0)
      return {
        ...returnObject,
        body: "Sorry, no workflows found...",
      }
    else if (workflows.length > 1)
      return {
        ...returnObject,
        body: JSON.stringify(
          workflows.filter(workflow => workflow.name === workflowName)
        ),
      }
    else
      return {
        ...returnObject,
        body: JSON.stringify(workflows[0]),
      }
  } catch (error) {
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}
