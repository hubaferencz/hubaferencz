import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ContactItem from "./ContactItem";
import Social from "./Social";

import about from "../../images/huba ferencz about.png";
import resume from "../../images/huba ferencz resume.png";
import portfolio from "../../images/huba ferencz portfolio.png";
import contact from "../../images/huba ferencz contact.png";

function Profile(props) {
  // create contact list
  const contactList = [
    {
      icon: "mail-outline",
      title: "Email",
      text: "contact@hubaferencz.com",
      copyable: true,
    },
    {
      icon: "paper-plane-outline",
      title: "Telegram",
      text: "@hubaferencz",
      copyable: true,
    },
    // {
    //   icon: "calendar-outline",
    //   title: "Birthday",
    //   text: "Dec 20, 2004",
    //   copyable: false,
    // },
    // {
    //   icon: "location-outline",
    //   title: "Location",
    //   text: "Budapest, Hungary",
    //   copyable: false,
    // },
  ];

  const socialList = [
    {
      logo: "logo-twitter",
      link: "https://www.twitter.com/HubaFerencz",
    },
    {
      logo: "logo-github",
      link: "https://www.github.com/hubaferencz/",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/hubaferencz/",
    },
  ];

  // show contact list on click
  const showContactList = () => {
    const sidebar = document.querySelector("[data-sidebar]");
    const sidebarBtn = document.querySelector("[data-sidebar-btn]");
    sidebar.classList.toggle("active");
    sidebarBtn.classList.toggle("active");
  };

  const location = useLocation();

  let pathname = location.pathname;

  useEffect(() => {
    if (pathname === "/") {
      props.setProfileImage(about);
    } else if (pathname === "/resume") {
      props.setProfileImage(resume);
    } else if (pathname === "/portfolio") {
      props.setProfileImage(portfolio);
    } else if (pathname === "/contact") {
      props.setProfileImage(contact);
    }
  }, [pathname, props]);

  let profileAlt = props.profileImage
    .replace(".png", "")
    .replace("/static/media/", "")
    .split(".")[0];

  return (
    <>
      <aside className="sidebar" data-sidebar="">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img src={props.profileImage} alt={profileAlt} width={80} />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Huba Ferencz">
              Huba Ferencz
            </h1>
            <p className="title">Web Developer</p>
          </div>
          <button
            className="info_more-btn"
            onClick={showContactList}
            data-sidebar-btn=""
          >
            <span>Show Contacts</span>
            <ion-icon name="chevron-down" />
          </button>
        </div>
        <div className="sidebar-info_more">
          <div className="separator" />
          <ul className="contacts-list">
            {contactList.map((item, index) => {
              return (
                <ContactItem
                  key={index}
                  icon={item.icon}
                  title={item.title}
                  link={item.link}
                  text={item.text}
                  copyable={item.copyable}
                />
              );
            })}
          </ul>
          <div className="separator" />
          <ul className="social-list">
            {socialList.map((item, index) => {
              return <Social key={index} logo={item.logo} link={item.link} />;
            })}
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Profile;
