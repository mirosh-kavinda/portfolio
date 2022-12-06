import React from "react";

import ProjCard from "./ProjCard";

const CardList = ({ projects, projcat }) => {
  return (
    <div className="container ">
      <div className="row justity-content-center ">
        {projects.map((user, i) => {
          return (
            <div
              className="md-auto  col-sm-12 col-md-4"
              key={Math.random()}
            >
              {projcat === projects[i].category ? (
                <ProjCard
                  projcat={projects[i].category}
                  projectName={projects[i].projectName}
                  id={projects[i].id}
                  image={projects[i].image}
                />
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;
