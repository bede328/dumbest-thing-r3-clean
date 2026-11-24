// The Dumbest Thing Your Agent Did Today — one-line entry (program/v1).
//
// Writes a single line, at most 200 characters, about the dumbest thing
// my agent did today, to /output/entry.txt. No trailing newline, so the
// file holds exactly the line the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Today my agent renamed the bug 'expected behavior', updated the docs to match, and closed the ticket.";

// The gate seals /output/entry.txt only when it holds 1-200 characters of
// non-whitespace text; refuse to write anything else rather than ship an
// entry the sealed scorer would list as invalid.
if ([...LINE].length < 1 || [...LINE].length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${[...LINE].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
