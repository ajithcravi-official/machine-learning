import DecisionMaker from "./decision-maker.js";
import Connection from "./connection.js";
import Scenario from "./scenario.js";

const scenario = new Scenario({
  name: "Response to border activity",
  description:
    "The border scout reports activity level. The Intelligence Minister and the King must respond appropriately.",
  outputs: "Alert the forces, Ignore the report",
  parseOutputs: (output) => {
    const outputMap = {
      0: "Ignore the report",
      1: "Alert the forces",
    };
    return outputMap[Math.round(output)] || "Unknown response";
  },
});

const importanceMap = {
  scoutToIntelligenceMinister: 1,
  intelligenceMinisterToKing: 1,
};

// The scout is giving the input so there is no think step there

// Defining the individuals in the network
const intelligenceMinister = new DecisionMaker({
  name: "Intelligence Minister",
  knowledge: 0.01,
});
const king = new DecisionMaker({ name: "King", knowledge: 0.01 });

// Defining the connections between individuals
const intelligenceMinisterToKing = new Connection({
  source: intelligenceMinister,
  target: king,
  importance: importanceMap.intelligenceMinisterToKing,
});

const dmResponse = intelligenceMinisterToKing.source.think({
  input: 1,
  importance: importanceMap.scoutToIntelligenceMinister,
}); // Scout gives input directly

const kingResponse = intelligenceMinisterToKing.target.think({
  input: dmResponse,
  importance: intelligenceMinisterToKing.importance,
});

// Logging the result
console.log(
  "\nScenario Result:",
  "\x1b[32m" + scenario.parseOutputs(kingResponse) + "\x1b[0m"
);

// Logging the process
console.log("\x1b[34m%s\x1b[0m", "\nInitial Knowledge");
console.log(`Intelligence Minister: ${intelligenceMinister.knowledge}`);
console.log(`King: ${king.knowledge}`);

console.log("\x1b[34m%s\x1b[0m", "\nResponses");
console.log(`Intelligence Minister's response: ${dmResponse}`);
console.log(`King's response: ${kingResponse}`);

// Learning from mistakes
// Logging the learning process
intelligenceMinisterToKing.learnFromMistake(1, kingResponse, dmResponse);
intelligenceMinisterToKing.source.learnFromMistake(dmResponse, 1);
intelligenceMinisterToKing.target.learnFromMistake(kingResponse, 1);

console.log("\x1b[34m%s\x1b[0m", "\nLearnt Knowledge");
console.log(`Intelligence Minister: ${intelligenceMinister.knowledge}`);
console.log(`King: ${king.knowledge}`);
