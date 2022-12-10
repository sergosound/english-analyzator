class Repository {
  irregularVerbs;
  isReady = false;
  addIrregularVerbs(irregularVerbs) {
    this.irregularVerbs = irregularVerbs;
  }
}

export default new Repository();
