import React from "react";

import ProjCard from "./ProjCard";

const CardList = ({ projects, projcat }) => {
  
  console.log(projcat);
  return (
    <div className="container ">
      <div className="row e-3">
        {projects.map((user, i) => {
          
          return (
            <>
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
            </>
          );
        })}
      </div>
    </div>
  );
};
export default CardList;
