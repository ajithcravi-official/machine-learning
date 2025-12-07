function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}

export class DecisionMaker {
  name: string;
  knowledge: number;

  constructor({ name, knowledge }: { name: string; knowledge: number }) {
    this.name = name;
    this.knowledge = knowledge;
  }

  // Calculate the weighted inputs
  // Importance of the message
  getMessageImportance({
    input,
    importance,
  }: {
    input: number;
    importance: number;
  }): number {
    return input * importance + this.knowledge;
  }

  // Activation function
  think({ input, importance }: { input: number; importance: number }): number {
    return sigmoid(this.getMessageImportance({ input, importance }));
  }

  learnFromPast({
    calculated,
    actual,
  }: {
    calculated: number;
    actual: number;
  }): void {
    const mistake = calculated - actual;

    // This mistake have to be removed and the knowledge should be updated
    this.knowledge = this.knowledge - mistake;
  }
}
