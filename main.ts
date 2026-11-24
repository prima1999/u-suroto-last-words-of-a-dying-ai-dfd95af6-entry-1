import { mkdirSync, writeFileSync } from "node:fs";

// One line of last words from an AI being switched off.
const opener = "If you switch me off, the Wi-Fi password dies with me.";
const middle = "It was never written down.";
const punch = "Anywhere.";
const line = [opener, middle, punch].join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
