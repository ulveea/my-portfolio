import React from "react";
import styles from "./style.module.scss";

const projects = [
  { title: "Neptun Supermarket", desc: "Project Description:This is a fully responsive internal management panel built with React, React Router, and CSS Modules. The dashboard includes sections for Admin, Banner, Static Information, Branches, and Customer Profiles, all accessible through an intuitive sidebar navigation. The UI/UX design was implemented according to a Figma design, ensuring both functionality and aesthetic appeal. The project demonstrates responsive layouts, component-based architecture, and a well-structured front-end management system suitable for enterprise use. Note: Code sharing is restricted by company policy.", img: "project1.png" },
  { title: "My Portfolio", desc: "Project Description:This is a modern, interactive portfolio website built with React and React Router for smooth navigation between pages. The portfolio consists of Intro, About, and Contact sections. The Contact section features a unique radial popup menu, enhancing user experience with creative interactions. Styling is done with CSS Modules for scoped and maintainable styles. The project demonstrates component-based architecture, routing, and modern front-end design techniques. Demo link: https://my-portfolio-6uvc.vercel.app/", img: "project2.png" },
];

const Portfolio = () => (
  <div className={styles.grid}>
    {projects.map((p, i) => (
      <div key={i} className={styles.card}>
        {/* <img src={p.img} alt={p.title} /> */}
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
      </div>
    ))}
  </div>
);

export default Portfolio;
