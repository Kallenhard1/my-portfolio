"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import styles from "./page.module.css";

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
    <section className="contactMeSection">
      <div className="container">
        <h2>Me mande um Email!</h2>
        <input type="text" placeholder="Coloque seu melhor Email aqui." />
        <h2>Meu Email:</h2>
        <div className="EmailCopy">
          <span ref={emailRef}>marioluquinha210@gmail.com</span>
          <button onClick={handleCopy}>copiar</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
