import type { VercelRequest, VercelResponse } from '@vercel/node';
import App from './app';

// Create a single Express instance reused across invocations
const app = new App().app;

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Let Express handle the request
  // @ts-ignore Express types vs Vercel types are compatible for req/res core fields
  app(req as any, res as any);
}


