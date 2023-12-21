import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer-about">
          <div className="brand">
            <Link to="/" className="wordmark">
              <img src="./logo.svg" alt="" />
              <span>Books</span>
            </Link>
          </div>
          <span className="footer-desc">Expand your mind.</span>
        </div>
        <div className="footer-links">
          <span className="footer-header">Links</span>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/register" className="footer-link">
            Register
          </Link>
        </div>
      </div>
      <div className="footer-credits">
        <span className="footer-developer">
          Designed and Developed by&nbsp;
          <a
            href="https://alwinsunil.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alwin Sunil
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
