import React, { useState } from 'react';
import styles from './style.module.scss';
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa';

const ContactMenu = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
  };

  return (
    <div className={styles.navigation}>
      <div
        className={`${styles.menuToggle} ${active ? styles.active : ''}`}
        onClick={toggleMenu}
      >
        <img
          src={active ? "/close.svg" : "/hand-cursor.svg"}
          alt="Toggle icon"
          className={styles.icon}
        />
      </div>

      <ul className={`${styles.menu} ${active ? styles.active : ''}`}>
        <li style={{ '--index': 3 }}>
          <a href="tel:+994509636767" title="Zəng et">
            <FaPhone />
          </a>
        </li>
        <li style={{ '--index': 2 }}>
          <a href="mailto: ulveeyyaniftiyeva@gmail.com" title="Email göndər">
            <FaEnvelope />
          </a>
        </li>
        <li style={{ '--index': 1 }}>
          <a
            href="https://www.linkedin.com/in/ulviyya-niftiyeva"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactMenu;
