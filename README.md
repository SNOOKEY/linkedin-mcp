# LinkedIn MCP Server

A custom Model Context Protocol (MCP) server for:

- Generating LinkedIn posts
- Creating hashtags
- Saving post drafts
- Extending to job search and application tracking

## Prerequisites

- Node.js 20+
- npm
- ChatGPT Desktop or another MCP-compatible client

## Installation

```bash
npm install
```

## Run the Server

```bash
npm start
```

## Development Mode

```bash
npm run dev
```

## Stop the Server

Press `Ctrl + C`.

## Available MCP Tools

### create_linkedin_post
Generate a professional LinkedIn post.

Example prompt:

> Create a LinkedIn post about DevOps career growth.

### generate_hashtags
Generate hashtags based on a topic.

Example prompt:

> Generate hashtags for Kubernetes and Docker.

### save_linkedin_draft
Save a post draft to `src/data/drafts.json`.

## Connect to ChatGPT Desktop

Add the following to your MCP configuration:

```json
{
  "mcpServers": {
    "linkedin": {
      "command": "node",
      "args": [
        "C:/Users/anazs/linkedin-mcp/src/index.js"
      ]
    }
  }
}
```

## Project Structure

```text
linkedin-mcp/
├── src/
│   ├── index.js
│   ├── tools/
│   │   ├── createPost.js
│   │   ├── generateHashtags.js
│   │   └── saveDraft.js
│   └── data/
│       └── drafts.json
├── package.json
└── README.md
```

## Future Enhancements

- LinkedIn job search
- Resume tailoring
- Cover letter generation
- Application tracking
- Easy Apply browser automation with Playwright

## Repository

https://github.com/SNOOKEY/linkedin-mcp
