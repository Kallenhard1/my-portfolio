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
    </div>
  );
}

export default Body;
