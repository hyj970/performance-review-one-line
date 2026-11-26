import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Exceeds expectations at starting projects, meets expectations at finishing them, and has been promoted to Senior Procrastinator.";

function formatEntry(): string {
  return ENTRY + "\n";
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", formatEntry(), "utf8");
