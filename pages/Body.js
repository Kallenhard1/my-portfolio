import Contact from "./Contact";
import styles from "./index.module.css";

function Body() {
  return (
    <div className={styles.container}>
      <h3 className={styles.em_construcao}> [ EM CONSTRUÇÃO ] </h3>
      <section id="profile">
        <div className={styles.section__pic_ontainer}></div>
        <div className={styles.section__text}>
          <p className={styles.section__text__p1}>olá, eu sou</p>
          <h1 className={styles.title}>Mario Lucas</h1>
          <p className={styles.section__text__p2}>DESENVOLVEDOR</p>
          <div className={styles.btn_container}></div>
          <div id="socials-container">
            <h4>
              GitHub:{" "}
              <a
                href="https://github.com/Kallenhard1"
                onclick="location.href='https://linkedin.com/in/mario-lucash'"
              >
                /Kallenhard1
              </a>
            </h4>
            <h4>
              Linkedin:{" "}
              <a
                href="https://www.linkedin.com/in/mario-lucash/"
                onclick="location.href='https://linkedin.com/in/mario-lucash'"
              >
                @mario-lucash
              </a>
            </h4>
          </div>
        </div>
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
