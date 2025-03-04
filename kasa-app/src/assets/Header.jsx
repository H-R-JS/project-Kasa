import React, { useState } from "react";
import iconLogo from "./icon/LOGO.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export const Header = () => {
  const [classActive, setClassActive] = useState({
    home: "none",
    about: "none",
  });

  const location = useLocation();
  const url = window.location.href;

  function handleUnderligne() {
    if (url.includes("home")) {
      return setClassActive({ home: "underligne", about: "none" });
    } else if (url.includes("about")) {
      return setClassActive({ home: "none", about: "underligne" });
    } else {
      return setClassActive({ home: "none", about: "none" });
    }
  }

  useEffect(() => {
    handleUnderligne();
  }, [location.pathname]);

  return (
    <header>
      <img className="header-logo" src={iconLogo} alt="L'icone du logo" />
      <nav>
        <ul>
          <li onClick={handleUnderligne}>
            <Link to="/home" className={`link ${classActive.home}`}>
              Accueil
            </Link>
          </li>
          <li onClick={handleUnderligne}>
            <Link to="/about" className={`link ${classActive.about}`}>
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
