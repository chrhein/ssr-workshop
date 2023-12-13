"use client";

import { useState } from "react";

export default function Button() {
  const [buttonClickedText, setButtonClickedText] = useState("");

  const handleClick = () => {
    setButtonClickedText("Knappen er trykket");
  };

  return (
    <>
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
    </>
  );
}
