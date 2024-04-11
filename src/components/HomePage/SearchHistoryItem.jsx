import React from "react";

export default function SearchHistoryItem() {
  return (
    <>
      <div className="search-history-reads">
        <div className="recommended-reads-info">
          <p className="recommended-reads-info-title">
            Murder on the Orient Express
          </p>{" "}
          <p className="recommended-reads-info-author">
            Book by Agatha Christie
          </p>
        </div>
        <button className="go-to-read-thumbnail-search-history">read</button>
      </div>
    </>
  );
}
