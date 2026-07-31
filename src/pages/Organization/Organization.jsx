import React, { useState } from "react";
import {
  FiCheckCircle,
  FiEdit3,
  FiMapPin,
  FiGlobe,
  FiUsers,
  FiAward,
  FiCalendar,
  FiDollarSign,
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
  FiShare2,
  FiPlay,
  FiGrid,
  FiVideo,
  FiImage,
  FiUserPlus,
  FiMail,
  FiTwitter,
  FiInstagram,
  FiYoutube,
  FiExternalLink,
} from "react-icons/fi";

import "./Organization.css";

const organization = {
  name: "Nova Esports",
  username: "@novaesports",
  bio: "Building the next generation of competitive gaming. Champions, creators and communities under one roof.",
  location: "Mumbai, India",
  website: "novaesports.gg",
  followers: "248K",
  following: "126",
  players: 24,
  verified: true,
  cover:
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1800&q=80",
  avatar:
    "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?auto=format&fit=crop&w=500&q=80",
};

const posts = [
  {
    id: 1,
    type: "image",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Another tournament. Another statement. Proud of the squad for an incredible performance. 💜",
    likes: "18.4K",
    comments: "642",
    time: "2h ago",
  },
  {
    id: 2,
    type: "image",
    image:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1000&q=80",
    caption:
      "The grind never stops. Preparing for the next championship. 🎮",
    likes: "12.8K",
    comments: "421",
    time: "1d ago",
  },
  {
    id: 3,
    type: "image",
    image:
      "https://images.unsplash.com/photo-1560253023-3ec5d502959f?auto=format&fit=crop&w=1000&q=80",
    caption:
      "Meet our newest roster addition. Welcome to Nova! 🚀",
    likes: "22.1K",
    comments: "913",
    time: "3d ago",
  },
];

const achievements = [
  {
    title: "World Championship",
    game: "Valorant",
    position: "1st Place",
    prize: "$250K",
    date: "May 2026",
    icon: "🏆",
  },
  {
    title: "Masters League",
    game: "CS2",
    position: "2nd Place",
    prize: "$120K",
    date: "Mar 2026",
    icon: "🥈",
  },
  {
    title: "Regional Cup",
    game: "PUBG Mobile",
    position: "1st Place",
    prize: "$75K",
    date: "Jan 2026",
    icon: "🏆",
  },
  {
    title: "Winter Invitational",
    game: "Apex Legends",
    position: "3rd Place",
    prize: "$40K",
    date: "Dec 2025",
    icon: "🥉",
  },
];

const players = [
  {
    name: "ShadowX",
    role: "IGL / Duelist",
    game: "Valorant",
    avatar:
      "https://i.pravatar.cc/150?img=11",
    rank: "Radiant",
  },
  {
    name: "Blaze",
    role: "Entry Fragger",
    game: "CS2",
    avatar:
      "https://i.pravatar.cc/150?img=12",
    rank: "Global Elite",
  },
  {
    name: "Viper",
    role: "Controller",
    game: "Valorant",
    avatar:
      "https://i.pravatar.cc/150?img=13",
    rank: "Immortal 3",
  },
  {
    name: "Ace",
    role: "Support",
    game: "Apex Legends",
    avatar:
      "https://i.pravatar.cc/150?img=14",
    rank: "Predator",
  },
];

function Organization() {
  const [activeTab, setActiveTab] = useState("posts");
  const [following, setFollowing] = useState(false);
  const [likedPosts, setLikedPosts] = useState([]);

  const toggleLike = (id) => {
    setLikedPosts((previous) =>
      previous.includes(id)
        ? previous.filter((postId) => postId !== id)
        : [...previous, id]
    );
  };

  return (
    <div className="organization-page">

      {/* ================= COVER ================= */}

      <section className="organization-profile-card">

        <div className="organization-cover">
          <img src={organization.cover} alt="Organization cover" />

          <div className="cover-overlay" />

          <button className="cover-edit-btn">
            <FiEdit3 />
            Edit Cover
          </button>
        </div>

        <div className="organization-profile-content">

          <div className="organization-avatar-wrapper">
            <img
              src={organization.avatar}
              alt={organization.name}
              className="organization-avatar"
            />

            {organization.verified && (
              <span className="organization-verified">
                <FiCheckCircle />
              </span>
            )}
          </div>

          <div className="organization-main-info">

            <div className="organization-heading">

              <div>
                <div className="organization-name-row">
                  <h1>{organization.name}</h1>

                  {organization.verified && (
                    <FiCheckCircle className="verified-icon" />
                  )}
                </div>

                <p className="organization-username">
                  {organization.username}
                </p>
              </div>

              <div className="organization-actions">

                <button
                  className={`follow-btn ${
                    following ? "following" : ""
                  }`}
                  onClick={() => setFollowing(!following)}
                >
                  <FiUserPlus />
                  {following ? "Following" : "Follow"}
                </button>

                <button className="message-btn">
                  <FiMail />
                  Message
                </button>

                <button className="more-btn">
                  <FiMoreHorizontal />
                </button>

              </div>

            </div>

            <p className="organization-bio">
              {organization.bio}
            </p>

            <div className="organization-meta">

              <span>
                <FiMapPin />
                {organization.location}
              </span>

              <span>
                <FiGlobe />
                {organization.website}
              </span>

            </div>

            <div className="organization-stats">

              <div>
                <strong>{organization.followers}</strong>
                <span>Followers</span>
              </div>

              <div>
                <strong>{organization.following}</strong>
                <span>Following</span>
              </div>

              <div>
                <strong>{organization.players}</strong>
                <span>Players</span>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ================= NAVIGATION ================= */}

      <nav className="organization-tabs">

        <button
          className={activeTab === "posts" ? "active" : ""}
          onClick={() => setActiveTab("posts")}
        >
          <FiGrid />
          Posts
        </button>

        <button
          className={activeTab === "players" ? "active" : ""}
          onClick={() => setActiveTab("players")}
        >
          <FiUsers />
          Players
        </button>

        <button
          className={activeTab === "achievements" ? "active" : ""}
          onClick={() => setActiveTab("achievements")}
        >
          <FiAward />
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
          className={activeTab === "media" ? "active" : ""}
          onClick={() => setActiveTab("media")}
        >
          <FiImage />
          Media
        </button>

      </nav>

      {/* ================= CONTENT ================= */}

      <main className="organization-content">

        {/* ================= POSTS ================= */}

        {activeTab === "posts" && (
          <section className="organization-posts-section">

            <div className="section-heading">
              <div>
                <span className="section-kicker">LATEST</span>
                <h2>Organization Updates</h2>
              </div>

              <button className="view-all-btn">
                View All
                <FiExternalLink />
              </button>
            </div>

            <div className="organization-posts">

              {posts.map((post) => {

                const liked = likedPosts.includes(post.id);

                return (
                  <article className="organization-post" key={post.id}>

                    <div className="post-header">

                      <div className="post-author">

                        <img
                          src={organization.avatar}
                          alt={organization.name}
                        />

                        <div>
                          <div className="post-author-name">
                            {organization.name}
                            <FiCheckCircle />
                          </div>

                          <span>{post.time}</span>
                        </div>

                      </div>

                      <button className="post-more">
                        <FiMoreHorizontal />
                      </button>

                    </div>

                    <p className="post-caption">
                      {post.caption}
                    </p>

                    <div className="post-image-wrapper">

                      <img
                        src={post.image}
                        alt="Organization post"
                      />

                      {post.type === "video" && (
                        <div className="post-play">
                          <FiPlay />
                        </div>
                      )}

                    </div>

                    <div className="post-actions">

                      <div className="post-action-left">

                        <button
                          className={liked ? "liked" : ""}
                          onClick={() => toggleLike(post.id)}
                        >
                          <FiHeart />
                          {liked ? "18.5K" : post.likes}
                        </button>

                        <button>
                          <FiMessageCircle />
                          {post.comments}
                        </button>

                        <button>
                          <FiShare2 />
                        </button>

                      </div>

                      <button className="save-post">
                        <FiAward />
                      </button>

                    </div>

                  </article>
                );
              })}

            </div>

          </section>
        )}

        {/* ================= PLAYERS ================= */}

        {activeTab === "players" && (
          <section className="organization-section">

            <div className="section-heading">
              <div>
                <span className="section-kicker">ROSTER</span>
                <h2>Our Players</h2>
              </div>

              <span className="section-count">
                {players.length} Players
              </span>
            </div>

            <div className="players-grid">

              {players.map((player) => (
                <article className="player-card" key={player.name}>

                  <div className="player-card-top">
                    <img src={player.avatar} alt={player.name} />

                    <span className="online-dot" />
                  </div>

                  <div className="player-card-info">

                    <div className="player-name">
                      {player.name}
                      <FiCheckCircle />
                    </div>

                    <span className="player-role">
                      {player.role}
                    </span>

                    <div className="player-game">
                      {player.game}
                    </div>

                    <div className="player-rank">
                      <span>Rank</span>
                      <strong>{player.rank}</strong>
                    </div>

                  </div>

                  <button className="player-profile-btn">
                    View Profile
                  </button>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* ================= ACHIEVEMENTS ================= */}

        {activeTab === "achievements" && (
          <section className="organization-section">

            <div className="section-heading">
              <div>
                <span className="section-kicker">HALL OF FAME</span>
                <h2>Achievements</h2>
              </div>

              <span className="section-count">
                {achievements.length} Wins
              </span>
            </div>

            <div className="achievement-grid">

              {achievements.map((achievement) => (
                <article
                  className="achievement-card"
                  key={achievement.title}
                >

                  <div className="achievement-icon">
                    {achievement.icon}
                  </div>

                  <div className="achievement-info">

                    <span className="achievement-game">
                      {achievement.game}
                    </span>

                    <h3>{achievement.title}</h3>

                    <div className="achievement-details">

                      <span>
                        <FiAward />
                        {achievement.position}
                      </span>

                      <span>
                        <FiDollarSign />
                        {achievement.prize}
                      </span>

                      <span>
                        <FiCalendar />
                        {achievement.date}
                      </span>

                    </div>

                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* ================= VIDEOS ================= */}

        {activeTab === "videos" && (
          <section className="organization-section">

            <div className="section-heading">
              <div>
                <span className="section-kicker">WATCH</span>
                <h2>Latest Videos</h2>
              </div>
            </div>

            <div className="video-grid">

              {posts.map((post) => (
                <article className="video-card" key={post.id}>

                  <img
                    src={post.image}
                    alt="Video thumbnail"
                  />

                  <div className="video-overlay">
                    <div className="video-play">
                      <FiPlay />
                    </div>
                  </div>

                  <div className="video-info">
                    <h3>Nova Esports Highlights</h3>
                    <span>
                      2.4K views • {post.time}
                    </span>
                  </div>

                </article>
              ))}

            </div>

          </section>
        )}

        {/* ================= MEDIA ================= */}

        {activeTab === "media" && (
          <section className="organization-section">

            <div className="section-heading">
              <div>
                <span className="section-kicker">GALLERY</span>
                <h2>Media</h2>
              </div>
            </div>

            <div className="media-grid">

              {[...posts, ...posts].map((post, index) => (
                <div className="media-item" key={`${post.id}-${index}`}>

                  <img
                    src={post.image}
                    alt="Organization media"
                  />

                  <div className="media-hover">
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

        {/* ================= ABOUT ================= */}

        <section className="organization-about">

          <div className="about-header">
            <span className="section-kicker">ABOUT</span>
            <h2>Nova Esports</h2>
          </div>

          <div className="about-grid">

            <div className="about-card">

              <FiUsers />

              <div>
                <span>Active Players</span>
                <strong>24</strong>
              </div>

            </div>

            <div className="about-card">

              <FiAward />

              <div>
                <span>Tournament Wins</span>
                <strong>18</strong>
              </div>

            </div>

            <div className="about-card">

              <FiDollarSign />

              <div>
                <span>Total Prize Money</span>
                <strong>$1.8M</strong>
              </div>

            </div>

            <div className="about-card">

              <FiCalendar />

              <div>
                <span>Founded</span>
                <strong>2020</strong>
              </div>

            </div>

          </div>

          <div className="social-links">

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

      </main>

    </div>
  );
}

export default Organization;