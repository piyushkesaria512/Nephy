import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiMail,
  FiLock,
  FiEye,
  FiEyeOff,
  FiArrowRight,
  FiChrome,
  FiGithub,
  FiCheckCircle,
  FiZap,
} from "react-icons/fi";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Remove error while typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Basic form validation
  const validateForm = () => {
    const newErrors = {};

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

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // Login submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    // Temporary login simulation.
    // Replace this with Axios/API authentication later.
    setTimeout(() => {
      setLoading(false);

      // Navigate to home after successful login
      navigate("/home");
    }, 1200);
  };

  const handleGoogleLogin = () => {
    console.log("Google login clicked");

    // Connect Google OAuth here later
  };

  const handleGithubLogin = () => {
    console.log("GitHub login clicked");

    // Connect GitHub OAuth here later
  };

  return (
    <div className="login-page">
      {/* Background Effects */}
      <div className="login-bg">
        <div className="login-glow login-glow-one"></div>
        <div className="login-glow login-glow-two"></div>
        <div className="login-grid"></div>
      </div>

      <div className="login-container">

        {/* =========================
            LEFT BRAND SECTION
        ========================== */}
        <motion.section
          className="login-brand"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="brand-content">

            {/* Logo */}
            <Link to="/" className="login-logo">
              <div className="logo-icon">
                <FiZap />
              </div>

              <div className="logo-text">
                <span>ARENA</span>
                <small>HUB</small>
              </div>
            </Link>

            {/* Main heading */}
            <div className="brand-heading">
              <span className="brand-tag">
                <span className="brand-dot"></span>
                THE ESPORTS NETWORK
              </span>

              <h1>
                Connect.
                <br />
                Compete.
                <br />
                <span>Conquer.</span>
              </h1>

              <p>
                Join the next generation of esports players,
                organizations, creators and competitive gaming
                communities.
              </p>
            </div>

            {/* Benefits */}
            <div className="login-benefits">

              <div className="benefit-item">
                <div className="benefit-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Connect with Players</strong>
                  <span>Build your esports network</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Join Tournaments</strong>
                  <span>Compete and climb the ranks</span>
                </div>
              </div>

              <div className="benefit-item">
                <div className="benefit-icon">
                  <FiCheckCircle />
                </div>

                <div>
                  <strong>Build Your Legacy</strong>
                  <span>Showcase your gaming journey</span>
                </div>
              </div>

            </div>

          </div>
        </motion.section>

        {/* =========================
            RIGHT LOGIN SECTION
        ========================== */}
        <motion.section
          className="login-form-section"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >

          <div className="login-card">

            {/* Header */}
            <div className="login-header">
              <div className="mobile-logo">
                <div className="logo-icon">
                  <FiZap />
                </div>

                <div className="logo-text">
                  <span>ARENA</span>
                  <small>HUB</small>
                </div>
              </div>

              <span className="welcome-label">
                WELCOME BACK
              </span>

              <h2>Enter the Arena</h2>

              <p>
                Login to continue your esports journey.
              </p>
            </div>

            {/* Social Login */}
            <div className="social-login">

              <button
                type="button"
                className="social-button"
                onClick={handleGoogleLogin}
              >
                <FiChrome />
                <span>Continue with Google</span>
              </button>

              <button
                type="button"
                className="social-button"
                onClick={handleGithubLogin}
              >
                <FiGithub />
                <span>Continue with GitHub</span>
              </button>

            </div>

            {/* Divider */}
            <div className="login-divider">
              <span></span>
              <p>OR CONTINUE WITH EMAIL</p>
              <span></span>
            </div>

            {/* Form */}
            <form
              className="login-form"
              onSubmit={handleSubmit}
            >

              {/* Email */}
              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <div
                  className={`input-wrapper ${
                    errors.email ? "input-error" : ""
                  }`}
                >
                  <FiMail className="input-icon" />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                {errors.email && (
                  <span className="error-message">
                    {errors.email}
                  </span>
                )}

              </div>

              {/* Password */}
              <div className="form-group">

                <div className="password-label-row">
                  <label htmlFor="password">
                    Password
                  </label>

                  <Link
                    to="/forgot-password"
                    className="forgot-link"
                  >
                    Forgot password?
                  </Link>
                </div>

                <div
                  className={`input-wrapper ${
                    errors.password ? "input-error" : ""
                  }`}
                >
                  <FiLock className="input-icon" />

                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="current-password"
                  />

                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() =>
                      setShowPassword((prev) => !prev)
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
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
                  <span className="error-message">
                    {errors.password}
                  </span>
                )}

              </div>

              {/* Remember */}
              <div className="remember-row">

                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) =>
                      setRememberMe(e.target.checked)
                    }
                  />

                  <span className="custom-checkbox">
                    {rememberMe && <FiCheckCircle />}
                  </span>

                  <span>Remember me</span>
                </label>

              </div>

              {/* Login Button */}
              <motion.button
                type="submit"
                className="login-button"
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.98 }}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="button-spinner"></span>
                    Signing in...
                  </>
                ) : (
                  <>
                    Enter Arena
                    <FiArrowRight />
                  </>
                )}
              </motion.button>

            </form>

            {/* Register */}
            <div className="register-prompt">
              <span>Don't have an account?</span>

              <Link to="/register">
                Create account
              </Link>
            </div>

            {/* Terms */}
            <div className="login-terms">
              By continuing, you agree to our{" "}
              <Link to="/terms">Terms of Service</Link>{" "}
              and{" "}
              <Link to="/privacy">Privacy Policy</Link>.
            </div>

          </div>

        </motion.section>

      </div>
    </div>
  );
}

export default Login;