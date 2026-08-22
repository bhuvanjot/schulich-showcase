# Fix bhuvanjot.com showing GoDaddy's "Launch Soon" page

The page you're seeing is GoDaddy's parked/Website Builder placeholder. Your code and GitHub repo are not the problem — the domain's DNS is still pointing at GoDaddy's builder instead of your Vercel/Netlify deployment.

This is a DNS/hosting configuration task, not a code change. Nothing in the project needs editing.

## Steps

### 1. Confirm the deployment itself works
Open the host-provided URL (e.g. `your-project.vercel.app` or `your-site.netlify.app`). If the real site loads there, the build is fine and the issue is purely DNS. If it doesn't load, fix the deployment first — a domain pointed at a broken deploy will still look wrong.

### 2. Remove the GoDaddy website from the domain
In GoDaddy: My Products → Websites + Marketing → the site attached to bhuvanjot.com → remove/unpublish it, or at minimum detach the domain from it. While that builder site is attached, GoDaddy keeps rewriting the A/CNAME records back to its parking IP and your changes will silently revert.

### 3. Add the domain in your host
- Vercel: Project → Settings → Domains → add `bhuvanjot.com` and `www.bhuvanjot.com`.
- Netlify: Site configuration → Domain management → Add domain.

The host will display the exact records to create. Use the values it shows, not values from memory.

### 4. Point GoDaddy DNS at the host
In GoDaddy → Domain → DNS → Manage DNS, delete the existing parking A record for `@` and any conflicting `www` CNAME, then add what the host specified. Typically:
- Vercel: `A @ → 76.76.21.21`, `CNAME www → cname.vercel-dns.com`
- Netlify: `A @ → 75.2.60.5`, `CNAME www → <your-site>.netlify.app`

Confirm against your host's dashboard before saving.

### 5. Wait and verify
Propagation is usually 10–60 minutes (up to 48h worst case). Check at dnschecker.org that `bhuvanjot.com` resolves to the host's IP. SSL is issued automatically by Vercel/Netlify once DNS resolves — don't buy a GoDaddy certificate.

## Alternative: host on Lovable instead
If you'd rather skip the Vercel/Netlify layer, I can publish this project from Lovable and you'd point GoDaddy at Lovable's records (A `@` and `www` → `185.158.133.1`, plus a `_lovable` TXT record shown in the connect flow). Steps 2 and 5 stay the same. Say the word and I'll publish it.

## Common gotchas
- The GoDaddy builder site still being attached is the number one cause of records reverting.
- Leftover parking A records alongside the new ones cause intermittent loading of the old page.
- Browser and OS DNS cache can show the old page after propagation — test in a private window or on cellular data.
- Adding the apex domain but not `www` (or vice versa) leaves one of them broken; add both.
