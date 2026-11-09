import React from "react";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from "react-icons/ai";
import { BsMedium } from "react-icons/bs";

const LINKS = [
  { key: "linkdHandle", label: "LinkedIn", Icon: AiOutlineLinkedin },
  { key: "githubHandle", label: "GitHub", Icon: AiOutlineGithub },
  { key: "mediumHandle", label: "Medium", Icon: BsMedium },
  { key: "ytHandle", label: "YouTube", Icon: AiOutlineYoutube },
  { key: "twitHandle", label: "Twitter", Icon: AiOutlineTwitter },
];

export default function SocialLinks({ landing = {}, className = "" }) {
  return (
    <div className={`pf-socials ${className}`}>
      {LINKS.filter((l) => landing[l.key]).map(({ key, label, Icon }) => (
        <a
          key={key}
          href={landing[key]}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
