import lbCimLogo from "../images/products/lb-cim.webp";
import lbEclipseLogo from "../images/products/lb-eclipse.png";
import dreamwayLogo from "../images/products/dreamway.jpg";

// Profile content that the site renders from code.
//
// Each export here is a local default. If the matching node exists under
// `siteData` in Firebase (siteData/experience, siteData/highlights,
// siteData/roles, siteData/contact), the Firebase value is used instead, so
// content can be updated without a redeploy. See README.md for the shape.

/**
 * Industry experience, newest first.
 *
 * Consecutive entries with the same `company` are shown as one company with
 * several roles (e.g. an internship followed by a full-time position).
 *
 * Fields
 *   id          unique string
 *   company     company name
 *   companyUrl  optional link to the company site
 *   logo        optional image URL; initials are shown when it is missing
 *   role        job title
 *   type        "Full-time" | "Part-time" | "Internship" | "Contract" | "Freelance"
 *   location    e.g. "Colombo, Sri Lanka · Hybrid"
 *   start       "YYYY-MM" (leave "" if you don't want dates shown)
 *   end         "YYYY-MM", or null while you still hold the role
 *   current     true for the role you hold now
 *   summary     one or two sentences on what the role is about
 *   highlights  list of achievements / responsibilities
 *   tech        list of tools and technologies used
 */
export const experience = [
  {
    id: "lbf-software-engineer",
    company: "LB Finance (PVT) LTD",
    companyUrl: "https://www.lbfinance.com/",
    logo: "",
    role: "Software Engineer",
    type: "Full-time",
    location: "Sri Lanka",
    start: "2024-03",
    end: null,
    current: true,
    summary:
      "Building LB Finance's customer mobile app (LB CIM) in Flutter, with a focus on security, stability and a clean, testable architecture.",
    highlights: [
      "Researched and implemented hybrid RSA–AES encryption to strengthen app security in line with Central Bank guidelines",
      "Developed LB CIM features on the Stacked framework architecture, improving app stability and user experience",
      "Applied test-driven development and Clean Code principles for a more reliable, maintainable product",
      "Identified and shipped improvements on my own initiative as an active team contributor",
    ],
    tech: ["Flutter", "Dart", "Stacked", "Firebase", "RSA / AES", "TDD"],
  },
  {
    id: "lbf-intern",
    company: "LB Finance (PVT) LTD",
    companyUrl: "https://www.lbfinance.com/",
    logo: "",
    role: "Software Engineering Intern",
    type: "Internship",
    location: "Sri Lanka",
    start: "2023-08",
    end: "2024-03",
    current: false,
    summary:
      "Full-stack developer on LB Eclipse, LB Finance's main product, which won the National ICT Award in 2024.",
    highlights: [
      "Delivered five production features across .NET, Angular and SQL",
      "Applied .NET MVVM patterns and reduced redundancy in the system architecture",
      "Wrote SQL queries and functions that improved data retrieval performance",
      "Designed UI mockups to industry design standards",
      "Delivered in Agile sprints with daily scrums",
    ],
    tech: ["ASP.NET Core", "Angular", "TypeScript", "SQL", "Figma"],
  },
];

/**
 * What I do: skill cards on the landing page.
 * `icon` is a key in HIGHLIGHT_ICONS (src/pages/Home/index.js); `tags` are optional.
 */
export const highlights = [
  {
    icon: "code",
    title: "Full-stack development",
    text: "Production features end to end, from UI to API to database.",
    tags: ["Angular", "React", ".NET", "Node.js", "SQL"],
  },
  {
    icon: "mobile",
    title: "Mobile apps",
    text: "Cross-platform apps with a clean, testable architecture.",
    tags: ["Flutter", "Dart", "Stacked", "Firebase"],
  },
  {
    icon: "shield",
    title: "Secure & clean code",
    text: "Hybrid RSA–AES encryption, test-driven development and Clean Code.",
    tags: ["Encryption", "TDD", "Selenium"],
  },
  {
    icon: "design",
    title: "UI/UX design",
    text: "Google UX certified, designing user-focused interfaces before building them.",
    tags: ["Figma", "Adobe XD", "Prototyping"],
  },
];

/**
 * Live products I've worked on, shown in "Shipped to production" on Home and About.
 *
 * Fields: id, name, logo (imported image), logoScale (optional zoom), org, kind, summary,
 * contribution (what I did), award (optional), tech, links [{ label, url }].
 * Products without public links show an "Internal" tag instead.
 */
export const products = [
  {
    id: "lb-cim",
    name: "LB CIM",
    logo: lbCimLogo,
    logoScale: 2.2, // the image has wide white margins
    org: "LB Finance PLC",
    kind: "Mobile banking app",
    summary:
      "LB Finance's customer app for digital payments, virtual cards and account services, live on the App Store and Google Play.",
    contribution:
      "Building features on the Stacked architecture, improving app stability and user experience, and implementing hybrid RSA–AES encryption to meet Central Bank security guidelines.",
    tech: ["Flutter", "Dart", "Stacked", "Firebase"],
    links: [
      { label: "App Store", url: "https://apps.apple.com/lk/app/lb-cim/id1459216386" },
      {
        label: "Google Play",
        url: "https://play.google.com/store/apps/details?id=com.cashinmobile.lb.customer",
      },
    ],
  },
  {
    id: "lb-eclipse",
    name: "LB Eclipse",
    logo: lbEclipseLogo,
    org: "LB Finance PLC",
    kind: "Enterprise web platform",
    summary:
      "LB Finance's main internal platform, used across the company in production.",
    contribution:
      "Delivered five production features across .NET, Angular and SQL, applied MVVM patterns to reduce redundancy, and improved database performance.",
    award: "National ICT Award 2024",
    tech: ["ASP.NET Core", "Angular", "SQL"],
    links: [],
  },
  {
    id: "dreamway",
    name: "DreamWay Luxury",
    logo: dreamwayLogo,
    org: "Client project",
    kind: "Luxury travel website",
    summary:
      "Production website for DreamWay Luxury, a luxury travel brand, delivered end to end for the client.",
    contribution:
      "Built the site on WordPress, customising the theme to the client's requirements. Ran the full Agile cycle directly with the client, from gathering requirements through iterative reviews to launch, and delivered a product the client was satisfied with.",
    tech: ["WordPress", "Theme customisation", "Agile delivery"],
    links: [{ label: "Visit site", url: "https://dreamwayluxury.com/" }],
  },
];

/** Professional statement for the About page (and the short summary on Home). */
export const about = {
  title: "Who am I?",
  name: "Mirosh Kavinda",
  headline: "Full-Stack Software Engineer | Google Certified (UX, Python) | Flutter",
  // Profile photo; initials are shown if it is empty or fails to load.
  // Uses the GitHub avatar, so changing your GitHub picture updates it here too.
  photo: "https://github.com/mirosh-kavinda.png?size=240",
  github: "mirosh-kavinda", // live repo / follower counts on the profile card
  company: "LB Finance (PVT) LTD",
  education: "BSc (Hons) Software Engineering, CINEC Campus",
  location: "Matara, Sri Lanka",
  summary:
    "I'm a full-stack software engineer at LB Finance, building secure, user-focused applications with Angular, .NET and Flutter. I pair a Google UX certification with a test-driven, clean-code mindset to ship products that are both easy to use and reliable.",
  lead:
    "I'm a full-stack software engineer at LB Finance (PVT) LTD, building secure, user-focused applications across web and mobile.",
  paragraphs: [
    "I work across the stack: Angular, React and ASP.NET Core on the web, Flutter on mobile, and SQL, PostgreSQL and MongoDB underneath. At LB Finance I develop the customer mobile app on the Stacked architecture, and researched and implemented hybrid RSA–AES encryption to meet Central Bank security guidelines. As an intern, I delivered five production features for LB Eclipse, the platform that went on to win the National ICT Award in 2024.",
    "I hold a BSc (Hons) in Software Engineering from CINEC Campus, where I graduated with a 3.82 GPA and the Best Academic Achievement award, along with Google's UX Design and IT Automation with Python certificates. That blend of engineering and design shapes how I work: understand the user first, design deliberately, and ship clean, well-tested code that's easy to maintain.",
    "Beyond work, I write about engineering on Medium, take part in hackathons (top 15 at TADHack Sri Lanka 2022), and previously served as Vice President of the TechStrike club.",
  ],
};

/** Rotating words in the landing page headline. */
export const roles = [
  "Full-Stack Developer",
  "Flutter Developer",
  "UX Focused",
  "Problem Solver",
  "Quick Learner",
];

/** Contact details shown on the contact section. */
export const contact = {
  email: "kavindahgm@gmail.com",
  phone: "+94 71 353 1809",
  whatsapp: "https://wa.me/94713531809",
  location: "Matara, Sri Lanka",
  mapUrl: "https://goo.gl/maps/y414JL98TXvb6FWZ6",
  availability: "Open to collaborations & conversations",
  intro:
    "Have a role, a project or an idea in mind? Send a message or reach me directly. I'm always happy to talk about software, design and building useful products.",
};
