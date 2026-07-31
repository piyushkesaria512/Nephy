import React, { useMemo, useState } from "react";
import {
  FiSearch,
  FiMoreHorizontal,
  FiPhone,
  FiVideo,
  FiSend,
  FiPaperclip,
  FiSmile,
  FiMic,
  FiImage,
  FiCheck,
  FiCheckCircle,
  FiChevronLeft,
  FiInfo,
  FiPlus,
  FiStar,
  FiTrash2,
  FiX,
} from "react-icons/fi";

import "./Messages.css";

const chats = [
  {
    id: 1,
    name: "ViperX",
    username: "@viperx",
    avatar: "https://i.pravatar.cc/150?img=12",
    lastMessage: "That clutch was insane 🔥",
    time: "2m",
    unread: 3,
    online: true,
    verified: true,
    pinned: true,
  },
  {
    id: 2,
    name: "Nova Gaming",
    username: "@novagaming",
    avatar: "https://i.pravatar.cc/150?img=32",
    lastMessage: "Tournament registration is open.",
    time: "18m",
    unread: 1,
    online: true,
    verified: true,
    pinned: true,
  },
  {
    id: 3,
    name: "Shadow",
    username: "@shadowfps",
    avatar: "https://i.pravatar.cc/150?img=11",
    lastMessage: "Let's play tonight?",
    time: "1h",
    unread: 0,
    online: true,
    verified: false,
  },
  {
    id: 4,
    name: "Apex Legends India",
    username: "@apexindia",
    avatar: "https://i.pravatar.cc/150?img=47",
    lastMessage: "You were mentioned in a post.",
    time: "2h",
    unread: 0,
    online: false,
    verified: true,
  },
  {
    id: 5,
    name: "Raven",
    username: "@raven",
    avatar: "https://i.pravatar.cc/150?img=5",
    lastMessage: "GG! See you tomorrow.",
    time: "4h",
    unread: 0,
    online: false,
    verified: false,
  },
  {
    id: 6,
    name: "Elite Esports",
    username: "@eliteesports",
    avatar: "https://i.pravatar.cc/150?img=49",
    lastMessage: "Your invitation has been accepted.",
    time: "Yesterday",
    unread: 0,
    online: false,
    verified: true,
  },
];

const initialMessages = {
  1: [
    {
      id: 1,
      sender: "them",
      text: "Yo! Did you see the tournament results?",
      time: "10:42 AM",
      read: true,
    },
    {
      id: 2,
      sender: "me",
      text: "Yeah! That final match was absolutely crazy.",
      time: "10:43 AM",
      read: true,
    },
    {
      id: 3,
      sender: "them",
      text: "That clutch was insane 🔥",
      time: "10:44 AM",
      read: true,
    },
    {
      id: 4,
      sender: "me",
      text: "I honestly thought they were going to lose that round 😂",
      time: "10:45 AM",
      read: true,
    },
  ],
  2: [
    {
      id: 1,
      sender: "them",
      text: "Hey! We have an update for the upcoming championship.",
      time: "9:15 AM",
      read: true,
    },
    {
      id: 2,
      sender: "me",
      text: "Sounds interesting. What's the update?",
      time: "9:17 AM",
      read: true,
    },
    {
      id: 3,
      sender: "them",
      text: "Tournament registration is open.",
      time: "9:18 AM",
      read: true,
    },
  ],
  3: [
    {
      id: 1,
      sender: "them",
      text: "Let's play tonight?",
      time: "8:32 AM",
      read: true,
    },
  ],
  4: [
    {
      id: 1,
      sender: "them",
      text: "You were mentioned in a post.",
      time: "Yesterday",
      read: true,
    },
  ],
  5: [
    {
      id: 1,
      sender: "them",
      text: "GG! See you tomorrow.",
      time: "Yesterday",
      read: true,
    },
  ],
  6: [
    {
      id: 1,
      sender: "them",
      text: "Your invitation has been accepted.",
      time: "Yesterday",
      read: true,
    },
  ],
};

function Messages() {
  const [selectedChat, setSelectedChat] = useState(chats[0]);
  const [messageText, setMessageText] = useState("");
  const [search, setSearch] = useState("");
  const [messages, setMessages] = useState(initialMessages);
  const [showInfo, setShowInfo] = useState(true);
  const [showEmoji, setShowEmoji] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [mobileView, setMobileView] = useState("list");

  const currentMessages = messages[selectedChat.id] || [];

  const filteredChats = useMemo(() => {
    return chats.filter(
      (chat) =>
        chat.name.toLowerCase().includes(search.toLowerCase()) ||
        chat.username.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const sendMessage = () => {
    const text = messageText.trim();

    if (!text) return;

    const newMessage = {
      id: Date.now(),
      sender: "me",
      text,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      read: true,
    };

    setMessages((prev) => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), newMessage],
    }));

    setMessageText("");
    setShowEmoji(false);
  };

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    setMobileView("chat");
    setShowMenu(false);
  };

  const addEmoji = (emoji) => {
    setMessageText((prev) => prev + emoji);
  };

  return (
    <div className="messages-page">
      {/* ================= CHAT LIST ================= */}
      <aside
        className={`messages-list-panel ${
          mobileView === "list" ? "mobile-active" : ""
        }`}
      >
        <div className="messages-list-header">
          <div>
            <h1>Messages</h1>
            <span>{chats.length} conversations</span>
          </div>

          <button className="new-chat-btn" title="New message">
            <FiPlus />
          </button>
        </div>

        <div className="messages-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search messages..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {search && (
            <button onClick={() => setSearch("")}>
              <FiX />
            </button>
          )}
        </div>

        <div className="message-tabs">
          <button className="active">All</button>
          <button>Unread</button>
          <button>Requests</button>
        </div>

        <div className="chat-list">
          {filteredChats.length > 0 ? (
            filteredChats.map((chat) => (
              <button
                key={chat.id}
                className={`chat-item ${
                  selectedChat.id === chat.id ? "active" : ""
                }`}
                onClick={() => handleChatSelect(chat)}
              >
                <div className="chat-avatar-wrapper">
                  <img src={chat.avatar} alt={chat.name} />

                  {chat.online && <span className="online-dot" />}
                </div>

                <div className="chat-item-content">
                  <div className="chat-name-row">
                    <strong>
                      {chat.name}

                      {chat.verified && (
                        <span className="verified-small">✓</span>
                      )}
                    </strong>

                    <span>{chat.time}</span>
                  </div>

                  <div className="chat-preview-row">
                    <p>{chat.lastMessage}</p>

                    {chat.unread > 0 && (
                      <span className="unread-count">{chat.unread}</span>
                    )}
                  </div>
                </div>

                {chat.pinned && (
                  <FiStar className="pinned-icon" size={13} />
                )}
              </button>
            ))
          ) : (
            <div className="empty-search">
              <FiSearch />
              <h3>No conversations found</h3>
              <p>Try searching another player or organization.</p>
            </div>
          )}
        </div>
      </aside>

      {/* ================= CONVERSATION ================= */}
      <section
        className={`conversation-panel ${
          mobileView === "chat" ? "mobile-active" : ""
        }`}
      >
        <header className="conversation-header">
          <div className="conversation-user">
            <button
              className="mobile-back-btn"
              onClick={() => setMobileView("list")}
            >
              <FiChevronLeft />
            </button>

            <div className="conversation-avatar">
              <img src={selectedChat.avatar} alt={selectedChat.name} />

              {selectedChat.online && <span />}
            </div>

            <div>
              <h2>
                {selectedChat.name}

                {selectedChat.verified && (
                  <span className="verified-badge">✓</span>
                )}
              </h2>

              <p>
                {selectedChat.online ? "Active now" : "Offline"} ·{" "}
                {selectedChat.username}
              </p>
            </div>
          </div>

          <div className="conversation-actions">
            <button title="Voice call">
              <FiPhone />
            </button>

            <button title="Video call">
              <FiVideo />
            </button>

            <button
              title="Conversation info"
              onClick={() => setShowInfo((prev) => !prev)}
              className={showInfo ? "selected" : ""}
            >
              <FiInfo />
            </button>

            <div className="more-wrapper">
              <button
                title="More"
                onClick={() => setShowMenu((prev) => !prev)}
              >
                <FiMoreHorizontal />
              </button>

              {showMenu && (
                <div className="conversation-menu">
                  <button>
                    <FiStar />
                    Add to favorites
                  </button>

                  <button>
                    <FiCheckCircle />
                    Mark as unread
                  </button>

                  <button className="danger">
                    <FiTrash2 />
                    Delete conversation
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Messages */}
        <div className="conversation-body">
          <div className="conversation-date">
            <span>Today</span>
          </div>

          <div className="message-container">
            {currentMessages.map((message) => (
              <div
                key={message.id}
                className={`message-row ${
                  message.sender === "me" ? "my-message" : "their-message"
                }`}
              >
                {message.sender !== "me" && (
                  <img
                    src={selectedChat.avatar}
                    alt={selectedChat.name}
                    className="message-avatar"
                  />
                )}

                <div className="message-content">
                  <div className="message-bubble">
                    <p>{message.text}</p>
                  </div>

                  <div className="message-meta">
                    <span>{message.time}</span>

                    {message.sender === "me" &&
                      (message.read ? (
                        <FiCheckCircle />
                      ) : (
                        <FiCheck />
                      ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing indicator */}
            {selectedChat.online && (
              <div className="typing-row">
                <img src={selectedChat.avatar} alt="" />

                <div className="typing-bubble">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Composer */}
        <div className="message-composer">
          <div className="composer-tools">
            <button title="Attach file">
              <FiPaperclip />
            </button>

            <button title="Images">
              <FiImage />
            </button>
          </div>

          <div className="message-input-wrapper">
            <textarea
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage();
                }
              }}
              placeholder={`Message ${selectedChat.name}...`}
              rows="1"
            />

            <button
              className="emoji-btn"
              onClick={() => setShowEmoji((prev) => !prev)}
            >
              <FiSmile />
            </button>

            {showEmoji && (
              <div className="emoji-picker">
                {["🔥", "😂", "❤️", "GG", "🎮", "💯", "👏", "⚡"].map(
                  (emoji) => (
                    <button
                      key={emoji}
                      onClick={() => addEmoji(emoji)}
                    >
                      {emoji}
                    </button>
                  )
                )}
              </div>
            )}
          </div>

          {messageText.trim() ? (
            <button className="send-message-btn" onClick={sendMessage}>
              <FiSend />
            </button>
          ) : (
            <button className="voice-btn">
              <FiMic />
            </button>
          )}
        </div>
      </section>

      {/* ================= RIGHT PROFILE ================= */}
      {showInfo && (
        <aside className="chat-info-panel">
          <div className="chat-info-header">
            <h3>Profile</h3>

            <button onClick={() => setShowInfo(false)}>
              <FiX />
            </button>
          </div>

          <div className="profile-info">
            <div className="profile-info-avatar">
              <img src={selectedChat.avatar} alt={selectedChat.name} />

              {selectedChat.online && <span />}
            </div>

            <h2>
              {selectedChat.name}

              {selectedChat.verified && (
                <span className="verified-badge">✓</span>
              )}
            </h2>

            <p>{selectedChat.username}</p>

            <span className="profile-status">
              <i /> {selectedChat.online ? "Online now" : "Offline"}
            </span>
          </div>

          <div className="info-stats">
            <div>
              <strong>42K</strong>
              <span>Followers</span>
            </div>

            <div>
              <strong>128</strong>
              <span>Following</span>
            </div>

            <div>
              <strong>#24</strong>
              <span>Rank</span>
            </div>
          </div>

          <div className="info-section">
            <h4>About</h4>

            <p>
              Professional esports player & content creator.
              Competitive FPS enthusiast.
            </p>
          </div>

          <div className="info-section">
            <h4>Shared Media</h4>

            <div className="media-grid">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400"
                  alt="Gaming"
                />
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400"
                  alt="Gaming"
                />
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=400"
                  alt="Gaming"
                />
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1603481546238-487240415921?w=400"
                  alt="Gaming"
                />
              </div>
            </div>
          </div>

          <div className="info-buttons">
            <button>
              <FiStar />
              Add to favorites
            </button>

            <button>
              <FiMoreHorizontal />
              More options
            </button>
          </div>
        </aside>
      )}
    </div>
  );
}

export default Messages;