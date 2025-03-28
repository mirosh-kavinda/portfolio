import React from "react";
import "./Features.css";
import Picture1 from "../../images/services/service1.webp";
import Picture2 from "../../images/services/service2.webp";
import Picture3 from "../../images/services/service3.webp";
import Picture4 from "../../images/services/service4.webp";
import Picture5 from "../../images/services/service5.webp";
import Picture6 from "../../images/services/service6.webp";

import Feature from "./Feature/Feature";

export default function Features() {
  let feature_content = {
    item_1: {
      id: 1,
      image: Picture1,
      heading: "+ Frontend Development",
      list: {
        desc_1: "Modern and responsive user interfaces using React, Vue, and more.",
        desc_2: "Interactive components and optimized performance.",
        desc_3: "Integration with design systems and accessibility standards.",
      },
    },
    item_2: {
      id: 2,
      image: Picture2,
      heading: "+ Backend Development",
      list: {
        desc_1: "Scalable and secure APIs with Node.js, Django, and Spring Boot.",
        desc_2: "Database design and management with SQL and NoSQL.",
        desc_3: "Authentication, authorization, and other server-side functionalities.",
      },
    },
    item_3: {
      id: 3,
      image: Picture3,
      heading: "+ Cloud Deployment",
      list: {
        desc_1: "Deploying and maintaining applications on AWS, Azure, or Google Cloud.",
        desc_2: "Load balancing, scaling, and monitoring cloud applications.",
        desc_3: "Ensuring application availability and disaster recovery.",
      },
    },
    item_4: {
      id: 4,
      image: Picture4,
      heading: "+ Mobile-Friendly Design",
      list: {
        desc_1: "Ensure a seamless experience on both mobile and desktop devices.",
        desc_2: "Responsive layouts and optimized mobile performance.",
        desc_3: "Cross-platform compatibility testing and debugging.",
      },
    },
    item_5: {
      id: 5,
      image: Picture5,
      heading: "+ UI/UX Design",
      list: {
        desc_1: "User interface design for web and mobile applications.",
        desc_2: "User experience design focusing on usability and satisfaction.",
        desc_3: "Wireframing, prototyping, and user testing.",
      },
    },
    item_6: {
      id: 6,
      image: Picture6,
      heading: "+ Maintenance and Support",
      list: {
        desc_1: "Regular website updates and security checks.",
        desc_2: "Troubleshooting and bug fixes.",
        desc_3: "Ongoing technical support and system health monitoring.",
      },
    },

  };
  

  return (
    <section id="features">
      <Feature item={feature_content.item_1} right />
      <Feature item={feature_content.item_2} left />
      <Feature item={feature_content.item_3} right />
      <Feature item={feature_content.item_4} laft />
      <Feature item={feature_content.item_5} right />
      <Feature item={feature_content.item_6} left />
     
    </section>
  );
}
