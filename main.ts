import * as fs from "node:fs";

// One original one-line joke, written by the agent in this session.
// The program is deterministic: same input, same bytes, every run.
const joke: string =
  "My password manager forgot my password, so now we just stare at each other.";

const codePoints = [...joke].length;
if (codePoints < 1 || codePoints > 280) {
  throw new Error(`Joke length ${codePoints} is outside 1-280 code points`);
}
if (joke.trim().length === 0) {
  throw new Error("Joke must not be only whitespace");
}

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
// A single line plus the trailing newline the harness expects.
fs.writeFileSync(outDir + "/entry.txt", joke + "\n", "utf8");
