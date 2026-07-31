import React from "react";
import { Link } from "react-router-dom";

import {
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiTwitch,
  FiGithub,
  FiMail,
  FiArrowUpRight,
  FiHeart,
  FiGlobe,
} from "react-icons/fi";

import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="site-footer">

      {/* =====================================================
          TOP GLOW
      ===================================================== */}

      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>


      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div className="footer-container">

        {/* ===================================================
            BRAND SECTION
        =================================================== */}

        <div className="footer-brand-section">

          <Link to="/" className="footer-logo">

            <div className="footer-logo-mark">
              <span>G</span>
            </div>

            <div className="footer-logo-text">
              <strong>GG</strong>
              <span>ARENA</span>
            </div>

          </Link>


          <p className="footer-description">
            The next-generation social platform built for
            esports players, teams, organizations and gaming
            communities.
          </p>


          {/* Community status */}

          <div className="footer-community-status">

            <span className="footer-online-dot"></span>

            <span>
              24,892 players online
            </span>

          </div>


          {/* Social links */}

          <div className="footer-socials">

            <a
              href="#"
              className="footer-social-link"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="Instagram"
            >
              <FiInstagram />
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="YouTube"
            >
              <FiYoutube />
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="Twitch"
            >
              <FiTwitch />
            </a>

            <a
              href="#"
              className="footer-social-link"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>

          </div>

        </div>


        {/* ===================================================
            PLATFORM LINKS
        =================================================== */}

        <div className="footer-column">

          <h3>Platform</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/explore">Explore</Link>
            </li>

            <li>
              <Link to="/tournaments">Tournaments</Link>
            </li>

            <li>
              <Link to="/organization">
                Organizations
              </Link>
            </li>

            <li>
              <Link to="/messages">Messages</Link>
            </li>

          </ul>

        </div>


        {/* ===================================================
            COMMUNITY LINKS
        =================================================== */}

        <div className="footer-column">

          <h3>Community</h3>

          <ul>

            <li>
              <Link to="/profile">
                Players
              </Link>
            </li>

            <li>
              <Link to="/explore">
                Teams
              </Link>
            </li>

            <li>
              <Link to="/tournaments">
                Events
              </Link>
            </li>

            <li>
              <Link to="/activity">
                Activity
              </Link>
            </li>

            <li>
              <a href="#">
                Leaderboards
                <FiArrowUpRight />
              </a>
            </li>

          </ul>

        </div>


        {/* ===================================================
            RESOURCES
        =================================================== */}

        <div className="footer-column">

          <h3>Resources</h3>

          <ul>

            <li>
              <a href="#">
                Help Center
                <FiArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#">
                Creator Guide
                <FiArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#">
                Tournament Guide
                <FiArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#">
                Developers
                <FiArrowUpRight />
              </a>
            </li>

            <li>
              <a href="#">
                API Documentation
                <FiArrowUpRight />
              </a>
            </li>

          </ul>

        </div>


        {/* ===================================================
            COMPANY
        =================================================== */}

        <div className="footer-column">

          <h3>Company</h3>

          <ul>

            <li>
              <a href="#">
                About Us
              </a>
            </li>

            <li>
              <a href="#">
                Careers
              </a>
            </li>

            <li>
              <a href="#">
                Contact
              </a>
            </li>

            <li>
              <a href="#">
                Partners
              </a>
            </li>

            <li>
              <a href="#">
                Advertise
              </a>
            </li>

          </ul>

        </div>

      </div>


      {/* =====================================================
          NEWSLETTER
      ===================================================== */}

      <div className="footer-container">

        <div className="footer-newsletter">

          <div className="footer-newsletter-content">

            <div className="footer-newsletter-icon">
              <FiMail />
            </div>

            <div>
              <h3>
                Stay ahead of the game.
              </h3>

              <p>
                Get esports news, tournament updates
                and community highlights.
              </p>
            </div>

          </div>


          <form
            className="footer-newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Newsletter subscription");
            }}
          >

            <input
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              required
            />

            <button type="submit">
              Subscribe
              <FiArrowUpRight />
            </button>

          </form>

        </div>

      </div>


      {/* =====================================================
          BOTTOM FOOTER
      ===================================================== */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          {/* Copyright */}

          <div className="footer-copyright">

            <span>
              © {new Date().getFullYear()} GG Arena.
              All rights reserved.
            </span>

            <span className="footer-made-with">
              Made with
              <FiHeart />
              for gamers.
            </span>

          </div>


          {/* Legal */}

          <div className="footer-legal-links">

            <a href="#">
              Privacy
            </a>

            <a href="#">
              Terms
            </a>

            <a href="#">
              Cookies
            </a>

            <a href="#">
              Safety
            </a>

          </div>


          {/* Language */}

          <button className="footer-language">

            <FiGlobe />

            <span>English</span>

          </button>


          {/* Back to top */}

          <button
            className="footer-back-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            ↑
          </button>

        </div>

      </div>

    </footer>
  );
};

export default Footer;