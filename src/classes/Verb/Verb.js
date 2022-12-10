import End from "./End.js";
import Participle from "./Participle.js";

// Verb is an action (any action), occurrence (develop) or state of being (exist);

class Verb {
  constructor(verb) {
    this.verb = verb;
    this.end = new End(this.verb);
    this._participle = new Participle(this.verb);
    this._verbTypes = ["action", "occurrence", "exist"];
  }

  getResultVerb() {
    return this.end.addAnEndToVerb();
  }

  getParticiple() {}
}

const verb = new Verb("make");
const verb2 = new Verb("do");
const verb3 = new Verb("stuck");
const verb4 = new Verb("try");
const verb5 = new Verb("walk");
const verb6 = new Verb("occurrence");
const verb7 = new Verb("exist");
console.log(
  verb.getResultVerb(),
  verb2.getResultVerb(),
  verb3.getResultVerb(),
  verb4.getResultVerb(),
  verb5.getResultVerb(),
  verb6.getResultVerb(),
  verb7.getResultVerb()
);
