# Fiza Bano & Hamza Khan — Wedding Invitation Website

A responsive wedding-invitation prototype made with **HTML, CSS, and vanilla JavaScript**. It uses the invitation artwork provided in `Fiza Weds Hamza.pdf` and is ready for static hosting on Vercel.

## What's included

- Animated invitation-opening screen
- Responsive desktop/mobile navigation
- Bride and groom family sections
- Nikah date, time, Hijri date, and venue details
- Live wedding countdown
- Save-the-date `.ics` download
- Google Maps directions and copy-address action
- Mayoun image lightbox and original invitation-card preview
- WhatsApp contact links using the two numbers on the invitation
- Footer attribution: **Made by MOHD GULAM JILANI** and **GitHub @jilani-X-Dev**

## Run locally

This is a static site and requires no install/build step. Open `index.html` in a browser, or use the VS Code Live Server extension for a more realistic local preview.

## Deploy to Vercel

### Option A — GitHub + Vercel dashboard

1. Create a GitHub repository (for example, `fiza-weds-hamza-invitation`).
2. Upload the contents of this folder to the repository root.
3. On Vercel, choose **Add New → Project** and import that GitHub repository.
4. Set **Framework Preset** to `Other` if asked. Leave Build Command and Output Directory empty/default; there is no build step.
5. Click **Deploy**.

### Option B — Vercel CLI

From this folder, run:

```bash
npx vercel
npx vercel --prod
```

For the cleanest workflow, push the code to GitHub first so Vercel can automatically redeploy on future pushes.

## Details transcribed from the supplied invitation

- Bride: Fiza Bano
- Groom: Hamza Khan
- Bride's father shown on card: Mr. Nishar Ahmed Idrisi
- Invitation from: Mr. & Mrs. Nisar Ahmed
- Groom's father: Mr. Roshan Anwar Khan
- Nikah: Wednesday, 30 December 2026, 7:00 PM–11:00 PM
- Hijri date printed on the card: 20 Rajab 1448 Hijri
- Venue: M.E.S. School, Near Bilal Masjid, Halavphool, Kurla West, Mumbai 400070
- Phone numbers shown on card: 8291687239 and 7977600264

The spelling `Nisar`/`Nishar` and location text `Halavphool` follow the supplied card. Please confirm these before publishing if the family wants an exact official spelling.

## Project files

```text
.
├── index.html
├── styles.css
├── script.js
├── README.md
└── assets/
    ├── couple-portrait.webp
    ├── mayoun-celebration.webp
    └── original-invitation.webp
```

## Attribution

Made by **MOHD GULAM JILANI** · GitHub: [@jilani-X-Dev](https://github.com/jilani-X-Dev)
