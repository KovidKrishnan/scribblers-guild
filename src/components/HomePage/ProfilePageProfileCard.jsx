import React from 'react'

export default function ProfilePageProfileCard({profileDetails}) {
  return (
    <div className="home-page-content-sections">
          <div className="profile-page-profile-card">
            <img src={profileDetails.profileImage} alt="" />
            <div className="profile-page-info">
              <p className="profile-page-name">{profileDetails.username}</p>
              <p className="profile-page-bio">
                {profileDetails.bioQuote}
              </p>
            </div>
            <div className="edit-profile">
              Edit
            </div>
          </div>
        </div>
  )
}
