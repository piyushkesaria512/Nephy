import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import Sidebar from "../sidebar/sidebar";
import RightSidebar from "../RightSidebar/RightSidebar";
import MobileBottomBar from "../MobileBottomBar/MobileBottomBar";

import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">

      <Navbar />

      <div className="main-layout-body">

        <aside className="main-layout-left">
          <Sidebar />
        </aside>

        <main className="main-layout-content">
          <Outlet />
        </main>

        <aside className="main-layout-right">
          <RightSidebar />
        </aside>

      </div>

      <MobileBottomBar />

    </div>
  );
}

export default MainLayout;