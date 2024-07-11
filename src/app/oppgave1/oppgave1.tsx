"use server";

import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

async function Oppgave1() {
  return (
    <main>
      <section className={styles.section}>
        <h1 style={{ fontSize: "24px" }}>
          Hei hei! Jeg er en komponent som blir rendret på server
        </h1>
        <h2>Hva er en serverkomponent?</h2>
        <p>
          På serveren kan vi generere HTML for å tillate brukere å se siden
          umiddelbart, uten å vente på at klienten skal laste ned, analysere og
          kjøre JavaScriptet som trengs for å vise siden.
          Søkemotoroptimalisering: HTML-en kan brukes av søkemotorroboter til å
          indeksere sidene dine.
        </p>
        <Image
          src={"/server.png"}
          width="500"
          height="400"
          alt={"serverkomponent"}
        />
        <Link
          className={styles.link}
          href="https://nextjs.org/docs/app/building-your-application/rendering/server-components"
        >
          Her kan du lese mer om serverkomponenter hvis du vil vite mer
        </Link>
      </section>
    </main>
  );
}

export default Oppgave1;
