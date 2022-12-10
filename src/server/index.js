"use strict";

import fs from "node:fs";
import http from "node:http";
import path from "node:path";

const PORT = 8000;
const STATIC_PATH = path.join(process.cwd(), "./src/static");

export default function createServer() {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
      fs.createReadStream(STATIC_PATH + "/index.html").pipe(res);
    })
    .listen(PORT);

  console.log(`Server running at http://127.0.0.1:${PORT}/`);
}
