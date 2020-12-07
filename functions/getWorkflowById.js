const fetch = require("./apolloFetch")
const FetchException = require("./fetchException")

const getWorkflowById = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nGetting workflow.........................")

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
  }`

  const { idWorkflow } = params

  const fetchObject = {
    query: WORKFLOW_BY_ID_QUERY,
    variables: { id: idWorkflow },
  }

  try {
    const result = await fetch(fetchObject)

    return result.data
  } catch (error) {
    throw FetchException("GetWorkflowById", error)
  }
}

module.exports = getWorkflowById
