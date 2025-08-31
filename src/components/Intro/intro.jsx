import React from "react";
import styles from "./style.module.scss";

const Intro = () => (
  <div className={styles.intro}>
    <h1 className={styles.title}>Hi, I'm Ulviyya Niftiyeva</h1>
    <p className={styles.subtitle}>Front-end Developer & Project Manager</p>
    <a href="/portfolio" className={styles.cta}>See my projects</a>
  </div>
);

export default Intro;
