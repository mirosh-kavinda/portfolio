import React from "react";
import { ProjectData } from "../../data/Data";
import ProjList from "../../components/ProjView/ProjList";

const Projects = () => {
  return (
    <>
      <br />
      <nav className="mt-5 ">
        <div
          className="nav  justify-content-center"
          id="nav-tab"
          role="tablist"
        >
          <a
            href="#4"
            className="nav-link active"
            id="nav-home-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-home"
            role="tab"
            aria-controls="nav-home"
            aria-selected="true"
          >
            Case Studies
          </a>
          <a
            href="#4"
            className="nav-link"
            id="nav-profile-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-profile"
            role="tab"
            aria-controls="nav-profile"
            aria-selected="false"
          >
            Developments
          </a>
          <a
            href="#4"
            className="nav-link"
            id="nav-contact-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-contact"
            role="tab"
            aria-controls="nav-contact"
            aria-selected="false"
          >
            Blogs
          </a>
        </div>
      </nav>
      <div className="tab-content mt-5 gap-4" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-home"
          role="tabpanel"
          aria-labelledby="nav-home-tab"
        >
          <ProjList
            projects={ProjectData}
            projcat={"casestudy"}
            key={Math.random()}
          />
          <br />
          <br />
          <br />
        </div>
        <div
          className="tab-pane fade"
          id="nav-profile"
          role="tabpanel"
          aria-labelledby="nav-profile-tab"
        >
          <ProjList
            projects={ProjectData}
            projcat={"dev"}
            key={Math.random()}
          />
          <br />
          <br />
          <br />
        </div>
        <div
          className="tab-pane fade"
          id="nav-contact"
          role="tabpanel"
          aria-labelledby="nav-contact-tab"
        >
          <div className="bg-dark m-3 p-3 ">
            <ul>
              <li>
                <a className="nav-link" href="#1">
                  SearchEngine Optimization
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="#1">
                  Apache J-meter
                </a>{" "}
              </li>
              <li>
                <a className="nav-link" href="#1">
                  How to testing using selenium tool
                </a>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
