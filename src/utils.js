"use strict";

import { createInterface } from "readline";
import fs from "fs";

export function mapFile(inputFile, reader, data) {
  return new Promise((resolve, reject) => {
    try {
      const lineReader = createInterface({
        input: fs.createReadStream(inputFile),
      });

      lineReader
        .on("line", (line) => {
          reader(line, data);
        })
        .on("close", () => {
          resolve(data);
        });
    } catch (error) {
      reject(error);
    }
  });
}
