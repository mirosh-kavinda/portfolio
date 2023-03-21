import React from "react";
import c from "./ShowBlog.module.css";
import ToText from "../../utils/ToText";
import moment from "moment";
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
      <div className="card bg-dark">
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
          <span className="text-red">
            published : {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
          </span>
          <hr />

          <Link
            to={props.link}
            style={{
              border:"1px solid white",
              padding:"3px",
              textDecoration: "none",
              color: "white",
              borderRadius:"20%",
              cursor: "pointer",
            }}
          >
            Read More
          </Link>
        </div>
      </div>
      <br />
    </div>
  );
}

export default withRouter(ShowBlog);
