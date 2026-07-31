import { useRef, useState } from "react";
import {
  FaCloudUploadAlt,
  FaImage,
  FaVideo,
  FaTimes,
  FaHashtag,
  FaUserTag,
  FaGlobe,
  FaUsers,
  FaLock,
} from "react-icons/fa";

import "./Upload.css";

function Upload() {
  const inputRef = useRef(null);

  const [files, setFiles] = useState([]);
  const [caption, setCaption] = useState("");
  const [hashtags, setHashtags] = useState("");
  const [mentions, setMentions] = useState("");
  const [privacy, setPrivacy] = useState("Public");
  const [postType, setPostType] = useState("Post");

  const handleFiles = (selectedFiles) => {
    const arr = [...selectedFiles].map((file) => ({
      file,
      preview: URL.createObjectURL(file),
      type: file.type.startsWith("video") ? "video" : "image",
    }));

    setFiles((prev) => [...prev, ...arr]);
  };

  const handleChange = (e) => {
    handleFiles(e.target.files);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  return (
    <div className="upload-page">
      <div className="upload-header">
        <h1>Create Content</h1>
        <p>Share your esports moments with the community.</p>
      </div>

      <div className="upload-type">
        {["Post", "Story", "Reel", "Highlight"].map((item) => (
          <button
            key={item}
            className={postType === item ? "active" : ""}
            onClick={() => setPostType(item)}
          >
            {item}
          </button>
        ))}
      </div>

      <div
        className="drop-zone"
        onClick={() => inputRef.current.click()}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <FaCloudUploadAlt className="upload-icon" />

        <h2>Drag & Drop</h2>

        <p>Upload Images or Videos</p>

        <button>Select Files</button>

        <input
          ref={inputRef}
          type="file"
          multiple
          hidden
          accept="image/*,video/*"
          onChange={handleChange}
        />
      </div>

      {files.length > 0 && (
        <div className="preview-grid">
          {files.map((item, index) => (
            <div className="preview-card" key={index}>
              {item.type === "image" ? (
                <img src={item.preview} alt="" />
              ) : (
                <video src={item.preview} controls />
              )}

              <button
                className="remove-btn"
                onClick={() => removeFile(index)}
              >
                <FaTimes />
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="form-section">
        <label>Caption</label>

        <textarea
          rows="5"
          placeholder="Write something..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <label>
          <FaHashtag /> Hashtags
        </label>

        <input
          type="text"
          placeholder="#valorant #bgmi"
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
        />

        <label>
          <FaUserTag /> Mentions
        </label>

        <input
          type="text"
          placeholder="@player @team"
          value={mentions}
          onChange={(e) => setMentions(e.target.value)}
        />

        <label>Privacy</label>

        <select
          value={privacy}
          onChange={(e) => setPrivacy(e.target.value)}
        >
          <option>Public</option>
          <option>Followers</option>
          <option>Private</option>
        </select>

        <button className="publish-btn">
          Publish {postType}
        </button>
      </div>
    </div>
  );
}

export default Upload;