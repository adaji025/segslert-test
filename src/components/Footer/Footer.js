import React from "react";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__first}>
          <div className={styles.footer__first__logo}>
            <span>The</span>
            <span>Hom</span>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            aspernatur, veritatis aliquam reprehenderit officiis incidunt! Quis
            magnam aliquam facere est?
          </p>
        </div>
        <div className={styles.footer__second}>
          <h1>Quick Links</h1>
          <div className={styles.footer__second__links}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <div className={styles.footer__second}>
          <h1>Services</h1>
          <div className={styles.footer__second__links}>
            <a href="#">About Us</a>
            <a href="#">Blog & Articles</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Contact Us</a>
          </div>
        </div>
        <div className={styles.footer__third}>
          <h1>Contact</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            aspernatur, veritatis aliquam reprehenderit officiis incidunt! Quis
            magnam aliquam facere est?
          </p>
        </div>
      </div>
    </footer>
  );
};
