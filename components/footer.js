import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p className={styles.shy}>Let's Connect!</p>
        <p className={styles.shy}>
    (╯°□°）╯︵ ┻━┻ &nbsp;&nbsp;&nbsp;&nbsp;
    <a className={styles.link} href="https://www.linkedin.com/in/parnelltse/" target="_blank" rel="noopener noreferrer">
        LinkedIn
    </a>
    &nbsp;&nbsp;&nbsp;&nbsp; 
    <a className={styles.link} href="mailto:parnell.tse@gmail.com">Email</a>
</p>
          <div className={styles.socialLinks}>
          <p>Parnell Tse - © 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
