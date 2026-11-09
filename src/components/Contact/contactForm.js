import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import {
  BsArrowRight,
  BsArrowUpRight,
  BsCheck2,
  BsCheckCircleFill,
  BsClipboard,
  BsEnvelope,
  BsGeoAlt,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";
import useProfile from "../../hooks/useProfile";
import Reveal from "../UI/Reveal";
import "../../css/contactForm.css";

const EMAILJS = {
  service: "service_tgualb7",
  template: "template_ujgeo95",
  publicKey: "nkNY1hE2EnJTUx7-X",
};

const TOPICS = ["Job opportunity", "Freelance project", "Collaboration", "Just saying hi"];
const MESSAGE_MAX = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function ContactItem({ href, Icon, label, value, external }) {
  return (
    <a
      className="contact-item"
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="contact-icon">
        <Icon size={18} />
      </span>
      <span className="contact-text">
        <small>{label}</small>
        <strong>{value}</strong>
      </span>
      {external && <BsArrowUpRight className="contact-go" size={14} />}
    </a>
  );
}

const ContactForm = () => {
  const { contact, landing } = useProfile();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [topic, setTopic] = useState(TOPICS[0]);
  const [copied, setCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ defaultValues: { subject: TOPICS[0] } });

  const messageLength = (watch("message") || "").length;

  const pickTopic = (t) => {
    setTopic(t);
    setValue("subject", t, { shouldValidate: true });
  };

  const onSubmit = async ({ name, email, subject, message }) => {
    setStatus("sending");
    try {
      await emailjs.send(
        EMAILJS.service,
        EMAILJS.template,
        { name, email, subject, message },
        EMAILJS.publicKey
      );
      reset({ subject: topic });
      setStatus("sent");
    } catch (e) {
      console.error(e);
      setStatus("error");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard can be blocked; the mailto link still works
    }
  };

  return (
    <section className="contact" aria-labelledby="contact-title">
      {/* ---------- Details ---------- */}
      <Reveal className="contact-info">
        <p className="pf-eyebrow">Contact</p>
        <h2 id="contact-title" className="pf-h2 contact-title">
          Let's work <span className="accent">together.</span>
        </h2>
        {contact.intro && <p className="pf-body">{contact.intro}</p>}

        {contact.availability && (
          <p className="contact-availability">
            <span className="pulse-dot" aria-hidden="true" />
            {contact.availability}
          </p>
        )}

        <ul className="contact-list">
          {contact.email && (
            <li className="contact-row">
              <ContactItem
                href={`mailto:${contact.email}`}
                Icon={BsEnvelope}
                label="Email"
                value={contact.email}
              />
              <button
                type="button"
                className="contact-copy"
                onClick={copyEmail}
                aria-label={copied ? "Email copied" : "Copy email address"}
                title={copied ? "Copied" : "Copy"}
              >
                {copied ? <BsCheck2 size={16} /> : <BsClipboard size={15} />}
              </button>
            </li>
          )}
          {contact.whatsapp && (
            <li>
              <ContactItem
                href={contact.whatsapp}
                Icon={BsWhatsapp}
                label="WhatsApp"
                value={contact.phone || "Message me"}
                external
              />
            </li>
          )}
          {landing.linkdHandle && (
            <li>
              <ContactItem
                href={landing.linkdHandle}
                Icon={BsLinkedin}
                label="LinkedIn"
                value="in/mirosh-kavinda"
                external
              />
            </li>
          )}
          {contact.location && (
            <li>
              <ContactItem
                href={contact.mapUrl}
                Icon={BsGeoAlt}
                label="Based in"
                value={contact.location}
                external
              />
            </li>
          )}
        </ul>
      </Reveal>

      {/* ---------- Form ---------- */}
      <Reveal className="contact-card" delay={0.1}>
        {status === "sent" ? (
          <div className="cf-success" role="status">
            <BsCheckCircleFill size={44} className="cf-success-icon" />
            <h3>Thanks, your message is on its way!</h3>
            <p>I'll get back to you at the email address you gave.</p>
            <button type="button" className="pf-btn" onClick={() => setStatus("idle")}>
              Send another message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <fieldset className="cf-topics">
              <legend>What's it about?</legend>
              <div className="cf-topic-list">
                {TOPICS.map((t) => (
                  <button
                    key={t}
                    type="button"
                    className={`pf-tab ${topic === t ? "is-active" : ""}`}
                    aria-pressed={topic === t}
                    onClick={() => pickTopic(t)}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </fieldset>

            <div className="cf-grid">
              <div className="cf-field">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  type="text"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  {...register("name", {
                    required: "Please enter your name",
                    maxLength: { value: 50, message: "Please use 50 characters or less" },
                  })}
                />
                {errors.name && <span className="cf-error">{errors.name.message}</span>}
              </div>

              <div className="cf-field">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  {...register("email", {
                    required: "Please enter your email",
                    pattern: { value: EMAIL_PATTERN, message: "Please enter a valid email address" },
                  })}
                />
                {errors.email && <span className="cf-error">{errors.email.message}</span>}
              </div>
            </div>

            <div className="cf-field">
              <label htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                type="text"
                aria-invalid={!!errors.subject}
                {...register("subject", {
                  required: "Please enter a subject",
                  maxLength: { value: 75, message: "Subject cannot exceed 75 characters" },
                })}
              />
              {errors.subject && <span className="cf-error">{errors.subject.message}</span>}
            </div>

            <div className="cf-field">
              <div className="cf-label-row">
                <label htmlFor="cf-message">Message</label>
                <span className={`cf-count ${messageLength > MESSAGE_MAX ? "is-over" : ""}`}>
                  {messageLength}/{MESSAGE_MAX}
                </span>
              </div>
              <textarea
                id="cf-message"
                rows={5}
                placeholder="Tell me a little about what you have in mind…"
                aria-invalid={!!errors.message}
                {...register("message", {
                  required: "Please enter a message",
                  maxLength: { value: MESSAGE_MAX, message: `Please keep it under ${MESSAGE_MAX} characters` },
                })}
              />
              {errors.message && <span className="cf-error">{errors.message.message}</span>}
            </div>

            {status === "error" && (
              <p className="cf-alert" role="alert">
                Something went wrong sending your message. Please try again
                {contact.email ? (
                  <>
                    {" "}or email me at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                  </>
                ) : (
                  "."
                )}
              </p>
            )}

            <button
              type="submit"
              className="pf-btn pf-btn-primary cf-submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className="cf-spinner" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  Send message <BsArrowRight />
                </>
              )}
            </button>
          </form>
        )}
      </Reveal>
    </section>
  );
};

export default ContactForm;
