import React from "react";
import { Link } from "react-router-dom";
import { BsArrowUpRight, BsAward, BsLock } from "react-icons/bs";
import Reveal from "../UI/Reveal";
import "../../css/products.css";

/**
 * Live products. `minimal` shows only logo, name and type (Home page), with each
 * tile linking to the full write-up; `compact` hides the contribution and tech.
 */
export default function ProductShowcase({ items = [], compact = false, minimal = false }) {
  if (minimal) {
    return (
      <div className="product-strip">
        {items.map((p, i) => (
          <Reveal key={p.id} delay={Math.min(i * 0.08, 0.24)}>
            <Link to="/aboutme#products" className="product-tile" aria-label={`${p.name}: read more`}>
              <span className="product-tile-logo">
                <img
                  src={p.logo}
                  alt=""
                  loading="lazy"
                  style={p.logoScale ? { transform: `scale(${p.logoScale})` } : undefined}
                />
              </span>
              <span className="product-tile-text">
                <strong>{p.name}</strong>
                <small>
                  <span className="product-tile-dot" aria-hidden="true" /> {p.kind}
                </small>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className={`product-grid ${compact ? "is-compact" : ""}`}>
      {items.map((p, i) => (
        <Reveal key={p.id} className="product-card" delay={Math.min(i * 0.08, 0.24)}>
          <div className="product-logo">
            <img
              src={p.logo}
              alt={`${p.name} logo`}
              loading="lazy"
              style={p.logoScale ? { transform: `scale(${p.logoScale})` } : undefined}
            />
          </div>

          <div className="product-body">
            <div className="product-meta">
              <span className="pf-badge pf-badge-live">Live</span>
              <span>{p.kind}</span>
            </div>
            <h3>{p.name}</h3>
            {p.org && p.org !== p.name && <p className="product-org">{p.org}</p>}
            <p className="product-summary">{p.summary}</p>

            {p.award && (
              <p className="product-award">
                <BsAward aria-hidden="true" /> {p.award}
              </p>
            )}

            {!compact && p.contribution && (
              <div className="product-role">
                <span>My contribution</span>
                <p>{p.contribution}</p>
              </div>
            )}

            {!compact && p.tech?.length > 0 && (
              <div className="pf-chips">
                {p.tech.map((t) => (
                  <span key={t} className="pf-chip">
                    {t}
                  </span>
                ))}
              </div>
            )}

            <div className="product-links">
              {p.links?.length > 0 ? (
                p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener noreferrer">
                    {l.label} <BsArrowUpRight size={11} />
                  </a>
                ))
              ) : (
                <span className="product-internal">
                  <BsLock size={12} aria-hidden="true" /> Internal product
                </span>
              )}
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
