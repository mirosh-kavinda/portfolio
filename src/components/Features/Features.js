import React from "react";
import "./Features.css";
import Picture5 from "../../images/Picture5.png";
import Picture6 from "../../images/Picture6.png";
import Picture7 from "../../images/Picture7.png";
import Feature from "./Feature/Feature";

export default function Features() {
  let feature_content = {
    item_1: {
      id: 1,
      image: Picture5,
      heading: "+ Mobile Web Development",
      list: {
        desc_1: "Responsive design ensuring optimal viewing experience",
        desc_2: "Performance optimization for fast loading times",
        desc_3: "Integration with backend services and APIs",
      },
    },
    item_2: {
      id: 2,
      image: Picture6,
      heading: "+ UI/UX Design",
      list: {
        desc_1: "User interface design for web and mobile applications",
        desc_2: "User experience design focusing on usability and user satisfaction",
        desc_3: "Wireframing, prototyping, and user testing",
      },
    },
    item_3: {
      id: 3,
      image: Picture7,
      heading: "+ Maintenance and Support",
      list: {
        desc_1: "Regular website updates and security checks",
        desc_2: "Troubleshooting and bug fixes",
        desc_3: "Ongoing technical support",
      },
    },
  };

  return (
    <section id="features">
      <h1 className="title">Services</h1>
      <Feature item={feature_content.item_1} right />
      <Feature item={feature_content.item_2} left />
      <Feature item={feature_content.item_3} right />
    </section>
  );
}
