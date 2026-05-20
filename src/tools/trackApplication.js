import fs from "fs";

const FILE = "src/data/applications.json";

export function trackApplication(company, role, jobUrl) {
  let applications = [];

  if (fs.existsSync(FILE)) {
    applications = JSON.parse(fs.readFileSync(FILE, "utf8") || "[]");
  }

  applications.push({
    id: Date.now(),
    company,
    role,
    jobUrl,
    status: "Applied",
    createdAt: new Date().toISOString()
  });

  fs.writeFileSync(FILE, JSON.stringify(applications, null, 2));

  return `Tracked application for ${role} at ${company}.`;
}
