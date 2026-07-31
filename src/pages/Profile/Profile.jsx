import React, { useState } from "react";
import {
  FiCheckCircle,
  FiEdit3,
  FiMapPin,
  FiGlobe,
  FiUsers,
  FiAward,
  FiCalendar,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiMoreHorizontal,
  FiGrid,
  FiVideo,
  FiImage,
  FiUserPlus,
  FiMail,
  FiPlay,
  FiTarget,
  FiCrosshair,
  FiActivity,
  FiTrendingUp,
  FiShield,
  FiZap,
  FiTwitter,
  FiInstagram,
  FiYoutube,
} from "react-icons/fi";

import "./Profile.css";

const player = {
  name: "Kaushal",
  username: "@kaushalx",
  role: "Professional Esports Player",
  bio: "Professional competitive gamer | FPS enthusiast | Grinding every day to become better. 🎮",
  location: "India",
  website: "kaushalx.gg",
  followers: "42.8K",
  following: "384",
  rank: "Radiant",
  level: 78,
  team: "Nova Esports",
  verified: true,

  avatar:
    "https://i.pravatar.cc/500?img=12",

  cover:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",

  games: [
    "Valorant",
    "CS2",
    "Apex Legends",
  ],
};

const posts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Grinding ranked before the next tournament. Time to hit Radiant again. ⚡",
    likes: "8.4K",
    comments: "241",
    time: "2h ago",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Tournament day. Locked in with the squad. 🎯",
    likes: "12.1K",
    comments: "524",
    time: "1d ago",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Some highlights from yesterday's scrims.",
    likes: "6.7K",
    comments: "188",
    time: "3d ago",
  },
];

const tournaments = [
  {
    name: "Valorant Masters India",
    game: "Valorant",
    position: "1st",
    kills: 84,
    deaths: 31,
    assists: 42,
    kda: "4.06",
    accuracy: "31%",
    damage: "18,420",
    mvp: true,
    prize: "$25K",
    date: "Jun 2026",
  },
  {
    name: "Regional Champions",
    game: "Valorant",
    position: "2nd",
    kills: 76,
    deaths: 38,
    assists: 39,
    kda: "3.03",
    accuracy: "28%",
    damage: "16,240",
    mvp: false,
    prize: "$12K",
    date: "Apr 2026",
  },
  {
    name: "Winter Invitational",
    game: "CS2",
    position: "3rd",
    kills: 68,
    deaths: 42,
    assists: 31,
    kda: "2.35",
    accuracy: "27%",
    damage: "14,820",
    mvp: false,
    prize: "$8K",
    date: "Jan 2026",
  },
];

const achievements = [
  {
    title: "Masters Champion",
    game: "Valorant",
    date: "Jun 2026",
    icon: "🏆",
  },
  {
    title: "Regional MVP",
    game: "Valorant",
    date: "Apr 2026",
    icon: "🥇",
  },
  {
    title: "Top Fragger",
    game: "CS2",
    date: "Jan 2026",
    icon: "⚡",
  },
  {
    title: "Radiant Player",
    game: "Valorant",
    date: "Dec 2025",
    icon: "💎",
  },
];

function Profile() {
  const [activeTab, setActiveTab] = useState("posts");
  const [following, setFollowing] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (id) => {
    setLikedPosts((current) =>
      current.includes(id)
        ? current.filter((postId) => postId !== id)
        : [...current, id]
    );
  };

  return (
    <div className="profile-page">

      {/* =====================================================
          PROFILE HEADER
      ===================================================== */}

      <section className="profile-card">

        {/* COVER */}

        <div className="profile-cover">

          <img
            src={player.cover}
            alt="Profile cover"
          />

          <div className="profile-cover-overlay" />

          <button className="profile-edit-cover">
            <FiEdit3 />
            Edit Cover
          </button>

        </div>

        {/* PROFILE CONTENT */}

        <div className="profile-info-wrapper">

          {/* AVATAR */}

          <div className="profile-avatar-container">

            <img
              src={player.avatar}
              alt={player.name}
              className="profile-avatar"
            />

            {player.verified && (
              <span className="profile-avatar-verified">
                <FiCheckCircle />
              </span>
            )}

          </div>

          <div className="profile-main-info">

            {/* NAME + ACTIONS */}

            <div className="profile-heading">

              <div>

                <div className="profile-name-row">

                  <h1>{player.name}</h1>

                  {player.verified && (
                    <FiCheckCircle className="profile-verified-icon" />
                  )}

                </div>

                <p className="profile-username">
                  {player.username}
                </p>

                <span className="profile-role">
                  {player.role}
                </span>

              </div>

              <div className="profile-actions">

                <button
                  className={`profile-follow-btn ${
                    following ? "following" : ""
                  }`}
                  onClick={() => setFollowing(!following)}
                >
                  <FiUserPlus />
                  {following ? "Following" : "Follow"}
                </button>

                <button className="profile-message-btn">
                  <FiMail />
                  Message
                </button>

                <button className="profile-more-btn">
                  <FiMoreHorizontal />
                </button>

              </div>

            </div>

            {/* BIO */}

            <p className="profile-bio">
              {player.bio}
            </p>

            {/* META */}

            <div className="profile-meta">

              <span>
                <FiMapPin />
                {player.location}
              </span>

              <span>
                <FiGlobe />
                {player.website}
              </span>

              <span>
                <FiUsers />
                {player.team}
              </span>

            </div>

            {/* STATS */}

            <div className="profile-social-stats">

              <div>
                <strong>{player.followers}</strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>{player.following}</strong>
                <span>Following</span>
              </div>

              <div>
                <strong>{player.level}</strong>
                <span>Level</span>
              </div>

              <div>
                <strong>{player.rank}</strong>
                <span>Rank</span>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GAME / RANK BAR
      ===================================================== */}

      <section className="profile-gaming-summary">

        <div className="profile-current-rank">

          <div className="rank-icon">
            <FiTarget />
          </div>

          <div>
            <span>Current Rank</span>
            <strong>{player.rank}</strong>
          </div>

        </div>

        <div className="rank-progress">

          <div className="rank-progress-header">
            <span>Rank Progress</span>
            <strong>82%</strong>
          </div>

          <div className="rank-progress-bar">
            <span style={{ width: "82%" }} />
          </div>

          <small>
            240 RR needed for next rank
          </small>

        </div>

        <div className="profile-game-list">

          {player.games.map((game) => (
            <span key={game}>
              {game}
            </span>
          ))}

        </div>

      </section>


      {/* =====================================================
          TABS
      ===================================================== */}

      <nav className="profile-tabs">

        <button
          className={activeTab === "posts" ? "active" : ""}
          onClick={() => setActiveTab("posts")}
        >
          <FiGrid />
          Posts
        </button>

        <button
          className={activeTab === "statistics" ? "active" : ""}
          onClick={() => setActiveTab("statistics")}
        >
          <FiActivity />
          Statistics
        </button>

        <button
          className={activeTab === "tournaments" ? "active" : ""}
          onClick={() => setActiveTab("tournaments")}
        >
          <FiAward />
          Tournaments
        </button>

        <button
          className={activeTab === "achievements" ? "active" : ""}
          onClick={() => setActiveTab("achievements")}
        >
          <FiShield />
          Achievements
        </button>

        <button
          className={activeTab === "videos" ? "active" : ""}
          onClick={() => setActiveTab("videos")}
        >
          <FiVideo />
          Videos
        </button>

        <button
          className={activeTab === "gallery" ? "active" : ""}
          onClick={() => setActiveTab("gallery")}
        >
          <FiImage />
          Gallery
        </button>

      </nav>


      {/* =====================================================
          POSTS
      ===================================================== */}

      {activeTab === "posts" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                LATEST
              </span>

              <h2>Posts</h2>
            </div>

            <button>
              View All
            </button>

          </div>

          <div className="profile-post-grid">

            {posts.map((post) => {

              const liked = likedPosts.includes(post.id);

              return (
                <article
                  className="profile-post-card"
                  key={post.id}
                >

                  <div className="profile-post-header">

                    <div className="profile-post-author">

                      <img
                        src={player.avatar}
                        alt={player.name}
                      />

                      <div>
                        <strong>
                          {player.name}
                          <FiCheckCircle />
                        </strong>

                        <span>
                          {post.time}
                        </span>
                      </div>

                    </div>

                    <button>
                      <FiMoreHorizontal />
                    </button>

                  </div>

                  <p className="profile-post-caption">
                    {post.caption}
                  </p>

                  <div className="profile-post-image">

                    <img
                      src={post.image}
                      alt="Player post"
                    />

                  </div>

                  <div className="profile-post-actions">

                    <div>

                      <button
                        className={liked ? "liked" : ""}
                        onClick={() => toggleLike(post.id)}
                      >
                        <FiHeart />
                        {liked ? "8.5K" : post.likes}
                      </button>

                      <button>
                        <FiMessageCircle />
                        {post.comments}
                      </button>

                      <button>
                        <FiShare2 />
                      </button>

                    </div>

                    <button>
                      <FiAward />
                    </button>

                  </div>

                </article>
              );
            })}

          </div>

        </section>
      )}


      {/* =====================================================
          STATISTICS
      ===================================================== */}

      {activeTab === "statistics" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                PERFORMANCE
              </span>

              <h2>Player Statistics</h2>
            </div>

            <select className="stats-select">
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
              <option>This Year</option>
              <option>All Time</option>
            </select>

          </div>

          <div className="stats-card-grid">

            <div className="player-stat-card">
              <FiCrosshair />
              <span>K/D Ratio</span>
              <strong>3.42</strong>
              <small>
                <FiTrendingUp />
                +12.4%
              </small>
            </div>

            <div className="player-stat-card">
              <FiTarget />
              <span>Accuracy</span>
              <strong>31.8%</strong>
              <small>
                <FiTrendingUp />
                +5.2%
              </small>
            </div>

            <div className="player-stat-card">
              <FiZap />
              <span>Headshot %</span>
              <strong>42.6%</strong>
              <small>
                <FiTrendingUp />
                +8.1%
              </small>
            </div>

            <div className="player-stat-card">
              <FiActivity />
              <span>Average Damage</span>
              <strong>286</strong>
              <small>
                <FiTrendingUp />
                +14.7%
              </small>
            </div>

          </div>

          {/* PERFORMANCE CHART */}

          <div className="performance-chart-card">

            <div className="chart-header">
              <div>
                <span>PERFORMANCE</span>
                <h3>Competitive Performance</h3>
              </div>

              <strong>+18.4%</strong>
            </div>

            <div className="fake-chart">

              <div className="chart-line chart-line-one" />
              <div className="chart-line chart-line-two" />

              <div className="chart-points">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>

            </div>

            <div className="chart-labels">
              <span>Week 1</span>
              <span>Week 2</span>
              <span>Week 3</span>
              <span>Week 4</span>
            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          TOURNAMENTS
      ===================================================== */}

      {activeTab === "tournaments" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                COMPETITIVE HISTORY
              </span>

              <h2>Tournament Performance</h2>
            </div>

            <span className="tournament-count">
              {tournaments.length} Events
            </span>

          </div>

          <div className="tournament-table-wrapper">

            <div className="tournament-table">

              <div className="tournament-table-header">
                <span>Tournament</span>
                <span>Place</span>
                <span>K / D / A</span>
                <span>KDA</span>
                <span>Accuracy</span>
                <span>Damage</span>
                <span>Prize</span>
              </div>

              {tournaments.map((tournament) => (
                <div
                  className="tournament-table-row"
                  key={tournament.name}
                >

                  <div className="tournament-name">

                    <div className="tournament-game-icon">
                      🎮
                    </div>

                    <div>
                      <strong>
                        {tournament.name}
                      </strong>

                      <span>
                        {tournament.game} • {tournament.date}
                      </span>
                    </div>

                  </div>

                  <strong
                    className={`placement placement-${tournament.position}`}
                  >
                    #{tournament.position}
                  </strong>

                  <span>
                    {tournament.kills} /{" "}
                    {tournament.deaths} /{" "}
                    {tournament.assists}
                  </span>

                  <strong className="kda-value">
                    {tournament.kda}
                  </strong>

                  <span>
                    {tournament.accuracy}
                  </span>

                  <span>
                    {tournament.damage}
                  </span>

                  <span className="prize-value">
                    {tournament.prize}
                  </span>

                </div>
              ))}

            </div>

          </div>

        </section>
      )}


      {/* =====================================================
          ACHIEVEMENTS
      ===================================================== */}

      {activeTab === "achievements" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                HALL OF FAME
              </span>

              <h2>Achievements</h2>
            </div>

          </div>

          <div className="profile-achievements-grid">

            {achievements.map((achievement) => (
              <article
                className="profile-achievement-card"
                key={achievement.title}
              >

                <div className="profile-achievement-icon">
                  {achievement.icon}
                </div>

                <div>
                  <span>
                    {achievement.game}
                  </span>

                  <h3>
                    {achievement.title}
                  </h3>

                  <small>
                    <FiCalendar />
                    {achievement.date}
                  </small>
                </div>

              </article>
            ))}

          </div>

        </section>
      )}


      {/* =====================================================
          VIDEOS
      ===================================================== */}

      {activeTab === "videos" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                WATCH
              </span>

              <h2>Highlights & Videos</h2>
            </div>

          </div>

          <div className="profile-video-grid">

            {posts.map((post) => (
              <article
                className="profile-video-card"
                key={post.id}
              >

                <img
                  src={post.image}
                  alt="Video thumbnail"
                />

                <div className="profile-video-overlay">

                  <div className="profile-video-play">
                    <FiPlay />
                  </div>

                </div>

                <div className="profile-video-info">

                  <h3>
                    Ranked Highlights
                  </h3>

                  <span>
                    18.2K views • {post.time}
                  </span>

                </div>

              </article>
            ))}

          </div>

        </section>
      )}


      {/* =====================================================
          GALLERY
      ===================================================== */}

      {activeTab === "gallery" && (
        <section className="profile-content-section">

          <div className="profile-section-header">

            <div>
              <span className="profile-kicker">
                MEDIA
              </span>

              <h2>Gallery</h2>
            </div>

          </div>

          <div className="profile-gallery">

            {[...posts, ...posts].map((post, index) => (
              <div
                className="profile-gallery-item"
                key={`${post.id}-${index}`}
              >

                <img
                  src={post.image}
                  alt="Player gallery"
                />

                <div className="profile-gallery-hover">

                  <span>
                    <FiHeart />
                    {post.likes}
                  </span>

                  <span>
                    <FiMessageCircle />
                    {post.comments}
                  </span>

                </div>

              </div>
            ))}

          </div>

        </section>
      )}


      {/* =====================================================
          PROFILE FOOTER INFO
      ===================================================== */}

      <section className="profile-about">

        <div>
          <span className="profile-kicker">
            PLAYER INFORMATION
          </span>

          <h2>About {player.name}</h2>
        </div>

        <div className="profile-about-grid">

          <div>
            <FiAward />
            <span>Tournament Wins</span>
            <strong>12</strong>
          </div>

          <div>
            <FiTarget />
            <span>Total Kills</span>
            <strong>18.4K</strong>
          </div>

          <div>
            <FiCrosshair />
            <span>Average KDA</span>
            <strong>3.42</strong>
          </div>

          <div>
            <FiUsers />
            <span>Team</span>
            <strong>Nova Esports</strong>
          </div>

        </div>

        <div className="profile-social-links">

          <a href="#twitter">
            <FiTwitter />
          </a>

          <a href="#instagram">
            <FiInstagram />
          </a>

          <a href="#youtube">
            <FiYoutube />
          </a>

        </div>

      </section>

    </div>
  );
}

export default Profile;