const fetch = require("./apolloFetch")
const FetchException = require("./fetchException")

const contactCreate = async params => {
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {} // Create the headers object if needed.
    }

    const { token } = params.auth
    options.headers["Authorization"] = `Bearer ${token}`

    next()
  })

  console.log("\nCreating contact.........................")

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
  }`

  const { idLabels } = params
  const { idOwner } = params.workflow
  const { firstName, familyName, email, primaryCode, primary } = params.contact

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
  }

  try {
    const result = await fetch(fetchObject)

    return result.data
  } catch (error) {
    throw FetchException("ContactCreate", error)
  }
}

module.exports = contactCreate
