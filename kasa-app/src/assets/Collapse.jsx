import React, { useState } from "react";
import arrow from "./icon/arrow_back.png";

export const Collapse = ({ title, classElement, children }) => {
  const [displayText, setDisplayText] = useState("none");
  function toggleCollapse() {
    if (displayText == "none") {
      setDisplayText("show");
    } else {
      setDisplayText("none");
    }
  }

  return (
    <article className={`collapse ${classElement}`}>
      <div className="coll-title-container">
        <h2>{title}</h2>
        <img
          onClick={toggleCollapse}
          className={`coll-arrow ${displayText}`}
          src={arrow}
          alt="Icone flèche"
        />
      </div>
      <div className={`coll-text-container ${displayText}`}>{children}</div>
    </article>
  );
};
/**array.map((item, index) => {
            return (
              <p key={index} className="coll-value-array">
                {item}
              </p>
            );
          }) */
