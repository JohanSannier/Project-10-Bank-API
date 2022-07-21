import React from "react";
import { Link } from "react-router-dom";

function Error(props) {
  return (
    <section className="error-page">
      <p>La page n'existe pas.</p>
      <Link to="/">Retourner à l'accueil</Link>
    </section>
  );
}

export default Error;
