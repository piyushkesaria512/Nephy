import { useEffect } from "react";
import { motion } from "framer-motion";

import StorySection from "../../components/stories/StorySection/StorySection";
import Feed from "../../components/posts/Feed/Feed";

import "./Home.css";

function Home() {
  useEffect(() => {
    document.title = "NEPHY | Home";
  }, []);

  return (
    <div className="home">

      {/* =========================
          CENTER CONTENT
      ========================= */}
      <main className="home__center">

        {/* STORIES */}
        <motion.section
          className="home__stories"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          <StorySection />
        </motion.section>

        {/* FEED */}
        <motion.section
          className="home__feed"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.35,
            delay: 0.1,
          }}
        >
          <Feed />
        </motion.section>

      </main>

    </div>
  );
}

export default Home;