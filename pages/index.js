import React from "react";

import Hero from "./Hero.js";
import Contact from "./Contact.js";
import Body from "./Body.js";

function Home() {
  return (
    <div>
      <h1>Luana, Eu Te Amo! Se você me ama, da uma risadinha</h1>
      <p>------------------------------</p>
      <Hero />
      <Body />
      <p>------------------------------</p>
      <Contact />
    </div>
  );
}

export default Home;
