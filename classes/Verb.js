import EndOfVerb from "./EndOfVerb.js";

class Verb {
  constructor(verb) {
    this.verb = verb;
    this.end = new EndOfVerb(this.verb);
  }

  getResultVerb() {
    return this.end.addAnEndToVerb();
  }
}

const verb = new Verb("make");
const verb2 = new Verb("do");
const verb3 = new Verb("stuck");
const verb4 = new Verb("try");
console.log(
  verb.getResultVerb(),
  verb2.getResultVerb(),
  verb3.getResultVerb(),
  verb4.getResultVerb()
);
