import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "../../utils/ToText";

import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

function ShowBlog(props, p) {
  return (
    <div className={`col-md-4 col-sm-6 col-xs-12 `}>
      <div className="card bg-dark" >
        <div
          className={c.cardpost__image}
          style={{ backgroundImage: `url(${props.thumbnail})` }}
        ></div>

        <div className="card-body">
          <h5 className="card-title text-white" align="center">
            {props.title}
          </h5>
          <br />
          <p className={c.cardText}>{`${ToText(
            props.description.substring(0, 1000)
          )}...`}</p>
          <br />
          <Link
          to={props.link}
          className=" d-flex justify-content-center col-sm-6 col-md-4 col-lg-4 "
          style={{ textDecoration: "none", color: "white", cursor: "pointer" }}
        >
          Read More
        </Link>
        </div>
      </div>
    </div>
  );
}

export default withRouter(ShowBlog);
