import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  FaHome,
  FaCompass,
  FaUser,
  FaCog,
  FaBell,
  FaSignOutAlt,
  FaCloudUploadAlt,
  FaTrophy,
  FaBuilding,
} from "react-icons/fa";

import { MdMessage } from "react-icons/md";

function Sidebar() {
  const menuItems = [
    {
      title: "Home",
      icon: <FaHome />,
      path: "/home",
    },
    {
      title: "Upload",
      icon: <FaCloudUploadAlt />,
      path: "/upload",
    },
    {
      title: "Explore",
      icon: <FaCompass />,
      path: "/explore",
    },
    {
      title: "Messages",
      icon: <MdMessage />,
      path: "/messages",
    },
    {
      title: "Tournaments",
      icon: <FaTrophy />,
      path: "/tournaments",
    },
    {
      title: "Organization",
      icon: <FaBuilding />,
      path: "/organization",
    },
    {
      title: "Profile",
      icon: <FaUser />,
      path: "/profile",
    },
    {
      title: "Settings",
      icon: <FaCog />,
      path: "/settings",
    },
    {
      title: "Activity",
      icon: <FaBell />,
      path: "/activity",
    },
  ];

  return (
    <motion.aside
      className="sidebar"
      initial={{ x: -80 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Logo */}
      <div className="sidebar__logo">
        <span className="logo-icon">⚡</span>
        <h2>NEPHY</h2>
      </div>

      {/* User */}
      <div className="sidebar__profile">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt="User"
        />

        <div>
          <h4>Kaushal Kumar</h4>
          <p>Esports Player</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        {menuItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className={({ isActive }) =>
              isActive
                ? "sidebar__link active"
                : "sidebar__link"
            }
          >
            <span className="sidebar__icon">
              {item.icon}
            </span>

            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <button className="logout-btn">
        <FaSignOutAlt />
        Logout
      </button>
    </motion.aside>
  );
}

export default Sidebar;