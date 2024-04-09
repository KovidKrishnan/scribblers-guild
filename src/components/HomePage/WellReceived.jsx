import React from "react";

export default function WellReceived({ data }) {
  return (
    <div className="well-received">
      <div className="well-received-img-name">
        <img src={data.wellReceivedAuthor} alt="" />
        <p>Sara</p>
        <button className="well-received-follow">follow</button>
      </div>
      <div className="well-received-content">
        <h1 className="well-received-title">{data.wellReceivedContentTitle}</h1>
        <p>{data.wellReceivedContent}</p>
      </div>
    </div>
  );
}
