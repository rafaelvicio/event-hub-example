const { EventHubClient } = require("@azure/event-hubs");

const connectionString = "";
const entityPath = "exemplo";

const client = EventHubClient.createFromConnectionString(
  connectionString,
  entityPath
);

async function main() {
  // NOTE: For receiving events from Azure Stream Analytics, please send Events to an EventHub where the body is a JSON object.
  // const eventData = { body: { "message": "Hello World" }, partitionKey: "pk12345"};
  const eventData = { body: "Hello World", partitionKey: "1" };
  const delivery = await client.send(eventData);
  console.log("message sent successfully.");
}

main().catch(err => {
  console.log(err);
});
