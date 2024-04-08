import React from "react";
import "./HomePage.css";
import { useState } from "react";
import HomeIcon from "./assets/HomeIcon";
import SearchIcon from "./assets/SearchIcon";
import ProfileIcon from "./assets/ProfileIcon";
import brenda from "./assets/brenda.png";
import WriteIcon from "./assets/WriteIcon";
import PostThumbNail from "./PostThumbNail";

export default function HomePage() {
  const [selectedPage, setSelectedPage] = useState("home");
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

  return (
    <div className="home-page-container">
      <div className="home-page-content-sections">
        <div
          className="home-page-icons"
          style={{ color: selectedPage === "home" ? "#944E63" : "#DEB6AB" }}
          onClick={() => setSelectedPage("home")}
        >
          {" "}
          <HomeIcon
            color={selectedPage === "home" ? "#944E63" : "#DEB6AB"}
          ></HomeIcon>{" "}
          home
        </div>
        <div
          className="home-page-icons"
          style={{ color: selectedPage === "search" ? "#944E63" : "#DEB6AB" }}
          onClick={() => setSelectedPage("search")}
        >
          <SearchIcon
            color={selectedPage === "search" ? "#944E63" : "#DEB6AB"}
          ></SearchIcon>{" "}
          search
        </div>
        <div
          className="home-page-icons"
          style={{ color: selectedPage === "profile" ? "#944E63" : "#DEB6AB" }}
          onClick={() => setSelectedPage("profile")}
        >
          <ProfileIcon
            color={selectedPage === "profile" ? "#944E63" : "#DEB6AB"}
          ></ProfileIcon>{" "}
          profile
        </div>
      </div>
      {selectedPage === "home" && (
        <div className="home-page-content-sections">
          <div className="write-post">
            start writing...
            <WriteIcon></WriteIcon>
          </div>
          <div>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
            <PostThumbNail postData={postData}></PostThumbNail>
          </div>
        </div>
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
            <p className="recommended-reads-info-title">Murder at the Cupcake Caper</p>{" "}
            <p className="recommended-reads-info-author">written by lewis</p>
          </div>
          <button className="go-to-read-thumbnail">read</button>
        </div>
        <div className="recommended-reads">
          <div className="recommended-reads-info">
            <p className="recommended-reads-info-title">Murder on the Orient Express</p>{" "}
            <p className="recommended-reads-info-author">Book by Agatha Christie
</p>
          </div>
          <button className="go-to-read-thumbnail">read</button>
        </div>
      </div>
    </div>
  );
}
