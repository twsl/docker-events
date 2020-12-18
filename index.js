const Docker = require("dockerode");
const docker = new Docker();
const package = require("./package.json");

console.log(`${package.name} ${package.version}`);

docker.getEvents({}, (err, data) => {
  if (data) {
    data.on("data", (data) => {
      console.log(data.toString("utf8"));
      const { id, status, from, Type, Action, time, timeNano, Actor } = JSON.parse(data.toString("utf8"));
    });
  }
});
