# 🌐 Mirosh Kavinda — Portfolio

A personal developer portfolio built with **React**, powered by **Firebase Realtime Database** for dynamic content management and featuring seamless page transitions, a blog feed from Medium, and an integrated contact form.

---

## ✨ Features

- 🏠 **Landing Page** — Animated hero with name, bio, social links, and CV download
- 👤 **About Me** — Background, skills, tech stack, and LinkedIn badge
- 🗂️ **Projects** — Dynamic project cards fetched from Firebase
- 📝 **Blog** — Medium articles fetched via Medium API
- 📬 **Contact Form** — Email delivery powered by EmailJS
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
| Blog Feed | Medium RSS API |
| Icons | React Icons |
| Styling | CSS (custom + Bootstrap utilities) |

---

## 📁 Project Structure

```
src/
├── context/
│   └── SiteDataContext.js   # Global Firebase data provider (fetched once per session)
├── pages/
│   ├── Home/                # Landing page
│   ├── AboutMe/             # About page
│   ├── Projects/            # Projects page
│   └── Blog/                # Blog page
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Spinner/
│   ├── Contact/             # EmailJS contact form
│   ├── ProjectShowModel/    # Project card component
│   ├── ShowBlogMedium/      # Medium blog card
│   └── AboutHelpers/        # History, Badges, BriefType
├── hooks/
│   ├── useAnimations.js
│   └── useBackToTop.js
├── data/                    # Static data (images, timeline)
├── css/                     # Global and component stylesheets
└── firebaseConfig.js        # Firebase initialization (reads from .env)
```

---

## 🔥 Firebase Data Structure

Content is managed dynamically via Firebase Realtime Database under the `siteData` node:

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
    }
  },
  "projects": [
    { "id": 1, "title": "...", "description": "...", "link": "..." }
  ]
}
```

> All site data is fetched **once per session** via `SiteDataContext` and shared across all pages — no redundant network requests.

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

For platforms like **Vercel** or **Netlify**, add all `REACT_APP_*` environment variables in the platform's dashboard — the `.env` file is excluded from the repository.

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
