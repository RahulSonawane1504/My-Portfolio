// import React from "react";

// const Home = () => {
//   return (
//     <div className="text-center">
//       <h1>Welcome to My Portfolio</h1>
//       <p className="mt-4">
//         I'm a passionate developer who loves to build amazing things.
//       </p>
//       {/* <a
//         href="#Projects"
//         className="mt-6 inline-block bg-white text-blue-500 px-6 py-2 rounded-full"
//       >
//         View My Work
//       </a> */}
//       <p>This is a showcase of my skills and projects.</p>
//     </div>
//   );
// };

// export default Home;

import React from "react";
// import "../Styles/home.css"; // Import the custom CSS file
import "../Styles/Home.css";
import { useNavigate } from "react-router-dom";

// const Home = () => {
const Home = () => {
  const navigate = useNavigate();

  const handleViewMyWork = () => {
    navigate("/projects");
  };
  return (
    <div className="home-container">
      <div className="home-content">
        <h1 className="home-title">Welcome to Rahul's Portfolio</h1>
        <p className="home-subtitle">
          I'm a passionate developer who loves to build amazing things. Let's
          create something extraordinary together!
        </p>
        {/* <button className="home-button">View My Work</button> */}
        <button onClick={handleViewMyWork} className="btn btn-primary">
          View My Work
        </button>
      </div>
    </div>
  );
};

export default Home;
