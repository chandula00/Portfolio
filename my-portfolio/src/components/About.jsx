import React, { useState, useEffect } from "react";
import profilepic from "../assets/me.jpg";
import mail from "../assets/mail.png";
import phone from "../assets/phone.webp";
import { basic_info } from "../data/basic_info";
import styles from "../styles/About.module.scss";
import { Icon } from "@iconify/react";

export const About = () => {
  let sectionName, hello, about;

  if (basic_info) {
    sectionName = "About Me";
    hello = "👋 Hey there!";
    about = basic_info.about_me.map((content) => {
      return (
        <p className="lead" key={content.id}>
          {content.content}
        </p>
      );
    });
  }

  return (
    <section id="about" className={styles.about}>
      <div className={styles.about_me} id="about-me">
      <h1>
        <b>
          <span>{sectionName}</span>
        </b>
      </h1>
        <br></br>
        <div className={styles.container}>
          <div className={styles.about_me_left}>
            <div className={styles.polaroid}>
              <span>
                <img
                  height="auto"
                  width="auto"
                  src={profilepic}
                  alt="Avatar placeholder"
                />
                <br></br>
                <div className={styles.profile}>
                  <div className={styles.contact_info}>
                    <img src={mail} alt="envelop" />
                    chandulaadhikari@gmail.com
                  </div>
                  <div className={styles.contact_info}>
                    <img src={phone} alt="https://icons8.com/icon/9659/phone" />
                    +94711530046
                  </div>
                </div>
              </span>
            </div>
          </div>

          <div className={styles.about_me_right}>
            <div className={styles.col_md_11}>
              <div className={styles.card}>
                <div className={styles.card_header}>
                  <Icon icon="emojione:red-circle" />
                  <Icon icon="twemoji:yellow-circle" />
                  <Icon icon="twemoji:green-circle" />
                </div>
                <div className={styles.card_body}>
                  <br />
                  <span className={styles.wave}>
                    <b>{hello}</b>{" "}
                  </span>
                  <br />
                  <br />
                  {about}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
