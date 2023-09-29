"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const Hero = () => {
  return (
    <div>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <h3>MARIO LUCAS</h3>
          <h1>DESENVOLVEDOR</h1>
        </nav>
      </header>
    </div>
  );
};

export default Hero;
