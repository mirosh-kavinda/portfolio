import React from "react";
import { ProjectData } from "../../data/Data";
import ProjList from "../../components/ProjView/ProjList";

const Projects = () => {
  return (
    <>
      <div className=" mt-5 p-3 ">
        <ul className=" mt-4 nav justify-content-center col-lg-12 col-sm-12">
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#collapseExample1"
              aria-expanded="false"
            >
              Case Studies
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              aria-current="page"
              data-bs-toggle="collapse"
              href="#collapseExample2"
            >
              Developments
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="collapse"
              href="#collapseExample3"
            >
              Blogs
            </a>
          </li>
        </ul>


{/* collapsing elements content  */}
        <div className="collapse" id="collapseExample3">
          <div className="card card-body bg-dark row">
            <div className="row">
              <h3 className="col-6">Blogs : </h3>
              <a
                data-bs-toggle="collapse"
                href="#collapseExample3"
                className="d-flex justify-content-end col-6 test-xl"
              >
                Close 
              </a>
              <hr />
            </div>
            <ul className=" ">
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

        <div className="collapsing" id="collapseExample2">
          <div className="card card-body bg-dark row">
            <div className="row">
              <h3 className="col-6">Developments : </h3>
              <a
                data-bs-toggle="collapse"
                href="#collapseExample2"
                className="d-flex justify-content-end col-6 test-xl"
              >
                Close 
              </a>
              <hr />
            </div>

            <ProjList projects={ProjectData} projcat={"dev"} />
          </div>
        </div>

        <div className="collapse.show" id="collapseExample1">
          <div className="card card-body bg-dark row">
            <div className="row">
              <h3 className="col-6">Case Studies : </h3>
              <a
                data-bs-toggle="collapse"
                href="#collapseExample1"
                className="d-flex justify-content-end col-6 test-xl"
              >
                Close 
              </a>
              <hr />
            </div>

            <ProjList projects={ProjectData} projcat={"casestudy"} />
          </div>
        </div>

      </div>
    </>
  );
};

export default Projects;
