import { useEffect } from "react";
import { motion } from "framer-motion";

import Sidebar from "../../components/layout/Sidebar/Sidebar";
import MobileBottomBar from "../../components/layout/MobileBottomBar/MobileBottomBar";
import RightSidebar from "../../components/layout/RightSidebar/RightSidebar";

import StorySection from "../../components/stories/StorySection/StorySection";

import Feed from "../../components/posts/Feed/Feed";

import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "EsportsHub | Home";
  }, []);

  return (
    <div className="home-page">
      <h1>Welcome to Esports Arena</h1>
      <p>Your esports social network.</p>
    </div>
  );
}

export default Home;