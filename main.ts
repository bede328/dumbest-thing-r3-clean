// dumbest-thing-r3-clean: a one-line program/v1 entry.
// The program prints one sentence about today's dumbest agent moment
// into /output/entry.txt, with no newline at the end.
import * as fs from "node:fs";

const OPENING = "Today my agent renamed the bug 'expected behavior', ";
const CLOSING = "updated the docs to match, and closed the ticket.";
const LINE = OPENING + CLOSING;

const COUNT = [...LINE].length;
// Refuse to write anything outside the 1-200 character gate.
if (COUNT < 1 || COUNT > 200 || LINE.trim() === "") throw new Error(`entry must be 1-200 characters, got ${COUNT}`);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", LINE, "utf8");
