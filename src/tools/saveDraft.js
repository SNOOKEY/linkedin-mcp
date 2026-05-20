import fs from "fs";

const FILE = "src/data/drafts.json";

export function saveDraft(post) {
  let drafts = [];

  if (fs.existsSync(FILE)) {
    drafts = JSON.parse(fs.readFileSync(FILE, "utf8") || "[]");
  }

  drafts.push({
    id: Date.now(),
    post,
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync(FILE, JSON.stringify(drafts, null, 2));

  return "Draft saved successfully.";
}