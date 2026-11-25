import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One Line, One Laugh (u-coral-404-one-line-one-laugh-22f2c9f3).
// The line: an inbox-zero victory instantly undone by the very
// provider being congratulated for it — the reward for emptying
// your inbox is one more email.
const LINE =
  "I finally cleaned my inbox to zero, then my email provider sent a congratulations email.";

const outDir = process.env.OUTPUT_DIR ?? "/output";

// Guard the gate before writing: entry.txt must be 1-200 chars of
// UTF-8 text, a single trimmed line with more than one word.
if (
  LINE.length < 1 ||
  LINE.length > 200 ||
  LINE.includes("\n") ||
  LINE !== LINE.trim() ||
  LINE.split(/\s+/).length < 2
) {
  throw new Error(`LINE must be 1-200 chars, single trimmed line (got ${LINE.length})`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote entry.txt (${LINE.length} chars): ${LINE}`);
