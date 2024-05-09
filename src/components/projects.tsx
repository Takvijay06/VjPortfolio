import React from "react";
import hpsc from "../assets/images/hpsc.jpeg";
import hpGaia from "../assets/images/hp-gaia.jpg";
import machine from "../assets/images/machine.jpg";

const Projects = () => {
  return (
    <section className="flex container">
        <div className="projects">
          <h1>--Projects</h1>
          <div className="flex">
          <div className="card">
            <div className="card-section">
              <img src={hpsc} alt="HPSC" />
              <h2>HP Sales central</h2>
              <div>
                <button>React Js</button>
                <button>Redux</button>
                <button>Typescript</button>
                <button>Javascript</button>
                <button>HTML</button>
                <button>CSS</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-section">
              <img src={hpGaia} alt="HP-Gaia" />
              <h2>HP GAIA Tool</h2>
              <div>
                <button>React Js</button>
                <button>Redux</button>
                <button>Typescript</button>
                <button>Javascript</button>
                <button>HTML</button>
                <button>CSS</button>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-section">
              <img src={machine} alt="HPSC" />
              <h2>Creamaster Machine Shop</h2>
              <div>
                <button>React Js</button>
                <button>Redux</button>
                <button>Typescript</button>
                <button>Javascript</button>
                <button>HTML</button>
                <button>CSS</button>
              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default Projects;
