// Participle verb forms: "present", "gerund", "past";
// Дієприкметник (який, яка, яке, які?);
// Gerund is an uncompleted action;

class Participle {
  constructor(verb) {
    this.verb = verb;
    this.form = null;
  }

  getForm() {
    if (this.verb.endsWith("ing")) this.form = "present";
    // TODO need implement gerund form
    if (this.verb.endsWith("ed")) this.form = "past"; // TODO need implement irregular endings
  }
}

export default Participle;
