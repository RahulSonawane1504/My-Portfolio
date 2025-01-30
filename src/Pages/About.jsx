import React from "react";
import "../Styles/About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  const handleLearnMore = () => {
    navigate("/learn-more");
  };
  return (
    <div className="about-container">
      <div className="about-content">
        <h1>About Me !</h1>
        <p>
          I am a passionate Web Developer with expertise in MERN Stack (MongoDB,
          Express.js, React.js, Node.js). I specialize in building responsive,
          dynamic, and user-friendly web applications. With a strong foundation
          in front-end and back-end development, I enjoy turning ideas into
          functional and efficient digital solutions.
        </p>
        <p>
          I am always eager to learn and stay updated with the latest
          technologies to enhance my skills. My goal is to develop high-quality
          applications that improve user experience and solve real-world
          problems. Let’s connect and build something amazing together! 🚀
        </p>

        <button className="cta-button" onClick={handleLearnMore}>
          Click to gather more information
        </button>
      </div>
    </div>
  );
};

export default About;
