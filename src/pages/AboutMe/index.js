import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { AiOutlineCloudDownload } from "react-icons/ai";
import History from "../../components/AboutHelpers/History";
import Certifications from "../../components/AboutHelpers/Certifications";
import ProfileCard from "../../components/AboutHelpers/ProfileCard";
import ProductShowcase from "../../components/Products/ProductShowcase";
import ContactForm from "../../components/Contact/contactForm";
import ExperienceTimeline from "../../components/Experience/ExperienceTimeline";
import Reveal from "../../components/UI/Reveal";
import SocialLinks from "../../components/UI/SocialLinks";
import useProfile from "../../hooks/useProfile";
import { formatDuration, totalMonths } from "../../utils/experience";
import "../../css/home.css";

const SECTIONS = [
  { id: "experience", label: "Experience" },
  { id: "products", label: "Products" },
  { id: "education", label: "Education" },
  { id: "stack", label: "Tech stack" },
  { id: "contact", label: "Contact" },
];

export default function AboutMe() {
  const { about, landing, experience, statement, products, certifications, techStack } = useProfile();
  const { hash } = useLocation();
  const industryMonths = totalMonths(experience);

  // Honour links like /aboutme#education once the page has rendered
  React.useEffect(() => {
    if (!hash) return undefined;
    const t = setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" });
    }, 400);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <motion.main
      className="pf-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="pf-container">
        {/* ---------- Intro ---------- */}
        <section className="about-intro">
          <Reveal className="about-text">
            <p className="pf-eyebrow">About me</p>
            <h1 className="pf-h1">{statement.title}</h1>
            {statement.lead && <p className="about-lead">{statement.lead}</p>}
            {(statement.paragraphs || []).map((p) => (
              <p key={p.slice(0, 24)} className="pf-body">
                {p}
              </p>
            ))}
            <div className="pf-actions">
              {landing.cvURl && (
                <a href={landing.cvURl} download={landing.cvDownName} className="pf-btn pf-btn-primary">
                  <AiOutlineCloudDownload size={18} /> {landing.cvbtn || "Resume"}
                </a>
              )}
              <Link to="/projects" className="pf-btn">
                See my works <BsArrowRight />
              </Link>
            </div>
            <SocialLinks landing={landing} className="mt-4" />
          </Reveal>
          <Reveal className="about-badge" delay={0.15}>
            <ProfileCard
              statement={statement}
              linkedinUrl={landing.linkdHandle}
              experience={experience}
            />
          </Reveal>
        </section>

        <nav className="section-nav" aria-label="On this page">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} className="pf-chip">
              {s.label}
            </a>
          ))}
        </nav>

        {/* ---------- Experience ---------- */}
        <section className="pf-section" id="experience">
          <Reveal className="pf-section-head">
            <div>
              <p className="pf-eyebrow">Career</p>
              <h2 className="pf-h2">Industry experience</h2>
            </div>
            {industryMonths > 0 && (
              <span className="pf-badge xp-total">
                {formatDuration(industryMonths)} in industry
              </span>
            )}
          </Reveal>
          <ExperienceTimeline items={experience} />
        </section>

        {/* ---------- Shipped products ---------- */}
        <section className="pf-section" id="products">
          <Reveal>
            <p className="pf-eyebrow">Shipped to production</p>
            <h2 className="pf-h2">Products I've built</h2>
            <p className="pf-body mb-4">
              Live products used by real customers, and what I contributed to each.
            </p>
          </Reveal>
          <ProductShowcase items={products} />
        </section>

        {/* ---------- Education ---------- */}
        <section className="pf-section" id="education">
          <Reveal>
            <p className="pf-eyebrow">Learning</p>
            <h2 className="pf-h2">Education & certifications</h2>
          </Reveal>
          <History />
          <h3 className="cert-subhead" id="certifications">Certifications</h3>
          <Certifications items={certifications} />
        </section>

        {/* ---------- Stack ---------- */}
        <section className="pf-section" id="stack">
          <Reveal>
            <p className="pf-eyebrow">Toolbox</p>
            <h2 className="pf-h2">{about.lowlvlsub || "Tech stack"}</h2>
          </Reveal>
          <Reveal className="stack-grid" delay={0.1}>
            {techStack.map((t) => (
              <span key={t.name} className="stack-item" title={t.name}>
                <img alt={t.name} src={t.icon} loading="lazy" />
              </span>
            ))}
          </Reveal>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="pf-section" id="contact">
          <ContactForm />
        </section>
      </div>
    </motion.main>
  );
}
