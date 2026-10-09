// Reusable asset uploader: walks the local `public/` folder (the files the
// site actually serves) and pushes every file to Cloudinary under matching
// folder paths. Safe to re-run — existing public_ids are left untouched
// (overwrite: false), so only new files added since the last run get
// uploaded.
//
// Usage: node scripts/upload-to-cloudinary.js

require("dotenv").config({ path: ".env.local" });
const fs = require("fs");
const path = require("path");
const cloudinary = require("cloudinary").v2;

const SOURCE_DIR = path.join(__dirname, "..", "public");
const CLOUDINARY_ROOT = "finvin";
const VIDEO_EXTENSIONS = new Set([".mp4", ".webm", ".mov"]);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

function slugify(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function walk(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(walk(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

async function uploadFile(filePath) {
  const relative = path.relative(SOURCE_DIR, filePath);
  const parsed = path.parse(relative);
  const folderParts = parsed.dir.split(path.sep).filter(Boolean).map(slugify);
  const publicId = [CLOUDINARY_ROOT, ...folderParts, slugify(parsed.name)].join("/");
  const resourceType = VIDEO_EXTENSIONS.has(parsed.ext.toLowerCase()) ? "video" : "image";

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: resourceType,
      overwrite: false,
      unique_filename: false,
      use_filename: false,
    });
    console.log(`uploaded  ${relative}  ->  ${result.public_id}`);
  } catch (err) {
    if (err?.http_code === 409 || /already exists/i.test(err?.message || "")) {
      console.log(`skipped   ${relative}  (already exists as ${publicId})`);
    } else {
      console.error(`failed    ${relative}  (${err.message})`);
    }
  }
}

async function main() {
  if (!process.env.CLOUDINARY_CLOUD_NAME || !process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
    console.error("Missing Cloudinary credentials in .env.local");
    process.exit(1);
  }

  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source folder not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  const files = walk(SOURCE_DIR);
  console.log(`Found ${files.length} files in public/. Uploading to Cloudinary...\n`);

  for (const file of files) {
    await uploadFile(file);
  }

  console.log("\nDone.");
}

main();
