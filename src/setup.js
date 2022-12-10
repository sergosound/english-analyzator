import { makeIrregularVerbsStructure } from "./lib/irregular-verbs.js";
import Repository from "./classes/Repository/index.js";

export async function setup() {
  const irregularVerbs = await makeIrregularVerbsStructure(
    "./lib/irregular-verbs.exc"
  );

  Repository.addIrregularVerbs(irregularVerbs);
  Repository.isReady = true;
}
