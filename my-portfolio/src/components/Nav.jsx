import styles from "../styles/Nav.module.scss";
import { useEffect } from "react";

export const Nav = () => {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".nav li");
    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav ul");

    menuItems.forEach((item) => {
      ["mouseenter", "mouseout"].forEach((evt) => {
        item.addEventListener(evt, (e) => {
          const parentOffset = item.getBoundingClientRect();
          const relX = e.clientX - parentOffset.left;
          const relY = e.clientY - parentOffset.top;
          const span = item.querySelector("span");

          span.style.top = relY + "px";
          span.style.left = relX + "px";
        });
      });
    });
  }, []);

  return (
      <div className={styles.nav}>
        {/* <p>My Portfolio</p> */}
        <ul className={styles.links}>
          <a href="#about-me">About Me</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#recommendations">Experience</a>
          <a href="#footer">Contact Me</a>
        </ul>
        <div className="menu-btn">
          <div className="menu-btn__burger"></div>
        </div>
      </div>
  );
};
