import React, { useState, useEffect } from "react";
import styles from "./body.module.css";
import Link from "next/link";

const Body = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // List of roles to animate
  const roles = [
    "I am a UX/UI & Graphic Designer",
    "I am a problem solver",
    "I am driven by curiosity",
    "I love pizza",
    "I am a croissant connoisseur",
    "I enjoy watching Formula 1",
    "I want to make a difference"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Hi! My name is Parnell</h1>
      <div className={styles.roleContainer}>
        <span className={styles.role} key={roleIndex}>
          {roles[roleIndex]}
        </span>
      </div>
      <div className={styles.buttonContainer}>
        <Link href="/eirene">
          <button className={styles.button}>Go to Eirene</button>
        </Link>
      </div>
    </main>
  );
};

export default Body;
