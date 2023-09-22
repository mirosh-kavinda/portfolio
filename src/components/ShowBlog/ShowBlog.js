import React, { useState } from "react";
import { delay, motion } from "framer-motion";

import c from "../../css/ShowBlog.module.css";
import ToText from "./ToText";
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
  const [expandIndex, setExpandIndex] = useState(false);

  const handleCardHover = (index) => {
    setExpandIndex(index === expandIndex ? -1 : index);
    delay(3000);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "300px",
    },
  };
  return (
    <motion.div
      key={props.index}
      className={`  p-3    col-sm-12 col-md-4  cursor-pointer h-[500px] bg-cover bg-black bg-center rounded-[30px] ${
        props.index === expandIndex ? "expanded" : ""
      }`}
      variants={cardVariants}
      initial="collapsed"
      animate={props.index === expandIndex ? "expanded" : "collapsed"}
      transition={{ duration: 0.5 }}
      onHoverStart={() => handleCardHover(props.index)}
      onHoverEnd={() => handleCardHover(props.index)}
      onTouchStart={() => handleCardHover(props.index)}
      onTouchEnd={() => handleCardHover(props.index)}
    >
      <div
        className={c.cardpost__image}
        style={{ backgroundImage: `url(${props.thumbnail})` }}
      ></div>
      <div className="card-content h-full flex flex-col justify-end">
        <div className="card-footer rounded-b-[20px bg-dark bg-opacity-75 min-h-[10px] flex flex-col items-center justify-center">
          <h6 className="text-xl font-semibold text-white text-center ">
            {props.title}
          </h6>
          <br />
          {props.index === expandIndex && (
            <>
              <p className="mt-2 text-gray-300 text-center ">{`${ToText(
                props.description.substring(0, 500)
              )}...`}</p>

              <Link
                to={props.link}
                style={{
                  border: "1px solid white",
                  padding: "3px",
                  textDecoration: "none",
                  color: "white",
                  borderRadius: "20%",
                  cursor: "pointer",
                }}
              >
                Read More
              </Link>
              <span className="ms-3 text-red">
                published : {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
              </span>
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default withRouter(ShowBlog);
