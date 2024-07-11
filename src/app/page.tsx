import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <a href="./oppgave" className={styles.card} rel="noopener noreferrer">
        <h2>
          Oppgave 1 <span>-&gt;</span>
        </h2>
      </a>
    </main>
  );
}
