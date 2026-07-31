import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  FiHome,
  FiCompass,
  FiPlus,
  FiMessageCircle,
  FiUser,
} from "react-icons/fi";

import "./MobileBottomBar.css";

const MobileBottomBar = () => {
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/",
      label: "Home",
      icon: FiHome,
      end: true,
    },
    {
      path: "/explore",
      label: "Explore",
      icon: FiCompass,
    },
    {
      path: "/upload",
      label: "Create",
      icon: FiPlus,
      create: true,
    },
    {
      path: "/messages",
      label: "Messages",
      icon: FiMessageCircle,
    },
    {
      path: "/profile",
      label: "Profile",
      icon: FiUser,
    },
  ];

  return (
    <nav className="mobile-bottom-bar" aria-label="Mobile navigation">

      <div className="mobile-bottom-bar-inner">

        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.create) {
            return (
              <button
                key={item.path}
                type="button"
                className="mobile-create-button"
                onClick={() => navigate(item.path)}
                aria-label="Create new post"
              >
                <span className="mobile-create-icon">
                  <Icon />
                </span>

                <span className="mobile-bottom-label">
                  {item.label}
                </span>
              </button>
            );
          }

          return (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              className={({ isActive }) =>
                `mobile-bottom-item ${
                  isActive ? "active" : ""
                }`
              }
            >
              <span className="mobile-bottom-icon">
                <Icon />
              </span>

              <span className="mobile-bottom-label">
                {item.label}
              </span>

              {item.path === "/messages" && (
                <span className="mobile-message-badge">
                  3
                </span>
              )}
            </NavLink>
          );
        })}

      </div>

    </nav>
  );
};

export default MobileBottomBar;