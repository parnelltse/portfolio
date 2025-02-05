import React, { useState, useEffect } from "react";
import styles from "./body.module.css";
import Link from "next/link";
import CardButton from "./cardbutton";

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
    "I love helping out in the community",
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
      <div className={styles.cool}>
        <p>Cool stuff I've worked on</p>
      </div>
      <div className={styles.griddy}>
        <div>
          <CardButton
            link="/eirene"
            bgImage="/mag mock cover.png"
            frontImage="/bath.png"
            text="Interior Design Magazine"
          />
        </div>
        <div>
          <CardButton
            link="/blackcrown"
            bgImage="/reddie.png"
            frontImage="/123.png"
            text="Drink Design and Mockups"
          />
        </div>
        <div>
          <CardButton
            link="/seiko"
            bgImage="/seiko 2.png"
            frontImage="/seiko3.png"
            text="Seiko Watch Ad"
          />
        </div>
      </div>
    </main>
  );
};

export default Body;
