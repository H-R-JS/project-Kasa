import React, { useState } from "react";
import iconLogo from "./icon/LOGO.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  const [classActive, setClassActive] = useState({ home: "", about: "" });

  const url = window.location.href;

  function handleUnderligne() {
    if (url.includes("home")) {
      return setClassActive({ home: "underligne", about: "none" });
    } else if (url.includes("about")) {
      return setClassActive({ home: "none", about: "underligne" });
    }
  }

  useEffect(() => {
    handleUnderligne();
  }, []);

  return (
    <header>
      <img src={iconLogo} alt="L'icone du logo" />
      <nav>
        <ul>
          <li onClick={handleUnderligne}>
            <Link to="/home" className={`link ${classActive.home}`}>
              Accueil
            </Link>
          </li>
          <li onClick={handleUnderligne}>
            <Link to="/about" className={`link ${classActive.about}`}>
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
