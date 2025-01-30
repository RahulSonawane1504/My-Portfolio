import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3">
      <p>
        © {new Date().getFullYear()} Rahul's Portfolio. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
