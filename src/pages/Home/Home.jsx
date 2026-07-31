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
    <div className="home">

      {/* LEFT SIDEBAR */}
      <aside className="home__left">
        <Sidebar />
      </aside>

      {/* CENTER CONTENT */}
      <main className="home__center">

        <motion.section
          className="home__stories"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <StorySection />
        </motion.section>

        <motion.section
          className="home__feed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
        >
          <Feed />
        </motion.section>

      </main>

      {/* RIGHT SIDEBAR */}
      <aside className="home__right">
        <RightSidebar />
      </aside>

      {/* MOBILE NAVIGATION */}
      <MobileBottomBar />

    </div>
  );
}

export default Home;