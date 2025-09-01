import React from "react";
import styles from "./style.module.scss";

const icons = [
  { name: "React", src: "/react.svg", alt: "React" },
  { name: "JavaScript", src: "/javascript.svg", alt: "JavaScript" },
  { name: "TypeScript", src: "/typescript.svg", alt: "TypeScript" },
  { name: "Tailwind CSS", src: "/tailwind.svg", alt: "Tailwind CSS" },
  { name: "HTML5", src: "/html5.svg", alt: "HTML5" },
  { name: "CSS3", src: "/css.svg", alt: "CSS3" },
];

const About = () => (
  <section className={styles.about}>
    <h2>About</h2>
    <p className={styles.description}>
      As a Frontend Developer, I specialize in creating user-centric and interactive web applications by leveraging React, JavaScript, TypeScript, Tailwind CSS, HTML/CSS, and solid design principles to build modern, responsive, and accessible interfaces.
    </p>
    <div className={styles.tools}>
      {icons.map(({ name, src, alt }) => (
        <img key={name} src={src} alt={alt} className={styles.icon} />
      ))}
    </div>
  </section>
  
);

export default About;

