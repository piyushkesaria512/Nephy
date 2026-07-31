import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiHome,
  FiSearch,
  FiZap,
} from "react-icons/fi";

import "./NotFound.css";

function NotFound() {
  return (
    <main className="not-found-page">

      {/* Background */}
      <div className="not-found-background">
        <div className="not-found-glow not-found-glow-purple"></div>
        <div className="not-found-glow not-found-glow-cyan"></div>

        <div className="not-found-grid"></div>

        <div className="not-found-circle circle-one"></div>
        <div className="not-found-circle circle-two"></div>
      </div>

      {/* Main Content */}
      <motion.div
        className="not-found-container"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >

        {/* Logo */}
        <Link to="/home" className="not-found-logo">

          <div className="not-found-logo-icon">
            <FiZap />
          </div>

          <div className="not-found-logo-text">
            <span>ARENA</span>
            <small>HUB</small>
          </div>

        </Link>

        {/* Error Number */}
        <motion.div
          className="not-found-number"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            type: "spring",
          }}
        >
          <span>4</span>
          <div className="not-found-zero">
            <FiSearch />
          </div>
          <span>4</span>
        </motion.div>

        {/* Content */}
        <div className="not-found-content">

          <span className="not-found-tag">
            <span></span>
            MATCH NOT FOUND
          </span>

          <h1>
            Looks like you're
            <br />
            <strong>out of bounds.</strong>
          </h1>

          <p>
            The page you're looking for doesn't exist,
            has been moved, or is currently unavailable.
            Let's get you back into the arena.
          </p>

        </div>

        {/* Buttons */}
        <div className="not-found-actions">

          <Link
            to="/home"
            className="not-found-primary-button"
          >
            <FiHome />
            Back to Home
          </Link>

          <button
            type="button"
            className="not-found-secondary-button"
            onClick={() => window.history.back()}
          >
            <FiArrowLeft />
            Go Back
          </button>

        </div>

        {/* Bottom Text */}
        <div className="not-found-footer">

          <span className="not-found-footer-line"></span>

          <span>
            ARENA<span>HUB</span>
          </span>

          <span className="not-found-footer-line"></span>

        </div>

      </motion.div>

    </main>
  );
}

export default NotFound;