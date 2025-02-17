import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <a href="/" className={styles.logoLink}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="/" className={styles.navLink}>
                Home
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/about" className={styles.navLink}>
                About
              </a>
            </li>
            <li className={styles.navItem}>
              <a href="/Resume.pdf" className={styles.navLink} target="_blank" rel="noopener noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
