import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FiRefreshCw,
  FiSliders,
  FiChevronDown,
  FiTrendingUp,
  FiUsers,
} from "react-icons/fi";

import "./Feed.css";

const initialPosts = [
  {
    id: 1,
    user: {
      name: "NovaX",
      username: "@novax",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: true,
      rank: "Immortal III",
    },
    time: "12 min ago",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    caption:
      "That final round was insane. Clutched the 1v3 and secured the match! 🔥",
    hashtags: ["#Valorant", "#Ranked", "#Clutch"],
    game: "Valorant",
    tournament: "Nightfall Cup",
    likes: 1248,
    comments: 86,
    shares: 34,
    views: 12890,
    liked: true,
    bookmarked: false,
  },

  {
    id: 2,
    user: {
      name: "Velocity Esports",
      username: "@velocityesports",
      avatar: "https://i.pravatar.cc/150?img=47",
      verified: true,
      rank: "Organization",
    },
    time: "28 min ago",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?auto=format&fit=crop&w=1200&q=80",
    caption:
      "We are officially announcing our new competitive roster. Welcome to the squad! ⚡",
    hashtags: ["#Velocity", "#Esports", "#NewRoster"],
    game: "Apex Legends",
    tournament: null,
    likes: 3280,
    comments: 214,
    shares: 102,
    views: 32450,
    liked: false,
    bookmarked: true,
  },

  {
    id: 3,
    user: {
      name: "ShadowK",
      username: "@shadowk",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: false,
      rank: "Radiant",
    },
    time: "42 min ago",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Grinding before tonight's tournament. Who's watching? 🎮",
    hashtags: ["#Gaming", "#Valorant", "#Tournament"],
    game: "Valorant",
    tournament: "Midnight Masters",
    likes: 862,
    comments: 49,
    shares: 18,
    views: 8940,
    liked: false,
    bookmarked: false,
  },

  {
    id: 4,
    user: {
      name: "Titan Gaming",
      username: "@titangaming",
      avatar: "https://i.pravatar.cc/150?img=52",
      verified: true,
      rank: "Professional Team",
    },
    time: "1 hr ago",
    type: "image",
    media:
      "https://images.unsplash.com/photo-1547394765-185e1e68f34e?auto=format&fit=crop&w=1200&q=80",
    caption:
      "Championship day. The entire team is locked in. 🏆",
    hashtags: ["#Championship", "#Esports", "#Titan"],
    game: "CS2",
    tournament: "Global Elite Championship",
    likes: 6420,
    comments: 388,
    shares: 274,
    views: 78200,
    liked: true,
    bookmarked: false,
  },
];

function Feed() {
  const [posts, setPosts] = useState(initialPosts);
  const [feedType, setFeedType] = useState("For You");
  const [loading, setLoading] = useState(false);

  const handleRefresh = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 900);
  };

  const handleLike = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              liked: !post.liked,
              likes: post.liked
                ? post.likes - 1
                : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleBookmark = (postId) => {
    setPosts((currentPosts) =>
      currentPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              bookmarked: !post.bookmarked,
            }
          : post
      )
    );
  };

  const handleComment = (postId) => {
    console.log("Comment clicked:", postId);
  };

  const handleShare = (postId) => {
    console.log("Share clicked:", postId);
  };

  return (
    <section className="feed">

      {/* =====================================
          FEED HEADER
      ====================================== */}

      <div className="feed-header">

        <div className="feed-title">

          <div className="feed-title-icon">
            <FiTrendingUp />
          </div>

          <div>
            <h2>For You</h2>
            <span>Latest from the esports community</span>
          </div>

        </div>

        <div className="feed-actions">

          <button
            className="feed-refresh-btn"
            onClick={handleRefresh}
            title="Refresh feed"
          >
            <FiRefreshCw
              className={loading ? "is-refreshing" : ""}
            />
          </button>

          <button
            className="feed-filter-btn"
            title="Feed filters"
          >
            <FiSliders />
          </button>

        </div>

      </div>

      {/* =====================================
          FEED TABS
      ====================================== */}

      <div className="feed-tabs">

        <button
          className={
            feedType === "For You" ? "active" : ""
          }
          onClick={() => setFeedType("For You")}
        >
          For You
        </button>

        <button
          className={
            feedType === "Following" ? "active" : ""
          }
          onClick={() => setFeedType("Following")}
        >
          <FiUsers />
          Following
        </button>

        <button
          className={
            feedType === "Trending" ? "active" : ""
          }
          onClick={() => setFeedType("Trending")}
        >
          <FiTrendingUp />
          Trending
        </button>

        <button className="feed-sort">
          Latest
          <FiChevronDown />
        </button>

      </div>

      {/* =====================================
          POSTS
      ====================================== */}

      <div className="feed-posts">

        {loading ? (
          <>
            <FeedSkeleton />
            <FeedSkeleton />
          </>
        ) : (
          posts.map((post, index) => (
            <motion.article
              className="feed-post"
              key={post.id}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
            >

              {/* POST HEADER */}

              <div className="feed-post-header">

                <div className="feed-user">

                  <div className="feed-avatar-wrapper">

                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="feed-avatar"
                    />

                    {post.user.verified && (
                      <span className="feed-verified">
                        ✓
                      </span>
                    )}

                  </div>

                  <div className="feed-user-info">

                    <div className="feed-user-name">

                      <strong>
                        {post.user.name}
                      </strong>

                      {post.user.verified && (
                        <span className="feed-verified-small">
                          ✓
                        </span>
                      )}

                    </div>

                    <div className="feed-user-meta">
                      <span>{post.user.username}</span>
                      <span>•</span>
                      <span>{post.time}</span>
                    </div>

                  </div>

                </div>

                <button
                  className="feed-more"
                  aria-label="Post options"
                >
                  •••
                </button>

              </div>

              {/* POST CAPTION */}

              <div className="feed-post-content">

                <p className="feed-caption">
                  {post.caption}
                </p>

                <div className="feed-hashtags">

                  {post.hashtags.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}

                </div>

              </div>

              {/* GAME / TOURNAMENT */}

              <div className="feed-tags">

                {post.game && (
                  <span className="feed-game-tag">
                    🎮 {post.game}
                  </span>
                )}

                {post.tournament && (
                  <span className="feed-tournament-tag">
                    🏆 {post.tournament}
                  </span>
                )}

                <span className="feed-rank-tag">
                  {post.user.rank}
                </span>

              </div>

              {/* MEDIA */}

              <div className="feed-media">

                <img
                  src={post.media}
                  alt={`${post.user.name} post`}
                  loading="lazy"
                />

                <div className="feed-media-overlay" />

                <div className="feed-media-game">
                  {post.game}
                </div>

              </div>

              {/* STATS */}

              <div className="feed-stats">

                <span>
                  {formatNumber(post.likes)} likes
                </span>

                <div>
                  <span>
                    {formatNumber(post.comments)} comments
                  </span>

                  <span>
                    {formatNumber(post.shares)} shares
                  </span>

                  <span>
                    {formatNumber(post.views)} views
                  </span>
                </div>

              </div>

              {/* ACTIONS */}

              <div className="feed-post-actions">

                <button
                  className={
                    post.liked
                      ? "feed-action liked"
                      : "feed-action"
                  }
                  onClick={() => handleLike(post.id)}
                >
                  <span className="feed-action-icon">
                    {post.liked ? "♥" : "♡"}
                  </span>

                  <span>Like</span>
                </button>

                <button
                  className="feed-action"
                  onClick={() =>
                    handleComment(post.id)
                  }
                >
                  <span className="feed-action-icon">
                    💬
                  </span>

                  <span>Comment</span>
                </button>

                <button
                  className="feed-action"
                  onClick={() =>
                    handleShare(post.id)
                  }
                >
                  <span className="feed-action-icon">
                    ↗
                  </span>

                  <span>Share</span>
                </button>

                <button
                  className={
                    post.bookmarked
                      ? "feed-action bookmarked"
                      : "feed-action"
                  }
                  onClick={() =>
                    handleBookmark(post.id)
                  }
                >
                  <span className="feed-action-icon">
                    {post.bookmarked ? "🔖" : "🏷"}
                  </span>

                  <span>Save</span>
                </button>

              </div>

              {/* COMMENT INPUT */}

              <div className="feed-comment-box">

                <img
                  src="https://i.pravatar.cc/100?img=68"
                  alt="Your profile"
                />

                <input
                  type="text"
                  placeholder="Add a comment..."
                />

                <button>
                  Post
                </button>

              </div>

            </motion.article>
          ))
        )}

      </div>

      {/* =====================================
          END OF FEED
      ====================================== */}

      <div className="feed-end">

        <div className="feed-end-line" />

        <div className="feed-end-content">
          <span>✦</span>
          <p>You're all caught up</p>
          <span>✦</span>
        </div>

        <small>
          Check back later for more esports action.
        </small>

      </div>

    </section>
  );
}


/* =========================================
   NUMBER FORMATTER
========================================= */

function formatNumber(number) {
  if (number >= 1000000) {
    return `${(number / 1000000).toFixed(1)}M`;
  }

  if (number >= 1000) {
    return `${(number / 1000).toFixed(1)}K`;
  }

  return number;
}


/* =========================================
   SKELETON
========================================= */

function FeedSkeleton() {
  return (
    <div className="feed-skeleton">

      <div className="skeleton-header">

        <div className="skeleton-avatar" />

        <div className="skeleton-user">
          <span />
          <small />
        </div>

      </div>

      <div className="skeleton-text">
        <span />
        <span />
        <span />
      </div>

      <div className="skeleton-media" />

      <div className="skeleton-actions">
        <span />
        <span />
        <span />
      </div>

    </div>
  );
}

export default Feed;