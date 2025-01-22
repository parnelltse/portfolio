import React, { useState, useEffect } from "react";
import styles from "./body.module.css";

const Body = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = ["UX/UI", "Graphic", "Product", "Brand", "Digital"];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className={styles.textBlock}>
        <h1 className={styles.h1}>
          Hi! My name is Parnell
          <br />
          <span className={styles.line}>
            I am a{" "}
            <span key={roleIndex} className={styles.role}>
              {roles[roleIndex]} Designer
            </span>
          </span>
        </h1>
      </section>
    </main>
  );
};

export default Body;
