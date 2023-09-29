"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./index.module.css";

const Contact = () => {
  const [emailCopied, setEmailCopied] = useState(false);
  const emailRef = useRef(null);

  const handleCopy = () => {
    const email = emailRef.current.textContent;
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    emailRef.current.classList.add("copied");

    setTimeout(() => {
      setEmailCopied(false);
      emailRef.current.classList.remove("copied");
    }, 2000);
  };

  return (
    <section className={styles.footer}>
      <div>
        <h3>Me mande um Email!</h3>
        <h2>Meu Email:</h2>
        <div>
          <span ref={emailRef}>marioluquinha210@gmail.com</span>
          <button
            className={styles.EmailCopy}
            onClick={handleCopy}
            value={emailCopied}
          >
            copiar
          </button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
