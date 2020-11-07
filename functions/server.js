const fetch = require("node-fetch").default

const auth = async () => {
  const auth = require("./authenticate")

  const authData = await auth()

  return JSON.parse(authData.body).data
}

const getWorkflow = async params => {
  const workflow = require("./getWorkflowById")

  const workflowData = await workflow(params)

  return JSON.parse(workflowData.body).data
}

const findClientLabel = async params => {
  const label = require("./findClientLabel")

  const labelData = await label(params)

  return JSON.parse(labelData.body).data
}

const createContact = async params => {
  const contact = require("./contactCreate")

  const contactData = await contact(params)

  return JSON.parse(contactData.body).data
}

const createTicket = async params => {
  const ticket = require("./ticketCreate")

  const ticketData = await ticket(params)

  return JSON.parse(ticketData.body).data
}

const formatTicketDescription = params => {
  const description = Object.keys(params)
    .map(key => `${key}: ${params[key]}`)
    .join("\n")

  return description
}

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" }
  }

  const params = JSON.parse(event.body)

  try {
    const { authenticate } = await auth()

    // console.log(authenticate)

    const { idWorkflow } = params

    const workflowQueryObject = {
      ...authenticate,
      idWorkflow,
    }
    const { workflow } = await getWorkflow(workflowQueryObject)

    // console.log(workflow)

    const findClientLabelObject = {
      ...authenticate,
    }
    const { clientLabels } = await findClientLabel(findClientLabelObject)

    // console.log(clientLabels)

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

    // console.log(contact)

    const { description } = params
    const ticketMutationObject = {
      auth: authenticate,
      workflow: {
        idWorkflow,
        idOwner: workflow.idOwner,
        idStage: workflow.stages[0].id,
      },
      idClients: [contact.contactCreate],
      description: formatTicketDescription(description),
    }
    const ticket = await createTicket(ticketMutationObject)

    // console.log(ticket)

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
    // console.log(error)
    return {
      statusCode: 500,
      body: "Sorry, something went wrong.\n" + JSON.stringify(error),
    }
  }
}
