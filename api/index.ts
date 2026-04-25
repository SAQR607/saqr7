import type { IncomingMessage, ServerResponse } from "node:http";

/**
 * Vercel Serverless Function — health check endpoint.
 * Vercel auto-detects TypeScript files in /api and deploys them as serverless functions.
 * The portfolio is fully static and does not rely on this handler.
 */
export default function handler(
  req: IncomingMessage,
  res: ServerResponse,
): void {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(JSON.stringify({ status: "ok" }));
}
