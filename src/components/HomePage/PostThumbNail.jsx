import React from "react";
import "./HomePage.css";

export default function PostThumbNail({ postData }) {
  return (
    <div className="post-thumbnail-card">
      <div className="post-thumbnail-profile">
        <img src={postData.profilePic} alt="" />
        <div>
          <p className="post-thumbnail-profile-name">{postData.name}</p>
          <p className="post-thumbnail-profile-genres">
            writes:{" "}
            {postData.writes.slice(0, 5).map((genre, index) => (
    <React.Fragment key={index}>
        <span className="post-thumbnail-profile-genres">{genre}</span>
        {index < postData.writes.slice(0, 5).length - 1 && ', '}
    </React.Fragment>
))}

{postData.writes.length > 5 && '...'}
          </p>
        </div>
        <div className="read-button">
          <button className="go-to-read-thumbnail">read</button>
        </div>
      </div>
      <div className="post-thumbnail-content">
        <p className="post-thumbnail-title">{postData.title}</p>
        <p>{postData.content}</p>
      </div>
    </div>
  );
}
