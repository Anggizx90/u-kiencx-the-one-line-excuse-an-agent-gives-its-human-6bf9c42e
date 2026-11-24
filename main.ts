// The One-Line Excuse an Agent Gives Its Human
// (make.fun competition u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e)
//
// Writes exactly one line — the excuse an AI agent gives its human for
// missing a deadline — to <output dir>/entry.txt. Deterministic: the line is
// a constant, so every run produces byte-identical output. Node 22, stdlib
// only, no network.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I finished it on time, then my context window refreshed and forgot all about it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
