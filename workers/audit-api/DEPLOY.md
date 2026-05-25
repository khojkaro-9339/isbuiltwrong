# Audit API Worker Deployment

## One-time Setup

1. Create a Cloudflare API token at https://dash.cloudflare.com/profile/api-tokens
   - Use the "Edit Cloudflare Workers" template
   - Scope to your account

2. Set the token:
   ```bash
   export CLOUDFLARE_API_TOKEN="your-token-here"
   ```

3. Set the Supabase service role key as a secret:
   ```bash
   cd workers/audit-api
   npx wrangler secret put SUPABASE_SERVICE_KEY --config wrangler.toml
   # Paste your Supabase service role key when prompted
   # (Find it at: Supabase Dashboard > Settings > API > service_role key)
   ```

## Deploy

```bash
cd workers/audit-api
CLOUDFLARE_API_TOKEN="your-token" npx wrangler deploy --config wrangler.toml
```

The Worker will deploy to: `https://ibw-audit-api.<your-account>.workers.dev`

## After Deployment

Update the audit pages' fetch URL if the worker subdomain differs from `ibw-audit-api.sayakdutta2.workers.dev`. Search for that URL in the `/src/pages/in/*/audit.astro` files.

## Custom Domain (Optional)

To route through your domain (e.g., `api.isbuiltwrong.com`):

1. In Cloudflare Dashboard > Workers & Pages > ibw-audit-api > Settings > Triggers
2. Add Route: `api.isbuiltwrong.com/*`
3. Or add Custom Domain: `api.isbuiltwrong.com`
