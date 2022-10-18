import React from "react";
import {
  FaTwitterSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <a
        href="https://www.twitter.com/samsonaderonmu/"
        target="_blank"
        rel="noreferrer"
      >
        <FaTwitterSquare />
      </a>
      <a
        href="https://web.facebook.com/profile.php?id=100076897760190&sk=about_contact_and_basic_info"
        target="_blank"
        rel="noreferrer"
      >
        <FaFacebookSquare />
      </a>
      <a
        href="https://www.instagram.com/super__ior/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagramSquare />
      </a>
      <a
        href="https://www.linkedin.com/in/samsonaderonmu/"
        
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
