import React from "react";
import AnimatedCursor from "react-animated-cursor";

const DotRing = () => {
  return (
    <>
      <AnimatedCursor
        innerSize={0}
        outerSize={18}
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
        showSystemCursor={true}
        hasBlendMode={true}
        innerStyle={{
          
          display:"none"
        }}
        outerStyle={{
          border:"1px solid  #e3874f ",
          boxShadow:"0px 0px 4px 1px #e3874f",
          background:"none",
          zIndex:"1000000"
        }}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
    </>
  );
};

export default DotRing;
