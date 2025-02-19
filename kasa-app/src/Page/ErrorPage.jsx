import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <section className="page error">
      <h2>404</h2>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/home" className="error-link-back">
        Retourner sur la page d'accueil
      </Link>
    </section>
  );
};
