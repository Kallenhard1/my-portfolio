import Contact from "./Contact";
import styles from "./index.module.css";

function Body() {
  return (
    <div className={styles.container}>
      <h3> [ EM CONSTRUÇÃO ] </h3>
      <p>
        Olá, seja bem vindo(a) a meu portfolio! No momento o site está em fase
        de construção, mas se quiser ver meus projetos, deixarei o link do meu
        Github e Linkedin logo abaixo:
      </p>
      <h4>
        GitHub: <a href="https://github.com/Kallenhard1">/Kallenhard1</a>
      </h4>
      <h4>
        Linkedin:{" "}
        <a href="https://www.linkedin.com/in/mario-lucash/">@mario-lucash</a>
      </h4>
      <section id="profile">
        <div className={styles.section__pic_ontainer}>
          <img
            src="./assets/profile-pic.png"
            alt="Mario Lucas profile picture"
          />
        </div>
        <div className={styles.section__text}>
          <p className={styles.section__text__p1}>olá, eu sou</p>
          <h1 className={styles.title}>Mario Lucas</h1>
          <p className={styles.section__text__p2}>DESENVOLVEDOR</p>
          <div className={styles.btn_container}>
            <button
              className={styles.btn_color__2}
              onclick="window.open('./assets/resume-example.pdf')"
            >
              Baixar CV
            </button>
            <button
              className={styles.btn_color__1}
              onclick="location.href='./#contact'"
            >
              Contato
            </button>
          </div>
          <div id="socials-container">
            <img
              src="./assets/linkedin.png"
              alt="Meu Linkedin"
              className={styles.icon}
              onclick="location.href='https://linkedin.com/in/mario-lucash'"
            />
            <img
              src="./assets/github.png"
              alt="Meu GitHub"
              className={styles.icon}
              onclick="location.href='https://github.com/Kallenhard1'"
            />
          </div>
        </div>
      </section>
      <section id="about">
        <p className={styles.section__text__p1}>Saiba Mais</p>
        <h1 className={styles.title}>Sobre Mim</h1>
        <div className={styles.section_container}>
          <div className={styles.section__pic_container}>
            <img
              src="./assets/about-pic.png"
              alt="Profile picture"
              className={styles.about_pic}
            />
          </div>
          <div className={styles.about_details_container}>
            <div className={styles.about_containers}>
              <div className={styles.details_container}>
                <img
                  src="./assets/experience.png"
                  alt="Experience icon"
                  className={styles.icon}
                />
                <h3>Experiencia</h3>
                <p>
                  2+ anos <br />
                  Frontend Development
                </p>
              </div>
              <div className={styles.details_container}>
                <img
                  src="./assets/education.png"
                  alt="Education icon"
                  className={styles.icon}
                />
                <h3>Formação</h3>
                <p>
                  Analise e Desnvolvimento de Dados (Cursando)
                  <br />
                  Bacharelado em Publicidade e Propaganda
                </p>
              </div>
            </div>
            <div className={styles.text_container}>
              <p>
                Olá, seja bem vindo(a) a meu portfolio! No momento o site está
                em fase de construção, mas se quiser ver meus projetos, deixarei
                o link do meu Github e Linkedin logo abaixo:
              </p>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className={styles.arrow}
          onclick="location.href='./#experience'"
        />
      </section>
      <section id="experience">
        <p className={styles.section__text__p1}>Explore Minha</p>
        <h1 className={styles.title}>Experiencia</h1>
        <div className={styles.experience_details_container}>
          <div className={styles.about_containers}>
            <div className={styles.details_container}>
              <h2 className={styles.experience_sub_title}>DESENVOLVEDOR</h2>
              <div className={styles.article_container}>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>HTML</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>CSS</h3>
                    <p>Experienced</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>SASS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>JavaScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>TypeScript</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Material UI</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
            <div className={styles.details_container}>
              <h2 className={styles.experience_sub_title}>
                Frontend Development
              </h2>
              <div className={styles.article_container}>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>PostgreSQL</h3>
                    <p>Basic</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Node JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Express JS</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
                <article>
                  <img
                    src="./assets/checkmark.png"
                    alt="Experience icon"
                    className={styles.icon}
                  />
                  <div>
                    <h3>Git</h3>
                    <p>Intermediate</p>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          className={styles.arrow}
          onclick="location.href='./#projects'"
        />
      </section>
      <section id="projects">
        <p className={styles.section__text__p1}>Veja meus recentes</p>
        <h1 className={styles.title}>Projetos</h1>
        <div className={styles.details_container}>
          <div className={styles.about_containers}>
            <div className={styles.color_container}>
              <div className={styles.article_container}>
                <img
                  src="./assets/project-1.png"
                  alt="Project 1"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Projeto Um</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-2.png"
                  alt="Project 2"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Projeto Dois</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
            <div class="details-container color-container">
              <div class="article-container">
                <img
                  src="./assets/project-3.png"
                  alt="Project 3"
                  class="project-img"
                />
              </div>
              <h2 class="experience-sub-title project-title">Projeto Três</h2>
              <div class="btn-container">
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Github
                </button>
                <button
                  class="btn btn-color-2 project-btn"
                  onclick="location.href='https://github.com/'"
                >
                  Live Demo
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="./assets/arrow.png"
          alt="Arrow icon"
          class="icon arrow"
          onclick="location.href='./#contact'"
        />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Body;
