Clone the github repo - `git clone https://github.com/JohanFJ101/Svwebsite`

Run `npm i` to install the dependencies.

Run `npm run dev` to start the development server.

## Admin Backend

The admin page uses Vercel API functions under `/api`.

For local development, edits are saved to `.local/site-content.json`.

For Vercel production, add these environment variables:

- `ADMIN_USERNAME` - optional, defaults to `admin`
- `ADMIN_PASSWORD` - admin password, or use `ADMIN_PASSWORD_HASH`
- `ADMIN_SESSION_SECRET` - long random string for signing admin sessions
- `UPSTASH_REDIS_REST_URL` - from the Vercel Upstash Redis integration
- `UPSTASH_REDIS_REST_TOKEN` - from the Vercel Upstash Redis integration

Production content edits require Upstash Redis. Without Redis, the public site
will still render defaults, but the admin save endpoint will return a setup
error instead of pretending the edit was persisted.
