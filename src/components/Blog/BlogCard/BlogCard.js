import React from "react";
import { FaArrowRight } from 'react-icons/fa'
import styles from "./BlogCard.module.scss";

import house2 from "../../../assets/images/house2.jpg";

const BlogCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles.card__image}>
        <img src={house2} alt="" />
      </div>
      <div className={styles.card__desc}>
        <h2>Why Live in London</h2>
        <p>May 05, 2021</p>
        <span>Realtors, you know cant be good at your jobs if you not pluged into the industry</span>
        <div className={styles.card__desc__read}>
            <p>Read More</p>
            <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
