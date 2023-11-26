import React from "react";
import { TypeAnimation } from "react-type-animation";
import styles from "../styles/Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_content}>
        <TypeAnimation
          sequence={["👋 Hello", 2000, "I'm Chandula Adhikari", 1000]}
          wrapper="h1"
          speed={50}
          style={{
            fontSize: "3em",
            display: "inline-block",
            textAlign: "center",
          }}
        />
        <br></br>
        <TypeAnimation
          sequence={[
            "Computer Engineering Undergraduate",
            1000,
            "University of Peradeniya",
            1000,
          ]}
          wrapper="span"
          speed={50}
          style={{
            fontSize: "2em",
            display: "inline-block",
            textAlign: "center",
          }}
          repeat={Infinity}
        />
        {/* Add more animated text elements here */}
      </div>
    </header>
  );
};
