import React from "react";

import styles from "./index.module.css";

import Hero from "./Hero.js";
import Contact from "./Contact.js";
import Body from "./Body.js";

function Home() {
  return (
    <div className={styles.body}>
      <Hero />
      <Body />
    </div>
  );
}

export default Home;
