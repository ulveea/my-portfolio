import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./style.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.menu}>
        <NavLink to="/intro" className={({ isActive }) => (isActive ? styles.active : "")}>
          Intro
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? styles.active : "")}>
          About
        </NavLink>
        <NavLink to="/portfolio" className={({ isActive }) => (isActive ? styles.active : "")}>
          Portfolio
        </NavLink>
      </div>

      <div className={styles.icons}>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="fa fa-github" />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
