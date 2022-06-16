import React from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaMapMarkerAlt, FaHeart, FaHdd, FaHourglassEnd } from "react-icons/fa";
import { AiOutlineShareAlt } from "react-icons/ai";
import styles from "./FeaturedCard.module.scss";
import house1 from "../../../assets/images/house1.jpg";

const FeaturedCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__text}>
        <p>$20,000</p>
        <h2>Gbayi Villa on Romi Avenue</h2>
        <div className={styles.card__text__location}>
          <FaMapMarkerAlt size={20} />
          <span>Gwarimpa, Abuja</span>
        </div>
        <div className={styles.card__text__icon}>
          <div className={styles.card__text__icon__first}>
            <span>
              <FaHdd size={20} />
            </span>
            <span>4</span>
          </div>
          <div className={styles.card__text__icon__first}>
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>
            <span>4</span>
          </div>
          <div className={styles.card__text__icon__first}>
            <span>
              <FaHourglassEnd size={20} />
            </span>
            <span>1200sqft</span>
          </div>
        </div>
        <div className={styles.card__text__hr}>
          <hr />
        </div>
        <div className={styles.card__text__profile}>
          <div className={styles.card__text__profile__picture}>
            <img src={house1} alt="" />
            <p>Adaji Mukhtar</p>
          </div>
          <div className={styles.card__text__profile__icon}>
            <FaHeart size={20} />
            <AiOutlineShareAlt size={20} />
          </div>
        </div>
      </div>
      <div className={styles.card__image}>
        <img src={house1} alt="house" />
      </div>
    </div>
  );
};

export default FeaturedCard;
