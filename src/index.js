import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { createPost } from "./tools/createPost.js";
import { generateHashtags } from "./tools/generateHashtags.js";
import { saveDraft } from "./tools/saveDraft.js";
import { searchJobs } from "./tools/searchJobs.js";
import { trackApplication } from "./tools/trackApplication.js";
import { applyToJob } from "./tools/applyToJob.js";

const server = new Server(
  {
    name: "linkedin-mcp",
    version: "1.1.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

function textResponse(text) {
  return {
    content: [
      {
        type: "text",
        text
      }
    ]
  };
}

server.tool(
  "create_linkedin_post",
  {
    topic: z.string(),
    tone: z.string().optional()
  },
  async ({ topic, tone }) => {
    return textResponse(createPost(topic, tone));
  }
);

server.tool(
  "generate_hashtags",
  {
    topic: z.string()
  },
  async ({ topic }) => {
    return textResponse(generateHashtags(topic).join(" "));
  }
);

server.tool(
  "save_linkedin_draft",
  {
    post: z.string()
  },
  async ({ post }) => {
    return textResponse(saveDraft(post));
  }
);

server.tool(
  "search_linkedin_jobs",
  {
    role: z.string(),
    location: z.string().optional()
  },
  async ({ role, location }) => {
    return textResponse(searchJobs(role, location));
  }
);

server.tool(
  "track_job_application",
  {
    company: z.string(),
    role: z.string(),
    jobUrl: z.string()
  },
  async ({ company, role, jobUrl }) => {
    return textResponse(trackApplication(company, role, jobUrl));
  }
);

server.tool(
  "apply_to_job",
  {
    jobUrl: z.string()
  },
  async ({ jobUrl }) => {
    return textResponse(await applyToJob(jobUrl));
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
