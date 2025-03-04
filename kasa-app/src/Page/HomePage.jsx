import React from "react";
import { Banner } from "../assets/Banner";
import { Card } from "../assets/Card";
import imgHome from "../assets/images/imgHome.png";
import data from "../../JSONFiles/data.json";

export const HomePage = () => {
  const text = "Chez vous, partout et ailleurs";

  return (
    <section className="page home">
      <Banner text={text} img={imgHome} />
      <div className="cards-container">
        {data.map((item, index) => {
          return (
            <Card
              key={index}
              title={item.title}
              cover={item.cover}
              object={item}
            />
          );
        })}
      </div>
    </section>
  );
};
