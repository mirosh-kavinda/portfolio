import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React, { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import "../../css/contactForm.css";
const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: "submit-feedback success",
      toastId: "notifyToast",
    });
  };

  const onSubmit = async (data) => {
    const { name, email, subject, message } = data;
    setLoading(true);
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_tgualb7",
        "template_ujgeo95",
        templateParams,
        "nkNY1hE2EnJTUx7-X"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="text-center contact-form ">
      <h1>Contact Me</h1>
      <div className="row mt-3 justify-content-center">
        <div className="col-md-6 col-sm-12">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row mt-5 mb-2 mx-4">
              <input
                type="text"
                name="name"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Please enter your name",
                  },
                  maxLength: {
                    value: 30,
                    message: "Please use 30 characters or less",
                  },
                })}
                className="form-control formInput"
                placeholder="Name"
              ></input>
              {errors.name && (
                <span className="errorMessage">{errors.name.message}</span>
              )}
            </div>
            <div className="form-row mb-2 mx-4">
              <input
                type="email"
                name="email"
                {...register("email", {
                  required: true,
                  pattern:
                    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
                className="form-control formInput"
                placeholder="Email address"
              ></input>
              {errors.email && (
                <span className="errorMessage">
                  Please enter a valid email address
                </span>
              )}
            </div>
            <div className="form-row mb-2 mx-4">
              <input
                type="text"
                name="subject"
                {...register("subject", {
                  required: {
                    value: true,
                    message: "Please enter a subject",
                  },
                  maxLength: {
                    value: 75,
                    message: "Subject cannot exceed 75 characters",
                  },
                })}
                className="form-control formInput"
                placeholder="Subject"
              ></input>
              {errors.subject && (
                <span className="errorMessage">{errors.subject.message}</span>
              )}
            </div>
            <div className="form-row mb-2 mx-4">
              <textarea
                rows={3}
                name="message"
                {...register("message", {
                  required: true,
                })}
                className="form-control formInput"
                placeholder="Message"
              ></textarea>
              {errors.message && (
                <span className="errorMessage">Please enter a message</span>
              )}
            </div>
            <button
              className="d-flex ms-2 col-4 justify-content-center mt-4 align-items-center btn bg-dark link col-md-4"
              type="submit"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
        <div className="col-md-3 col-sm-12 mt-5">
          <a
            className="d-flex align-items-center bg-dark rounded p-2 link text-decoration-none"
            href="https://goo.gl/maps/y414JL98TXvb6FWZ6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="me-3  ">
              <CiLocationOn size={40} />
            </div>
            <p className="mb-0 text-light">
              No: 81/5, 5th Cross Road, Weragampita, Matara
            </p>
          </a>

          <a
            className="d-flex align-items-center  mt-2 bg-dark rounded p-3 link text-decoration-none"
            href="https://wa.me/94713531809"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsFillTelephoneFill size={30} className="me-3 text-light" />
            <p className="mb-0 text-light">
              +94713531809 (WhatsApp)
              </p>
          </a>
        </div>
      </div>
      <ToastContainer />
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContactForm;
