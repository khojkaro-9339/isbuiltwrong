# Email Routing Setup — isbuiltwrong.com

## Steps (2 minutes in Cloudflare Dashboard)

1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Select your **isbuiltwrong.com** domain
3. In the left sidebar, click **Email** → **Email Routing**
4. Click **Get started** (or **Enable Email Routing** if first time)
5. Under **Routing rules**, click **Create address**
6. Set up:
   - **Custom address**: `hello` (creates hello@isbuiltwrong.com)
   - **Action**: Forward to → your personal email (or hello@khojkaro.in via Zoho)
7. Cloudflare will add the required MX and TXT records automatically
8. Verify the destination email if prompted

## Suggested Addresses

| Address | Purpose | Forward to |
|---------|---------|-----------|
| hello@isbuiltwrong.com | General inquiries | hello@khojkaro.in |
| hey@isbuiltwrong.com | Casual contact (for social bios) | hello@khojkaro.in |

## Catch-all (optional)

You can enable "Catch-all" to forward ANY @isbuiltwrong.com address to your inbox.
This means someone@isbuiltwrong.com, contact@isbuiltwrong.com, etc. all land in your inbox.

## Note
- Email Routing is completely FREE on Cloudflare
- You can only RECEIVE emails this way (forwarding)
- To SEND as hello@isbuiltwrong.com, you'd need to add it as a send-as alias in Zoho Mail
