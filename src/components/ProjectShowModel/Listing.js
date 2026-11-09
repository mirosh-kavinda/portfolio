import React from "react";
import { FaFigma, FaGithub, FaLaptopCode, FaPaintBrush } from "react-icons/fa";
import { BsArrowRight, BsArrowUpRight } from "react-icons/bs";
import "../../css/works.css";

/** Repo-style names ("countmein") read better capitalised; `displayName` in Firebase overrides. */
export function projectTitle({ displayName, projectName = "" }) {
  if (displayName) return displayName;
  return projectName.charAt(0).toUpperCase() + projectName.slice(1);
}

function cardImage(id) {
  try {
    return require(`../../images/projects/ProjCardView/${id}.png`);
  } catch {
    return null;
  }
}

const Listing = ({ data, open }) => {
  const { category, cardDesc, id, projectLink } = data;
  const isDev = category === "dev";
  const title = projectTitle(data);
  const image = cardImage(id);

  return (
    <article className="work-card">
      <button type="button" className="work-media" onClick={open} aria-label={`Open ${title}`}>
        {image ? (
          <img src={image} alt="" loading="lazy" />
        ) : (
          <span className="work-media-fallback">{title.charAt(0)}</span>
        )}
        <span className="work-type">
          {isDev ? <FaLaptopCode size={12} /> : <FaPaintBrush size={12} />}
          {isDev ? "Development" : "UX case study"}
        </span>
      </button>

      <div className="work-body">
        <h3>
          <button type="button" className="work-title" onClick={open}>
            {title}
          </button>
        </h3>
        {cardDesc && <p>{cardDesc}</p>}

        <div className="work-actions">
          <button type="button" className="work-details" onClick={open}>
            Details <BsArrowRight />
          </button>
          {projectLink && (
            <a
              className="work-ext"
              href={projectLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} on ${isDev ? "GitHub" : "Figma"}`}
            >
              {isDev ? <FaGithub size={15} /> : <FaFigma size={14} />}
              {isDev ? "Code" : "Figma"}
              <BsArrowUpRight size={11} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default Listing;
