import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={`${styles.nav_container} container`}>
          <a href="#" className={styles.nav_logo}>
            Traveler
          </a>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <a href="#" className={styles.nav_link}>
                Create Post
              </a>
              <a href="#" className={styles.nav_link}>
                Dashboard
              </a>
            </li>
            <a href="#" className={styles.nav_btn}>
              Login
            </a>
            <a href="#" className={styles.nav_btn}>
              Register
            </a>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
