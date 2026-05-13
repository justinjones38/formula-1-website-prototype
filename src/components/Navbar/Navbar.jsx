import styles from "./Navbar.module.css";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import useWindowWidth from "../../hooks/useWindowWidth";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

library.add(fas, far, fab);

export default function Navbar() {
  // Setting state to track whether hamburger menu is open or closed
  const [hamburgerButton, setHamburgerButton] = useState(false);
  const { windowWidth } = useWindowWidth();

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.navTitle}>
        <Link to="." className={styles.navTitleLink}>
          F1 Pit Wall
        </Link>
      </h1>
      <button
        className={styles.hamburgerMenu}
        onClick={() => setHamburgerButton(true)}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" />
      </button>
      <div
        className={
          hamburgerButton && windowWidth < 600
            ? `${styles.navMenu} ${styles.show}`
            : `${styles.navMenu}`
        }
        onClick={() => setHamburgerButton(false)}
      >
        <button
          className={styles.closeButton}
          onClick={() => setHamburgerButton(false)}
        >
          <FontAwesomeIcon icon="fa-solid fa-x" />
        </button>
        <ul className={styles.navItems}>
          <li className={styles.navItem}>
            <NavLink
              to="calendar"
              className={({ isActive }) =>
                isActive
                  ? `${styles["navLink"]} ${styles["navLinkActive"]}`
                  : `${styles["navLink"]}`
              }
            >
              Calendar
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="standings"
              className={({ isActive }) =>
                isActive
                  ? `${styles["navLink"]} ${styles["navLinkActive"]}`
                  : `${styles["navLink"]}`
              }
            >
              Standings
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="drivers"
              className={({ isActive }) =>
                isActive
                  ? `${styles["navLink"]} ${styles["navLinkActive"]}`
                  : `${styles["navLink"]}`
              }
            >
              Drivers
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
