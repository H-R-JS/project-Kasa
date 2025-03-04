import React from "react";
import imgAbout from "../assets/images/imgAbout.png";
import { Banner } from "../assets/Banner";
import { Collapse } from "../assets/Collapse";
import textsAbout from "../../JSONFiles/textsAbout.json";

export const AboutPage = () => {
  return (
    <section className="page about">
      <Banner img={imgAbout} />
      <div className="collapse-container">
        {textsAbout.map((item, index) => {
          return (
            <Collapse key={index} classElement={"about"} title={item.title}>
              {item.text}
            </Collapse>
          );
        })}
      </div>
    </section>
  );
};
