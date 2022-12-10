import createServer from "./server/index.js";
import { setup } from "./setup.js";

async function start() {
  createServer();
  await setup();
}

start();
