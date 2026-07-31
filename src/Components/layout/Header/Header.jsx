import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  FiArrowLeft,
  FiSearch,
  FiMoreHorizontal,
  FiPlus,
  FiSliders,
} from "react-icons/fi";

import "./Header.css";

const pageTitles = {
  "/": {
    title: "Home",
    subtitle: "Your esports universe",
  },

  "/upload": {
    title: "Create",
    subtitle: "Share your next esports moment",
  },

  "/explore": {
    title: "Explore",
    subtitle: "Discover players, teams and content",
  },

  "/messages": {
    title: "Messages",
    subtitle: "Connect with your gaming community",
  },

  "/tournaments": {
    title: "Tournaments",
    subtitle: "Compete. Win. Dominate.",
  },

  "/organization": {
    title: "Organizations",
    subtitle: "Discover esports organizations",
  },

  "/profile": {
    title: "Profile",
    subtitle: "Your esports identity",
  },

  "/settings": {
    title: "Settings",
    subtitle: "Manage your account",
  },

  "/activity": {
    title: "Activity",
    subtitle: "Stay updated with your community",
  },
};

const Header = ({
  title,
  subtitle,
  showBackButton = false,
  showSearch = false,
  showFilter = false,
  showCreate = false,
  showMore = false,
  onSearch,
  onFilter,
  onCreate,
  onMore,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const currentPage = pageTitles[location.pathname];

  const headerTitle = title || currentPage?.title || "GG Arena";
  const headerSubtitle =
    subtitle || currentPage?.subtitle || "Esports social platform";

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className="page-header">

      {/* =========================================
          LEFT SECTION
      ========================================= */}

      <div className="page-header-left">

        {showBackButton && (
          <button
            type="button"
            className="header-action-button"
            onClick={handleBack}
            aria-label="Go back"
          >
            <FiArrowLeft />
          </button>
        )}

        <div className="page-header-title-wrapper">

          <h1 className="page-header-title">
            {headerTitle}
          </h1>

          {headerSubtitle && (
            <p className="page-header-subtitle">
              {headerSubtitle}
            </p>
          )}

        </div>

      </div>


      {/* =========================================
          RIGHT SECTION
      ========================================= */}

      <div className="page-header-actions">

        {/* Search */}

        {showSearch && (
          <button
            type="button"
            className="header-action-button"
            onClick={onSearch}
            aria-label="Search"
          >
            <FiSearch />
          </button>
        )}


        {/* Filter */}

        {showFilter && (
          <button
            type="button"
            className="header-action-button"
            onClick={onFilter}
            aria-label="Filter"
          >
            <FiSliders />
          </button>
        )}


        {/* Create */}

        {showCreate && (
          <button
            type="button"
            className="header-create-button"
            onClick={onCreate}
          >
            <FiPlus />
            <span>Create</span>
          </button>
        )}


        {/* More */}

        {showMore && (
          <button
            type="button"
            className="header-action-button"
            onClick={onMore}
            aria-label="More options"
          >
            <FiMoreHorizontal />
          </button>
        )}

      </div>

    </header>
  );
};

export default Header;