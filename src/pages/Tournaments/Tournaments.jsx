import React, { useMemo, useState } from "react";
import {
  FaSearch,
  FaTrophy,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaUsers,
  FaGamepad,
  FaChevronDown,
  FaFilter,
  FaFire,
  FaGlobe,
  FaBolt,
  FaClock,
  FaCheckCircle,
  FaArrowRight,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "./Tournaments.css";

const tournamentsData = [
  {
    id: 1,
    title: "Neon Valorant Championship",
    game: "Valorant",
    gameIcon: "🎯",
    status: "Live",
    type: "Online",
    country: "India",
    prize: "$25,000",
    date: "July 30, 2026",
    time: "06:00 PM",
    organizer: "Neon Esports",
    participants: "128 / 128",
    banner:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    color: "purple",
  },
  {
    id: 2,
    title: "Cyber Clash Invitational",
    game: "Counter-Strike 2",
    gameIcon: "🔫",
    status: "Upcoming",
    type: "LAN",
    country: "Germany",
    prize: "$50,000",
    date: "August 04, 2026",
    time: "04:30 PM",
    organizer: "Cyber Arena",
    participants: "32 / 64",
    banner:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    color: "cyan",
  },
  {
    id: 3,
    title: "Battle Royale Masters",
    game: "PUBG",
    gameIcon: "🪖",
    status: "Upcoming",
    type: "Online",
    country: "India",
    prize: "$15,000",
    date: "August 08, 2026",
    time: "08:00 PM",
    organizer: "Battle Masters",
    participants: "48 / 64",
    banner:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1200&q=80",
    color: "pink",
  },
  {
    id: 4,
    title: "Apex Legends Pro League",
    game: "Apex Legends",
    gameIcon: "⚡",
    status: "Upcoming",
    type: "Online",
    country: "USA",
    prize: "$35,000",
    date: "August 12, 2026",
    time: "07:00 PM",
    organizer: "Apex Pro League",
    participants: "60 / 80",
    banner:
      "https://images.unsplash.com/photo-1603481546238-487240415921?auto=format&fit=crop&w=1200&q=80",
    color: "orange",
  },
  {
    id: 5,
    title: "Rocket League World Series",
    game: "Rocket League",
    gameIcon: "🚗",
    status: "Completed",
    type: "LAN",
    country: "France",
    prize: "$40,000",
    date: "July 22, 2026",
    time: "05:00 PM",
    organizer: "RL World Series",
    participants: "32 / 32",
    banner:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=1200&q=80",
    color: "blue",
  },
  {
    id: 6,
    title: "Mobile Legends Elite Cup",
    game: "Mobile Legends",
    gameIcon: "📱",
    status: "Upcoming",
    type: "Online",
    country: "Singapore",
    prize: "$20,000",
    date: "August 16, 2026",
    time: "03:00 PM",
    organizer: "Elite Gaming",
    participants: "96 / 128",
    banner:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=1200&q=80",
    color: "green",
  },
];

const games = [
  "All Games",
  "Valorant",
  "Counter-Strike 2",
  "PUBG",
  "Apex Legends",
  "Rocket League",
  "Mobile Legends",
];

const countries = [
  "All Countries",
  "India",
  "USA",
  "Germany",
  "France",
  "Singapore",
];

function Tournaments() {
  const [activeStatus, setActiveStatus] = useState("All");
  const [selectedGame, setSelectedGame] = useState("All Games");
  const [selectedCountry, setSelectedCountry] = useState("All Countries");
  const [selectedType, setSelectedType] = useState("All");
  const [search, setSearch] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const filteredTournaments = useMemo(() => {
    return tournamentsData.filter((tournament) => {
      const matchesStatus =
        activeStatus === "All" || tournament.status === activeStatus;

      const matchesGame =
        selectedGame === "All Games" ||
        tournament.game === selectedGame;

      const matchesCountry =
        selectedCountry === "All Countries" ||
        tournament.country === selectedCountry;

      const matchesType =
        selectedType === "All" || tournament.type === selectedType;

      const matchesSearch =
        tournament.title.toLowerCase().includes(search.toLowerCase()) ||
        tournament.game.toLowerCase().includes(search.toLowerCase()) ||
        tournament.organizer.toLowerCase().includes(search.toLowerCase());

      return (
        matchesStatus &&
        matchesGame &&
        matchesCountry &&
        matchesType &&
        matchesSearch
      );
    });
  }, [
    activeStatus,
    selectedGame,
    selectedCountry,
    selectedType,
    search,
  ]);

  const clearFilters = () => {
    setActiveStatus("All");
    setSelectedGame("All Games");
    setSelectedCountry("All Countries");
    setSelectedType("All");
    setSearch("");
  };

  return (
    <div className="tournaments-page">

      {/* ================= HEADER ================= */}
      <section className="tournaments-header">

        <div className="tournaments-header-content">
          <motion.div
            className="tournament-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className="heading-icon">
              <FaTrophy />
            </span>

            <div>
              <span className="eyebrow">
                <FaFire /> COMPETE. CONQUER. DOMINATE.
              </span>

              <h1>
                Esports <span>Tournaments</span>
              </h1>

              <p>
                Discover tournaments, compete with elite players,
                and fight for massive prize pools.
              </p>
            </div>
          </motion.div>

          <motion.button
            className="create-tournament-btn"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaTrophy />
            Create Tournament
          </motion.button>
        </div>

        {/* Stats */}
        <div className="tournament-stats">

          <div className="stat-item">
            <span className="stat-icon purple">
              <FaTrophy />
            </span>

            <div>
              <strong>248</strong>
              <small>Active Tournaments</small>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon cyan">
              <FaUsers />
            </span>

            <div>
              <strong>18.4K</strong>
              <small>Active Players</small>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon pink">
              <FaBolt />
            </span>

            <div>
              <strong>$2.8M</strong>
              <small>Total Prize Pool</small>
            </div>
          </div>

          <div className="stat-item">
            <span className="stat-icon orange">
              <FaGlobe />
            </span>

            <div>
              <strong>74</strong>
              <small>Countries</small>
            </div>
          </div>

        </div>
      </section>

      {/* ================= SEARCH ================= */}
      <section className="tournament-controls">

        <div className="tournament-search">
          <FaSearch />

          <input
            type="text"
            placeholder="Search tournaments, games, organizers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              <FaTimes />
            </button>
          )}
        </div>

        <button
          className={`mobile-filter-btn ${
            showFilters ? "active" : ""
          }`}
          onClick={() => setShowFilters(!showFilters)}
        >
          <FaFilter />
          Filters
        </button>

      </section>

      {/* ================= FILTERS ================= */}
      <AnimatePresence>
        {(showFilters || window.innerWidth > 768) && (
          <motion.section
            className="tournament-filters"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >

            <div className="filter-group">
              <label>Game</label>

              <div className="custom-select">
                <FaGamepad />

                <select
                  value={selectedGame}
                  onChange={(e) =>
                    setSelectedGame(e.target.value)
                  }
                >
                  {games.map((game) => (
                    <option key={game}>{game}</option>
                  ))}
                </select>

                <FaChevronDown />
              </div>
            </div>

            <div className="filter-group">
              <label>Country</label>

              <div className="custom-select">
                <FaGlobe />

                <select
                  value={selectedCountry}
                  onChange={(e) =>
                    setSelectedCountry(e.target.value)
                  }
                >
                  {countries.map((country) => (
                    <option key={country}>{country}</option>
                  ))}
                </select>

                <FaChevronDown />
              </div>
            </div>

            <div className="filter-group">
              <label>Format</label>

              <div className="custom-select">
                <FaMapMarkerAlt />

                <select
                  value={selectedType}
                  onChange={(e) =>
                    setSelectedType(e.target.value)
                  }
                >
                  <option value="All">All Formats</option>
                  <option value="Online">Online</option>
                  <option value="LAN">LAN</option>
                </select>

                <FaChevronDown />
              </div>
            </div>

            <button
              className="clear-filter-btn"
              onClick={clearFilters}
            >
              Clear Filters
            </button>

          </motion.section>
        )}
      </AnimatePresence>

      {/* ================= STATUS TABS ================= */}
      <div className="status-tabs">

        {["All", "Live", "Upcoming", "Completed"].map(
          (status) => (
            <button
              key={status}
              className={
                activeStatus === status ? "active" : ""
              }
              onClick={() => setActiveStatus(status)}
            >
              {status === "Live" && <span className="live-dot" />}
              {status === "Upcoming" && <FaClock />}
              {status === "Completed" && <FaCheckCircle />}
              {status === "All" && <FaTrophy />}

              {status}
            </button>
          )
        )}

      </div>

      {/* ================= RESULTS ================= */}
      <section className="tournaments-content">

        <div className="results-header">
          <div>
            <span className="results-label">DISCOVER</span>

            <h2>
              {activeStatus === "All"
                ? "Featured Tournaments"
                : `${activeStatus} Tournaments`}
            </h2>
          </div>

          <span className="results-count">
            {filteredTournaments.length} tournaments found
          </span>
        </div>

        {/* Tournament Grid */}
        {filteredTournaments.length > 0 ? (
          <div className="tournament-grid">

            {filteredTournaments.map((tournament, index) => (
              <TournamentCard
                tournament={tournament}
                index={index}
                key={tournament.id}
              />
            ))}

          </div>
        ) : (
          <EmptyState clearFilters={clearFilters} />
        )}

      </section>
    </div>
  );
}

/* ======================================================
   TOURNAMENT CARD
====================================================== */

function TournamentCard({ tournament, index }) {
  return (
    <motion.article
      className="tournament-card"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      whileHover={{ y: -7 }}
    >

      {/* Banner */}
      <div className="tournament-banner">

        <img
          src={tournament.banner}
          alt={tournament.title}
        />

        <div className="banner-overlay" />

        <div className="card-top">

          <span className={`tournament-status ${tournament.status.toLowerCase()}`}>
            {tournament.status === "Live" && (
              <span className="live-dot" />
            )}

            {tournament.status === "Upcoming" && (
              <FaClock />
            )}

            {tournament.status === "Completed" && (
              <FaCheckCircle />
            )}

            {tournament.status}
          </span>

          <button className="game-badge">
            {tournament.gameIcon}
            {tournament.game}
          </button>

        </div>

        <div className="banner-title">
          <h3>{tournament.title}</h3>
        </div>

      </div>

      {/* Body */}
      <div className="tournament-card-body">

        <div className="prize-row">

          <div>
            <span>PRIZE POOL</span>
            <strong>{tournament.prize}</strong>
          </div>

          <div className="tournament-format">
            <FaGlobe />
            {tournament.type}
          </div>

        </div>

        <div className="tournament-details">

          <div>
            <FaCalendarAlt />

            <span>
              <small>Date</small>
              {tournament.date}
            </span>
          </div>

          <div>
            <FaClock />

            <span>
              <small>Time</small>
              {tournament.time}
            </span>
          </div>

          <div>
            <FaMapMarkerAlt />

            <span>
              <small>Location</small>
              {tournament.country}
            </span>
          </div>

        </div>

        <div className="organizer-row">

          <div className="organizer">

            <div className="organizer-avatar">
              {tournament.organizer.charAt(0)}
            </div>

            <div>
              <small>Organized by</small>
              <strong>{tournament.organizer}</strong>
            </div>

          </div>

          <div className="participants">
            <FaUsers />
            {tournament.participants}
          </div>

        </div>

        <button
          className={`register-btn ${
            tournament.status === "Completed"
              ? "completed-btn"
              : ""
          }`}
          disabled={tournament.status === "Completed"}
        >
          {tournament.status === "Completed"
            ? "Tournament Completed"
            : tournament.status === "Live"
            ? "Watch Tournament"
            : "Register Now"}

          <FaArrowRight />
        </button>

      </div>
    </motion.article>
  );
}

/* ======================================================
   EMPTY STATE
====================================================== */

function EmptyState({ clearFilters }) {
  return (
    <motion.div
      className="tournament-empty"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="empty-icon">
        <FaTrophy />
      </div>

      <h3>No tournaments found</h3>

      <p>
        Try changing your filters or searching for another
        tournament.
      </p>

      <button onClick={clearFilters}>
        Reset Filters
      </button>
    </motion.div>
  );
}

export default Tournaments;