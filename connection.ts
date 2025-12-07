// A connection consists of three things
// 1. What is the source of the connection
// 2. What is the target of the connection
// 3. How important is this connection to the target

import type { DecisionMaker } from "./decision-maker.js";

export class Connection {
  sourceName: string;
  target: DecisionMaker;
  importance: number;

  constructor({
    sourceName,
    target,
    importance,
  }: {
    sourceName: string;
    target: DecisionMaker;
    importance: number;
  }) {
    this.sourceName = sourceName;
    this.target = target;
    this.importance = importance;
  }

  learnFromPast({
    calculated,
    actual,
    input,
  }: {
    calculated: number;
    actual: number;
    input: number;
  }): void {
    const mistake = calculated - actual;

    // This mistake have to be removed and the knowledge should be updated
    this.importance = this.importance - mistake * input;
  }
}
