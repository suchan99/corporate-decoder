# Corporate Decoder — AI fallback setup

Corporate Decoder uses a hybrid design:

1. Known phrases are decoded locally from `app.js` (fast, free, private in-browser).
2. Unknown phrases are sent to a tiny serverless backend.
3. The backend calls the OpenAI Responses API and returns the same five fields used by the app.

## Why there is a backend

Never put an OpenAI API key in `app.js`, `config.js`, HTML, or any file published to GitHub Pages. Browser code is public. The API key belongs only in the serverless environment.

## Deploy the backend on Vercel

The `backend/` folder is a standalone Vercel project.

1. Create a new Vercel project from this GitHub repository.
2. Set **Root Directory** to `backend`.
3. Add these Environment Variables in Vercel:
   - `OPENAI_API_KEY` = your OpenAI API key
   - `OPENAI_MODEL` = `gpt-5.6-luna`
   - `ALLOWED_ORIGINS` = `https://suchan99.github.io`
4. Deploy.
5. Your endpoint will look like:
   `https://YOUR-VERCEL-PROJECT.vercel.app/api/decode`
6. Open the root `config.js` file and set:

```js
window.CORPORATE_DECODER_AI_URL = "https://YOUR-VERCEL-PROJECT.vercel.app/api/decode";
```

7. Commit and push `config.js`. GitHub Pages will redeploy the frontend automatically.

## Cost and abuse controls

This is a public demo endpoint backed by your API account. Keep the prompt/output small, use a cost-sensitive model, and configure API project billing/spend limits. For a higher-traffic public launch, add durable rate limiting before promoting the app widely.

## Data note

Known dictionary phrases stay in the browser. Unknown phrases are transmitted to the configured backend and AI provider for decoding. Do not paste confidential, regulated, personal, or company-sensitive information into a public demo.
