import React from "react";
import "./Feature.css";
import { Link } from "react-router-dom";
import { GrProjects } from "react-icons/gr";

export default function Feature({ item, right, left }) {
  return (
    <article className="feature">
      {right ? (
        <div className="content">
          <div className="text">
            <h1 className="feature_heading">{item.heading}</h1>
            {Object.keys(item["list"]).map((items, index) => (
              <ul key={index}>
                <li className="list_item">{item["list"][items]}</li>
              </ul>
            ))}
           <span>
              <hr/>
              <Link className="nav-link is-active exact mx-2 mb-4" to="/projects">
                <GrProjects className=" rounded  link bg-light p-1 " />
                <t /> Projects
              </Link>
            </span>
          </div>
          <img
            className="feature_image img-fluid"
            src={item.image}
            loading="lazy"
            alt="not found"
          />
        </div>
      ) : (
        <div className="content_left">
          <img
            className="feature_image img-fluid"
            src={item.image}
            loading="lazy"
            alt="not found"
          />
          <div className="text">
            <h1 className="feature_heading">{item.heading}</h1>
            {Object.keys(item["list"]).map((items, index) => (
              <ul key={index}>
                <li className="list_item">{item["list"][items]}</li>
              </ul>
            ))}
            <span>
              <hr/>
              <Link className="nav-link is-active exact mx-2 mb-4" to="/projects">
                <GrProjects className=" rounded  link bg-light p-1 " />
                <t /> Projects
              </Link>
            </span>
          </div>
        </div>
      )}
    </article>
  );
}
