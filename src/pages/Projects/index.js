import React from "react";
import { ProjectData } from "../../data/Data";
import ProjList from "../../components/ProjView/ProjList";
import Blog from '../../components/Blog/Blog';
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
          data-aos="fade-up"
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
          data-aos="fade-up"
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
          data-aos="fade-up"
          aria-labelledby="nav-profile-tab"
        >
      
          <Blog/>
          <br />
          <br />
          <br />
        </div>
       
        );
      </div>
    
    </>
  );
};

export default Projects;
