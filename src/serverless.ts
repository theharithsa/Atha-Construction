import App from './app';

// Create a single Express instance reused across invocations
const app = new App().app;

// No Vercel type imports needed to avoid build-time dependency
export default function handler(req: any, res: any) {
  app(req, res);
}


