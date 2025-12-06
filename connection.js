export default class Connection {
  constructor({ source, target, importance }) {
    this.source = source;
    this.target = target;
    this.importance = importance;
  }

  learnFromMistake(calculated, actual, input) {
    const mistake = (calculated - actual) * input;

    // This mistake have to be removed and the knowledge should be updated
    this.importance = this.importance - mistake;
  }
}
