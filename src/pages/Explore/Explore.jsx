import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  FiSearch,
  FiSliders,
  FiX,
  FiHeart,
  FiMessageCircle,
  FiPlay,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiChevronDown,
  FiCheck,
} from "react-icons/fi";

import "./Explore.css";

/* =========================================================
   EXPLORE DATA
========================================================= */

const exploreItems = [
  {
    id: 1,
    type: "video",
    category: "Videos",
    game: "Valorant",
    title: "Insane 1v4 Clutch",
    creator: "ShadowX",
    username: "@shadowx",
    avatar: "https://i.pravatar.cc/100?img=12",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=900&q=80",
    likes: "24.8K",
    comments: "1.2K",
    views: "186K",
    verified: true,
  },

  {
    id: 2,
    type: "player",
    category: "Players",
    game: "CS2",
    title: "Nova",
    creator: "Nova",
    username: "@nova.gg",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=900&q=80",
    likes: "18.2K",
    comments: "823",
    views: "92K",
    verified: true,
  },

  {
    id: 3,
    type: "team",
    category: "Teams",
    game: "Valorant",
    title: "Neon Wolves",
    creator: "Neon Wolves",
    username: "@neonwolves",
    avatar: "https://i.pravatar.cc/100?img=49",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    likes: "32.1K",
    comments: "1.8K",
    views: "210K",
    verified: true,
  },

  {
    id: 4,
    type: "video",
    category: "Videos",
    game: "PUBG",
    title: "Tournament Finals",
    creator: "Titan Gaming",
    username: "@titangg",
    avatar: "https://i.pravatar.cc/100?img=58",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=900&q=80",
    likes: "41.6K",
    comments: "2.4K",
    views: "420K",
    verified: true,
  },

  {
    id: 5,
    type: "game",
    category: "Games",
    game: "League of Legends",
    title: "World Championship",
    creator: "League Arena",
    username: "@leaguearena",
    avatar: "https://i.pravatar.cc/100?img=45",
    image:
      "https://images.unsplash.com/photo-1548686304-4b5f3e1f0f5c?auto=format&fit=crop&w=900&q=80",
    likes: "16.4K",
    comments: "743",
    views: "128K",
    verified: false,
  },

  {
    id: 6,
    type: "player",
    category: "Players",
    game: "Apex Legends",
    title: "Viper",
    creator: "Viper",
    username: "@viperfps",
    avatar: "https://i.pravatar.cc/100?img=22",
    image:
      "https://images.unsplash.com/photo-1598550476439-6847785fcea6?auto=format&fit=crop&w=900&q=80",
    likes: "12.8K",
    comments: "542",
    views: "84K",
    verified: true,
  },

  {
    id: 7,
    type: "video",
    category: "Videos",
    game: "Valorant",
    title: "Ace Under Pressure",
    creator: "Rex",
    username: "@rexplay",
    avatar: "https://i.pravatar.cc/100?img=15",
    image:
      "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?auto=format&fit=crop&w=900&q=80",
    likes: "29.5K",
    comments: "1.1K",
    views: "241K",
    verified: false,
  },

  {
    id: 8,
    type: "team",
    category: "Teams",
    game: "CS2",
    title: "Titan Gaming",
    creator: "Titan Gaming",
    username: "@titangaming",
    avatar: "https://i.pravatar.cc/100?img=58",
    image:
      "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=900&q=80",
    likes: "19.7K",
    comments: "954",
    views: "176K",
    verified: true,
  },

  {
    id: 9,
    type: "game",
    category: "Games",
    game: "Fortnite",
    title: "Global Invitational",
    creator: "Fortnite Arena",
    username: "@fortnitearena",
    avatar: "https://i.pravatar.cc/100?img=60",
    image:
      "https://images.unsplash.com/photo-1605870445919-838d190e8e1b?auto=format&fit=crop&w=900&q=80",
    likes: "22.4K",
    comments: "1.3K",
    views: "301K",
    verified: true,
  },

  {
    id: 10,
    type: "player",
    category: "Players",
    game: "PUBG",
    title: "Blaze",
    creator: "Blaze",
    username: "@blaze.gg",
    avatar: "https://i.pravatar.cc/100?img=47",
    image:
      "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?auto=format&fit=crop&w=900&q=80",
    likes: "15.3K",
    comments: "682",
    views: "99K",
    verified: false,
  },

  {
    id: 11,
    type: "video",
    category: "Videos",
    game: "CS2",
    title: "Perfect Team Execute",
    creator: "Nova",
    username: "@nova.gg",
    avatar: "https://i.pravatar.cc/100?img=32",
    image:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=900&q=80",
    likes: "34.2K",
    comments: "1.7K",
    views: "344K",
    verified: true,
  },

  {
    id: 12,
    type: "team",
    category: "Teams",
    game: "Valorant",
    title: "Quantum Esports",
    creator: "Quantum",
    username: "@quantumesports",
    avatar: "https://i.pravatar.cc/100?img=68",
    image:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=900&q=80",
    likes: "27.9K",
    comments: "1.4K",
    views: "238K",
    verified: true,
  },
];

/* =========================================================
   FILTERS
========================================================= */

const filters = [
  {
    id: "all",
    label: "All",
  },
  {
    id: "Players",
    label: "Players",
  },
  {
    id: "Teams",
    label: "Teams",
  },
  {
    id: "Games",
    label: "Games",
  },
  {
    id: "Videos",
    label: "Videos",
  },
];

/* =========================================================
   GAMES
========================================================= */

const games = [
  "All Games",
  "Valorant",
  "CS2",
  "PUBG",
  "Apex Legends",
  "League of Legends",
  "Fortnite",
];

/* =========================================================
   EXPLORE CARD
========================================================= */

const ExploreCard = ({ item, index }) => {
  return (
    <motion.article
      className={`explore-card explore-card-${(index % 4) + 1}`}
      layout
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.96,
      }}
      transition={{
        duration: 0.35,
        delay: index * 0.03,
      }}
      whileHover={{
        y: -5,
      }}
    >
      {/* IMAGE */}

      <div className="explore-card-image-wrapper">

        <img
          src={item.image}
          alt={item.title}
          className="explore-card-image"
          loading="lazy"
        />

        {/* DARK OVERLAY */}

        <div className="explore-card-overlay"></div>

        {/* TOP BADGES */}

        <div className="explore-card-top">

          <span className="explore-type-badge">
            {item.type === "video" && <FiPlay />}
            {item.type === "player" && <FiUsers />}
            {item.type === "team" && <FiUsers />}
            {item.type === "game" && <FiAward />}

            {item.category}
          </span>

          <span className="explore-game-badge">
            {item.game}
          </span>

        </div>

        {/* VIDEO PLAY */}

        {item.type === "video" && (
          <div className="explore-play-button">
            <FiPlay />
          </div>
        )}

        {/* HOVER INFO */}

        <div className="explore-card-hover-content">

          <div className="explore-card-stats">

            <span>
              <FiHeart />
              {item.likes}
            </span>

            <span>
              <FiMessageCircle />
              {item.comments}
            </span>

            <span>
              <FiPlay />
              {item.views}
            </span>

          </div>

        </div>

      </div>

      {/* CARD CONTENT */}

      <div className="explore-card-content">

        <div className="explore-card-user">

          <img
            src={item.avatar}
            alt={item.creator}
            className="explore-card-avatar"
          />

          <div className="explore-card-user-info">

            <div className="explore-card-name">

              <strong>
                {item.creator}
              </strong>

              {item.verified && (
                <span className="explore-verified">
                  <FiCheck />
                </span>
              )}

            </div>

            <span>
              {item.username}
            </span>

          </div>

        </div>

        <h3>
          {item.title}
        </h3>

      </div>

    </motion.article>
  );
};

/* =========================================================
   EXPLORE PAGE
========================================================= */

const Explore = () => {

  const [activeFilter, setActiveFilter] = useState("all");

  const [selectedGame, setSelectedGame] =
    useState("All Games");

  const [searchQuery, setSearchQuery] =
    useState("");

  const [showFilters, setShowFilters] =
    useState(false);

  /* =======================================================
     FILTER DATA
  ======================================================= */

  const filteredItems = useMemo(() => {

    return exploreItems.filter((item) => {

      const matchesCategory =
        activeFilter === "all" ||
        item.category === activeFilter;

      const matchesGame =
        selectedGame === "All Games" ||
        item.game === selectedGame;

      const query =
        searchQuery.trim().toLowerCase();

      const matchesSearch =
        !query ||
        item.title.toLowerCase().includes(query) ||
        item.creator.toLowerCase().includes(query) ||
        item.game.toLowerCase().includes(query) ||
        item.username.toLowerCase().includes(query);

      return (
        matchesCategory &&
        matchesGame &&
        matchesSearch
      );

    });

  }, [
    activeFilter,
    selectedGame,
    searchQuery,
  ]);

  return (
    <div className="explore-page">

      {/* ==================================================
          PAGE HEADER
      ================================================== */}

      <header className="explore-header">

        <div className="explore-heading">

          <div className="explore-title-icon">
            <FiTrendingUp />
          </div>

          <div>

            <span className="explore-eyebrow">
              DISCOVER THE SCENE
            </span>

            <h1>
              Explore
            </h1>

            <p>
              Discover players, teams, games and
              the best moments in esports.
            </p>

          </div>

        </div>

      </header>


      {/* ==================================================
          SEARCH
      ================================================== */}

      <div className="explore-search-row">

        <div className="explore-search">

          <FiSearch />

          <input
            type="text"
            placeholder="Search players, teams, games..."
            value={searchQuery}
            onChange={(e) =>
              setSearchQuery(e.target.value)
            }
          />

          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Clear search"
            >
              <FiX />
            </button>
          )}

        </div>


        <button
          type="button"
          className={`filter-toggle ${
            showFilters ? "active" : ""
          }`}
          onClick={() =>
            setShowFilters(!showFilters)
          }
        >
          <FiSliders />
          Filters
        </button>

      </div>


      {/* ==================================================
          CATEGORY FILTERS
      ================================================== */}

      <div className="explore-filter-bar">

        <div className="explore-category-filters">

          {filters.map((filter) => (

            <button
              key={filter.id}
              type="button"
              className={
                activeFilter === filter.id
                  ? "active"
                  : ""
              }
              onClick={() =>
                setActiveFilter(filter.id)
              }
            >
              {filter.label}
            </button>

          ))}

        </div>


        <div className="explore-sort">

          <span>
            Sort by
          </span>

          <button type="button">
            Trending
            <FiChevronDown />
          </button>

        </div>

      </div>


      {/* ==================================================
          ADVANCED FILTERS
      ================================================== */}

      <AnimatePresence>

        {showFilters && (

          <motion.div
            className="advanced-filter-panel"
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
          >

            <div className="advanced-filter-inner">

              <div className="advanced-filter-heading">

                <div>
                  <span>
                    ADVANCED SEARCH
                  </span>

                  <h3>
                    Filter the community
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setShowFilters(false)
                  }
                >
                  <FiX />
                </button>

              </div>


              <div className="game-filter">

                <label>
                  Game
                </label>

                <div className="game-filter-options">

                  {games.map((game) => (

                    <button
                      key={game}
                      type="button"
                      className={
                        selectedGame === game
                          ? "active"
                          : ""
                      }
                      onClick={() =>
                        setSelectedGame(game)
                      }
                    >
                      {game}

                      {selectedGame === game && (
                        <FiCheck />
                      )}

                    </button>

                  ))}

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>


      {/* ==================================================
          TRENDING TOPICS
      ================================================== */}

      <section className="explore-trending">

        <div className="explore-section-title">

          <div>

            <span>
              WHAT'S HOT
            </span>

            <h2>
              Trending right now
            </h2>

          </div>

        </div>


        <div className="trending-topic-list">

          <button type="button">
            <span>#ValorantMasters</span>
            <small>24.8K posts</small>
          </button>

          <button type="button">
            <span>#EsportsWorldCup</span>
            <small>18.2K posts</small>
          </button>

          <button type="button">
            <span>#CS2Major</span>
            <small>14.7K posts</small>
          </button>

          <button type="button">
            <span>#RoadToRadiant</span>
            <small>9.6K posts</small>
          </button>

        </div>

      </section>


      {/* ==================================================
          RESULTS
      ================================================== */}

      <section className="explore-results">

        <div className="explore-results-header">

          <div>

            <span>
              {filteredItems.length} RESULTS
            </span>

            <h2>
              Discover
            </h2>

          </div>

          {searchQuery && (
            <p>
              Results for{" "}
              <strong>
                "{searchQuery}"
              </strong>
            </p>
          )}

        </div>


        {/* GRID */}

        {filteredItems.length > 0 ? (

          <motion.div
            className="explore-grid"
            layout
          >

            <AnimatePresence mode="popLayout">

              {filteredItems.map(
                (item, index) => (
                  <ExploreCard
                    key={item.id}
                    item={item}
                    index={index}
                  />
                )
              )}

            </AnimatePresence>

          </motion.div>

        ) : (

          /* EMPTY STATE */

          <motion.div
            className="explore-empty"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
          >

            <div className="empty-icon">
              <FiSearch />
            </div>

            <h3>
              Nothing found
            </h3>

            <p>
              Try searching for another player,
              game, team or tournament.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveFilter("all");
                setSelectedGame("All Games");
              }}
            >
              Clear filters
            </button>

          </motion.div>

        )}

      </section>

    </div>
  );
};

export default Explore;