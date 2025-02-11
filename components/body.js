import React, { useState, useEffect } from "react";
import styles from "./body.module.css";
import Link from "next/link";
import CardButton from "./cardbutton";

const Body = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  // List of roles to animate
  const roles = [
    "Pizza Lover 🍕",
    "Croissant Connoisseur 🥐",
    "Curious Thinker 🧠",
    "Martial Arts Enthusiast 🥋",
    "Formula 1 Enjoyer 🏎️",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <main className={styles.container}>
      <h1 className={styles.heading}>Hi! My name is Parnell</h1>
      <h2 className={styles.heading2}>
        I’m a UX/UI and Brand Designer. Basically, I’m the wizard who turns
        ideas into creative, user-friendly experiences.
      </h2>
      <h2 className={styles.heading3}>I am also a...</h2>
      <div className={styles.roleContainer}>
        <span className={styles.role} key={roleIndex}>
          {roles[roleIndex]}
        </span>
      </div>
      <div className={styles.featureText}>
        <p className={styles.feature_text}>Featured Work</p>
      </div>
      <div className={styles.card}>
        <CardButton
          link="/aether"
          bgImage="/iphon163.png"
          frontImage="/iphone162.png"
          text="Streamlining paperwork for caregivers to reduce administrative burden and improve efficiency"
          category="Case Study - Mobile App"
        />
      </div>
      <div className={styles.cool}>
        <p className={styles.feature_text}>Cool stuff I've worked on</p>
      </div>
      <div className={styles.griddy}>
        <div className={styles.card}>
          <CardButton
            link="/eirene"
            bgImage="/mag mock cover.png"
            frontImage="/bath.png"
            text="Interior Design Magazine"
            category="Editorial Design - Magazine"
          />
        </div>
        <div className={styles.card}>
          <CardButton
            link="/blackcrown"
            bgImage="/reddie.png"
            frontImage="/123.png"
            text="Drink Design and Mockups"
            category="Graphic Design - Brand Mockup"
          />
        </div>
        <div className={styles.card}>
          <CardButton
            link="/seiko"
            bgImage="/seiko 2.png"
            frontImage="/seiko3.png"
            text="Seiko Watch Ad"
            category="Graphic Design - Advertisement"
          />
        </div>
      </div>
    </main>
  );
};

export default Body;
