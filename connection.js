export default class Connection {
  constructor({ source, target, importance }) {
    this.source = source;
    this.target = target;
    this.importance = importance;
  }

  learnFromPast(calculated, actual, input) {
    const mistake = calculated - actual;

    // This mistake have to be removed and the knowledge should be updated
    this.importance = this.importance - mistake * input;
  }
}
