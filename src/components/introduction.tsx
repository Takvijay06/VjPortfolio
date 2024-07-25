import React from "react";
import vj from "../assets/images/vjProfile.jpeg";
import vjCv from "../assets/pdfs/VijayTak_Resume.pdf";

const Introduction = () => {
  const emailId = "takvijay06@gmail.com";
  const subject = "Request for hiring you as a Software developer";
  const body =
    "Hello Vijay,I hope this message finds you well." +
    "I would like to discuss the process of hiring you as a software" +
    " developer in our organization. Could you please share your availability for a call?" +
    " Looking forward to your response.";

  const mailtoLink: string = `mailto:${emailId}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
  
  return (
    <section className="flex">
      <div className="container introduction">
        <h1>--Hello</h1>
        <h2 className="writing">I'm Vijay Tak</h2>
        <br />
        <h4 className="writing">Fullstack Developer & Instructor.</h4>
        <p>
          Hi there! My name is Vijay Tak and I’m a software engineer with over 3
          <br />
          years of experience in the industry. I love all things tech and <br />
          coding, I share my knowledge and experience through this portfolio.
        </p>
        <div className="button-section">
          <a href={mailtoLink}>
            <button>Hire Me</button>
          </a>
          <a href={vjCv} target="_blank">
            <button>Download CV</button>
          </a>
        </div>
      </div>
      <div className="profile-container">
        <img src={vj} alt="Vijay Image" className="profile" />
      </div>
    </section>
  );
};

export default Introduction;
