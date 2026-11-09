import { NavLink } from "react-router-dom";

const MENU_LINKS = [
  { to: "/", label: "Home", end: true },
  { to: "/aboutme", label: "About" },
  { to: "/projects", label: "Works" },
  { to: "/blog", label: "Writings" },
  { to: "/contact", label: "Contact" },
];

export function Menu({ toggle }) {
  return (
    <nav className="menu">
      <div className="mt-4">
        <ul className="navbar-nav">
          {MENU_LINKS.map((l) => (
            <li key={l.to}>
              <NavLink onClick={toggle} className="nav-link mx-2" to={l.to} end={l.end}>
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export const Path = (props) => (
  <path
    fill="transparent"
    strokeWidth="3"
    stroke="var(--menu-fg)"
    strokeLinecap="round"
    {...props}
  />
);

export const MenuToggle = ({ toggle }) => (
  <button onClick={toggle} aria-label="Toggle menu">
    <svg width="23" height="18" viewBox="0 0 23 18">
      <Path d="M 2 2.5 L 20 2.5" className="top" />
      <Path d="M 2 9.423 L 20 9.423" opacity="1" className="middle" />
      <Path d="M 2 16.346 L 20 16.346" className="bottom" />
    </svg>
  </button>
);
