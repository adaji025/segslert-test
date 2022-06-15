import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import styles from "./PropertyCard.module.scss";

import house1 from "../../../assets/images/house1.jpg";

const PropertyCard = ({ ppt }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={house1} alt="" />
        <div className={styles.card__image__sale}>
          <p>For Sale</p>
        </div>
      </div>
      <div className={styles.card__desc}>
        <div className={styles.card__desc__duplex}>
          <h2>Duplex Appartment</h2>
          <span>$400,000</span>
        </div>
        <div className={styles.card__desc__location}>
          <FaMapMarkerAlt size={20} />
          <span>Gwarimpa, Abuja</span>
        </div>
        <div className={styles.card__desc__icon}>
          <div className={styles.card__desc__icon__first}>
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>
            <span>4</span>
          </div>
          <div className={styles.card__desc__icon__first}>
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>
            <span>4</span>
          </div>
          <div className={styles.card__desc__icon__first}>
            <span>
              <AiOutlineShoppingCart size={20} />
            </span>
            <span>1200sqft</span>
          </div>
        </div>
        <hr />
        <div className={styles.card__desc__profile}>
          <div className={styles.card__desc__profile__picture}>
            <img src={house1} alt="" />
            <p>Adaji Mukhtar</p>
          </div>
          <div className={styles.card__desc__profile__icon}>
          <FaMapMarkerAlt size={20} /><FaMapMarkerAlt size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
