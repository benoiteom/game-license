import React from "react";

// components

import Navbar from "components/Navbars/NavbarSmall.js";
import FooterSmall from "components/Footers/FooterSmall.js";

export default function Game({ children }) {
  return (
    <>
      <Navbar transparent />
      <main>
        <section className="relative w-full h-full py-20 pb-40 min-h-screen">
          <div
            className="absolute top-0 w-full h-full bg-black bg-no-repeat bg-full"
            style={{
              backgroundImage: "url('/img/Bg_add-game.png')",
            }}
          ></div>
          {children}
          <FooterSmall absolute />
        </section>
      </main>
    </>
  );
}
