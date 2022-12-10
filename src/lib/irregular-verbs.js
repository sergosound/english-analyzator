import { createInterface } from "readline";
import * as fs from "fs";

export function makeIrregularVerbsStructure(inputFile) {
  return new Promise((resolve, reject) => {
    const irregularVerbs = {};

    try {
      const lineReader = createInterface({
        input: fs.createReadStream(inputFile),
      });

      lineReader
        .on("line", (line) => {
          const lineData = line.split("\t");

          irregularVerbs[lineData[0]] = {
            infinitive: lineData[0],
            pastSimple: lineData[1],
            pastParticiple: lineData[2],
          };
        })
        .on("close", () => {
          resolve(irregularVerbs);
        });
    } catch (error) {
      reject(error);
    }
  });
}
