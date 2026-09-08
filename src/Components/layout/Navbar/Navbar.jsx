import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FiSearch,
  FiBell,
  FiMessageCircle,
  FiPlus,
  FiMenu,
  FiX,
  FiUpload,
  FiUser,
  FiSettings,
  FiLogOut,
  FiChevronDown,
} from "react-icons/fi";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = search.trim();

    if (!value) return;

    navigate(`/explore?search=${encodeURIComponent(value)}`);
  };

  const handleUpload = () => {
    navigate("/upload");
  };

  const handleLogout = () => {
    // Later replace this with AuthContext logout()
    navigate("/login");
  };

  return (
    <header className="navbar">
      {/* =====================================================
          LEFT SECTION
      ===================================================== */}

      <div className="navbar-left">
        {/* Mobile Menu Button */}

        <button
          className="navbar-icon-button mobile-menu-button"
          aria-label="Open menu"
        >
          <FiMenu />
        </button>

        {/* Logo */}

        <Link to="/" className="navbar-logo">
          <div className="navbar-logo-mark">
            <img src="/nephy.png" alt="NEPHY" />
          </div>

          <div className="navbar-logo-text">
            <strong>NEPHY</strong>
            <span>ESPORTS</span>
          </div>
        </Link>
      </div>

      {/* =====================================================
          CENTER SEARCH
      ===================================================== */}

      <form className="navbar-search" onSubmit={handleSearch}>
        <FiSearch className="navbar-search-icon" />

        <input
          type="text"
          placeholder="Search players, teams, games..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="Search"
        />

        {search && (
          <button
            type="button"
            className="navbar-search-clear"
            onClick={() => setSearch("")}
            aria-label="Clear search"
          >
            <FiX />
          </button>
        )}
      </form>

      {/* =====================================================
          RIGHT SECTION
      ===================================================== */}

      <div className="navbar-right">
        {/* Mobile Search */}

        <button
          className="navbar-icon-button mobile-search-button"
          onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
          aria-label="Search"
        >
          <FiSearch />
        </button>

        {/* Create Button */}

        <button className="navbar-create-button" onClick={handleUpload}>
          <FiPlus />

          <span>Create</span>
        </button>

        {/* Messages */}

        <Link
          to="/messages"
          className="navbar-icon-button navbar-message-button"
          aria-label="Messages"
        >
          <FiMessageCircle />

          <span className="navbar-notification-dot">3</span>
        </Link>

        {/* Notifications */}

        <div className="navbar-dropdown-wrapper">
          <button
            className="navbar-icon-button"
            onClick={() => setShowNotifications(!showNotifications)}
            aria-label="Notifications"
          >
            <FiBell />

            <span className="navbar-notification-dot">5</span>
          </button>

          {showNotifications && (
            <div className="navbar-dropdown notification-dropdown">
              <div className="dropdown-header">
                <div>
                  <h3>Notifications</h3>
                  <span>5 new notifications</span>
                </div>

                <button>Mark all read</button>
              </div>

              <div className="notification-list">
                <div className="navbar-notification-item">
                  <div className="notification-avatar">
                    <img src="https://i.pravatar.cc/100?img=12" alt="Player" />
                  </div>

                  <div className="notification-content">
                    <p>
                      <strong>ShadowX</strong> liked your post.
                    </p>

                    <span>2 minutes ago</span>
                  </div>
                </div>

                <div className="navbar-notification-item">
                  <div className="notification-avatar">
                    <img src="https://i.pravatar.cc/100?img=32" alt="Player" />
                  </div>

                  <div className="notification-content">
                    <p>
                      <strong>Nova Gaming</strong> started following you.
                    </p>

                    <span>15 minutes ago</span>
                  </div>
                </div>

                <div className="navbar-notification-item">
                  <div className="notification-avatar">
                    <img src="https://i.pravatar.cc/100?img=45" alt="Player" />
                  </div>

                  <div className="notification-content">
                    <p>
                      You were invited to <strong>Valorant Masters</strong>.
                    </p>

                    <span>1 hour ago</span>
                  </div>
                </div>
              </div>

              <Link
                to="/activity"
                className="view-all-notifications"
                onClick={() => setShowNotifications(false)}
              >
                View all activity
              </Link>
            </div>
          )}
        </div>

        {/* =================================================
            PROFILE
        ================================================= */}

        <div className="navbar-dropdown-wrapper">
          <button
            className="navbar-profile-button"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <img
              src="https://i.pravatar.cc/100?img=11"
              alt="Your profile"
              className="navbar-avatar"
            />

            <span className="navbar-profile-name">Kaushal</span>

            <FiChevronDown
              className={
                showProfileMenu ? "profile-chevron rotate" : "profile-chevron"
              }
            />
          </button>

          {showProfileMenu && (
            <div className="navbar-dropdown profile-dropdown">
              <div className="profile-dropdown-user">
                <img
                  src="https://i.pravatar.cc/100?img=11"
                  alt="Your profile"
                />

                <div>
                  <strong>Kaushal Kumar</strong>
                  <span>@kaushal</span>
                </div>
              </div>

              <div className="dropdown-divider" />

              <Link to="/profile" onClick={() => setShowProfileMenu(false)}>
                <FiUser />
                <span>My Profile</span>
              </Link>

              <Link to="/settings" onClick={() => setShowProfileMenu(false)}>
                <FiSettings />
                <span>Settings</span>
              </Link>

              <div className="dropdown-divider" />

              <button className="logout-dropdown-button" onClick={handleLogout}>
                <FiLogOut />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* =====================================================
          MOBILE SEARCH PANEL
      ===================================================== */}

      {mobileSearchOpen && (
        <div className="mobile-search-panel">
          <form onSubmit={handleSearch}>
            <FiSearch />

            <input
              autoFocus
              type="text"
              placeholder="Search players, teams, games..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setMobileSearchOpen(false);
              }}
            >
              <FiX />
            </button>
          </form>
        </div>
      )}
    </header>
  );
};

export default Navbar;
