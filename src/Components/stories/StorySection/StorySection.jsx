import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiPlus,
  FiChevronLeft,
  FiChevronRight,
  FiCheck,
  FiPlay,
} from "react-icons/fi";

import "./StorySection.css";

function StorySection() {
  const [stories] = useState([
    {
      id: 1,
      name: "NovaX",
      username: "@novax",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: true,
      online: true,
      live: false,
      viewed: false,
    },

    {
      id: 2,
      name: "ShadowK",
      username: "@shadowk",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: false,
      online: true,
      live: true,
      viewed: false,
    },

    {
      id: 3,
      name: "PixelRush",
      username: "@pixelrush",
      avatar: "https://i.pravatar.cc/150?img=32",
      verified: false,
      online: false,
      live: false,
      viewed: false,
    },

    {
      id: 4,
      name: "Velocity",
      username: "@velocity",
      avatar: "https://i.pravatar.cc/150?img=47",
      verified: true,
      online: true,
      live: false,
      viewed: false,
    },

    {
      id: 5,
      name: "RexGaming",
      username: "@rexgaming",
      avatar: "https://i.pravatar.cc/150?img=14",
      verified: false,
      online: false,
      live: false,
      viewed: true,
    },

    {
      id: 6,
      name: "CyberWolf",
      username: "@cyberwolf",
      avatar: "https://i.pravatar.cc/150?img=18",
      verified: true,
      online: true,
      live: false,
      viewed: false,
    },

    {
      id: 7,
      name: "Titan",
      username: "@titangaming",
      avatar: "https://i.pravatar.cc/150?img=52",
      verified: true,
      online: false,
      live: false,
      viewed: true,
    },

    {
      id: 8,
      name: "AceShot",
      username: "@aceshot",
      avatar: "https://i.pravatar.cc/150?img=15",
      verified: false,
      online: true,
      live: false,
      viewed: false,
    },

    {
      id: 9,
      name: "Frost",
      username: "@frost",
      avatar: "https://i.pravatar.cc/150?img=20",
      verified: false,
      online: true,
      live: false,
      viewed: false,
    },

    {
      id: 10,
      name: "Blaze",
      username: "@blaze",
      avatar: "https://i.pravatar.cc/150?img=25",
      verified: true,
      online: true,
      live: false,
      viewed: false,
    },
  ]);

  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = (event) => {
    setScrollPosition(event.target.scrollLeft);
  };

  const scrollStories = (direction) => {
    const container = document.querySelector(
      ".story-section-scroll"
    );

    if (!container) return;

    const scrollAmount = 320;

    container.scrollBy({
      left:
        direction === "left"
          ? -scrollAmount
          : scrollAmount,
      behavior: "smooth",
    });
  };

  const handleStoryClick = (story) => {
    console.log("Opening story:", story.name);
  };

  return (
    <section className="story-section">

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="story-section-header">

        <div className="story-heading">

          <div className="story-heading-icon">
            <FiPlay />
          </div>

          <div>
            <h2>Stories</h2>

            <span>
              Live from the arena
            </span>
          </div>

        </div>

        <button className="story-see-all">
          See all
          <FiChevronRight />
        </button>

      </div>

      {/* =====================================
          STORY CONTAINER
      ====================================== */}

      <div className="story-section-wrapper">

        {/* LEFT BUTTON */}

        <button
          className={`story-scroll-button left ${
            scrollPosition <= 0 ? "disabled" : ""
          }`}
          onClick={() => scrollStories("left")}
          aria-label="Previous stories"
        >
          <FiChevronLeft />
        </button>

        {/* STORIES */}

        <div
          className="story-section-scroll"
          onScroll={handleScroll}
        >

          {/* ADD STORY */}

          <motion.div
            className="story-item add-story"
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >

            <div className="story-avatar-wrapper add-story-avatar">

              <div className="story-add-icon">
                <FiPlus />
              </div>

            </div>

            <span className="story-name">
              Your story
            </span>

            <span className="story-subtitle">
              Add
            </span>

          </motion.div>

          {/* PLAYER STORIES */}

          {stories.map((story, index) => (

            <motion.button
              key={story.id}
              className={`story-item ${
                story.viewed ? "viewed" : ""
              }`}
              onClick={() => handleStoryClick(story)}
              whileHover={{
                y: -4,
              }}
              whileTap={{
                scale: 0.96,
              }}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: index * 0.04,
                duration: 0.25,
              }}
            >

              {/* STORY RING */}

              <div
                className={`story-avatar-wrapper ${
                  story.viewed
                    ? "story-viewed"
                    : "story-unviewed"
                }`}
              >

                <div className="story-avatar-inner">

                  <img
                    src={story.avatar}
                    alt={story.name}
                    loading="lazy"
                  />

                </div>

                {/* ONLINE */}

                {story.online && !story.live && (
                  <span className="story-online-indicator" />
                )}

                {/* LIVE */}

                {story.live && (
                  <span className="story-live-badge">
                    LIVE
                  </span>
                )}

                {/* VERIFIED */}

                {story.verified && (
                  <span className="story-verified-badge">
                    <FiCheck />
                  </span>
                )}

              </div>

              {/* NAME */}

              <span className="story-name">
                {story.name}
              </span>

              {/* USERNAME */}

              <span className="story-subtitle">
                {story.live
                  ? "Live now"
                  : story.viewed
                  ? "Viewed"
                  : "Story"}
              </span>

            </motion.button>

          ))}

        </div>

        {/* RIGHT BUTTON */}

        <button
          className="story-scroll-button right"
          onClick={() => scrollStories("right")}
          aria-label="Next stories"
        >
          <FiChevronRight />
        </button>

      </div>

      {/* =====================================
          LIVE STATUS
      ====================================== */}

      <div className="story-live-status">

        <span className="story-live-dot" />

        <span>
          <strong>3 players</strong> are live right now
        </span>

        <button>
          Watch live
          <FiChevronRight />
        </button>

      </div>

    </section>
  );
}

export default StorySection;