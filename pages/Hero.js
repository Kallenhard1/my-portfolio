"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

const Hero = () => {
  return (
    <div>
      <nav className="hero-section">
        <h2>LOGO</h2>
        <h3>HOME</h3>
        <h3>ABOUT</h3>
        <h3>PROJECTS</h3>
        <h3>CONTACT</h3>
      </nav>
    </div>
  );
};

export default Hero;
