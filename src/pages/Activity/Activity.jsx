import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiHeart,
  FiMessageCircle,
  FiUserPlus,
  FiAtSign,
  FiAward,
  FiShield,
  FiUsers,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiMoreHorizontal,
  FiFilter,
  FiBell,
  FiArrowRight,
  FiX,
  FiClock,
  FiZap,
  FiUserCheck,
} from "react-icons/fi";

import "./Activity.css";

function Activity() {
  /* =========================================
     FILTER STATE
  ========================================= */

  const [activeFilter, setActiveFilter] = useState("all");

  const [timeFilter, setTimeFilter] = useState("all");

  const [activities, setActivities] = useState([
    {
      id: 1,
      type: "like",
      category: "likes",
      time: "2 min ago",
      period: "today",
      unread: true,
      user: {
        name: "NovaX",
        username: "@novax",
        avatar: "https://i.pravatar.cc/150?img=12",
        verified: true,
      },
      text: "liked your post",
      preview:
        "Clutching the final round with 1 HP left. Never give up.",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=200&q=80",
    },

    {
      id: 2,
      type: "comment",
      category: "comments",
      time: "18 min ago",
      period: "today",
      unread: true,
      user: {
        name: "ShadowK",
        username: "@shadowk",
        avatar: "https://i.pravatar.cc/150?img=11",
        verified: false,
      },
      text: "commented on your post",
      comment:
        "That final rotation was absolutely insane 🔥",
      preview:
        "Championship qualifiers are getting serious...",
    },

    {
      id: 3,
      type: "follow",
      category: "follows",
      time: "42 min ago",
      period: "today",
      unread: true,
      user: {
        name: "PixelRush",
        username: "@pixelrush",
        avatar: "https://i.pravatar.cc/150?img=32",
        verified: false,
      },
      text: "started following you",
    },

    {
      id: 4,
      type: "mention",
      category: "mentions",
      time: "1 hr ago",
      period: "today",
      unread: false,
      user: {
        name: "Velocity Esports",
        username: "@velocityesports",
        avatar: "https://i.pravatar.cc/150?img=47",
        verified: true,
      },
      text: "mentioned you in a post",
      preview:
        "Looking for players ready to dominate the next season. @you",
    },

    {
      id: 5,
      type: "tournament",
      category: "tournaments",
      time: "3 hrs ago",
      period: "today",
      unread: true,
      user: {
        name: "Arena Masters",
        username: "@arenamasters",
        avatar: "https://i.pravatar.cc/150?img=48",
        verified: true,
      },
      text: "invited you to a tournament",
      tournament: {
        name: "Arena Masters Championship",
        game: "Valorant",
        prize: "$50,000",
        date: "Aug 12, 2026",
      },
    },

    {
      id: 6,
      type: "organization",
      category: "organizations",
      time: "Yesterday",
      period: "yesterday",
      unread: false,
      user: {
        name: "Titan Gaming",
        username: "@titangaming",
        avatar: "https://i.pravatar.cc/150?img=52",
        verified: true,
      },
      text: "sent you an organization invitation",
      organization: "Titan Gaming",
    },

    {
      id: 7,
      type: "achievement",
      category: "achievements",
      time: "Yesterday",
      period: "yesterday",
      unread: false,
      user: {
        name: "ArenaHub",
        username: "@arenahub",
        avatar: "https://i.pravatar.cc/150?img=60",
        verified: true,
      },
      text: "You unlocked a new achievement",
      achievement: {
        name: "Clutch Master",
        description: "Win 10 rounds while being the last player alive.",
      },
    },

    {
      id: 8,
      type: "friend",
      category: "friends",
      time: "Yesterday",
      period: "yesterday",
      unread: false,
      user: {
        name: "RexGaming",
        username: "@rexgaming",
        avatar: "https://i.pravatar.cc/150?img=14",
        verified: false,
      },
      text: "sent you a friend request",
    },

    {
      id: 9,
      type: "verification",
      category: "verification",
      time: "3 days ago",
      period: "week",
      unread: false,
      user: {
        name: "ArenaHub",
        username: "@arenahub",
        avatar: "https://i.pravatar.cc/150?img=60",
        verified: true,
      },
      text: "verified your gaming profile",
      verification: "Competitive Player",
    },

    {
      id: 10,
      type: "like",
      category: "likes",
      time: "4 days ago",
      period: "week",
      unread: false,
      user: {
        name: "CyberWolf",
        username: "@cyberwolf",
        avatar: "https://i.pravatar.cc/150?img=18",
        verified: true,
      },
      text: "liked your video",
      preview: "Ranked grind is officially back.",
      image:
        "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&w=200&q=80",
    },
  ]);

  /* =========================================
     FILTER OPTIONS
  ========================================= */

  const filters = [
    {
      id: "all",
      label: "All",
    },
    {
      id: "likes",
      label: "Likes",
    },
    {
      id: "comments",
      label: "Comments",
    },
    {
      id: "mentions",
      label: "Mentions",
    },
    {
      id: "follows",
      label: "Follows",
    },
    {
      id: "tournaments",
      label: "Tournaments",
    },
    {
      id: "achievements",
      label: "Achievements",
    },
  ];

  const timeFilters = [
    {
      id: "all",
      label: "All Activity",
    },
    {
      id: "today",
      label: "Today",
    },
    {
      id: "yesterday",
      label: "Yesterday",
    },
    {
      id: "week",
      label: "This Week",
    },
  ];

  /* =========================================
     ICON
  ========================================= */

  const getActivityIcon = (type) => {
    switch (type) {
      case "like":
        return <FiHeart />;

      case "comment":
        return <FiMessageCircle />;

      case "follow":
        return <FiUserPlus />;

      case "mention":
        return <FiAtSign />;

      case "tournament":
        return <FiCalendar />;

      case "organization":
        return <FiUsers />;

      case "achievement":
        return <FiAward />;

      case "verification":
        return <FiShield />;

      case "friend":
        return <FiUserCheck />;

      default:
        return <FiBell />;
    }
  };

  /* =========================================
     FILTER ACTIVITIES
  ========================================= */

  const filteredActivities = useMemo(() => {
    return activities.filter((activity) => {
      const matchesCategory =
        activeFilter === "all" ||
        activity.category === activeFilter;

      const matchesTime =
        timeFilter === "all" ||
        activity.period === timeFilter;

      return matchesCategory && matchesTime;
    });
  }, [activities, activeFilter, timeFilter]);

  /* =========================================
     UNREAD COUNT
  ========================================= */

  const unreadCount = activities.filter(
    (activity) => activity.unread
  ).length;

  /* =========================================
     MARK ONE AS READ
  ========================================= */

  const markAsRead = (id) => {
    setActivities((prev) =>
      prev.map((activity) =>
        activity.id === id
          ? {
              ...activity,
              unread: false,
            }
          : activity
      )
    );
  };

  /* =========================================
     MARK ALL AS READ
  ========================================= */

  const markAllAsRead = () => {
    setActivities((prev) =>
      prev.map((activity) => ({
        ...activity,
        unread: false,
      }))
    );
  };

  /* =========================================
     REMOVE ACTIVITY
  ========================================= */

  const removeActivity = (id) => {
    setActivities((prev) =>
      prev.filter((activity) => activity.id !== id)
    );
  };

  return (
    <div className="activity-page">

      {/* =====================================
          PAGE HEADER
      ====================================== */}

      <div className="activity-page-header">

        <div className="activity-title-area">

          <div className="activity-title-icon">
            <FiBell />
          </div>

          <div>
            <div className="activity-title-row">

              <h1>Activity</h1>

              {unreadCount > 0 && (
                <span className="activity-unread-count">
                  {unreadCount} new
                </span>
              )}

            </div>

            <p>
              Stay updated with everything happening around
              your esports journey.
            </p>
          </div>

        </div>

        <button
          className="activity-mark-all"
          onClick={markAllAsRead}
        >
          <FiCheckCircle />
          Mark all as read
        </button>

      </div>

      {/* =====================================
          QUICK STATS
      ====================================== */}

      <div className="activity-stats">

        <div className="activity-stat-card">

          <div className="activity-stat-icon purple">
            <FiBell />
          </div>

          <div>
            <span>Notifications</span>
            <strong>{activities.length}</strong>
          </div>

        </div>

        <div className="activity-stat-card">

          <div className="activity-stat-icon cyan">
            <FiZap />
          </div>

          <div>
            <span>Unread</span>
            <strong>{unreadCount}</strong>
          </div>

        </div>

        <div className="activity-stat-card">

          <div className="activity-stat-icon pink">
            <FiHeart />
          </div>

          <div>
            <span>Interactions</span>
            <strong>
              {
                activities.filter(
                  (item) =>
                    item.category === "likes" ||
                    item.category === "comments"
                ).length
              }
            </strong>
          </div>

        </div>

        <div className="activity-stat-card">

          <div className="activity-stat-icon orange">
            <FiAward />
          </div>

          <div>
            <span>Achievements</span>
            <strong>
              {
                activities.filter(
                  (item) => item.category === "achievements"
                ).length
              }
            </strong>
          </div>

        </div>

      </div>

      {/* =====================================
          FILTER AREA
      ====================================== */}

      <div className="activity-filter-wrapper">

        <div className="activity-filter-heading">
          <FiFilter />
          <span>Filter Activity</span>
        </div>

        <div className="activity-filters">

          {filters.map((filter) => (
            <button
              key={filter.id}
              className={
                activeFilter === filter.id
                  ? "activity-filter active"
                  : "activity-filter"
              }
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}

        </div>

        <div className="activity-time-filters">

          {timeFilters.map((filter) => (
            <button
              key={filter.id}
              className={
                timeFilter === filter.id
                  ? "activity-time-filter active"
                  : "activity-time-filter"
              }
              onClick={() => setTimeFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}

        </div>

      </div>

      {/* =====================================
          ACTIVITY LIST
      ====================================== */}

      <section className="activity-section">

        <div className="activity-section-header">

          <div>
            <span className="activity-section-label">
              RECENT ACTIVITY
            </span>

            <h2>
              {filteredActivities.length}{" "}
              {filteredActivities.length === 1
                ? "notification"
                : "notifications"}
            </h2>
          </div>

          <div className="activity-live-indicator">
            <span></span>
            Live updates
          </div>

        </div>

        {/* Activity Cards */}

        <div className="activity-list">

          <AnimatePresence mode="popLayout">

            {filteredActivities.length > 0 ? (
              filteredActivities.map((activity) => (
                <motion.article
                  key={activity.id}
                  className={
                    activity.unread
                      ? "activity-card unread"
                      : "activity-card"
                  }
                  layout
                  initial={{
                    opacity: 0,
                    y: 15,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    x: -20,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  onClick={() =>
                    activity.unread &&
                    markAsRead(activity.id)
                  }
                >

                  {/* Unread indicator */}

                  {activity.unread && (
                    <span className="activity-unread-dot"></span>
                  )}

                  {/* User Avatar */}

                  <div className="activity-avatar-wrapper">

                    <img
                      src={activity.user.avatar}
                      alt={activity.user.name}
                      className="activity-avatar"
                    />

                    {activity.user.verified && (
                      <span className="activity-verified">
                        <FiCheck />
                      </span>
                    )}

                    <span
                      className={`activity-type-icon activity-type-${activity.type}`}
                    >
                      {getActivityIcon(activity.type)}
                    </span>

                  </div>

                  {/* Main Content */}

                  <div className="activity-content">

                    <div className="activity-message">

                      <strong>
                        {activity.user.name}
                      </strong>

                      {activity.user.verified && (
                        <span className="activity-small-verified">
                          <FiCheck />
                        </span>
                      )}

                      <span className="activity-username">
                        {activity.user.username}
                      </span>

                      <span className="activity-text">
                        {activity.text}
                      </span>

                    </div>

                    {/* Comment */}

                    {activity.comment && (
                      <div className="activity-comment">
                        <FiMessageCircle />
                        <span>{activity.comment}</span>
                      </div>
                    )}

                    {/* Preview */}

                    {activity.preview && (
                      <div className="activity-preview">

                        <span>
                          {activity.preview}
                        </span>

                        {activity.image && (
                          <img
                            src={activity.image}
                            alt=""
                          />
                        )}

                      </div>
                    )}

                    {/* Tournament */}

                    {activity.tournament && (
                      <div className="activity-special-card tournament">

                        <div className="activity-special-icon">
                          <FiCalendar />
                        </div>

                        <div className="activity-special-info">

                          <strong>
                            {activity.tournament.name}
                          </strong>

                          <div className="activity-special-meta">
                            <span>
                              {activity.tournament.game}
                            </span>

                            <span>
                              {activity.tournament.prize}
                            </span>

                            <span>
                              {activity.tournament.date}
                            </span>
                          </div>

                        </div>

                        <button className="activity-special-action">
                          View
                          <FiArrowRight />
                        </button>

                      </div>
                    )}

                    {/* Organization */}

                    {activity.organization && (
                      <div className="activity-special-card organization">

                        <div className="activity-special-icon">
                          <FiUsers />
                        </div>

                        <div className="activity-special-info">

                          <strong>
                            {activity.organization}
                          </strong>

                          <span>
                            Organization invitation
                          </span>

                        </div>

                        <div className="activity-invite-actions">

                          <button className="activity-accept">
                            Accept
                          </button>

                          <button className="activity-decline">
                            Decline
                          </button>

                        </div>

                      </div>
                    )}

                    {/* Achievement */}

                    {activity.achievement && (
                      <div className="activity-special-card achievement">

                        <div className="achievement-badge">
                          <FiAward />
                        </div>

                        <div className="activity-special-info">

                          <strong>
                            {activity.achievement.name}
                          </strong>

                          <span>
                            {activity.achievement.description}
                          </span>

                        </div>

                        <span className="achievement-unlocked">
                          UNLOCKED
                        </span>

                      </div>
                    )}

                    {/* Verification */}

                    {activity.verification && (
                      <div className="activity-verification-card">

                        <div className="verification-icon">
                          <FiShield />
                        </div>

                        <div>
                          <strong>
                            Verified Player
                          </strong>

                          <span>
                            {activity.verification}
                          </span>
                        </div>

                        <FiCheckCircle />

                      </div>
                    )}

                    {/* Friend Request */}

                    {activity.type === "friend" && (
                      <div className="activity-friend-actions">

                        <button className="activity-accept">
                          Accept
                        </button>

                        <button className="activity-decline">
                          Decline
                        </button>

                      </div>
                    )}

                  </div>

                  {/* Time / Actions */}

                  <div className="activity-meta">

                    <div className="activity-time">
                      <FiClock />
                      {activity.time}
                    </div>

                    <button
                      className="activity-more"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeActivity(activity.id);
                      }}
                      title="Remove notification"
                    >
                      <FiMoreHorizontal />
                    </button>

                  </div>

                </motion.article>
              ))
            ) : (

              /* =================================
                 EMPTY STATE
              ================================== */

              <motion.div
                className="activity-empty"
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
              >

                <div className="activity-empty-icon">
                  <FiBell />
                </div>

                <h3>No activity found</h3>

                <p>
                  Nothing matches your current filters.
                  Try selecting another category.
                </p>

                <button
                  onClick={() => {
                    setActiveFilter("all");
                    setTimeFilter("all");
                  }}
                >
                  Clear Filters
                </button>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </section>

      {/* =====================================
          LOAD MORE
      ====================================== */}

      {filteredActivities.length > 0 && (
        <button className="activity-load-more">
          Load older activity
          <FiArrowRight />
        </button>
      )}

    </div>
  );
}

export default Activity;