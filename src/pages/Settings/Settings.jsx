import React, { useState } from "react";
import {
  FiUser,
  FiShield,
  FiLock,
  FiEye,
  FiBell,
  FiMonitor,
  FiGlobe,
  FiLink,
  FiSmartphone,
  FiHardDrive,
  FiDownload,
  FiTrash2,
  FiLogOut,
  FiChevronRight,
  FiCheck,
  FiMail,
  FiPhone,
  FiMapPin,
  FiEdit3,
  FiKey,
  FiAlertTriangle,
  FiMoon,
  FiVolume2,
  FiMessageCircle,
  FiHeart,
  FiUsers,
  FiVideo,
  FiImage,
  FiActivity,
  FiX,
} from "react-icons/fi";

import "./Settings.css";

function Settings() {
  const [activeSection, setActiveSection] = useState("account");

  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: true,
    messageNotifications: true,
    tournamentNotifications: true,
    achievementNotifications: true,
    mentionNotifications: true,

    privateAccount: false,
    activityStatus: true,
    readReceipts: true,
    onlineStatus: true,

    darkMode: true,
    reducedMotion: false,
    autoplayVideos: true,
    soundEffects: true,

    twoFactor: false,
    loginAlerts: true,

    publicProfile: true,
    showRank: true,
    showGameStats: true,
    showOnlineStatus: true,
  });

  const [profile, setProfile] = useState({
    username: "kaushalx",
    email: "kaushal@example.com",
    phone: "+91 98765 43210",
    location: "India",
    bio: "Professional esports player and competitive gaming enthusiast.",
  });

  const [saved, setSaved] = useState(false);

  const [showPasswordModal, setShowPasswordModal] = useState(false);

  const [passwords, setPasswords] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });

  const toggleSetting = (key) => {
    setSettings((previous) => ({
      ...previous,
      [key]: !previous[key],
    }));
  };

  const handleProfileChange = (event) => {
    const { name, value } = event.target;

    setProfile((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  const handlePasswordChange = (event) => {
    const { name, value } = event.target;

    setPasswords((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const sections = [
    {
      title: "Account",
      items: [
        {
          id: "account",
          label: "Account",
          icon: <FiUser />,
        },
        {
          id: "security",
          label: "Security",
          icon: <FiShield />,
        },
        {
          id: "privacy",
          label: "Privacy",
          icon: <FiEye />,
        },
      ],
    },
    {
      title: "Preferences",
      items: [
        {
          id: "notifications",
          label: "Notifications",
          icon: <FiBell />,
        },
        {
          id: "appearance",
          label: "Appearance",
          icon: <FiMonitor />,
        },
        {
          id: "accessibility",
          label: "Accessibility",
          icon: <FiActivity />,
        },
      ],
    },
    {
      title: "Connections",
      items: [
        {
          id: "connected",
          label: "Connected Accounts",
          icon: <FiLink />,
        },
        {
          id: "gaming",
          label: "Gaming Accounts",
          icon: <FiMonitor />,
        },
      ],
    },
    {
      title: "Data",
      items: [
        {
          id: "sessions",
          label: "Sessions & Devices",
          icon: <FiSmartphone />,
        },
        {
          id: "storage",
          label: "Storage",
          icon: <FiHardDrive />,
        },
        {
          id: "downloads",
          label: "Downloads",
          icon: <FiDownload />,
        },
      ],
    },
  ];

  return (
    <div className="settings-page">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="settings-header">
        <div>
          <span className="settings-kicker">ACCOUNT CONTROL CENTER</span>

          <h1>Settings</h1>

          <p>Manage your account, privacy, security and gaming preferences.</p>
        </div>

        <button
          className={`settings-save-btn ${saved ? "saved" : ""}`}
          onClick={handleSave}
        >
          {saved ? <FiCheck /> : <FiCheck />}
          {saved ? "Saved" : "Save Changes"}
        </button>
      </div>

      {/* =====================================================
          SETTINGS LAYOUT
      ===================================================== */}

      <div className="settings-layout">
        {/* =================================================
            SETTINGS SIDEBAR
        ================================================= */}

        <aside className="settings-sidebar">
          {sections.map((section) => (
            <div className="settings-nav-group" key={section.title}>
              <span className="settings-nav-title">{section.title}</span>

              {section.items.map((item) => (
                <button
                  key={item.id}
                  className={`settings-nav-item ${
                    activeSection === item.id ? "active" : ""
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <span className="settings-nav-icon">{item.icon}</span>

                  <span>{item.label}</span>

                  <FiChevronRight className="settings-nav-arrow" />
                </button>
              ))}
            </div>
          ))}

          {/* DANGER */}

          <div className="settings-danger-nav">
            <button
              className={`settings-nav-item danger ${
                activeSection === "danger" ? "active" : ""
              }`}
              onClick={() => setActiveSection("danger")}
            >
              <span className="settings-nav-icon">
                <FiTrash2 />
              </span>

              <span>Danger Zone</span>

              <FiChevronRight className="settings-nav-arrow" />
            </button>
          </div>
        </aside>

        {/* =================================================
            SETTINGS CONTENT
        ================================================= */}

        <main className="settings-content">
          {/* =================================================
              ACCOUNT
          ================================================= */}

          {activeSection === "account" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiUser />}
                eyebrow="ACCOUNT"
                title="Account Information"
                description="Manage your public profile and personal information."
              />

              <div className="settings-profile-banner">
                <div className="settings-profile-avatar">
                  <img src="https://i.pravatar.cc/300?img=12" alt="Profile" />

                  <button>
                    <FiEdit3 />
                  </button>
                </div>

                <div className="settings-profile-info">
                  <h3>Kaushal</h3>

                  <span>@kaushalx</span>

                  <small>Professional Esports Player</small>
                </div>

                <div className="settings-profile-status">
                  <span className="online-dot" />
                  Active
                </div>
              </div>

              <div className="settings-form-grid">
                <SettingsInput
                  label="Username"
                  name="username"
                  value={profile.username}
                  onChange={handleProfileChange}
                  icon={<FiUser />}
                />

                <SettingsInput
                  label="Email Address"
                  name="email"
                  value={profile.email}
                  onChange={handleProfileChange}
                  icon={<FiMail />}
                />

                <SettingsInput
                  label="Phone Number"
                  name="phone"
                  value={profile.phone}
                  onChange={handleProfileChange}
                  icon={<FiPhone />}
                />

                <SettingsInput
                  label="Location"
                  name="location"
                  value={profile.location}
                  onChange={handleProfileChange}
                  icon={<FiMapPin />}
                />
              </div>

              <div className="settings-field">
                <label>Bio</label>

                <textarea
                  name="bio"
                  value={profile.bio}
                  onChange={handleProfileChange}
                  rows="4"
                  maxLength="250"
                />

                <span className="field-counter">{profile.bio.length}/250</span>
              </div>

              <div className="settings-divider" />

              <SettingsRow
                icon={<FiGlobe />}
                title="Language"
                description="Choose your preferred interface language."
                right={
                  <select className="settings-select">
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                }
              />

              <SettingsRow
                icon={<FiMapPin />}
                title="Region"
                description="Used to personalize tournaments and recommendations."
                right={
                  <select className="settings-select">
                    <option>India</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                }
              />
            </section>
          )}

          {/* =================================================
              SECURITY
          ================================================= */}

          {activeSection === "security" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiShield />}
                eyebrow="SECURITY"
                title="Security & Login"
                description="Keep your esports account protected."
              />

              <div className="security-status-card">
                <div className="security-status-icon">
                  <FiShield />
                </div>

                <div>
                  <strong>Your account is secure</strong>

                  <p>No suspicious login activity detected.</p>
                </div>

                <span className="security-good">Good</span>
              </div>

              <SettingsRow
                icon={<FiKey />}
                title="Password"
                description="Last changed 3 months ago."
                right={
                  <button
                    className="settings-outline-btn"
                    onClick={() => setShowPasswordModal(true)}
                  >
                    Change Password
                  </button>
                }
              />

              <SettingsRow
                icon={<FiShield />}
                title="Two-Factor Authentication"
                description="Add an extra layer of security to your account."
                right={
                  <Toggle
                    enabled={settings.twoFactor}
                    onClick={() => toggleSetting("twoFactor")}
                  />
                }
              />

              <SettingsRow
                icon={<FiBell />}
                title="Login Alerts"
                description="Receive alerts when someone logs into your account."
                right={
                  <Toggle
                    enabled={settings.loginAlerts}
                    onClick={() => toggleSetting("loginAlerts")}
                  />
                }
              />

              <SettingsRow
                icon={<FiSmartphone />}
                title="Active Sessions"
                description="Manage devices currently signed into your account."
                right={
                  <button
                    className="settings-outline-btn"
                    onClick={() => setActiveSection("sessions")}
                  >
                    View Sessions
                  </button>
                }
              />
            </section>
          )}

          {/* =================================================
              PRIVACY
          ================================================= */}

          {activeSection === "privacy" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiEye />}
                eyebrow="PRIVACY"
                title="Privacy Controls"
                description="Control who can see your profile and activity."
              />

              <SettingsRow
                icon={<FiEye />}
                title="Private Account"
                description="Only approved followers can see your content."
                right={
                  <Toggle
                    enabled={settings.privateAccount}
                    onClick={() => toggleSetting("privateAccount")}
                  />
                }
              />

              <SettingsRow
                icon={<FiActivity />}
                title="Activity Status"
                description="Allow other players to see when you are active."
                right={
                  <Toggle
                    enabled={settings.activityStatus}
                    onClick={() => toggleSetting("activityStatus")}
                  />
                }
              />

              <SettingsRow
                icon={<FiMessageCircle />}
                title="Read Receipts"
                description="Let others know when you read their messages."
                right={
                  <Toggle
                    enabled={settings.readReceipts}
                    onClick={() => toggleSetting("readReceipts")}
                  />
                }
              />

              <SettingsRow
                icon={<FiUsers />}
                title="Show Online Status"
                description="Display your online status to other users."
                right={
                  <Toggle
                    enabled={settings.onlineStatus}
                    onClick={() => toggleSetting("onlineStatus")}
                  />
                }
              />

              <SettingsRow
                icon={<FiActivity />}
                title="Show Rank"
                description="Display your competitive rank publicly."
                right={
                  <Toggle
                    enabled={settings.showRank}
                    onClick={() => toggleSetting("showRank")}
                  />
                }
              />

              <SettingsRow
                icon={<FiActivity />}
                title="Show Game Statistics"
                description="Allow players to see your competitive statistics."
                right={
                  <Toggle
                    enabled={settings.showGameStats}
                    onClick={() => toggleSetting("showGameStats")}
                  />
                }
              />

              <div className="settings-subsection">
                <h3>Blocked Users</h3>

                <p>Manage accounts you have blocked.</p>

                <button className="settings-outline-btn">
                  Manage Blocked Users
                  <FiChevronRight />
                </button>
              </div>

              <div className="settings-subsection">
                <h3>Muted Users</h3>

                <p>Manage accounts whose content you have muted.</p>

                <button className="settings-outline-btn">
                  Manage Muted Users
                  <FiChevronRight />
                </button>
              </div>
            </section>
          )}

          {/* =================================================
              NOTIFICATIONS
          ================================================= */}

          {activeSection === "notifications" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiBell />}
                eyebrow="NOTIFICATIONS"
                title="Notification Preferences"
                description="Choose what notifications you want to receive."
              />

              <div className="notification-group">
                <h3>General</h3>

                <SettingsRow
                  icon={<FiMail />}
                  title="Email Notifications"
                  description="Receive important updates through email."
                  right={
                    <Toggle
                      enabled={settings.emailNotifications}
                      onClick={() => toggleSetting("emailNotifications")}
                    />
                  }
                />

                <SettingsRow
                  icon={<FiSmartphone />}
                  title="Push Notifications"
                  description="Receive notifications on your devices."
                  right={
                    <Toggle
                      enabled={settings.pushNotifications}
                      onClick={() => toggleSetting("pushNotifications")}
                    />
                  }
                />
              </div>

              <div className="notification-group">
                <h3>Social</h3>

                <SettingsRow
                  icon={<FiMessageCircle />}
                  title="Messages"
                  description="New direct messages and chat activity."
                  right={
                    <Toggle
                      enabled={settings.messageNotifications}
                      onClick={() => toggleSetting("messageNotifications")}
                    />
                  }
                />

                <SettingsRow
                  icon={<FiUsers />}
                  title="Mentions"
                  description="When another player mentions you."
                  right={
                    <Toggle
                      enabled={settings.mentionNotifications}
                      onClick={() => toggleSetting("mentionNotifications")}
                    />
                  }
                />

                <SettingsRow
                  icon={<FiHeart />}
                  title="Likes & Activity"
                  description="Likes, comments and interactions."
                  right={
                    <Toggle
                      enabled={settings.achievementNotifications}
                      onClick={() => toggleSetting("achievementNotifications")}
                    />
                  }
                />
              </div>

              <div className="notification-group">
                <h3>Gaming</h3>

                <SettingsRow
                  icon={<FiActivity />}
                  title="Tournament Notifications"
                  description="Tournament starts, invites and registration updates."
                  right={
                    <Toggle
                      enabled={settings.tournamentNotifications}
                      onClick={() => toggleSetting("tournamentNotifications")}
                    />
                  }
                />

                <SettingsRow
                  icon={<FiActivity />}
                  title="Achievement Unlocks"
                  description="Get notified when you unlock achievements."
                  right={
                    <Toggle
                      enabled={settings.achievementNotifications}
                      onClick={() => toggleSetting("achievementNotifications")}
                    />
                  }
                />
              </div>
            </section>
          )}

          {/* =================================================
              APPEARANCE
          ================================================= */}

          {activeSection === "appearance" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiMonitor />}
                eyebrow="APPEARANCE"
                title="Appearance"
                description="Customize how the platform looks and behaves."
              />

              <div className="theme-preview">
                <div className="theme-preview-window">
                  <div className="theme-preview-top" />

                  <div className="theme-preview-body">
                    <div className="theme-preview-sidebar" />

                    <div className="theme-preview-content">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>

                <div>
                  <strong>Dark Mode</strong>
                  <p>
                    Optimized for gaming sessions and low-light environments.
                  </p>
                </div>

                <span className="theme-active">
                  <FiCheck />
                  Active
                </span>
              </div>

              <SettingsRow
                icon={<FiMoon />}
                title="Dark Theme"
                description="Use the premium dark esports interface."
                right={
                  <Toggle
                    enabled={settings.darkMode}
                    onClick={() => toggleSetting("darkMode")}
                  />
                }
              />

              <SettingsRow
                icon={<FiVideo />}
                title="Autoplay Videos"
                description="Automatically play videos while browsing."
                right={
                  <Toggle
                    enabled={settings.autoplayVideos}
                    onClick={() => toggleSetting("autoplayVideos")}
                  />
                }
              />

              <SettingsRow
                icon={<FiVolume2 />}
                title="Sound Effects"
                description="Play interface and interaction sounds."
                right={
                  <Toggle
                    enabled={settings.soundEffects}
                    onClick={() => toggleSetting("soundEffects")}
                  />
                }
              />
            </section>
          )}

          {/* =================================================
              ACCESSIBILITY
          ================================================= */}

          {activeSection === "accessibility" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiActivity />}
                eyebrow="ACCESSIBILITY"
                title="Accessibility"
                description="Make the experience more comfortable for you."
              />

              <SettingsRow
                icon={<FiActivity />}
                title="Reduced Motion"
                description="Reduce animations and transition effects."
                right={
                  <Toggle
                    enabled={settings.reducedMotion}
                    onClick={() => toggleSetting("reducedMotion")}
                  />
                }
              />

              <SettingsRow
                icon={<FiMonitor />}
                title="Interface Scale"
                description="Adjust the size of interface elements."
                right={
                  <select className="settings-select">
                    <option>Default</option>
                    <option>Large</option>
                    <option>Extra Large</option>
                  </select>
                }
              />

              <SettingsRow
                icon={<FiGlobe />}
                title="Language"
                description="Select your preferred language."
                right={
                  <select className="settings-select">
                    <option>English</option>
                    <option>Hindi</option>
                  </select>
                }
              />
            </section>
          )}

          {/* =================================================
              CONNECTED ACCOUNTS
          ================================================= */}

          {activeSection === "connected" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiLink />}
                eyebrow="CONNECTIONS"
                title="Connected Accounts"
                description="Connect your social accounts to your esports profile."
              />

              <ConnectedAccount
                name="Google"
                description="Sign in with your Google account."
                icon="G"
                connected
              />

              <ConnectedAccount
                name="Discord"
                description="Connect your Discord gaming community."
                icon="D"
                connected
              />

              <ConnectedAccount
                name="X"
                description="Share your esports activity."
                icon="X"
              />

              <ConnectedAccount
                name="Twitch"
                description="Connect your streaming account."
                icon="T"
              />

              <ConnectedAccount
                name="YouTube"
                description="Connect your creator channel."
                icon="Y"
              />
            </section>
          )}

          {/* =================================================
              GAMING ACCOUNTS
          ================================================= */}

          {activeSection === "gaming" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiMonitor />}
                eyebrow="GAMING"
                title="Gaming Accounts"
                description="Connect your gaming profiles and competitive identities."
              />

              <GamingAccount
                game="Valorant"
                username="Kaushal#IND"
                rank="Radiant"
                connected
              />

              <GamingAccount
                game="Counter-Strike 2"
                username="KaushalX"
                rank="Global Elite"
                connected
              />

              <GamingAccount
                game="Apex Legends"
                username="KaushalX"
                rank="Master"
                connected
              />

              <GamingAccount game="PUBG" username="" rank="" />
            </section>
          )}

          {/* =================================================
              SESSIONS
          ================================================= */}

          {activeSection === "sessions" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiSmartphone />}
                eyebrow="SECURITY"
                title="Sessions & Devices"
                description="Review devices that are currently signed into your account."
              />

              <DeviceCard
                device="MacBook Pro"
                location="New Delhi, India"
                time="Active now"
                current
                icon={<FiMonitor />}
              />

              <DeviceCard
                device="iPhone 15 Pro"
                location="New Delhi, India"
                time="2 hours ago"
                icon={<FiSmartphone />}
              />

              <DeviceCard
                device="Chrome on Windows"
                location="Mumbai, India"
                time="3 days ago"
                icon={<FiMonitor />}
              />

              <button className="logout-all-btn">
                <FiLogOut />
                Log Out From All Other Devices
              </button>
            </section>
          )}

          {/* =================================================
              STORAGE
          ================================================= */}

          {activeSection === "storage" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiHardDrive />}
                eyebrow="DATA"
                title="Storage"
                description="Manage your uploaded media and storage usage."
              />

              <div className="storage-card">
                <div className="storage-top">
                  <div>
                    <span>STORAGE USED</span>
                    <strong>6.8 GB</strong>
                  </div>

                  <span>10 GB</span>
                </div>

                <div className="storage-progress">
                  <span style={{ width: "68%" }} />
                </div>

                <div className="storage-breakdown">
                  <span>
                    <FiImage />
                    Images
                    <strong>3.2 GB</strong>
                  </span>

                  <span>
                    <FiVideo />
                    Videos
                    <strong>2.7 GB</strong>
                  </span>

                  <span>
                    <FiDownload />
                    Downloads
                    <strong>0.9 GB</strong>
                  </span>
                </div>
              </div>

              <SettingsRow
                icon={<FiTrash2 />}
                title="Clear Cached Media"
                description="Remove locally cached media from this device."
                right={
                  <button className="settings-outline-btn">Clear Cache</button>
                }
              />
            </section>
          )}

          {/* =================================================
              DOWNLOADS
          ================================================= */}

          {activeSection === "downloads" && (
            <section className="settings-section">
              <SettingsSectionHeader
                icon={<FiDownload />}
                eyebrow="DATA"
                title="Downloads"
                description="Manage downloaded content and offline media."
              />

              <SettingsRow
                icon={<FiDownload />}
                title="Download Quality"
                description="Choose the quality for downloaded videos."
                right={
                  <select className="settings-select">
                    <option>Auto</option>
                    <option>1080p</option>
                    <option>720p</option>
                    <option>480p</option>
                  </select>
                }
              />

              <SettingsRow
                icon={<FiSmartphone />}
                title="Download Over Wi-Fi Only"
                description="Prevent downloads from using mobile data."
                right={<Toggle enabled={true} onClick={() => {}} />}
              />

              <div className="download-empty">
                <FiDownload />

                <h3>No offline downloads</h3>

                <p>Videos and posts you download will appear here.</p>
              </div>
            </section>
          )}

          {/* =================================================
              DANGER ZONE
          ================================================= */}

          {activeSection === "danger" && (
            <section className="settings-section danger-section">
              <SettingsSectionHeader
                icon={<FiAlertTriangle />}
                eyebrow="DANGER ZONE"
                title="Account Actions"
                description="These actions can permanently affect your account."
              />

              <div className="danger-card">
                <div className="danger-icon">
                  <FiTrash2 />
                </div>

                <div>
                  <h3>Delete Account</h3>

                  <p>
                    Permanently delete your profile, posts, messages, statistics
                    and tournament history.
                  </p>
                </div>

                <button className="delete-account-btn">Delete Account</button>
              </div>

              <div className="danger-card">
                <div className="danger-icon logout">
                  <FiLogOut />
                </div>

                <div>
                  <h3>Log Out</h3>

                  <p>Log out from your current account on this device.</p>
                </div>

                <button className="logout-btn">Log Out</button>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* =====================================================
          PASSWORD MODAL
      ===================================================== */}

      {showPasswordModal && (
        <div className="settings-modal-backdrop">
          <div className="settings-modal">
            <button
              className="settings-modal-close"
              onClick={() => setShowPasswordModal(false)}
            >
              <FiX />
            </button>

            <div className="settings-modal-icon">
              <FiKey />
            </div>

            <h2>Change Password</h2>

            <p>Create a strong password you haven't used before.</p>

            <div className="modal-field">
              <label>Current Password</label>

              <input
                type="password"
                name="current"
                value={passwords.current}
                onChange={handlePasswordChange}
                placeholder="Enter current password"
              />
            </div>

            <div className="modal-field">
              <label>New Password</label>

              <input
                type="password"
                name="newPassword"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                placeholder="Enter new password"
              />
            </div>

            <div className="modal-field">
              <label>Confirm Password</label>

              <input
                type="password"
                name="confirm"
                value={passwords.confirm}
                onChange={handlePasswordChange}
                placeholder="Confirm new password"
              />
            </div>

            <button
              className="modal-save-btn"
              onClick={() => {
                setShowPasswordModal(false);
                setPasswords({
                  current: "",
                  newPassword: "",
                  confirm: "",
                });
              }}
            >
              Update Password
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   REUSABLE COMPONENTS
========================================================= */

function SettingsSectionHeader({ icon, eyebrow, title, description }) {
  return (
    <div className="settings-section-header">
      <div className="settings-section-icon">{icon}</div>

      <div>
        <span className="settings-kicker">{eyebrow}</span>

        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </div>
  );
}

function SettingsRow({ icon, title, description, right }) {
  return (
    <div className="settings-row">
      <div className="settings-row-left">
        <div className="settings-row-icon">{icon}</div>

        <div>
          <h3>{title}</h3>

          <p>{description}</p>
        </div>
      </div>

      <div className="settings-row-right">{right}</div>
    </div>
  );
}

function SettingsInput({ label, name, value, onChange, icon }) {
  return (
    <div className="settings-field">
      <label>{label}</label>

      <div className="settings-input-wrapper">
        {icon}

        <input name={name} value={value} onChange={onChange} />
      </div>
    </div>
  );
}

function Toggle({ enabled, onClick }) {
  return (
    <button
      className={`settings-toggle ${enabled ? "enabled" : ""}`}
      onClick={onClick}
      aria-label="Toggle setting"
    >
      <span />
    </button>
  );
}

function ConnectedAccount({ name, description, icon, connected = false }) {
  return (
    <div className="connected-account">
      <div className="connected-account-icon">{icon}</div>

      <div className="connected-account-info">
        <h3>{name}</h3>

        <p>{description}</p>
      </div>

      {connected ? (
        <button className="connected-btn">
          <FiCheck />
          Connected
        </button>
      ) : (
        <button className="settings-outline-btn">Connect</button>
      )}
    </div>
  );
}

function GamingAccount({ game, username, rank, connected = false }) {
  return (
    <div className="gaming-account">
      <div className="gaming-account-icon">
        <FiMonitor />
      </div>

      <div className="gaming-account-info">
        <h3>{game}</h3>

        {connected ? (
          <p>
            {username} • {rank}
          </p>
        ) : (
          <p>Connect your {game} profile</p>
        )}
      </div>

      {connected ? (
        <span className="gaming-connected">
          <FiCheck />
          Connected
        </span>
      ) : (
        <button className="settings-outline-btn">Connect</button>
      )}
    </div>
  );
}

function DeviceCard({ device, location, time, current = false, icon }) {
  return (
    <div className="device-card">
      <div className="device-icon">{icon}</div>

      <div className="device-info">
        <h3>
          {device}

          {current && <span className="current-device">This device</span>}
        </h3>

        <p>{location}</p>

        <small>{time}</small>
      </div>

      {!current && <button className="device-remove">Log Out</button>}
    </div>
  );
}

export default Settings;
