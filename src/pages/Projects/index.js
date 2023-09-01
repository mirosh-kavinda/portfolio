import { React} from "react";
import { ProjectData } from "../../data/Data";
import ProjList from "../../components/ProjView/ProjList";
import Blog from "../../components/Blog/Blog";
import useAnimations from "../../hooks/useAnimations";
import Spinner from "../../components/Spinner/Spinner";

const Projects = () => {
  const { pageloading } = useAnimations();

  return (
    <>
      {pageloading ? (
        <div className="App">
          <Spinner />
        </div>
      ) : (
        <div>
          <div class="fixed-top ">
            <br />
            <nav className="mt-5 bg-black">
              <div
                className="nav  justify-content-center "
                id="nav-tab"
                role="tablist"
              >
                <a
                  href="#4"
                  className="nav-link active btn"
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
                  className="nav-link  btn"
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
                  className="nav-link  btn"
                  id="nav-contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-contact"
                  role="tab"
                  aria-controls="nav-contact"
                  aria-selected="false"
                >
                  Writings
                </a>
              </div>
              <br />
            </nav>
          </div>

          <div className="tab-content mt-5 gap-4" id="nav-tabContent">
            <br />
            <br />
            <br />
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
              aria-labelledby="nav-profile-tab"
            >
              <Blog />
              <br />
              <br />
              <br />
            </div>
            );
          </div>
        </div>
      )}
    </>
  );
};

export default Projects;
