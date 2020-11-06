import fetch from "node-fetch";
var FormData = require("form-data");

const WEBFORM_URL =
  "https://sfg.salestrekker.com/webforms-data/ZWI4Y2Q0ZWU2MThkNzdjOWE4NGNlOTJmYTEyZDJkZGE1ZDU1YTk2NDJkODUzOGNjYzBjODIwODZjNjgxZmMyYg==/?w=d555c63d5eaa-b739-6a54-3a3d-f983c610&s=8bb1d5f0ce7f-159b-f5d4-1d86-42c658fc";

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  const parsedBody = JSON.parse(event.body);
  const { firstName, familyName } = parsedBody;

  /* if (firstName && familyName) {
    return {
      statusCode: 200,
      body: "Hello " + firstName + " " + familyName + ", nice to meet you!",
    };
  } else {
    return {
      statusCode: 400,
      body: "Sorry, I do not know you... \n" + JSON.stringify(event.body),
    };
  } */

  if (firstName && familyName) {
    const formData = new FormData();

    for (const name in parsedBody) {
      if (name !== "income" && name !== "basic_details")
        formData.append(name, parsedBody[name]);
    }

    const response = await fetch(WEBFORM_URL, {
      method: "POST",
      body: formData,
      cors: "CORS",
      header: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status) {
      return {
        statusCode: 200,
        body: "OK\n" + JSON.stringify(response),
      };
    } else {
      return {
        statusCode: 500,
        body: "ERROR\n" + JSON.stringify(response),
      };
    }
  } else {
    return {
      statusCode: "400",
      body: "Sorry, something wasn't quite right...",
    };
  }
};
