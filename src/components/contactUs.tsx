import React from "react";

const ContactUs = () => {
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
        <input type="text" placeholder="Your Full Name" />
        <br />
        <input type="text" placeholder="Your Email" />
        <br />
        <input type="text" placeholder="Your Message" id="message" />
        <br />
        <button>Send Message</button>
      </div>
    </section>
  );
};

export default ContactUs;
