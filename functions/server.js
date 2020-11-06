const fetch = require("node-fetch").default;
const { NETLIFY_FUNCTIONS_URL } = process.env;

const authenticateFunctionUrl = `${NETLIFY_FUNCTIONS_URL}/authenticate`;
const getWorkflowFunctionUrl = `${NETLIFY_FUNCTIONS_URL}/getWorkflowById`;
const findClientLabelFunctionUrl = `${NETLIFY_FUNCTIONS_URL}/findClientLabel`;
const createContactFunctionUrl = `${NETLIFY_FUNCTIONS_URL}/contactCreate`;
const createTicketFunctionUrl = `${NETLIFY_FUNCTIONS_URL}/ticketCreate`;

const auth = async () => {
  const authData = await fetch(authenticateFunctionUrl, {
    method: "POST",
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return authData;
};

const getWorkflow = async (params) => {
  const workflowData = await fetch(getWorkflowFunctionUrl, {
    method: "POST",
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return workflowData;
};

const findClientLabel = async (params) => {
  const labelData = await fetch(findClientLabelFunctionUrl, {
    method: "POST",
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return labelData;
};

const createContact = async (params) => {
  const contactData = await fetch(createContactFunctionUrl, {
    method: "POST",
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return contactData;
};

const createTicket = async (params) => {
  const ticketData = await fetch(createTicketFunctionUrl, {
    method: "POST",
    body: JSON.stringify(params),
  })
    .then((res) => res.json())
    .then((json) => json.data);

  return ticketData;
};

const formatTicketDescription = (params) => {
  const description = Object.keys(params)
    .map((key) => `${key}: ${params[key]}`)
    .join("\n");

  return description;
};

exports.handler = async (event, context) => {
  const params = JSON.parse(event.body);

  try {
    const { authenticate } = await auth();

    const { idWorkflow } = params;

    const workflowQueryObject = {
      ...authenticate,
      idWorkflow,
    };
    const { workflow } = await getWorkflow(workflowQueryObject);

    const findClientLabelObject = {
      ...authenticate,
    };
    const { clientLabels } = await findClientLabel(findClientLabelObject);

    const { firstName, familyName, email, primaryCode, primary } = params;
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
    };
    const contact = await createContact(contactMutationObject);

    /* const description = {
      path: "Refinance",
      refinance_reason: "Refinance reason...",
      property_quantity: "4+",
      estimated_value: "1000000",
    }; */

    const ticketMutationObject = {
      auth: authenticate,
      workflow: {
        idWorkflow,
        idOwner: workflow.idOwner,
        idStage: workflow.stages[0].id,
      },
      idClients: [contact.contactCreate],
      description: formatTicketDescription(params.description),
    };
    const ticket = await createTicket(ticketMutationObject);

    return {
      statusCode: 200,
      body: JSON.stringify(ticket),
      headers: {
        "Access-Control-Allow-Origin": "https://bf-app.netlify.app/",
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
