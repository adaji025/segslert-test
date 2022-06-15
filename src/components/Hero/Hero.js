import React from "react";
import styles from "./Hero.module.scss";
import { FaMapMarkerAlt } from "react-icons/fa";

import house from "../../assets/images/house.png";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.hero}>
        <div className={styles.hero__text}>
          <h1>
            Find Your Best <br /> Smart <span>Real</span> <br />{" "}
            <span>Estate</span>{" "}
          </h1>
        </div>
        <div className={styles.hero__image}>
          <img src={house} alt="" />
        </div>
      </div>
      <div className={styles.wrapper__desc}>
        <div className={styles.wrapper__desc__location}>
          <span>
            <FaMapMarkerAlt size={20} />
          </span>
          <div className={styles.wrapper__desc__location__border}>
            <select name="" id="">
              <option value="">Location</option>
              <option value="">LA</option>
              <option value="">NY</option>
              <option value="">ABJ</option>
            </select>
          </div>
        </div>
        <div className={styles.wrapper__desc__property}>
        <span>
            <FaMapMarkerAlt size={20} />
          </span>
          <div className={styles.wrapper__desc__location__border}>
            <select name="" id="">
              <option value="">Property Type</option>
              <option value="">LA</option>
              <option value="">NY</option>
              <option value="">ABJ</option>
            </select>
          </div>
        </div>
        <div className={styles.wrapper__desc__price}>
        <span>
            <FaMapMarkerAlt size={20} />
          </span>
          <div className={styles.wrapper__desc__location__border}>
            <select name="" id="">
              <option value="">Max Price</option>
              <option value="">LA</option>
              <option value="">NY</option>
              <option value="">ABJ</option>
            </select>
          </div>
        </div>
        <div className={styles.wrapper__desc__search}>
          <button>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
