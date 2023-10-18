// This code sends data to a Splunk HTTP Event Collector (HEC) endpoint using the Axios library in Node.js.

// First, make sure you have Axios installed by running 'npm install axios'.

// Import the Axios library for making HTTP requests.
const axios = require("axios");

// If you have a valid SSL certificate, disable SSL certificate verification.
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

// Set the Splunk HEC endpoint and token. Replace these with your own values.
const SplunkHECEndpoint = "https://localhost:8088/services/collector"; // Replace with your Splunk HEC endpoint
const SplunkToken = "51333224-bf28-4213-95b1-7560073a3037"; // Replace with your HEC token

// Define the data to send to Splunk, including the index.
const eventData = {
  event: "Hello, Splunk", // Replace with your event data
  index: "main", // Replace with your index
};

// Configure the Axios request with the HTTP method, URL, headers, and data.
const axiosConfig = {
  method: "post", // Use the POST method to send data.
  url: SplunkHECEndpoint, // Specify the Splunk HEC endpoint.
  headers: {
    Authorization: `Splunk ${SplunkToken}`, // Set the authorization header with your token.
    "Content-Type": "application/json", // Set the content type to JSON.
  },
  data: eventData, // Send the event data as JSON.
};

// Send the event to Splunk using Axios.
axios(axiosConfig)
  .then((response) => {
    // Handle success: Log the successful response.
    console.log("Event sent successfully:", response.data);
  })
  .catch((error) => {
    // Handle errors: Log any errors that occur during the request.
    console.error("Error sending event to Splunk:", error);
  });

// Last, you can run this code by running 'node main.js'.
