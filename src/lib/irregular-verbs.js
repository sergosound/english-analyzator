"use strict";

import path from "node:path";
import { mapFile } from "../utils.js";

function reader(line, result) {
  const lineData = line.split("\t");

  result[lineData[0]] = {
    infinitive: lineData[0],
    pastSimple: lineData[1],
    pastParticiple: lineData[2],
  };
}

const filePath = path.join(process.cwd(), "./src/lib/irregular-verbs.exc");

export default mapFile.bind(null, filePath, reader, {});
