import React from "react";
import Title from "./Title";
import { FaBeer, FaSpa, FaUmbrellaBeach, FaBusAlt } from "react-icons/fa";

class Services extends React.Component {
  state = {
    services: [
      {
        icon: FaBeer,
        title: "Strongest Beer",
        info:
          "It is very important to take care of the patient, and the patient will be followed, but this is the time when they fall into a great deal of pain and suffering.",
      },
      {
        icon: FaSpa,
        title: "Endless Spa ",
        info:
          "It is very important to take care of the patient, and the patient will be followed, but this is the time when they fall into a great deal of pain and suffering.",
      },
      {
        icon: FaUmbrellaBeach,
        title: "Beach View",
        info:
          "It is very important to take care of the patient, and the patient will be followed, but this is the time when they fall into a great deal of pain and suffering.",
      },
      {
        icon: FaBusAlt,
        title: "Free Shuttle",
        info:
          "It is very important to take care of the patient, and the patient will be followed, but this is the time when they fall into a great deal of pain and suffering.",
      },
    ],
  };

  render() {
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="sercive">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}

export default Services;
