/**
 * After running compress-images.mjs, run this to update all image
 * src references in src/ from .jpg/.jpeg/.png to .webp.
 *
 * Run once: node scripts/update-image-refs.mjs
 */

import { readdir, readFile, writeFile } from "fs/promises";
import { join, extname, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const SRC = join(__dirname, "../src");

async function findSourceFiles(dir) {
  const results = [];
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...(await findSourceFiles(fullPath)));
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      if ([".tsx", ".ts", ".jsx", ".js", ".json"].includes(ext)) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

async function main() {
  const files = await findSourceFiles(SRC);
  let totalChanges = 0;

  for (const file of files) {
    const original = await readFile(file, "utf8");
    // Replace .jpg, .jpeg, .JPG, .png inside string literals with .webp
    const updated = original.replace(
      /("\/[^"]+)\.(jpg|jpeg|JPG|png)"/g,
      (match, path) => `${path}.webp"`
    );

    if (updated !== original) {
      await writeFile(file, updated, "utf8");
      const rel = file.replace(SRC, "src");
      console.log(`✓ Updated: ${rel}`);
      totalChanges++;
    }
  }

  console.log(`\nDone. Updated ${totalChanges} file(s).`);
  if (totalChanges === 0) {
    console.log("No changes — either already updated or no image references found.");
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
