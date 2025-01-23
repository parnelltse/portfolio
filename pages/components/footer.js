import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.socialLinks}>
          <p>Parnell Tse - © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
