"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function ClientComponent() {
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
          Hei hei! Jeg er en komponent som blir rendret på klienten
        </h1>
        <h2>Hva er en klientkomponent?</h2>
        <p>
          Det er når en bruker ber om en nettside fra en server, serveren svarer
          og sender data til nettleseren. Nettleseren laster ned JavaScript og
          bygger nettsiden. Dette betyr at nettleseren må installere all
          nødvendig JavaScript for å bygge nettsiden, som npm-pakker. Dette kan
          ta mye lastetid og gjør brukeropplevelsen dårligere...
        </p>
        <Image
          src={"/klient.webp"}
          width="500"
          height="300"
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
            width: "600px",
          }}
          href="https://nextjs.org/docs/app/building-your-application/rendering/client-components"
        >
          Trykk her for å lese mer om klientkomponenter hvis du vil vite mer...
        </Link>
      </section>
    </main>
  );
}
