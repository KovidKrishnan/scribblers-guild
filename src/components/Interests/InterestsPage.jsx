import React, { useState } from "react";
import cycleGirl from "./assets/cycle-girl.png";
import "./InterestPage.css";
import InterestCard from "./InterestCard";

const InterestsPage = () => {
  const username = "Oppie";
  const interestsData = [
    "Dystopian",
    "Sci-fi",
    "Historical Fiction",
    "Humor",
    "Feel-good",
    "Sad",
    "History",
    "Mystery",
    "Biography",
    "Poetry",
    "Love",
    "Thriller",
    "Fantasy",
    "Science",
    "War",
    "Romance",
    "Horror"
  ];
  

  const [selectedInterests, setSelectedInterests] = useState([]);
  return (
    <>
      <div className="interests-page-container">
        <div className="interests-page-welcome-name">Hello {username}</div>
        <div className="interests-page-selection-pane">
          <div className="interests-title">choose your interests</div>
          <div
            className={
              selectedInterests.length < 5
                ? "interests-continue-button"
                : "interests-continue-button-enabled"
            }
          >
            continue
          </div>
        </div>
        <div className="interests-container">
          {interestsData.map((interestName, index) => (
            <InterestCard
              key={index}
              interestName={interestName}
              setSelectedInterests={setSelectedInterests}
            />
          ))}
        </div>
      </div>
      <img id="cycle-girl-png" src={cycleGirl} alt="" />
    </>
  );
};

export default InterestsPage;
