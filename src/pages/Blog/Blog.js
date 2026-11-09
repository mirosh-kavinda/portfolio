import React, { useEffect, useState } from "react";
import Axios from "axios";
import { motion } from "framer-motion";
import { BsArrowUpRight, BsMedium, BsPencilSquare } from "react-icons/bs";
import Reveal from "../../components/UI/Reveal";
import useProfile from "../../hooks/useProfile";
import "../../css/works.css";

const FEED_URL =
  "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@mirosh-kavinda";

function htmlToText(html = "") {
  return new DOMParser().parseFromString(html, "text/html").body.textContent || "";
}

function firstImage(html = "") {
  const imgs = new DOMParser().parseFromString(html, "text/html").querySelectorAll("img");
  // Skip Medium's 1px tracking pixel
  const img = Array.from(imgs).find((i) => !/\/_\/stat\b/.test(i.getAttribute("src") || ""));
  return img ? img.getAttribute("src") : "";
}

function excerpt(text, max = 200) {
  const clean = text.replace(/\s+/g, " ").trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, clean.lastIndexOf(" ", max))}…`;
}

function formatDate(pubDate) {
  const d = new Date(String(pubDate).replace(" ", "T"));
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function toPost(item) {
  const text = htmlToText(item.content || item.description);
  return {
    key: item.guid || item.link,
    title: item.title,
    link: item.link,
    date: formatDate(item.pubDate),
    minutes: Math.max(1, Math.round(text.split(/\s+/).length / 220)),
    image: item.thumbnail || firstImage(item.content || item.description),
    excerpt: excerpt(text),
    tags: (item.categories || []).slice(0, 3),
  };
}

function PostCard({ post, featured }) {
  const [imageFailed, setImageFailed] = useState(false);
  return (
    <a
      className={`post-card ${featured ? "is-featured" : ""}`}
      href={post.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="post-media">
        {post.image && !imageFailed ? (
          // Medium's CDN rejects hotlinked images that carry a foreign referrer
          <img
            src={post.image}
            alt=""
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <span className="post-media-fallback">
            <BsPencilSquare size={28} />
          </span>
        )}
      </div>
      <div className="post-body">
        <p className="post-meta">
          {[post.date, `${post.minutes} min read`].filter(Boolean).join(" · ")}
        </p>
        <h3>{post.title}</h3>
        <p className="post-excerpt">{post.excerpt}</p>
        {post.tags.length > 0 && (
          <div className="pf-chips">
            {post.tags.map((t) => (
              <span key={t} className="pf-chip">
                {t}
              </span>
            ))}
          </div>
        )}
        <span className="post-read">
          Read on Medium <BsArrowUpRight size={12} />
        </span>
      </div>
    </a>
  );
}

function Blog() {
  const { landing } = useProfile();
  const [state, setState] = useState({ status: "loading", posts: [], profileUrl: "" });

  useEffect(() => {
    let alive = true;
    Axios.get(FEED_URL)
      .then(({ data }) => {
        if (!alive) return;
        setState({
          status: "ready",
          posts: (data.items || []).map(toPost),
          profileUrl: data.feed?.link || "",
        });
      })
      .catch((error) => {
        console.error(error);
        if (alive) setState((s) => ({ ...s, status: "error" }));
      });
    return () => {
      alive = false;
    };
  }, []);

  const mediumUrl = landing.mediumHandle || state.profileUrl || "https://medium.com/@mirosh-kavinda";
  const [featured, ...rest] = state.posts;

  return (
    <motion.main
      className="pf-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="pf-container">
        <Reveal as="header" className="page-head pf-section-head">
          <div>
            <p className="pf-eyebrow">Writings</p>
            <h1 className="pf-h1">Notes & articles</h1>
            <p className="pf-body mb-0">
              I write on Medium about software engineering, design and what I learn while
              building products.
            </p>
          </div>
          <a href={mediumUrl} target="_blank" rel="noopener noreferrer" className="pf-btn">
            <BsMedium /> Follow on Medium
          </a>
        </Reveal>

        {state.status === "loading" && (
          <div className="post-grid" aria-busy="true">
            <div className="post-card is-featured is-skeleton" />
            {Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="post-card is-skeleton" />
            ))}
          </div>
        )}

        {state.status === "error" && (
          <p className="pf-body">
            Articles couldn't be loaded right now. You can read them all on{" "}
            <a href={mediumUrl} target="_blank" rel="noopener noreferrer" className="pf-link">
              Medium
            </a>
            .
          </p>
        )}

        {state.status === "ready" && state.posts.length === 0 && (
          <p className="pf-body">No articles yet. Check back soon.</p>
        )}

        {state.status === "ready" && featured && (
          <div className="post-grid">
            <Reveal className="post-featured-wrap">
              <PostCard post={featured} featured />
            </Reveal>
            {rest.map((post, i) => (
              <Reveal key={post.key} delay={Math.min(i * 0.06, 0.3)}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </motion.main>
  );
}

export default Blog;
