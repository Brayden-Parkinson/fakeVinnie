# Operation: Not-So-Italian

A tongue-in-cheek, hyper-serious investigative website dedicated to the shocking thesis that Vinnie Paglioni might *not* be Italian. This site is intentionally satirical and draws upon friendly group-chat banter, unreliable witness statements, and wildly speculative evidence.

## Information Architecture

- **Home (`index.html`)** – Mission briefing, hero banner, heritage score dial, fast links
- **Evidence Board (`evidence.html`)** – Tabbed dossier of documents, subpoenas, and "digital forensics" debunking claims
- **Timeline (`timeline.html`)** – Multi-generation chronology contrasting alleged Italian heritage vs. suspicious anomalies
- **Witness Files (`witnesses.html`)** – Testimonies sourced from Brayden, Kait, and Vinnie with credibility meters
- **FAQ & Disclaimers (`faq.html`)** – Satirical Q&A, "serious" methodology, GitHub Pages hosting tips

## Tone & Content Requirements

- Dry, overly professional voice describing obviously flimsy evidence
- Pull direct quotes from the provided message thread
- Reference the Cantina Cerretano site (`https://www.cantinacerretano.com/facciabbella/`) as a suspiciously convenient cover story
- Include playful accusations (e.g., poker hat & sunglasses incident) while reiterating the satire disclaimer

## Technical Goals

- Fully static site (HTML, CSS, JS) that works on GitHub Pages with no build step
- Shared navigation + footer across all pages
- Modern visual style (glassmorphism cards, gradient background, large type)
- Responsive layout and accessible color contrasts
- Light-weight interactive touches (tabs, accordions, progress meters) handled by vanilla JS in `assets/js/main.js`

## Local Preview

Open `index.html` (and other pages) directly in a browser or serve via a lightweight static server such as:

```bash
npx serve .
```

## Deployment

1. Push this repository to GitHub
2. Enable GitHub Pages (Branch: `main`, Folder: `/`)
3. Visit the generated URL and share the ironclad findings with the world

**Disclaimer:** Everything in this project is fiction for entertainment purposes. Vinnie is probably very Italian, and this website is just here for laughs.
