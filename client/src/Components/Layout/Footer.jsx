import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" footer footer-horizontal footer-center bg-gradient-to-r from-[#434343] to-[#000000] text-white p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/about" className="link link-hover">
          About us
        </Link>
        <Link to="/contact" className="link link-hover">
          Contact
        </Link>
        <Link to="/contact" className="link link-hover">
          Privacy Policy
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-[60px] text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF
              size={28}
              className="hover:text-blue-600 transition duration-300"
            />
          </a>
          <a href="mailto:tahmid.karim.saad@gmail.com">
            <MdEmail
              size={28}
              className="hover:text-red-500 transition duration-300"
            />
          </a>
          <a href="tel:+8801990769940">
            <FaPhoneAlt
              size={28}
              className="hover:text-green-500 transition duration-300"
            />
          </a>
        </div>
      </nav>

      <aside>
        <p>Copyright © 2024 - All right reserved by AZI.</p>
      </aside>
    </footer>
  );
};

export default Footer;
