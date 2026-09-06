# Corporate Decoder 😄

A tiny workplace utility that translates corporate meeting-speak into:

- plain English
- likely intent
- a practical next action
- a tongue-in-cheek "risk level"
- a meeting survival note

Example:

> **"Can we make one small change?"**

**Translation:** The requested change may have a larger blast radius than advertised.  
**Action:** Run an impact assessment before committing to timeline or effort.  
**Risk:** 🔴 Scope Creep Detected

## Why I built this

Workplace language is often polite, compressed, and ambiguous. Phrases such as
"let's circle back," "let's align," and "just one quick question" can hide the
actual action that needs to happen.

The goal of this project is simple:

**Translate the phrase → expose the likely intent → make the next action clearer.**

The humor makes it memorable. The action recommendation makes it useful.

## Features

- No backend required
- No API key
- No login
- No tracking
- Works entirely in the browser
- Mobile friendly
- Copy-to-clipboard result
- 20+ built-in corporate phrases
- Fallback rules for unfamiliar phrases
- Deployable free with GitHub Pages

## Run locally

Option 1: double-click `index.html`.

Option 2: use a local web server:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy with GitHub Pages

This repository includes a GitHub Actions workflow for Pages.

1. Create a public GitHub repository named `corporate-decoder`.
2. Push these files to the `main` branch.
3. Open **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **GitHub Actions**.
5. Open the **Actions** tab and confirm the Pages deployment succeeds.
6. GitHub will display your public site URL, usually:

```text
https://YOUR-USERNAME.github.io/corporate-decoder/
```

After that, every push to `main` automatically redeploys the site.

## Push from Git Bash

From inside this project folder:

```bash
git init
git add .
git commit -m "Build Corporate Decoder"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/corporate-decoder.git
git push -u origin main
```

If you use GitHub CLI:

```bash
gh repo create corporate-decoder --public --source=. --remote=origin --push
```

## Add another phrase

Open `app.js` and add an object to the `phrases` array:

```javascript
{
  patterns: ["your phrase", "another version"],
  translation: "What it probably means.",
  intent: "What the speaker is trying to accomplish.",
  action: "The useful next step.",
  risk: "🟡 Your Risk Label",
  survival: "Your funny closing line."
}
```

## Architecture

```text
Browser
  |
  +-- index.html   -> page structure
  +-- styles.css   -> responsive visual design
  +-- app.js       -> phrase matching + translation logic
```

There is intentionally no backend in v1. This makes the project easy to inspect,
fork, host, and extend.

## Responsible design

This tool does **not** claim to infer a person's actual hidden intention.
Translations are humorous interpretations of common workplace language.

It does not record meetings, analyze people, or send text to a third-party service.

## Possible v2

- User-submitted corporate phrases
- Phrase voting
- "Scope Creep Detector" mode
- "Executive Translation" mode
- "Meeting-to-Action" mode
- Microsoft Teams / Copilot integration
- Optional LLM-backed translations
- Organization-specific phrase packs

## LinkedIn demo idea

Post a screenshot or short screen recording and ask:

> What phrase should I add to the Corporate Decoder next?

That turns the project into both a useful tool and a conversation.

## License

MIT


## Portfolio positioning

This is intentionally a small static application: it demonstrates product thinking, UX, deterministic JavaScript logic, responsible design, documentation, and CI/CD deployment through GitHub Pages without introducing unnecessary infrastructure.
