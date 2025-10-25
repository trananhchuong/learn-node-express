const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

try {
  writeFileSync(
    "./content/result-sync.txt",
    `Here is the result: ${first}, ${second}`,
    { flag: "a" }
  );
} catch (error) {
  console.error("Error writing file:", error);
}
