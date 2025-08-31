import React from "react";
import styles from "./style.module.scss";

const projects = [
  { title: "Layihə 1", desc: "Açıqlama", img: "project1.png" },
  { title: "Layihə 2", desc: "Açıqlama", img: "project2.png" },
  // əlavə layihələr...
];

const Portfolio = () => (
  <div className={styles.grid}>
    {projects.map((p, i) => (
      <div key={i} className={styles.card}>
        <img src={p.img} alt={p.title} />
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    ))}
  </div>
);

export default Portfolio;
