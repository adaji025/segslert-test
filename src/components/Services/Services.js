import React from "react";
import { FaHouseDamage } from "react-icons/fa";
import ServicesCard from "./ServicesCard/ServicesCard";
import styles from "./Services.module.scss";

const Services = () => {
  const dummyServices = [
    {
      icon: <FaHouseDamage size={40} />,
      title: "Buy a Home",
      desc: "It is a long established fact that a render will be distractedreadable content of a page",
    },
    {
      icon: <FaHouseDamage size={40} />,
      title: "Buy a Home",
      desc: "It is a long established fact that a render will be distractedreadable content of a page",
    },
    {
      icon: <FaHouseDamage size={40} />,
      title: "Buy a Home",
      desc: "It is a long established fact that a render will be distractedreadable content of a page",
    },
  ];
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__services}>
        <div className={styles.wrapper__services__title}>
          <h2>What We Do</h2>
          <h1>Our Main Focus</h1>
        </div>
        <div className={styles.wrapper__services__card}>
          {dummyServices.map((service, i) => (
            <ServicesCard service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
