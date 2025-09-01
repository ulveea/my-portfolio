import React from "react";
import styles from "./style.module.scss";
import { Link } from 'react-router-dom';

const Intro = () => (
  <div className={styles.intro}>
    <h1 className={styles.title}>Hi, I'm Ulviyya Niftiyeva</h1>
    <p className={styles.subtitle}>Front-end Developer & Project Manager</p>
     <Link to="/portfolio" className={styles.cta}>
                        See my projects
     </Link>  </div>
);

export default Intro;
