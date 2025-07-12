import React from "react";

function GlobalStyles() {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      />
      <style jsx global>{`
        body {
          font-family: "Poppins", sans-serif;
          background-color: #121212;
          color: #ffffff;
          margin: 0;
          padding: 0;
        }
        /* Keep all your other global styles here */
      `}</style>
    </>
  );
}

export default GlobalStyles;
