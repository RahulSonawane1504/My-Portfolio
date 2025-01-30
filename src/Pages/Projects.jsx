// import React from "react";
// import "../Styles/Projects.css";

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "Online Healthcare Web",
//       description:
//         "A cutting-edge web application built with React and Node.js.",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_GqcZ2xYfBkWad6rxGvoH9tOU7egdP8Sng&s",
//     },
//     {
//       id: 2,
//       title: "Project Beta",
//       description: "An AI-powered chatbot for customer support.",
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo9ZMzEIOwklMVioIiJBYnUZ9VVh0uwcHpDA&s",
//     },
//     {
//       id: 3,
//       title: "Project Gamma",
//       description: "A mobile app for fitness tracking and health monitoring.",
//       image:
//         "https://www.simplilearn.com/ice9/free_resources_article_thumb/project_management_coursefees.jpg",
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h1 className="projects-title">Our Projects</h1>
//       <p className="projects-subtitle">
//         Explore our latest work and innovations.
//       </p>
//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div key={project.id} className="project-card">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="project-image"
//             />
//             <div className="project-content">
//               <h2 className="project-title">{project.title}</h2>
//               <p className="project-description">{project.description}</p>
//               <button className="project-button">View Details</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;

import React from "react";
import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Projects = () => {
  const projects = [
    {
      title: "Online Healthcare Web",
      desc: "A modern web application for healthcare sector",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI_GqcZ2xYfBkWad6rxGvoH9tOU7egdP8Sng&s",
    },
    {
      title: "Project Two",
      desc: "An interactive UI with animations.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuURkmmbY6PPJ8LcoX01d8glmRWbEJvjU9Jw&s",
    },
    {
      title: "Project Three",
      desc: "A powerful MERN stack application.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOhbAs7ZkRSNgbEOmh_XEP_LANORMQ3L9gBw&s",
    },
  ];

  return (
    <div className="container my-5">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="display-4 fw-bold text-primary">My Projects</h1>
        <p className="lead text-muted">Check out my latest work!</p>
      </motion.div>

      <div className="row mt-5">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="col-md-4"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="card shadow-lg border-0 rounded-4 p-3 text-center">
              <motion.img
                src={project.img}
                className="card-img-top rounded"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1, rotate: 5 }}
                transition={{ duration: 0.5 }}
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="card-title fw-bold">{project.title}</h5>
                <p className="card-text text-muted">{project.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
