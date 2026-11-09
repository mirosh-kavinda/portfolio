import React, { useEffect, useState } from "react";
import { BsArrowUpRight, BsBriefcase, BsGeoAlt, BsLinkedin, BsMortarboard } from "react-icons/bs";
import { formatDuration, initials, totalMonths } from "../../utils/experience";
import "../../css/profileCard.css";

/** Public repo / follower counts; null until loaded or when GitHub is unreachable. */
function useGithubStats(username) {
  const [stats, setStats] = useState(null);
  useEffect(() => {
    if (!username) return undefined;
    let alive = true;
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (alive && data) setStats({ repos: data.public_repos, followers: data.followers });
      })
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, [username]);
  return stats;
}

/**
 * LinkedIn-style profile card. Replaces LinkedIn's embeddable badge, whose
 * profile request is now blocked by Chromium (ERR_BLOCKED_BY_ORB) and renders blank.
 */
export default function ProfileCard({ statement, linkedinUrl, experience = [] }) {
  const [photoFailed, setPhotoFailed] = useState(false);
  const github = useGithubStats(statement.github);
  const months = totalMonths(experience);
  const githubUrl = statement.github ? `https://github.com/${statement.github}` : "";

  const rows = [
    { Icon: BsBriefcase, text: statement.company },
    { Icon: BsMortarboard, text: statement.education },
    { Icon: BsGeoAlt, text: statement.location },
  ].filter((r) => r.text);

  const stats = [
    months
      ? {
          value: months >= 12 ? `${Math.floor(months / 12)}+ yrs` : formatDuration(months),
          label: "Experience",
        }
      : null,
    github ? { value: github.repos, label: "Repositories", href: `${githubUrl}?tab=repositories` } : null,
    github ? { value: github.followers, label: "Followers", href: `${githubUrl}?tab=followers` } : null,
  ].filter(Boolean);

  return (
    <aside className="profile-card" aria-label="Profile summary">
      <div className="profile-banner" aria-hidden="true" />
      <div className="profile-content">
        <div className="profile-avatar-wrap">
          {statement.photo && !photoFailed ? (
            <img
              className="profile-avatar"
              src={statement.photo}
              alt={statement.name}
              onError={() => setPhotoFailed(true)}
            />
          ) : (
            <span className="profile-avatar" aria-hidden="true">
              {initials(statement.name)}
            </span>
          )}
          <span className="profile-online" title="Currently working" aria-hidden="true" />
        </div>

        <h2 className="profile-name">{statement.name}</h2>
        {statement.headline && <p className="profile-headline">{statement.headline}</p>}

        {stats.length > 0 && (
          <dl className="profile-stats">
            {stats.map((s) => {
              const body = (
                <>
                  <dd>{s.value}</dd>
                  <dt>{s.label}</dt>
                </>
              );
              return s.href ? (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer">
                  {body}
                </a>
              ) : (
                <div key={s.label}>{body}</div>
              );
            })}
          </dl>
        )}

        <ul className="profile-rows">
          {rows.map(({ Icon, text }) => (
            <li key={text}>
              <Icon size={15} aria-hidden="true" />
              <span>{text}</span>
            </li>
          ))}
        </ul>

        {linkedinUrl && (
          <a
            className="pf-btn profile-cta"
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsLinkedin /> View LinkedIn profile <BsArrowUpRight size={12} />
          </a>
        )}
      </div>
    </aside>
  );
}
