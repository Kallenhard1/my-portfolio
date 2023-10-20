"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
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
          <div className={styles.logo}>
            <h3>MARIO LUCAS</h3>
            <h1>DESENVOLVEDOR</h1>
          </div>
          <div>
            <ul className={styles.nav_links}>
              <li>
                <a href="#about">Sobre</a>
              </li>
              <li>
                <a href="#experience">Experiencia</a>
              </li>
              <li>
                <a href="#projects">Projetos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
        </nav>
        <nav id="hamburger-nav">
          <div className={styles.logo}>Mario Lucas</div>
          <div className={styles.hamburger_menu}>
            <div className={styles.hamburger_icon} onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className={styles.menu_links}>
              <li>
                <a href="#about" onClick={toggleMenu}>
                  Sobre
                </a>
              </li>
              <li>
                <a href="#experience" onClick={toggleMenu}>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#projects" onClick={toggleMenu}>
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" onClick={toggleMenu}>
                  Contato
                </a>
              </li>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Hero;
