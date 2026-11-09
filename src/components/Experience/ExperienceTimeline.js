import React from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Reveal from "../UI/Reveal";
import {
  describePeriod,
  formatDuration,
  groupByCompany,
  initials,
  monthsBetween,
} from "../../utils/experience";
import "../../css/experience.css";

function CompanyLogo({ group }) {
  if (group.logo) {
    return <img className="xp-logo" src={group.logo} alt="" loading="lazy" />;
  }
  return (
    <span className="xp-logo" aria-hidden="true">
      {initials(group.company)}
    </span>
  );
}

function Role({ role, compact }) {
  const period = describePeriod(role);
  const highlights = role.highlights || [];
  const tech = role.tech || [];

  return (
    <div className="xp-role">
      <div className="xp-role-head">
        <h4>{role.role}</h4>
        {role.current && <span className="pf-badge pf-badge-live">Current</span>}
        {role.type && <span className="pf-badge">{role.type}</span>}
      </div>
      {period && <p className="xp-period">{period}</p>}
      {role.summary && <p className="xp-summary">{role.summary}</p>}

      {!compact && highlights.length > 0 && (
        <ul className="xp-highlights">
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}

      {!compact && tech.length > 0 && (
        <div className="pf-chips" aria-label="Technologies">
          {tech.map((t) => (
            <span key={t} className="pf-chip">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

/** Company-grouped career timeline. `compact` hides highlights and tech. */
export default function ExperienceTimeline({ items = [], compact = false, limit }) {
  const groups = groupByCompany(limit ? items.slice(0, limit) : items);

  if (!groups.length) {
    return <p className="text-muted-x">Experience will be listed here soon.</p>;
  }

  return (
    <ol className={`xp-timeline ${compact ? "is-compact" : ""}`}>
      {groups.map((group, i) => {
        const isCurrent = group.roles.some((r) => r.current);
        const months = group.roles.reduce(
          (sum, r) => sum + monthsBetween(r.start, r.current ? null : r.end),
          0
        );
        const tenure = group.roles.length > 1 ? formatDuration(months) : "";

        return (
          <li key={group.key} className={`xp-group ${isCurrent ? "is-current" : ""}`}>
            <span className="xp-node" aria-hidden="true" />
            <Reveal className="xp-card" delay={Math.min(i * 0.08, 0.3)}>
              <header className="xp-company">
                <CompanyLogo group={group} />
                <div>
                  <h3>
                    {group.companyUrl ? (
                      <a href={group.companyUrl} target="_blank" rel="noopener noreferrer">
                        {group.company} <BsArrowUpRight size={12} />
                      </a>
                    ) : (
                      group.company
                    )}
                  </h3>
                  <p className="xp-company-meta">
                    {[group.location, tenure].filter(Boolean).join(" · ")}
                  </p>
                </div>
              </header>
              <div className={`xp-roles ${group.roles.length > 1 ? "is-multi" : ""}`}>
                {group.roles.map((role) => (
                  <Role key={role.id || role.role} role={role} compact={compact} />
                ))}
              </div>
            </Reveal>
          </li>
        );
      })}
    </ol>
  );
}
