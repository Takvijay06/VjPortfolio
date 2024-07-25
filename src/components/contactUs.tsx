import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Bounce, ToastContainer, toast } from "react-toastify";

const ContactUs = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const notify = () => {
    toast.success("🦄 Details Submitted Successfully", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const validate = () => {
    const newErrors = {
      name: "",
      email: "",
      message: "",
    };
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = "Email is invalid";
    if (!form.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return (
      newErrors.name.length === 0 &&
      newErrors.email.length === 0 &&
      newErrors.message.length === 0
    );
  };

  const handleFormChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sumbitForm = (e: any) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm("service_br803w6", "template_gbbhbm5", e.target, {
          publicKey: "AvjcnSCD_wypFW5ks",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            notify();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <section className="container flex details-section">
      <div className="connect-me">
        <h2>--Connect with me</h2>
        <div className="location">
          <i className="fa-solid fa-location-dot"></i>
          <span>Jaipur, Rajasthan</span>
        </div>
        <div className="mail">
          <i className="fa-solid fa-envelope"></i>
          <span>takvijay06@gmail.com</span>
        </div>
        <div className="media-links flex">
          <a href="https://www.linkedin.com/in/takvijay06" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/Takvijay06" target="_blank">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>

      <div className="contact-me">
        <h2>--Contact me</h2>
        <form onSubmit={sumbitForm}>
          <input
            type="text"
            value={form.name}
            onChange={handleFormChange}
            placeholder="Your Full Name"
            name="name"
          />
          <br />
          {errors.name && (
            <>
              <span>{errors.name}</span>
              <br />
            </>
          )}
          <input
            type="text"
            value={form.email}
            placeholder="Your Email"
            onChange={handleFormChange}
            name="email"
          />
          <br />
          {errors.email && (
            <>
              <span>{errors.email}</span>
              <br />
            </>
          )}
          <input
            type="text"
            value={form.message}
            placeholder="Your Message"
            onChange={handleFormChange}
            name="message"
          />
          <br />
          {errors.message && (
            <>
              <span>{errors.message}</span>
              <br />
            </>
          )}
          <button type="submit">Send Message</button>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
