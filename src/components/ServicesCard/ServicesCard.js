import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import styles from "./ServicesCard.module.scss";

const ServicesCard = ({ service }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__icon}>
        <span>
          {service.icon}
        </span>
      </div>
      <div className={styles.card__buy}>
        <h2>{service.title}</h2>
        <p>
          {service.desc}
        </p>
      </div>
      <button>More</button>
    </div>
  );
};

export default ServicesCard;
