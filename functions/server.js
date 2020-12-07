// TODO: Rename fetch handlerMethods and files to properly describe their purpose

const auth = async () => {
  const authFetch = require("./authenticate")
  const authData = await authFetch()
  return authData
}

const getWorkflow = async params => {
  const workflowFetch = require("./getWorkflowById")
  const workflowData = await workflowFetch(params)
  return workflowData
}

const findClientLabel = async params => {
  const labelFetch = require("./findClientLabel")
  const labelData = await labelFetch(params)
  return labelData
}

const createContact = async params => {
  const contactFetch = require("./contactCreate")
  const contactData = await contactFetch(params)
  return contactData
}

const createTicket = async params => {
  const ticketFetch = require("./ticketCreate")
  const ticketData = await ticketFetch(params)
  return ticketData
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const params = JSON.parse(event.body)

  try {
    const { authenticate } = await auth()
    console.log(authenticate)

    const { idWorkflow } = params

    const workflowQueryObject = {
      ...authenticate,
      idWorkflow,
    }
    const { workflow } = await getWorkflow(workflowQueryObject)
    console.log(workflow)

    const findClientLabelObject = {
      ...authenticate,
    }
    const { clientLabels } = await findClientLabel(findClientLabelObject)
    console.log(clientLabels)

    const { firstName, familyName, email, primaryCode, primary } = params
    const contactMutationObject = {
      auth: authenticate,
      workflow: workflow,
      contact: {
        firstName,
        familyName,
        email,
        primaryCode,
        primary,
      },
      idLabels: [...clientLabels],
    }
    const contact = await createContact(contactMutationObject)
    console.log(contact)

    const { description } = params
    const ticketMutationObject = {
      auth: authenticate,
      workflow: {
        idWorkflow,
        idOwner: workflow.idOwner,
        idStage: workflow.stages[0].id,
      },
      idClients: [contact.contactCreate],
      description,
    }
    const ticket = await createTicket(ticketMutationObject)
    console.log(ticket)

    return {
      statusCode: 200,
      body: JSON.stringify(ticket),
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST",
        "Content-Type": "applicantion/json",
      },
    }
  } catch (error) {
    console.log(error)

    return {
      statusCode: 500,
      body: "\nSorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}
