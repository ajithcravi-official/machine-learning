function sigmoid(x) {
  return 1 / (1 + Math.exp(-x));
}

export default class DecisionMaker {
  constructor({ name, knowledge }) {
    this.name = name;
    this.knowledge = knowledge;
  }

  // Calculate the weighted inputs
  // Importance of the message
  getMessageImportance(input, importance) {
    return input * importance + this.knowledge;
  }

  // Activation function
  think({ input, importance }) {
    return sigmoid(this.getMessageImportance(input, importance));
  }

  learnFromMistake(calculated, actual) {
    const mistake = calculated - actual;

    // This mistake have to be removed and the knowledge should be updated
    this.knowledge = this.knowledge - mistake;
  }
}
