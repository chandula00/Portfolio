import "../styles/Nav.scss";
import { useEffect } from "react";

export const Nav = () => {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".nav li");

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

    const menuBtn = document.querySelector(".menu-btn");
    const navUl = document.querySelector(".nav-items");

    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("open");
      navUl.classList.toggle("open");
    });
  }, []);

  return (
    <nav className="nav">
      {/* <p>My Portfolio</p> */}
      <a href="/" className="logo"></a>
      <ul className="nav-items">
        <a href="#about">
          <li>
            About Me<span></span>
          </li>
        </a>
        <a href="#skills">
          <li>
            Skills<span></span>
          </li>
        </a>
        <a href="#projects">
          <li>
            Projects<span></span>
          </li>
        </a>
        <a href="#recommendations">
          <li>
            Experience<span></span>
          </li>
        </a>
        <a href="#footer">
          <li>
            Contact Me<span></span>
          </li>
        </a>
      </ul>
      <div className="menu-btn" id="menu">
        <div className="menu-btn__burger"></div>
      </div>
    </nav>
  );
};
