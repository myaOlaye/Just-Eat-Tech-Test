import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaVPtC2mM7RaudjC4Pu5ejH5YL7a_NUHmhZg&s"
      ></img>
    </header>
  );
};

export default Header;
