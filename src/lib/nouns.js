"use strict";

import path from "node:path";
import { mapFile } from "../utils.js";

function reader(line, data) {
  const word = line;

  if (!data[word[0]]) {
    data[word[0]] = [];
  }

  data[word[0]].push(word);
}

const filePath = path.join(process.cwd(), "./src/lib/nouns.exc");

export default mapFile.bind(null, filePath, reader, {});
