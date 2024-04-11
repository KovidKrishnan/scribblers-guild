import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { useState } from "react";
import brenda from "./assets/brenda.png";
import HomeIcon from "./assets/HomeIcon";
import SearchIcon from "./assets/SearchIcon";
import ProfileIcon from "./assets/ProfileIcon";
import WriteIcon from "./assets/WriteIcon";
import PostThumbNail from "./PostThumbNail";
import SearchHistoryItem from "./SearchHistoryItem";
import ProfilePageProfileCard from './ProfilePageProfileCard.jsx'
import "./HomePage.css";
import profileImage from './assets/profileImage.png'

const DeskTopHomePage = ({selectedPage, setSelectedPage}) => {
  
  
  const postData = {
    profilePic: brenda,
    name: "Brenda",
    writes: [
      "Horror",
      "Comedy",
      "Fiction",
      "Action",
      "Drama",
      "Thrillers",
      "Suspense",
    ],
    title: "Echoes in the Cabin",
    content:
      `The radio cackled, a burst of static interrupting the mournful howl of the wind. Rain lashed against the cabin windows, blurring the skeletal shapes of the dead trees outside. Sarah huddled deeper into her worn armchair, the flickering firelight casting dancing shadows on the log walls.\nShe wasn't alone. John, her husband, lay sprawled on the threadbare rug, his chest a still cage of ribs beneath a blood-soaked shirt. His eyes, forever vacant, stared sightlessly into the dying embers. It had been a bear attack, the park ranger had said, a brutal, savage mauling. But Sarah knew better.`
        .split("\n")
        .map((line, index) => <p key={index}>{line}</p>),
  };

  const username = 'Tom Kirkman'
  const bioQuote = '“The silence screamed louder than any monster.”'

  const profileDetails = {
    profileImage : profileImage,
    username: username, 
    bioQuote: bioQuote,
  }

  return (
    <div className="home-page-container">
      <div className="home-page-content-sections">
        <Link to="/home" className="home-page-icons" style={{ color: selectedPage === "home" ? "#944E63" : "#DEB6AB" }}>
          <HomeIcon color={selectedPage === "home" ? "#944E63" : "#DEB6AB"} />
          <span style={{ color: selectedPage === "home" ? "#944E63" : "#DEB6AB" }}>home</span>
        </Link>
        <Link to="/search" className="home-page-icons" style={{ color: selectedPage === "search" ? "#944E63" : "#DEB6AB" }}>
          <SearchIcon color={selectedPage === "search" ? "#944E63" : "#DEB6AB"} />
          <span style={{ color: selectedPage === "search" ? "#944E63" : "#DEB6AB" }}>search</span>
        </Link>
        <Link to="/profile" className="home-page-icons" style={{ color: selectedPage === "profile" ? "#944E63" : "#DEB6AB" }}>
          <ProfileIcon color={selectedPage === "profile" ? "#944E63" : "#DEB6AB"} />
          <span style={{ color: selectedPage === "profile" ? "#944E63" : "#DEB6AB" }}>profile</span>
        </Link>
      </div>
      {selectedPage === "home" && (
        <div className="home-page-content-sections">
          <Link to='/write-post' className="write-post">
            start writing...
            <WriteIcon />
          </Link>
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
          <PostThumbNail postData={postData} />
        </div>
      )}

      {selectedPage === "search" && (
        <div className="home-page-content-sections">
          <div className="search-post">
            search among stories, poems, and many more
            <SearchIcon />
          </div>
          <SearchHistoryItem />
          <SearchHistoryItem />
          <SearchHistoryItem />
          <SearchHistoryItem />
        </div>
      )}

      {selectedPage === "profile" && (
        <ProfilePageProfileCard profileDetails={profileDetails} />
      )}
      <div className="home-page-content-sections">
        <p className="recommended">recommended</p>
        <p className="tagline">based on your interests.</p>

        <div className="recommended-reads">
          <div className="recommended-reads-info">
            <p className="recommended-reads-info-title">Rise of the Phoenix</p>{" "}
            <p className="recommended-reads-info-author">written by adam</p>
          </div>
          <button className="go-to-read-thumbnail">read</button>
        </div>
        <div className="recommended-reads">
          <div className="recommended-reads-info">
            <p className="recommended-reads-info-title">
              Murder at the Cupcake Caper
            </p>{" "}
            <p className="recommended-reads-info-author">written by lewis</p>
          </div>
          <button className="go-to-read-thumbnail">read</button>
        </div>
        <div className="recommended-reads">
          <div className="recommended-reads-info">
            <p className="recommended-reads-info-title">
              Murder on the Orient Express
            </p>{" "}
            <p className="recommended-reads-info-author">
              Book by Agatha Christie
            </p>
          </div>
          <button className="go-to-read-thumbnail">read</button>
        </div>
      </div>
    </div>
  );
};

export default DeskTopHomePage;
