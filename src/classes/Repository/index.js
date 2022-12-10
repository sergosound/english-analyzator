class Repository {
  irregularVerbs;
  isReady = false;

  add(field, data) {
    this[field] = data;
  }
}

export default new Repository();
