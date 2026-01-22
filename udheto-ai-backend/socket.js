const startSimulation = require("./simulator");
let simulationStarted = false;

module.exports = function setupSocket(io) {
  io.on("connection", (socket) => {
    console.log("Client connected:", socket.id);

    socket.on("join_line", async ({ lineId }) => {
      console.log(`Client joined line: ${lineId}`);
      socket.join(lineId);

      if (!simulationStarted) {
        await startSimulation(io);
        simulationStarted = true;
      }
    });

    socket.on("disconnect", () => {
      console.log("Client disconnected:", socket.id);
    });
  });
};
