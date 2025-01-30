import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const LearnMore = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-4 fw-bold text-primary">
          Learn More About Developer
        </h1>
        <p className="lead text-muted">
          Understand what makes a great developer.
        </p>
      </motion.div>

      {/* Types of Developers */}
      <div className="row mt-5">
        {[
          {
            title: "Front-End Developer",
            desc: "Builds the UI using HTML, CSS, JavaScript, and React.js.",
          },
          {
            title: "Back-End Developer",
            desc: "Handles the server, database, and APIs using Node.js and MongoDB.",
          },
          {
            title: "Full-Stack Developer",
            desc: "Manages both front-end and back-end development.",
          },
        ].map((role, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card shadow-lg border-0 rounded-4 p-3 text-center">
              <div className="card-body">
                <h5 className="card-title fw-bold">{role.title}</h5>
                <p className="card-text text-muted">{role.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Developer Skills */}
      <div className="mt-5">
        <h2 className="fw-bold text-primary">Key Skills of a Developer</h2>
        <ul className="list-group list-group-flush">
          {[
            "Problem-Solving",
            "JavaScript & React.js",
            "Node.js & Express.js",
            "Git & GitHub",
            "Debugging & Testing",
          ].map((skill, index) => (
            <motion.li
              key={index}
              className="list-group-item lead"
              whileHover={{ scale: 1.1, color: "#0d6efd" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LearnMore;
