import "./App.css";
import vj from "./vjProfile.jpeg";
import hpsc from "./hpsc.jpeg";
import hpGaia from "./hp-gaia.jpg";
import machine from "./machine.jpg";

function App() {
  return (
    <>
      <nav>
        <div className="container main-nav flex">
          <div className="title">
            <span className="title-first-letter">V</span>ijay{" "}
            <span className="title-first-letter">T</span>ak
          </div>

          <div className="flex">
            <ul className="nav-list flex">
              <li>Home</li>
              <li>Courses</li>
              <li>My Blogs</li>
              <li>My Gears</li>
              <li>Login</li>
            </ul>
            <div className="media-links flex">
              <p>|</p>
              <a href="https://www.linkedin.com/in/takvijay06" target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://github.com/Takvijay06" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="flex">
        <div className="container introduction">
          <h1>--Hello</h1>
          <h2>I'm Vijay Tak</h2>
          <h4>Fullstack Developer & Instructor</h4>
          <p>
            Hi there! My name is Vijay Tak and I’m a software engineer with over
            3<br />
            years of experience in the industry. I love all things tech and{" "}
            <br />
            coding, I share my knowledge and experience through this portfolio.
          </p>
          <button>Explore Me</button>
        </div>
        <div className="profile-container">
          <img src={vj} alt="Vijay Image" className="profile" />
        </div>
      </section>

      <section>
        <div className="container">
          <h1>--Projects</h1>
          <div className="flex">
            <div className="card">
              <div className="card-section">
                <img src={hpsc} alt="HPSC"/>
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
                <img src={hpGaia} alt="HP-Gaia"/>
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
                <img src={machine} alt="HPSC"/>
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

      <section>
        <div className="container">
          <h1>--Skills</h1>
          <div className="flex">
            <div className="card">1</div>
            <div className="card">1</div>
            <div className="card">1</div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h1>--Reviews</h1>
          <div className="flex">
            <div className="card">1</div>
            <div className="card">1</div>
            <div className="card">1</div>
          </div>
        </div>
      </section>

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

      <footer className="flex">
        © Copyright 2024 - Developed by Vijay Tak. All right reserved.
      </footer>
    </>
  );
}

export default App;
