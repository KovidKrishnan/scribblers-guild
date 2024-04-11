import React, { useState } from "react";
import MobileProfileIcon from './assets/MobileProfileIcon'
import quoteAuthor1 from './assets/quote-author-1.png'
import quoteAuthor2 from './assets/quote-author-2.png'
import quoteAuthor3 from './assets/quote-author-3.png'
import wellReceivedAuthor from './assets/well-received-author.png'
import WellReceived from './WellReceived.jsx'
import ScrollToTopButton from "../common/ScrollToTopButton.jsx";

const MobileHomePage = () => {
    const cssClass = {
        data1: 'a',
        data2: 'b',
        data3: 'c'
    }
    const username = "Oppie";
    const quoteData = {
        data1: {
            imageUrl : quoteAuthor1,
            quote: "Believe you can, and you're halfway there.",
        },
        data2: {
            imageUrl : quoteAuthor2,
            quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        },
        data3: {
            imageUrl : quoteAuthor3,
            quote: "Hardships often prepare ordinary people for an extraordinary destiny.",
        }
    }

    const data = {
        wellReceivedContent : `
        Jim Carrey's witty quote, "Behind every great man is a woman rolling her eyes," encapsulates a humorous observation about the dynamics between men and women in various relationships. With a touch of playful exaggeration, Carrey cleverly suggests that women often find themselves in the role of quietly observing and, at times, even mildly criticizing the endeavors of their male counterparts.\n
        The quote's underlying message can be interpreted in different ways. On one hand, it humorously highlights the contrasting perspectives that may arise within a partnership. It suggests that while men are often driven by their ambitions and aspirations, women possess a unique ability to provide grounded, 
        `.split("\n")
        .map((line, index) => <p key={index}>{line}</p>),
        wellReceivedContentTitle : `"Behind every great man is a woman rolling her eyes."`,
        wellReceivedAuthor
    }


  return (
    <>
        <div className="mobile-home-page-container">
        <div className="mobile-profile-icon">
            <MobileProfileIcon></MobileProfileIcon>
        </div>
        <div className="welcome-name">
            Hello {username}.
        </div>
        <div className="write-bar-mobile">
            write...
        </div>
        <div className="mobile-recommendations">
            <span className="mobile-recomm-title">For You</span>
            {Object.entries(quoteData).map(([key, data]) => (
            <div key={key} className={`recommendation recommendation-${cssClass[key]}`}>
                <img src={data.imageUrl} alt="" />
                <p>{data.quote}</p>
            </div>
            ))}
        </div>
        <div className="mobile-recomm-posts">
            <span className="mobile-recomm-title">Well Received</span>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>
            <WellReceived data= {data}></WellReceived>

        </div>
    </div>
    <ScrollToTopButton></ScrollToTopButton>
    </>
  );
};

export default MobileHomePage;
