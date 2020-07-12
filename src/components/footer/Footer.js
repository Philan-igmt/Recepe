import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer black">
      <div className="container">
        <h5>
          Made with <i className="material-icons red-text">favorite</i> By
          Philan ISithembiso &copy;2020
        </h5>
        <h5>
          <a href="https://www.facebook.com/philani.phila.7792">
            <FaFacebookSquare size="2rem" color="blue" />
          </a>
          <a href="https://www.instagram.com/philani_isithembiso/">
            <FaInstagramSquare size="2rem" color="brown" />
          </a>
          <a href="https://twitter.com/p_isthembiso">
            <FaTwitterSquare size="2rem" color="aqua" />
          </a>
          <a href="">
            <FaGithub size="2rem" color="white" />
          </a>
          <a href="https://www.linkedin.com/in/philani-sithembiso-270a391a5/">
            <FaLinkedin size="2rem" color="blue" />
          </a>
          <a href="tel:+27762938834">
            <FaWhatsappSquare size="2rem" color="green" />
          </a>
        </h5>
      </div>
    </div>
  );
}

export default Footer;
