import App from '../src/app';

let cached: ReturnType<typeof createServerlessApp> | null = null;

function createServerlessApp() {
  const instance = new App().app;
  return instance;
}

export default function handler(req: any, res: any) {
  try {
    if (!cached) {
      cached = createServerlessApp();
    }
    cached(req, res);
  } catch (err: any) {
    try {
      res.statusCode = 500;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ success: false, error: 'Internal Server Error', message: err?.message }));
    } catch {}
  }
}


