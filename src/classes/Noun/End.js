// Rule: [[s, x, z, ch, sh, "+es"], ["y", "=ies"], [otherVowels|otherConsonants, "+s"]];
// Explanation: "+" => addition; "=" => replacing;

class End {
  constructor(noun) {
    this.noun = noun;
  }

  makeSingle() {
    if (this.noun.endsWith("s")) {
      return this.noun.slice(0, this.noun.length - 1);
    }

    if (this.noun.endsWith("es")) {
      return this.noun.slice(0, this.noun.length - 2);
    }

    if (this.noun.endsWith("ies")) {
      return this.noun.slice(0, this.noun.length - 3) + "y";
    }

    throw Error("Unexpected ending of noun");
  }

  makePlural() {
    const lastSymbol = this.noun[this.noun.length - 1];
    if (["s", "x", "z"].includes(lastSymbol)) {
      return this.noun + "es";
    }

    const lastTwoSymbols = this.noun.slice(this.noun.length - 2);
    if (["ch", "sh"].includes(lastTwoSymbols)) {
      return this.noun + "es";
    }

    if (lastSymbol === "y") {
      return this.noun.slice(0, this.noun.length - 1) + "ies";
    }

    return this.noun + "s";
  }

  isPlural() {
    return ["s", "es", "ies"].some((end) => this.noun.endsWith(end));
  }
}
