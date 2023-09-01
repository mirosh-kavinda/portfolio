import React from "react";

import loading from "./spin-back.gif";

const Spinner = () => {
  return (
    <div class="container">
      <img
        img
        src={loading}
        alt="cur"
        class="center-loading"
       
      />
    </div>
  );
};

export default Spinner;
