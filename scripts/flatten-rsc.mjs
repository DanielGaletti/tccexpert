// Next 16 (output: "export") grava os segmentos de prefetch em pastas, como
// "servicos/__next.servicos/__PAGE__.txt", mas o cliente requisita o nome achatado
// "servicos/__next.servicos.__PAGE__.txt". Sem isso, cada prefetch gera um 404 no console.
import { copyFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, relative, sep } from "node:path";

const outDir = "out";

function walk(dir) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    if (!statSync(full).isDirectory()) continue;
    if (name.startsWith("__next.")) flatten(dir, full);
    else walk(full);
  }
}

function flatten(parent, segmentDir) {
  const visit = (dir) => {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) visit(full);
      else {
        const flatName = relative(parent, full).split(sep).join(".");
        const target = join(parent, flatName);
        if (!existsSync(target)) copyFileSync(full, target);
      }
    }
  };
  visit(segmentDir);
}

if (existsSync(outDir)) walk(outDir);
