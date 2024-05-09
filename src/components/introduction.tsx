import React from "react";
import vj from "../assets/images/vjProfile.jpeg";

const Introduction = () => {
  return (
    <section className="flex">
      <div className="container introduction">
        <h1>--Hello</h1>
        <h2 className="writing">I'm Vijay Tak</h2><br/>
        <h4 className="writing">Fullstack Developer & Instructor.</h4>
        <p>
          Hi there! My name is Vijay Tak and I’m a software engineer with over 3
          <br />
          years of experience in the industry. I love all things tech and <br />
          coding, I share my knowledge and experience through this portfolio.
        </p>
        <div className="button-section">
          <button>Hire Me</button>
          <button>Download CV</button>
        </div>
      </div>
      <div className="profile-container">
        <img src={vj} alt="Vijay Image" className="profile" />
      </div>
    </section>
  );
};

export default Introduction;
