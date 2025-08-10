import App from '../src/app';

// Reuse a single Express instance across invocations
const app = new App().app;

export default function handler(req: any, res: any) {
  app(req, res);
}


