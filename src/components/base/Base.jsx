import React from "react";
import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";

import Profile from "./profile/Profile";
import Navbar from "./Navbar";

import about from "./../images/huba ferencz about.png";

function Base() {
  let [profileImage, setProfileImage] = React.useState(about);

  return (
    <>
      <Profile profileImage={profileImage} setProfileImage={setProfileImage} />

      <div className="main-content">
        <Navbar setProfileImage={setProfileImage} />
        <Outlet />
      </div>
      <Toaster
        toastOptions={{
          style: {
            background: "#1E1E1F",
            color:"#ffff"
          },
        }}
      />
    </>
  );
}

export default Base;
