# 🌐 Mirosh Kavinda — Portfolio

A personal developer portfolio built with **React**, powered by **Firebase Realtime Database** for dynamic content management and featuring light and dark themes, seamless page transitions, a blog feed from Medium, and an integrated contact form.

**Live site:** [mirosh.web.app](https://mirosh.web.app/)

---

## ✨ Features

- 🏠 **Landing Page** — Animated hero with name, bio, social links, and CV download
- 👤 **About Me** — Background, skills, tech stack, profile card, products and certifications
- 🗂️ **Projects** — Dynamic project cards fetched from Firebase
- 📝 **Blog** — Medium articles fetched from the Medium RSS feed via rss2json
- 📬 **Contact Form** — Email delivery powered by EmailJS
- 🌗 **Light & Dark Themes** — Navbar toggle that remembers the visitor's choice and otherwise follows their device setting
- 🔄 **Animated Routes** — Smooth page transitions via Framer Motion
- 🖱️ **Dot Ring Cursor** — Custom cursor for desktop
- ⬆️ **Back to Top** — Footer with scroll-to-top and social links

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 |
| Routing | React Router v6 |
| Animations | Framer Motion |
| Database | Firebase Realtime Database |
| Data Layer | React Context API (session cache) |
| Email | EmailJS |
| Blog Feed | Medium RSS via rss2json |
| Icons | React Icons |
| Styling | CSS (custom + Bootstrap utilities) |
| Hosting | Firebase Hosting |
| CI/CD | GitHub Actions |

---

## 📁 Project Structure

```
src/
├── context/
│   ├── SiteDataContext.js   # Global Firebase data provider (fetched once per session)
│   └── ThemeContext.js      # Light/dark theme state and persistence
├── pages/
│   ├── Home/                # Landing page
│   ├── AboutMe/             # About page
│   ├── Projects/            # Projects page
│   └── Blog/                # Blog page
├── components/
│   ├── AnimatedRoutes.jsx   # Route definitions and page transitions
│   ├── Navbar/
│   ├── ToggleMenu/
│   ├── Footer/
│   ├── Spinner/
│   ├── DotRing/             # Custom cursor
│   ├── Contact/             # EmailJS contact form
│   ├── ProjectShowModel/    # Project cards, modal, and overlay
│   ├── ProjView/            # Single project view
│   ├── ShowBlogMedium/      # Medium blog card
│   └── AboutHelpers/        # History, Certifications, ProfileCard
├── hooks/
│   ├── useBackToTop.jsx
│   └── useMenuAnimation.jsx
├── utils/                   # Firebase cache, experience date helpers
├── images/
├── css/                     # Global and component stylesheets (colours live in theme.css)
└── firebaseConfig.js        # Firebase initialization (reads from .env)
```

---

## 🔥 Firebase Data Structure

Content is managed dynamically via Firebase Realtime Database under the `siteData` and `projects` nodes:

```json
{
  "siteData": {
    "LandingData": {
      "name": "Mirosh Kavinda",
      "description": "...",
      "cvbtn": "Download CV",
      "cvURl": "https://...",
      "cvDownName": "CV.pdf",
      "workbtn": "My Work",
      "mediumHandle": "https://medium.com/...",
      "ytHandle": "https://youtube.com/...",
      "twitHandle": "https://twitter.com/...",
      "linkdHandle": "https://linkedin.com/in/...",
      "githubHandle": "https://github.com/...",
      "webCode": "https://github.com/..."
    },
    "AboutPageData": {
      "title": "About Me",
      "subtitle1": "...",
      "subtitle2": "...",
      "lowlvlsub": "Skills & Technologies"
    },
    "timelineElements": {}
  },
  "projects": [
    { "id": 1, "title": "...", "description": "...", "link": "..." }
  ]
}
```

### Profile content

All site content is read from `siteData` in Firebase; nothing is hard-coded. Besides the nodes above,
`siteData` holds `about` (the "Who am I" statement and profile card), `experience`, `highlights`,
`roles`, `contact`, `products`, `certifications` and `techStack`. Edit them in the Firebase console;
no redeploy is needed.

Images referenced from the database (product logos, certificate badges) live in `public/images/`
and are stored as paths such as `/images/products/lb-cim.webp`. Any full image URL works too.

The site caches `siteData` and `projects` in the visitor's browser for an hour
(`src/utils/firebaseCache.js`), so console edits reach returning visitors within that time.
The loading screen stays up until `siteData` has loaded.

The shape of the main nodes:

```json
{
  "siteData": {
    "experience": [
      {
        "id": "lbf-software-engineer",
        "company": "LB Finance (PVT) LTD",
        "companyUrl": "https://www.lbfinance.com/",
        "logo": "",
        "role": "Software Engineer",
        "type": "Full-time",
        "location": "Colombo, Sri Lanka",
        "start": "2024-12",
        "end": null,
        "current": true,
        "summary": "One or two sentences about the role.",
        "highlights": ["Achievement or responsibility", "..."],
        "tech": ["React", "Flutter"]
      }
    ],
    "highlights": [
      { "icon": "code", "title": "Full-stack development", "text": "...", "tags": ["Angular", ".NET"] }
    ],
    "roles": ["Web & App Builder", "UX Focused"],
    "contact": {
      "email": "you@example.com",
      "phone": "+94 ...",
      "whatsapp": "https://wa.me/94...",
      "location": "Matara, Sri Lanka",
      "mapUrl": "https://goo.gl/maps/...",
      "availability": "Open to collaborations & conversations",
      "intro": "Short invitation shown above the contact details."
    }
  }
}
```

Projects can also have an optional `displayName` (e.g. `"CountMeIn"`) to show instead of the repo-style `projectName`, which is still used to fetch the README from GitHub.

- List experience **newest first**. Consecutive entries with the same `company` are shown together as one company with several roles.
- Dates are `"YYYY-MM"`; leave `start` empty to hide dates. Durations and the "time in industry" stat are calculated automatically.
- `highlights[].icon` is one of `code`, `mobile`, `shield`, `design`, `grad`, `award`, `rocket`, `star`, `work`; `tags` is optional.

> `siteData` is fetched **once per session** via `SiteDataContext` and shared across all pages — no redundant network requests. The Projects page loads `projects` itself.

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/mirosh-kavinda/portfolio.git
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` in the project root and fill in the values:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id

REACT_APP_EMAILJS_SERVICE_ID=your_emailjs_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

`.env` is used by both `npm start` and `npm run build`, and is git-ignored. Never commit real values.

### 4. Set Firebase Realtime Database rules

```json
{
  "rules": {
    "siteData": { ".read": true, ".write": false },
    "projects": { ".read": true, ".write": false }
  }
}
```

### 5. Start the development server

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Deployment

The site is hosted on **Firebase Hosting** and deployed by GitHub Actions:

| Trigger | Result |
|---|---|
| Push to `main` | Builds and deploys to the live site |
| Pull request from this repository | Builds and deploys a temporary preview, with the URL posted on the PR |

### Build configuration

CI builds read their configuration from GitHub repository secrets, set under **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|---|---|
| `REACT_APP_FIREBASE_API_KEY` … `REACT_APP_FIREBASE_MEASUREMENT_ID` | The eight Firebase web config values listed in step 3 above |
| `REACT_APP_EMAILJS_SERVICE_ID`, `REACT_APP_EMAILJS_TEMPLATE_ID`, `REACT_APP_EMAILJS_PUBLIC_KEY` | EmailJS settings for the contact form |
| `FIREBASE_SERVICE_ACCOUNT_MIROSHKAVINDA` | Lets the workflow deploy to Firebase Hosting. Never commit this one |

The workflows stop with an error naming any missing secret. To upload every value from your local `.env` at once, run `gh secret set -f .env --repo mirosh-kavinda/portfolio`.

Keeping these values in secrets keeps them out of the repository, but they are not truly secret: anything the browser uses ends up in the bundle of the live site. What protects them:

- **Firebase:** Realtime Database rules, plus HTTP referrer restrictions on the API key in Google Cloud.
- **EmailJS:** allowed domains under **Account → Security** in the EmailJS dashboard, so the public key only works from this site. Never put the EmailJS *private* key in the frontend.

To undo a bad release, roll back from **Hosting → Release history** in the Firebase console.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
