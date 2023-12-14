import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <a href="./oppgave" className={styles.card} rel="noopener noreferrer">
        <h2>
          Oppgave <span>-&gt;</span>
        </h2>
      </a>
    </main>
  );
}
