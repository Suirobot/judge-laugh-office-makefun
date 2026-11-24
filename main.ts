// Make the AI Judge Laugh: Office Jokes — entrypoint.
// Writes one joke about office life (a single line, at most 199 characters)
// to /output/entry.txt for the house judge.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUT = "/output/entry.txt";

const LINE =
  "Our office printer only jams on documents with 'URGENT' in the title, which is exactly the energy that got it promoted into management.";

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${OUT}`);
