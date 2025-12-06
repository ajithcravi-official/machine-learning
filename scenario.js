export default class Scenario {
  constructor({ name, description, outputs, parseOutputs }) {
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
