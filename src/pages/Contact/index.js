import React from "react";
import ContactForm from "../../hooks/ContactForm";
import "../../css/index.css";
const Contact = () => {
  return (
    <>
      <div className="contact">
        <h4 className="text-black mb-5">Contact me</h4>
        <ContactForm />
      </div>
    </>
  );
};

export default Contact;
