import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ServerComponent() {
  const [buttonClickedText, setButtonClickedText] = useState("");

  const handleClick = () => {
    setButtonClickedText("Knappen er trykket");
  };

  return (
    <main
      style={{
        marginTop: "2rem",
        marginLeft: "2rem",
        marginBottom: "2rem",
      }}
    >
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          width: "70%",
        }}
      >
        <h1 style={{ fontSize: "24px" }}>
          Hei hei! Jeg er en komponent som blir rendret på server
        </h1>
        <h2>Hva er en server komponent?</h2>
        <p>
          På serveren kan vi generere HTML for å tillate brukere å se siden
          umiddelbart, uten å vente på at klienten skal laste ned, analysere og
          kjøre JavaScriptet som trengs for å vise siden.
          Søkemotoroptimalisering: HTML-en kan brukes av søkemotorroboter til å
          indeksere sidene dine.
        </p>
        <Image
          src={"/klient.webp"}
          width="1100"
          height="1000"
          alt={"klientkomponent"}
        />

        <button
          onClick={handleClick}
          style={{
            backgroundColor: "white;",
            color: "black;",
            padding: "1rem;",
            width: "150px",
            borderRadius: "5px",
          }}
        >
          Trykk meg!
        </button>
        {buttonClickedText && (
          <span style={{ color: "red;" }}>{buttonClickedText}</span>
        )}

        <Link
          style={{
            background: "white;",
            padding: "1rem;",
            color: "red;",
            textDecoration: "underline;",
            borderRadius: "5px",
          }}
          href="https://nextjs.org/docs/app/building-your-application/rendering/client-components"
        >
          Her kan du lese mer om klientkomponenter hvis du vil vite mer
        </Link>
      </section>
    </main>
  );
}
