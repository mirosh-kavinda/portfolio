import React, { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { getCached } from "../../utils/firebaseCache";
import Card from "../../components/ProjectShowModel/Card";
import Reveal from "../../components/UI/Reveal";
import "../../css/works.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "dev", label: "Development" },
  { key: "casestudy", label: "UX case studies" },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [status, setStatus] = useState("loading"); // loading | ready | error
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    let alive = true;
    getCached("projects")
      .then((value) => {
        if (!alive) return;
        const list = (Array.isArray(value) ? value : Object.values(value || {})).filter(Boolean);
        setProjects(list);
        setStatus("ready");
      })
      .catch((error) => {
        console.error("Error fetching project data:", error);
        if (alive) setStatus("error");
      });
    return () => {
      alive = false;
    };
  }, []);

  const counts = useMemo(() => {
    const c = { all: projects.length };
    projects.forEach((p) => {
      c[p.category] = (c[p.category] || 0) + 1;
    });
    return c;
  }, [projects]);

  const visible = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  return (
    <motion.main
      className="pf-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4 } }}
      exit={{ opacity: 0, transition: { duration: 0.3 } }}
    >
      <div className="pf-container">
        <Reveal as="header" className="page-head">
          <p className="pf-eyebrow">Portfolio</p>
          <h1 className="pf-h1">Selected works</h1>
          <p className="pf-body page-lede">
            Apps I've built and UX case studies I've designed. Open a project for the story
            behind it.
          </p>
          <div className="pf-tabs" role="group" aria-label="Filter projects">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                className={`pf-tab ${filter === f.key ? "is-active" : ""}`}
                aria-pressed={filter === f.key}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                {status === "ready" && <span className="pf-tab-count">{counts[f.key] || 0}</span>}
              </button>
            ))}
          </div>
        </Reveal>

        {status === "loading" && (
          <div className="work-grid" aria-busy="true">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="work-card is-skeleton" />
            ))}
          </div>
        )}

        {status === "error" && (
          <p className="pf-body">Projects couldn't be loaded right now. Please try again later.</p>
        )}

        {status === "ready" && (
          <motion.div layout className="work-grid">
            <AnimatePresence initial={false}>
              {visible.map((data) => (
                <motion.div
                  layout
                  key={data.id}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.25 }}
                >
                  <Card data={data} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>
    </motion.main>
  );
};

export default Projects;
