import mapNouns from "./lib/nouns.js";
import mapIrregularVerbs from "./lib/irregular-verbs.js";
import Repository from "./classes/Repository/index.js";

export async function setup() {
  const nouns = await mapNouns();
  const irregularVerbs = await mapIrregularVerbs();

  Repository.add("nouns", nouns);
  Repository.add("irregularVerbs", irregularVerbs);
  Repository.isReady = true;
}
