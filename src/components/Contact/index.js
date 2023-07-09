import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const ContactForm = () => {
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

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      const templateParams = {
        name,
        email,
        subject,
        message,
      };

      await emailjs.send(
        "service_wrj9o1n",
        "template_ujgeo95",
        templateParams,
        "nkNY1hE2EnJTUx7-X"
      );

      reset();
      toastifySuccess();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className=" text-center container">
      <h1> Contact Me</h1>
      <div className=" row text-center mt-3 ">
        <br />
        <div className="col-md-8 col-sm-12 ">
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row mt-5 mb-2 mx-4 ">
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
            <div className="form-row mb-2 mx-4 ">
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
            <div className="form-row mb-2 mx-4 ">
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

            <div className="form-row mb-2 mx-4  ">
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
              <button
                className="d-flex justify-content-center mt-4 align-items-center btn  bg-dark link p-2 col-sm-12 col-md-12"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-md-4 col-sm-12 mt-5 ">
          <div className="row">
          <a
            href="https://goo.gl/maps/y414JL98TXvb6FWZ6"
            className=" link bg-dark rounded p-2 col-2 "
          >
            <CiLocationOn  size={40} />

    
          </a>
          <div className="col-6 ">
              <p className="">
                No : 81/5, 5th cross Road, Weragampita, Matara.
              </p>
            </div>
          </div>
         
          <div className="row mt-2">
            <a
              href="https://wa.me/94713531809"
              className=" link bg-dark rounded p-2 pt-3 col-2"
            >
              <BsFillTelephoneFill size={30} />
            </a>
            <p className="col-6">
              +94713531809
              <br />
              (Whatsapp )
            </p>
          </div>
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
