import React from "react";
import ContactItem from "./ContactItem";
import Social from "./Social";

function Profile() {
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
    {
      icon: "calendar-outline",
      title: "Birthday",
      text: "December 20, 2004",
      copyable: false,
    },
    {
      icon: "location-outline",
      title: "Location",
      text: "Budapest, Hungary",
      copyable: false,
    },
  ];

  const socialList = [
    {
      logo: "logo-twitter",
      link: "https://www.twitter.com/huba__ferencz",
    },
    {
      logo: "logo-github",
      link: "https://www.github.com/h-ferencz/",
    },
    {
      logo: "logo-linkedin",
      link: "https://www.linkedin.com/in/hubaferencz/",
    },
  ];

  return (
    <>
      <aside className="sidebar" data-sidebar="">
        <div className="sidebar-info">
          <figure className="avatar-box">
            <img
              src={require("../../images/huba ferencz about.png")}
              alt="Huba Ferencz"
              width={80}
            />
          </figure>
          <div className="info-content">
            <h1 className="name" title="Huba Ferencz">
              Huba Ferencz
            </h1>
            <p className="title">Web3 Developer</p>
          </div>
          <button className="info_more-btn" data-sidebar-btn="">
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
