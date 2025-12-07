// A connection consists of three things
// 1. What is the source of the connection
// 2. What is the target of the connection
// 3. How important is this connection to the target

export default class Connection {
  constructor({ sourceName, target, importance }) {
    this.sourceName = sourceName;
    this.target = target;
    this.importance = importance;
  }
}
