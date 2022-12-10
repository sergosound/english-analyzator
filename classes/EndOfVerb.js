import { vowels } from "../alphabet.js";

// Rule: [["s" || "o", "+es"], ["y", "=ies"], [otherVowels|otherConsonants, "+s"]]
// Explanation: "+" => addition; "=" => replacing;

class EndOfVerb {
  _type;
  resultEnd;

  constructor(verb) {
    this.verb = verb;
    this.endSymbol = this.verb[this.verb.length - 1];
    this.needReplace = false;
    this.analyze();
  }

  analyze() {
    if (this.endSymbol === "y") {
      this._type = "vowel";
      this.resultEnd = "ies";
      this.needReplace = true;
    } else if (this.endSymbol === "o") {
      this._type = "vowel";
      this.resultEnd = "es";
    } else if (this.endSymbol === "s") {
      this._type = "consonant";
      this.resultEnd = "es";
    } else if (vowels.includes(this.endSymbol)) {
      this._type = "vowel";
      this.resultEnd = "s";
    } else {
      this._type = "consonant";
      this.resultEnd = "s";
    }
  }

  addAnEndToVerb() {
    const { needReplace, resultEnd } = this.getInfo();
    return needReplace
      ? this.verb.slice(0, this.verb.length - 1) + resultEnd
      : this.verb + resultEnd;
  }

  getInfo() {
    return {
      endSymbol: this.endSymbol,
      _type: this._type,
      resultEnd: this.resultEnd,
      needReplace: this.needReplace,
    };
  }
}

export default EndOfVerb;
