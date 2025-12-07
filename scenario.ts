export class Scenario {
  name: string;
  description: string;
  outputs: string;
  parseOutputs: (output: number) => string;

  constructor({
    name,
    description,
    outputs,
    parseOutputs,
  }: {
    name: string;
    description: string;
    outputs: string;
    parseOutputs: (output: number) => string;
  }) {
    this.name = name;
    this.description = description;
    this.outputs = outputs;
    this.parseOutputs = parseOutputs;

    console.table([
      { Attribute: "Name", Value: this.name },
      { Attribute: "Description", Value: this.description },
      { Attribute: "Expected Outputs", Value: this.outputs },
    ]);
  }
}
