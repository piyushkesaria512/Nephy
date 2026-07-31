import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiUser,
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiChrome,
  FiGithub,
  FiCheckCircle,
  FiZap,
  FiGamepad2,
} from "react-icons/fi";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "player",
  });

  const [errors, setErrors] = useState({});

  // ================================
  // HANDLE INPUT
  // ================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // ================================
  // ACCOUNT TYPE
  // ================================

  const handleAccountType = (type) => {
    setFormData((prev) => ({
      ...prev,
      accountType: type,
    }));
  };

  // ================================
  // VALIDATION
  // ================================

  const validateForm = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    } else if (formData.username.length < 3) {
      newErrors.username = "Username must contain at least 3 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must contain at least 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    if (!agreeTerms) {
      newErrors.terms = "You must accept the terms to continue";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // ================================
  // SUBMIT
  // ================================

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Temporary registration simulation.
    // Replace with Axios API call later.

    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 1200);
  };

  // ================================
  // SOCIAL LOGIN
  // ================================

  const handleGoogleRegister = () => {
    console.log("Google registration clicked");
  };

  const handleGithubRegister = () => {
    console.log("GitHub registration clicked");
  };

  return (
    <div className="register-page">

      {/* ================================
          BACKGROUND
      ================================= */}

      <div className="register-bg">
        <div className="register-glow register-glow-one"></div>
        <div className="register-glow register-glow-two"></div>
        <div className="register-grid"></div>
      </div>

      <div className="register-container">

        {/* ================================
            LEFT SECTION
        ================================= */}

        <motion.section
          className="register-brand"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="register-brand-content">

            {/* Logo */}

            <Link to="/" className="register-logo">
              <div className="register-logo-icon">
                <FiZap />
              </div>

              <div className="register-logo-text">
                <span>ARENA</span>
                <small>HUB</small>
              </div>
            </Link>

            {/* Heading */}

            <div className="register-heading">

              <span className="register-tag">
                <span className="register-tag-dot"></span>
                JOIN THE COMPETITION
              </span>

              <h1>
                Your
                <br />
                Game.
                <br />
                <span>Your Legacy.</span>
              </h1>

              <p>
                Create your esports identity and connect with
                players, teams, organizations and communities
                from around the world.
              </p>

            </div>

            {/* Features */}

            <div className="register-features">

              <div className="register-feature">

                <div className="register-feature-icon">
                  <FiGamepad2 />
                </div>

                <div>
                  <strong>Build Your Gaming Profile</strong>
                  <span>
                    Showcase your skills, stats and achievements.
                  </span>
                </div>

              </div>

              <div className="register-feature">

                <div className="register-feature-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Compete in Tournaments</strong>
                  <span>
                    Find tournaments and compete for prizes.
                  </span>
                </div>

              </div>

              <div className="register-feature">

                <div className="register-feature-icon">
                  <FiUser />
                </div>

                <div>
                  <strong>Grow Your Network</strong>
                  <span>
                    Connect with players and esports organizations.
                  </span>
                </div>

              </div>

            </div>

          </div>
        </motion.section>

        {/* ================================
            REGISTER FORM
        ================================= */}

        <motion.section
          className="register-form-section"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >

          <div className="register-card">

            {/* Header */}

            <div className="register-header">

              <div className="register-mobile-logo">

                <div className="register-logo-icon">
                  <FiZap />
                </div>

                <div className="register-logo-text">
                  <span>ARENA</span>
                  <small>HUB</small>
                </div>

              </div>

              <span className="register-welcome">
                CREATE ACCOUNT
              </span>

              <h2>Join the Arena</h2>

              <p>
                Create your account and start your journey.
              </p>

            </div>

            {/* Social Registration */}

            <div className="register-social">

              <button
                type="button"
                className="register-social-button"
                onClick={handleGoogleRegister}
              >
                <FiChrome />
                <span>Google</span>
              </button>

              <button
                type="button"
                className="register-social-button"
                onClick={handleGithubRegister}
              >
                <FiGithub />
                <span>GitHub</span>
              </button>

            </div>

            {/* Divider */}

            <div className="register-divider">

              <span></span>

              <p>OR CREATE WITH EMAIL</p>

              <span></span>

            </div>

            {/* Form */}

            <form
              className="register-form"
              onSubmit={handleSubmit}
            >

              {/* Username */}

              <div className="register-form-group">

                <label htmlFor="username">
                  Username
                </label>

                <div
                  className={`register-input-wrapper ${
                    errors.username ? "register-input-error" : ""
                  }`}
                >

                  <FiUser className="register-input-icon" />

                  <input
                    id="username"
                    type="text"
                    name="username"
                    placeholder="Choose a username"
                    value={formData.username}
                    onChange={handleChange}
                    autoComplete="username"
                  />

                </div>

                {errors.username && (
                  <span className="register-error">
                    {errors.username}
                  </span>
                )}

              </div>

              {/* Email */}

              <div className="register-form-group">

                <label htmlFor="register-email">
                  Email Address
                </label>

                <div
                  className={`register-input-wrapper ${
                    errors.email ? "register-input-error" : ""
                  }`}
                >

                  <FiMail className="register-input-icon" />

                  <input
                    id="register-email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />

                </div>

                {errors.email && (
                  <span className="register-error">
                    {errors.email}
                  </span>
                )}

              </div>

              {/* Account Type */}

              <div className="register-form-group">

                <label>
                  Account Type
                </label>

                <div className="account-type-selector">

                  <button
                    type="button"
                    className={
                      formData.accountType === "player"
                        ? "account-type active"
                        : "account-type"
                    }
                    onClick={() => handleAccountType("player")}
                  >
                    <FiGamepad2 />

                    <span>
                      <strong>Player</strong>
                      <small>Competitive gamer</small>
                    </span>

                  </button>

                  <button
                    type="button"
                    className={
                      formData.accountType === "organization"
                        ? "account-type active"
                        : "account-type"
                    }
                    onClick={() =>
                      handleAccountType("organization")
                    }
                  >
                    <FiZap />

                    <span>
                      <strong>Organization</strong>
                      <small>Team / Esports org</small>
                    </span>

                  </button>

                </div>

              </div>

              {/* Password */}

              <div className="register-form-group">

                <label htmlFor="register-password">
                  Password
                </label>

                <div
                  className={`register-input-wrapper ${
                    errors.password ? "register-input-error" : ""
                  }`}
                >

                  <FiLock className="register-input-icon" />

                  <input
                    id="register-password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Create a password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                  >
                    {showPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

                {errors.password && (
                  <span className="register-error">
                    {errors.password}
                  </span>
                )}

              </div>

              {/* Confirm Password */}

              <div className="register-form-group">

                <label htmlFor="confirm-password">
                  Confirm Password
                </label>

                <div
                  className={`register-input-wrapper ${
                    errors.confirmPassword
                      ? "register-input-error"
                      : ""
                  }`}
                >

                  <FiLock className="register-input-icon" />

                  <input
                    id="confirm-password"
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    name="confirmPassword"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="register-password-toggle"
                    onClick={() =>
                      setShowConfirmPassword(
                        (prev) => !prev
                      )
                    }
                  >
                    {showConfirmPassword ? (
                      <FiEyeOff />
                    ) : (
                      <FiEye />
                    )}
                  </button>

                </div>

                {errors.confirmPassword && (
                  <span className="register-error">
                    {errors.confirmPassword}
                  </span>
                )}

              </div>

              {/* Terms */}

              <div className="register-terms-checkbox">

                <label>

                  <input
                    type="checkbox"
                    checked={agreeTerms}
                    onChange={(e) => {
                      setAgreeTerms(e.target.checked);

                      if (errors.terms) {
                        setErrors((prev) => ({
                          ...prev,
                          terms: "",
                        }));
                      }
                    }}
                  />

                  <span className="register-custom-checkbox">
                    {agreeTerms && <FiCheckCircle />}
                  </span>

                  <span>
                    I agree to the{" "}
                    <Link to="/terms">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to="/privacy">
                      Privacy Policy
                    </Link>
                  </span>

                </label>

                {errors.terms && (
                  <span className="register-error">
                    {errors.terms}
                  </span>
                )}

              </div>

              {/* Submit */}

              <motion.button
                type="submit"
                className="register-submit"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >

                {loading ? (
                  <>
                    <span className="register-spinner"></span>
                    Creating account...
                  </>
                ) : (
                  <>
                    Create Account
                    <FiArrowRight />
                  </>
                )}

              </motion.button>

            </form>

            {/* Login Link */}

            <div className="register-login">

              <span>Already have an account?</span>

              <Link to="/login">
                Login
              </Link>

            </div>

            {/* Footer */}

            <div className="register-footer">
              Your gaming journey starts here.
            </div>

          </div>

        </motion.section>

      </div>
    </div>
  );
}

export default Register;