import Image from "next/image";
import styles from "./page.module.css";

import Contact from "./Contact";
import Hero from "./Hero";

export default function Home() {
  return (
    <div>
      <Hero />
      <Contact />
    </div>
  );
}
