# 🌐 Mirosh Kavinda — Portfolio

A personal developer portfolio built with **React**, powered by **Firebase Realtime Database** for dynamic content management and featuring light and dark themes, seamless page transitions, a blog feed from Medium, and an integrated contact form.

**Live site:** [mirosh.web.app](https://mirosh.web.app/)

---

## ✨ Features

- 🏠 **Landing Page** — Animated hero with name, bio, social links, and CV download
- 👤 **About Me** — Background, skills, tech stack, and LinkedIn badge
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
│   └── AboutHelpers/        # History, Affiliation, BriefType
├── hooks/
│   ├── useAnimations.jsx
│   ├── useBackToTop.jsx
│   └── useMenuAnimation.jsx
├── data/                    # Static image data
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

### Industry experience, highlights, headline roles and contact details

The landing page (summary), the About page (full experience) and the contact section read these from
`src/data/profile.js`. If the matching node exists in Firebase it is used instead, so you
can update them without a redeploy:

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

Create a `.env` file in the project root:

```env
REACT_APP_FIREBASE_API_KEY=your_api_key
REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
REACT_APP_FIREBASE_DATABASE_URL=your_database_url
REACT_APP_FIREBASE_PROJECT_ID=your_project_id
REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
REACT_APP_FIREBASE_APP_ID=your_app_id
REACT_APP_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

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

CI builds read the Firebase web config from GitHub repository secrets, set under **Settings → Secrets and variables → Actions**:

| Secret | Purpose |
|---|---|
| `REACT_APP_FIREBASE_API_KEY` … `REACT_APP_FIREBASE_MEASUREMENT_ID` | The eight Firebase web config values listed in step 3 above |
| `FIREBASE_SERVICE_ACCOUNT_MIROSHKAVINDA` | Lets the workflow deploy to Firebase Hosting. Never commit this one |

The workflows stop with an error naming any missing secret. For local production builds, keep the same values in `.env.production`, which is git-ignored.

The web config values are not truly secret: they end up in the browser bundle of the live site. The Realtime Database rules, plus API key restrictions in Google Cloud, are what protect the data.

To undo a bad release, roll back from **Hosting → Release history** in the Firebase console.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
