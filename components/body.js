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
      <h1 className={styles.heading}>Hi, I'm Parnell!</h1>
      <h2 className={styles.heading2}>
        I’m a UX/UI and Brand Designer. Basically, I’m the wizard who transforms
        ideas into impactful, user-centric solutions.
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
      <div className={styles.griddy2}>
      <div className={styles.card}>
        <CardButton
          link="/aether"
          bgImage="/iphon163.png"
          frontImage="/iphone162.png"
          title="Aether"
          text="Streamlining paperwork for caregivers to reduce administrative burden and improve efficiency"
          category="Case Study - Mobile App"
        />
      </div>
      <div className={styles.card}>
        <CardButton
          link="/budding"
          bgImage="/budding2.png"
          frontImage="/budhome.PNG"
          title="Budding Writers"
          text="Designing and developing a brand identity and website for a grassroots bookstore cafe Budding Writers"
          category="Case Study - Website Design - Branding"
        />
      </div>
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
            title="Eirene"
          />
        </div>
        <div className={styles.card}>
          <CardButton
            link="/blackcrown"
            bgImage="/reddie.png"
            frontImage="/123.png"
            text="Drink Design and Mockups"
            category="Graphic Design - Brand Mockup"
            title="Black Crown Meadery"
          />
        </div>
        <div className={styles.card}>
          <CardButton
            link="/seiko"
            bgImage="/seiko1ad.png"
            frontImage="/seiko3ad.png"
            text="Seiko Watch Ad"
            category="Graphic Design - Advertisement"
            title="Grand Seiko"
          />
        </div>
        <div className={styles.card}>
          <CardButton
            link="/f1"
            bgImage="/f1img.PNG"
            frontImage="/f2.PNG"
            text="Forumla 1 pit stop motion graphics"
            category="Motion Graphics - Video Editing"
            title="Formula 1 Pit stop"
          />
        </div>
      </div>
    </main>
  );
};

export default Body;
