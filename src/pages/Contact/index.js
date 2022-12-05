import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.min.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast("Form sent!", {
      position: "bottom-right",
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
    <div className="container contact bg-dark mt-5">
      <div className="row  p-3 mt-5">
        <div className="col-sm-12 col-md-6 mt-5 text-center">
          <h1>Contact Me</h1>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className="row form p-2">
              <div className="col-md-6 col-sm-12">
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
              <div className="col-md-6 col-sm-12">
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
            </div>
            {/* Row 2 of form */}
            <div className="row form-row ">
              <div className="col p-2 mx-2">
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
            </div>
            {/* Row 3 of form */}
            <div className="row form-row">
              <div className="col p-2 mx-2">
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
            </div>
            <button className="btn p-3 nav-link center" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 mt-5 text-center p-2">
          <iframe
            title="#"
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d191064.69954824232!2d80.0526597900972!3d6.877822914457401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2slk!4v1670221500449!5m2!1sen!2slk"
            width="90%"
            height="100%"
            style={{ border: "0" }}
            allowfullscreen="false"
            loading="lazy"
          ></iframe>
        </div>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ContactForm;
