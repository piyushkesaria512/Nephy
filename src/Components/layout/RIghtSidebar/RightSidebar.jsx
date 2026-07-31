import React from "react";
import { Link } from "react-router-dom";

import {
  FiMoreHorizontal,
  FiArrowUpRight,
  FiUserPlus,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiChevronRight,
  FiActivity,
  FiX,
} from "react-icons/fi";

import "./RightSidebar.css";

const trendingPlayers = [
  {
    id: 1,
    name: "ShadowX",
    username: "@shadowx",
    avatar: "https://i.pravatar.cc/100?img=12",
    game: "Valorant",
    rank: "Radiant",
    followers: "82.4K",
    verified: true,
  },
  {
    id: 2,
    name: "Nova",
    username: "@nova.gg",
    avatar: "https://i.pravatar.cc/100?img=32",
    game: "CS2",
    rank: "Global Elite",
    followers: "64.8K",
    verified: true,
  },
  {
    id: 3,
    name: "Blaze",
    username: "@blaze",
    avatar: "https://i.pravatar.cc/100?img=47",
    game: "PUBG",
    rank: "Conqueror",
    followers: "51.2K",
    verified: false,
  },
];

const tournaments = [
  {
    id: 1,
    title: "Valorant Masters",
    game: "Valorant",
    date: "Aug 08",
    time: "18:00",
    prize: "$250K",
    location: "Berlin",
    live: true,
  },
  {
    id: 2,
    title: "Global Gaming Cup",
    game: "CS2",
    date: "Aug 12",
    time: "15:30",
    prize: "$100K",
    location: "Online",
    live: false,
  },
  {
    id: 3,
    title: "Battle Royale League",
    game: "PUBG",
    date: "Aug 18",
    time: "20:00",
    prize: "$75K",
    location: "Mumbai",
    live: false,
  },
];

const trendingGames = [
  {
    id: 1,
    name: "Valorant",
    category: "FPS",
    posts: "128K posts",
    icon: "V",
  },
  {
    id: 2,
    name: "Counter-Strike 2",
    category: "FPS",
    posts: "94K posts",
    icon: "CS",
  },
  {
    id: 3,
    name: "PUBG Mobile",
    category: "Battle Royale",
    posts: "82K posts",
    icon: "P",
  },
  {
    id: 4,
    name: "League of Legends",
    category: "MOBA",
    posts: "76K posts",
    icon: "L",
  },
];

const suggestedPlayers = [
  {
    id: 1,
    name: "Rex",
    username: "@rexplay",
    avatar: "https://i.pravatar.cc/100?img=15",
    online: true,
  },
  {
    id: 2,
    name: "Viper",
    username: "@viperfps",
    avatar: "https://i.pravatar.cc/100?img=22",
    online: true,
  },
  {
    id: 3,
    name: "Ace",
    username: "@acegaming",
    avatar: "https://i.pravatar.cc/100?img=36",
    online: false,
  },
];

const suggestedOrganizations = [
  {
    id: 1,
    name: "Nova Esports",
    username: "@novaesports",
    avatar: "https://i.pravatar.cc/100?img=49",
    followers: "245K",
    verified: true,
  },
  {
    id: 2,
    name: "Titan Gaming",
    username: "@titangg",
    avatar: "https://i.pravatar.cc/100?img=58",
    followers: "182K",
    verified: true,
  },
];

const recentActivity = [
  {
    id: 1,
    text: "ShadowX liked your post",
    time: "4m",
    avatar: "https://i.pravatar.cc/100?img=12",
  },
  {
    id: 2,
    text: "Nova started following you",
    time: "18m",
    avatar: "https://i.pravatar.cc/100?img=32",
  },
  {
    id: 3,
    text: "You joined Valorant Masters",
    time: "1h",
    avatar: "https://i.pravatar.cc/100?img=47",
  },
];

const VerifiedBadge = () => (
  <span className="verified-badge" title="Verified">
    ✓
  </span>
);

const RightSidebar = ({ onClose }) => {
  return (
    <aside className="right-sidebar">

      {/* ==========================================
          MOBILE CLOSE BUTTON
      ========================================== */}

      {onClose && (
        <button
          className="right-sidebar-close"
          type="button"
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <FiX />
        </button>
      )}


      {/* ==========================================
          TRENDING PLAYERS
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              COMMUNITY
            </span>

            <h3>Trending Players</h3>
          </div>

          <button
            className="right-more-button"
            type="button"
            aria-label="More trending players"
          >
            <FiMoreHorizontal />
          </button>

        </div>


        <div className="trending-player-list">

          {trendingPlayers.map((player) => (
            <Link
              to={`/profile/${player.id}`}
              className="trending-player"
              key={player.id}
            >

              <div className="player-avatar-wrapper">

                <img
                  src={player.avatar}
                  alt={player.name}
                  className="right-avatar"
                />

                <span className="online-indicator"></span>

              </div>


              <div className="trending-player-info">

                <div className="trending-player-name">

                  <span>{player.name}</span>

                  {player.verified && <VerifiedBadge />}

                </div>

                <span className="trending-player-username">
                  {player.username}
                </span>

                <div className="trending-player-meta">
                  <span>{player.game}</span>
                  <span>•</span>
                  <span>{player.rank}</span>
                </div>

              </div>


              <FiArrowUpRight className="right-arrow-icon" />

            </Link>
          ))}

        </div>


        <Link
          to="/explore?type=players"
          className="view-all-link"
        >
          View all players
          <FiChevronRight />
        </Link>

      </section>


      {/* ==========================================
          UPCOMING TOURNAMENTS
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              COMPETE
            </span>

            <h3>Upcoming Tournaments</h3>
          </div>

          <Link
            to="/tournaments"
            className="right-header-link"
          >
            See all
          </Link>

        </div>


        <div className="tournament-mini-list">

          {tournaments.map((tournament) => (
            <Link
              to={`/tournaments/${tournament.id}`}
              className="mini-tournament-card"
              key={tournament.id}
            >

              <div className="tournament-game-icon">
                {tournament.game.charAt(0)}
              </div>


              <div className="mini-tournament-content">

                <div className="mini-tournament-title-row">

                  <h4>{tournament.title}</h4>

                  {tournament.live && (
                    <span className="live-badge">
                      LIVE
                    </span>
                  )}

                </div>


                <div className="mini-tournament-info">

                  <span>
                    <FiCalendar />
                    {tournament.date}
                  </span>

                  <span>
                    <FiClock />
                    {tournament.time}
                  </span>

                </div>


                <div className="mini-tournament-bottom">

                  <span className="mini-prize">
                    {tournament.prize}
                  </span>

                  <span className="mini-location">
                    <FiMapPin />
                    {tournament.location}
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </section>


      {/* ==========================================
          TRENDING GAMES
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              TRENDING
            </span>

            <h3>Games</h3>
          </div>

          <Link
            to="/explore?type=games"
            className="right-header-link"
          >
            Explore
          </Link>

        </div>


        <div className="trending-games-list">

          {trendingGames.map((game, index) => (
            <Link
              to={`/explore?game=${game.name}`}
              className="trending-game"
              key={game.id}
            >

              <span className="game-number">
                0{index + 1}
              </span>

              <span className="game-icon">
                {game.icon}
              </span>

              <div className="game-info">

                <strong>{game.name}</strong>

                <span>
                  {game.category} • {game.posts}
                </span>

              </div>

              <FiChevronRight />

            </Link>
          ))}

        </div>

      </section>


      {/* ==========================================
          SUGGESTED PLAYERS
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              FOR YOU
            </span>

            <h3>Suggested Players</h3>
          </div>

          <Link
            to="/explore?type=players"
            className="right-header-link"
          >
            See all
          </Link>

        </div>


        <div className="suggestion-list">

          {suggestedPlayers.map((player) => (
            <div
              className="suggestion-item"
              key={player.id}
            >

              <Link
                to={`/profile/${player.id}`}
                className="suggestion-user"
              >

                <div className="suggestion-avatar-wrapper">

                  <img
                    src={player.avatar}
                    alt={player.name}
                    className="right-avatar"
                  />

                  {player.online && (
                    <span className="online-indicator"></span>
                  )}

                </div>


                <div className="suggestion-info">

                  <strong>{player.name}</strong>

                  <span>{player.username}</span>

                </div>

              </Link>


              <button
                type="button"
                className="follow-button"
              >
                <FiUserPlus />
                <span>Follow</span>
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ==========================================
          SUGGESTED ORGANIZATIONS
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              ORGANIZATIONS
            </span>

            <h3>Suggested Teams</h3>
          </div>

          <Link
            to="/organization"
            className="right-header-link"
          >
            See all
          </Link>

        </div>


        <div className="suggestion-list">

          {suggestedOrganizations.map((organization) => (
            <div
              className="suggestion-item"
              key={organization.id}
            >

              <Link
                to={`/organization/${organization.id}`}
                className="suggestion-user"
              >

                <img
                  src={organization.avatar}
                  alt={organization.name}
                  className="right-avatar organization-avatar"
                />


                <div className="suggestion-info">

                  <div className="suggestion-name">

                    <strong>{organization.name}</strong>

                    {organization.verified && (
                      <VerifiedBadge />
                    )}

                  </div>

                  <span>
                    {organization.username}
                  </span>

                </div>

              </Link>


              <button
                type="button"
                className="follow-button"
              >
                <FiUserPlus />
              </button>

            </div>
          ))}

        </div>

      </section>


      {/* ==========================================
          RECENT ACTIVITY
      ========================================== */}

      <section className="right-sidebar-section">

        <div className="right-section-header">

          <div>
            <span className="right-section-eyebrow">
              LIVE FEED
            </span>

            <h3>Recent Activity</h3>
          </div>

          <FiActivity className="activity-header-icon" />

        </div>


        <div className="activity-list">

          {recentActivity.map((activity) => (
            <div
              className="activity-item"
              key={activity.id}
            >

              <img
                src={activity.avatar}
                alt=""
                className="activity-avatar"
              />

              <div className="activity-content">

                <p>{activity.text}</p>

                <span>{activity.time} ago</span>

              </div>

            </div>
          ))}

        </div>


        <Link
          to="/activity"
          className="view-all-link"
        >
          View activity
          <FiChevronRight />
        </Link>

      </section>


      {/* ==========================================
          FOOTER LINKS
      ========================================== */}

      <div className="right-sidebar-footer">

        <Link to="/about">
          About
        </Link>

        <Link to="/help">
          Help
        </Link>

        <Link to="/privacy">
          Privacy
        </Link>

        <Link to="/terms">
          Terms
        </Link>

        <span>
          © 2026 GG Arena
        </span>

      </div>

    </aside>
  );
};

export default RightSidebar;