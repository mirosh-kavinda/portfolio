import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import React from "react";
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
    <div className=" contact bg-dark mt-5" data-aos="fade-up">
      <div className="row  p-2 mt-5">
        <br />
        <div className="col-sm-12 col-md-6 mt-5 text-center">
          <h1> Reach To Me</h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="form-row mb-2 mx-4 col-6">
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
            <div className="form-row mb-2 mx-4 col-6">
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
                className="d-flex justify-content-center mt-4 align-items-center btn download bg-dark nav-link p-2 col-sm-12 col-md-12"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 mt-5 ">
          <iframe
            title="#"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d190.1746045538311!2d79.9650315873348!3d6.915805766648182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae257da4f1a05cd%3A0x832672af3a673fbb!2z4La04Lea4La74Lac4LeE4LeP4Lac4LeP4LeAIOC2tuC3neC2qeC3iuC2uA!5e1!3m2!1sen!2slk!4v1671855970176!5m2!1sen!2slk"
            width="90%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen="false"
            loading="lazy"
          ></iframe>
        </div>
        <ToastContainer />
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default ContactForm;
