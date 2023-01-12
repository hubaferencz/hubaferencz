import React from "react";
import ContactItem from "./ContactItem";

function Profile() {
  // create contact list
  const contactList = [
    {
      icon: "mail-outline",
      title: "Email",
      link: "mailto:huba@ferencz.com",
      text: "huba@ferencz.com",
    },
    {
      icon: "phone-portrait-outline",
      title: "Phone",
      link: "tel:+12133522795",
      text: "+40 (757) 797-751",
    },
    {
      icon: "calendar-outline",
      title: "Birthday",
      link: "",
      text: "December 20, 2004",
    },
    {
      icon: "location-outline",
      title: "Location",
      link: "",
      text: "Budapest, Hungary",
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
            <p className="title">Web developer</p>
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
                    />
                );
            })}
          </ul>
          <div className="separator" />
          <ul className="social-list">
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-facebook" />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-twitter" />
              </a>
            </li>
            <li className="social-item">
              <a href="#" className="social-link">
                <ion-icon name="logo-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
}

export default Profile;
