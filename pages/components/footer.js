import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.shy}>Don't be shy! Drop me a line ;)</p>
        <div className={styles.socialLinks}>
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/parnelltse/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p>(778) 919 - 3318</p>
          <p>parnell.tse@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
