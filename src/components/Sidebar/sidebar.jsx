import React from "react";
import { Link, Outlet } from "react-router-dom";
import styles from "./style.module.scss";

function Sidebar() {
  return (
    <div className={styles.container}>
      <div className={styles.leftSidebar}>
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
          </ul>
        </nav>
      </div>

      <div className={styles.mainContent}>
        <Outlet /> 
      </div>

      <div className={styles.rightSidebar}>
        <a href="mailto:email@example.com" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-envelope" />
        </a>
        <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" />
        </a>
        {/* Başqa contact iconlar */}
      </div>
    </div>
  );
}

export default Sidebar;
