"use client";

import styles from "./index.module.css";

const Hero = () => {
  function toggleMenu() {
    const menu = document.querySelector(".menu_links");
    const icon = document.querySelector(".hamburger_icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.desktop_nav}>
          <div>
            <ul className={styles.nav_links}>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className={styles.hamburger_menu}>
            <div className={styles.hamburger_icon} onClick={toggleMenu}></div>
            <div className={styles.menu_links}>
              <li></li>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Hero;
