import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BsArrowsAngleExpand, BsX } from "react-icons/bs";
import Reveal from "../UI/Reveal";
import "../../css/certifications.css";

/**
 * Certifications (siteData/certifications in Firebase) as a compact grid;
 * a badge opens larger on click. Each item: { id, title, issuer, img }.
 */
const Certifications = ({ items = [] }) => {
  const [open, setOpen] = useState(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <ul className="cert-grid">
        {items.map((c, i) => (
          <Reveal as="li" key={c.id} delay={Math.min(i * 0.05, 0.2)}>
            <button type="button" className="cert-card" onClick={() => setOpen(c)}>
              <span className="cert-badge">
                <img src={c.img} alt="" loading="lazy" />
              </span>
              <span className="cert-text">
                <strong>{c.title}</strong>
                <small>{c.issuer}</small>
              </span>
              <BsArrowsAngleExpand className="cert-expand" size={13} aria-hidden="true" />
            </button>
          </Reveal>
        ))}
      </ul>

      <AnimatePresence>
        {open && (
          <motion.div
            className="cert-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={open.title}
            onClick={() => setOpen(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.figure
              className="cert-lightbox-card"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, y: 12 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 8 }}
            >
              <button
                type="button"
                className="cert-close"
                onClick={() => setOpen(null)}
                aria-label="Close"
                autoFocus
              >
                <BsX size={22} />
              </button>
              <img src={open.img} alt={`${open.title} badge`} />
              <figcaption>
                <strong>{open.title}</strong>
                <small>{open.issuer}</small>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certifications;
