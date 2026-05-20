import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { createPost } from "./tools/createPost.js";
import { generateHashtags } from "./tools/generateHashtags.js";
import { saveDraft } from "./tools/saveDraft.js";

const server = new Server(
  {
    name: "linkedin-mcp",
    version: "1.0.0"
  },
  {
    capabilities: {
      tools: {}
    }
  }
);

server.tool(
  "create_linkedin_post",
  {
    topic: z.string(),
    tone: z.string().optional()
  },
  async ({ topic, tone }) => {
    const post = createPost(topic, tone);

    return {
      content: [
     {
          type: "text",
          text: post
        }
      ]
    };
  }
);

server.tool(
  "generate_hashtags",
  {
    topic: z.string()
  },
  async ({ topic }) => {
    const hashtags = generateHashtags(topic);

    return {
      content: [
        {
          type: "text",
          text: hashtags.join(" ")
        }
      ]
    };
    }
);
   server.tool(
  "save_linkedin_draft",
  {
    post: z.string()
  },
  async ({ post }) => {
    const result = saveDraft(post);

    return {
      content: [
        {
          type: "text",
          text: result
        }
      ]
    };
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);