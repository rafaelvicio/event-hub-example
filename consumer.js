const { EventHubClient, EventPosition } = require("@azure/event-hubs");

const connectionString = "";
const entityPath = "exemplo";

const client = EventHubClient.createFromConnectionString(
  connectionString,
  entityPath
);

async function main() {
  const onError = err => {
    console.log("An error occurred on the receiver ", err);
  };

  const onMessage = data => {
    console.log(data.body);
  };

  const receiveHandler = client.receive("1", onMessage, onError, {
    eventPosition: EventPosition.fromEnqueuedTime(Date.now())
  });

  await receiveHandler.stop();
}

main().catch(err => {
  console.log(err);
});
