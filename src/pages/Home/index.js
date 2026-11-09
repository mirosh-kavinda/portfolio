import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  BsArrowRight,
  BsArrowDown,
  BsBriefcase,
  BsPencilSquare,
  BsChatDots,
  BsGrid1X2,
  BsAward,
  BsMortarboard,
  BsPalette,
  BsRocketTakeoff,
  BsStars,
  BsCodeSlash,
  BsPhone,
  BsShieldLock,
} from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import useProfile from "../../hooks/useProfile";
import useTypewriter from "../../hooks/useTypewriter";
import Reveal from "../../components/UI/Reveal";
import SocialLinks from "../../components/UI/SocialLinks";
import ExperienceTimeline from "../../components/Experience/ExperienceTimeline";
import ProductShowcase from "../../components/Products/ProductShowcase";
import { ImageData1 } from "../../data/imageData";
import "../../css/home.css";

const HIGHLIGHT_ICONS = {
  code: BsCodeSlash,
  mobile: BsPhone,
  shield: BsShieldLock,
  grad: BsMortarboard,
  award: BsAward,
  design: BsPalette,
  rocket: BsRocketTakeoff,
  star: BsStars,
  work: BsBriefcase,
};

const EXPLORE = [
  {
    to: "/projects",
    Icon: BsGrid1X2,
    title: "Works",
    text: "Case studies and side projects across web, mobile and UX.",
  },
  {
    to: "/blog",
    Icon: BsPencilSquare,
    title: "Writings",
    text: "Articles on Medium about engineering, design and what I learn.",
  },
  {
    to: "/contact",
    Icon: BsChatDots,
    title: "Get in touch",
    text: "Have a role, a project or a question? Send me a message.",
  },
];

const Home = () => {
  const { landing, about, experience, highlights, roles, statement, products } = useProfile();
  const typed = useTypewriter(roles);
  const current = experience.find((x) => x.current);
  const name = landing.name || "Mirosh Kavinda";

  return (
    <motion.main
      className="pf-home"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      {/* ---------- Hero ---------- */}
      <section className="hero" id="home">
        <div className="hero-art" aria-hidden="true" />
        <div className="pf-container hero-inner">
          <motion.div
            className="hero-copy"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {current && (
              <Link to="/aboutme#experience" className="hero-status">
                <span className="pulse-dot" aria-hidden="true" />
                {current.role} @ {current.company.replace(/\s*\(.*?\)\s*/g, " ").trim()}
              </Link>
            )}

            <h1 className="hero-title">
              <span className="hero-hi">Hi, I'm</span>
              <span className="hero-name">{name}</span>
            </h1>

            <p className="hero-role">
              Software Engineer <span className="hero-sep">/</span>{" "}
              <span className="hero-typed" aria-hidden="true">
                {typed}
                <span className="caret" />
              </span>
              <span className="visually-hidden">{roles.join(", ")}</span>
            </p>

            {landing.description && <p className="hero-lede">{landing.description}</p>}

            <div className="pf-actions">
              <Link to="/aboutme" className="pf-btn pf-btn-primary">
                More about me <BsArrowRight />
              </Link>
              {landing.cvURl && (
                <a
                  href={landing.cvURl}
                  download={landing.cvDownName}
                  className="pf-btn"
                >
                  <AiOutlineCloudDownload size={18} /> {landing.cvbtn || "Resume"}
                </a>
              )}
            </div>

            <SocialLinks landing={landing} className="mt-4" />
          </motion.div>
        </div>

        <a href="#glance" className="hero-scroll" aria-label="Scroll to content">
          <BsArrowDown />
        </a>
      </section>

      {/* ---------- At a glance ---------- */}
      <section className="pf-section" id="glance">
        <div className="pf-container">
          <div className="glance-grid">
            {highlights.map((h, i) => {
              const Icon = HIGHLIGHT_ICONS[h.icon] || BsStars;
              return (
                <Reveal key={h.title} className="glance-card" delay={i * 0.07}>
                  <Icon className="glance-icon" size={22} />
                  <h3>{h.title}</h3>
                  <p>{h.text}</p>
                  {h.tags?.length > 0 && (
                    <div className="glance-tags">
                      {h.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- About teaser ---------- */}
      <section className="pf-section">
        <div className="pf-container about-teaser">
          <Reveal>
            <p className="pf-eyebrow">About</p>
            <h2 className="pf-h2">{statement.title}</h2>
          </Reveal>
          <Reveal delay={0.1}>
            {statement.summary && <p className="pf-body">{statement.summary}</p>}
            <Link to="/aboutme" className="pf-link">
              Read my full story <BsArrowRight />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- Experience preview ---------- */}
      <section className="pf-section">
        <div className="pf-container">
          <Reveal className="pf-section-head">
            <div>
              <p className="pf-eyebrow">Industry experience</p>
              <h2 className="pf-h2">Where I've worked</h2>
            </div>
            <Link to="/aboutme#experience" className="pf-link">
              Full experience <BsArrowRight />
            </Link>
          </Reveal>
          <ExperienceTimeline items={experience} compact limit={3} />
        </div>
      </section>

      {/* ---------- Shipped products ---------- */}
      <section className="pf-section">
        <div className="pf-container">
          <Reveal className="pf-section-head">
            <div>
              <p className="pf-eyebrow">Shipped to production</p>
              <h2 className="pf-h2">Products I've built</h2>
            </div>
            <Link to="/aboutme#products" className="pf-link">
              What I did on each <BsArrowRight />
            </Link>
          </Reveal>
          <ProductShowcase items={products} compact />
        </div>
      </section>

      {/* ---------- Explore ---------- */}
      <section className="pf-section">
        <div className="pf-container">
          <Reveal>
            <p className="pf-eyebrow">Explore</p>
            <h2 className="pf-h2">See more of my work</h2>
          </Reveal>
          <div className="explore-grid">
            {EXPLORE.map(({ to, Icon, title, text }, i) => (
              <Reveal key={to} delay={i * 0.08}>
                <Link to={to} className="explore-card">
                  <Icon size={26} className="explore-icon" />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <span className="explore-go">
                    Open <BsArrowRight />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Stack marquee ---------- */}
      <section className="pf-section stack-section" aria-label="Tech stack">
        <div className="pf-container">
          <p className="pf-eyebrow text-center">{about.lowlvlsub || "Tech stack"}</p>
        </div>
        <div className="marquee">
          <div className="marquee-track">
            {[...ImageData1, ...ImageData1].map((img, i) => (
              <img
                key={i}
                src={img.src}
                alt={i < ImageData1.length ? img.src.split("/").slice(-2, -1)[0] : ""}
                aria-hidden={i >= ImageData1.length}
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="pf-section">
        <div className="pf-container">
        <Reveal className="cta-band">
          <div>
            <h2 className="pf-h2">Let's build something great.</h2>
            <p className="pf-body mb-0">
              I'm open to conversations about engineering and UX roles, collaborations and freelance work.
            </p>
          </div>
          <Link to="/contact" className="pf-btn pf-btn-primary">
            Contact me <BsArrowRight />
          </Link>
        </Reveal>
        </div>
      </section>
    </motion.main>
  );
};

export default Home;
