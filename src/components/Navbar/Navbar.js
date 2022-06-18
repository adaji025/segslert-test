import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const MenuItems = [
  {
    title: "Home",
    url: "#home",
  },
  {
    title: "About",
    url: "#about",
  },
  {
    title: "Services",
    url: "#services",
  },
  {
    title: "Blog",
    url: "#blog",
  },
  {
    title: "Contact",
    url: "#contact",
  },
];

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const [click, setClick] = useState(0);

  const getClicked = (menu) => {
    for(let i = 0; i < menu.length; i++) {
      console.log(menu[i]);
    }
  }
  return (
    <div className={styles.wrapper}>
      <nav className={styles.navbar}>
        <div className={styles.navbar__logo}>
          <span>The</span>
          <span>Hom</span>
        </div>
        <div className={styles.navbar__menuIcon}>
          {isActive ? (
            <span className="" onClick={() => setIsActive(!isActive)}>
              <AiOutlineClose size={35} />
            </span>
          ) : (
            <span className="" onClick={() => setIsActive(!isActive)}>
              <BiMenuAltRight size={35} />
            </span>
          )}
        </div>
        <ul
          className={`${styles.navbar__menuItem} ${
            isActive && styles.navbar__menuItem__mobile
          }`}
        >
          {MenuItems.map((menu, i) => (
            <li key={i}>
              <a
                className={i === click ? styles.navbar__menuItem__active  : styles.navbar__menuItem__link }
                href={menu.url}
                onClick={() => {
                  setClick(i)
                }}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
        <button>Sign</button>
      </nav>
    </div>
  );
};

export default Navbar;
