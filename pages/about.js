import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState, useEffect } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import OverlayBtn from "@/components/overlaybtn";
import { motion } from "framer-motion";

const Ball = ({ ball, updateBallPosition }) => {
  return (
    <motion.div
      key={ball.id}
      style={{
        position: "absolute",
        top: ball.y,
        left: ball.x,
        width: ball.size,
        height: ball.size,
        borderRadius: "50%",
        backgroundColor: ball.color,
        pointerEvents: "auto",
      }}
      drag
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth,
        bottom: window.innerHeight - 100,
      }}
      dragElastic={{ y: 0.8 }}
      onDrag={(e, info) => {
        const updatedBall = {
          ...ball,
          x: info.point.x,
          y: info.point.y,
        };
        updateBallPosition(updatedBall);
      }}
      onDragEnd={(e, info) => {
        const updatedBall = {
          ...ball,
          x: info.point.x,
          y: info.point.y,
        };
        updateBallPosition(updatedBall);
      }}
      whileDrag={{
        scale: 5.0,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
    />
  );
};

export default function About() {
  const [isBlank, setIsBlank] = useState(false);
  const [balls, setBalls] = useState([]);

  useEffect(() => {
    const gravity = 0.3;
    const bounceFactor = 0.7;

    const updateBalls = () => {
      setBalls((prevBalls) =>
        prevBalls.map((ball) => {
          const newBall = { ...ball };

          newBall.vy += gravity;

          newBall.y += newBall.vy;
          if (newBall.y + newBall.size > window.innerHeight) {
            newBall.y = window.innerHeight - newBall.size;
            newBall.vy = -newBall.vy * bounceFactor;
          }

          return newBall;
        })
      );

      requestAnimationFrame(updateBalls);
    };

    updateBalls();

    return () => cancelAnimationFrame(updateBalls);
  }, []);

  const handleClick = () => {
    setIsBlank(true);
    setTimeout(() => {
      setIsBlank(false);
      createBall();
    }, 1000);
  };

  const createBall = () => {
    const newBall = {
      id: Date.now(),
      x: Math.random() * window.innerWidth,
      y: 0,
      size: 40,
      color: "green",
      vy: 0,
    };

    setBalls((prevBalls) => [...prevBalls, newBall]);
  };

  const updateBallPosition = (updatedBall) => {
    setBalls((prevBalls) =>
      prevBalls.map((ball) => (ball.id === updatedBall.id ? updatedBall : ball))
    );
  };

  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <main className={isBlank ? styles.blankPage : styles.mainContent}>
          <div className={styles.content}>
            <h2 className={styles.hello}>
              I guess you're here to get to know me 😉
            </h2>
            <div className={styles.ms_char}>
              <Image
                src="/yeti.png"
                alt="yeti"
                width={400}
                height={400}
                className={styles.character}
              />
              <div
                style={{
                  position: "relative",
                  zIndex: 10000,
                }}
              >
                <button
                  onClick={handleClick}
                  style={{
                    position: "relative",
                    zIndex: 10000,
                  }}
                >
                  Click me!
                </button>
              </div>
            </div>

            <div
              className={styles.scene}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                zIndex: 1,
                pointerEvents: "none",
              }}
            >
              {balls.map((ball) => (
                <Ball
                  key={ball.id}
                  ball={ball}
                  updateBallPosition={updateBallPosition}
                />
              ))}
            </div>

            <div className={styles.content_text}>
              <p className={styles.content_text2}>
                My name is Parnell and I am a UX/UI and Graphic Designer from
                Vancouver (yes, the rainy one)! For me, design is about turning
                complex problems into something simple, creative, and
                meaningful, while telling stories through visuals and
                experiences. I am driven by curiosity and always learning about
                new things.
              </p>
              <p className={styles.content_text2}>
                I am currently a student at the British Columbia Institute of
                Technology studying Digital Design and Development. I am
                currently looking for an internship for 2025.
              </p>
              <p className={styles.content_text3}>My Current Favourites</p>
              <p className={styles.content_text4}>
                When I'm not designing or studying, you will find me training
                martial arts or playing video games. Below, you can see what
                some of my current favourites are:
              </p>
              <div className={styles.obssesed}>
                <OverlayBtn
                  title="Favourite Video Games"
                  items={["Marvel Rivals", "Maplestory", "Age of Empires"]}
                  className={styles.btn}
                />
                <OverlayBtn
                  title="Favourite Movies"
                  items={[
                    "Basic Instinct",
                    "Titanic",
                    "Paddington",
                    "Twilight (don't judge me on this one)",
                  ]}
                  className={styles.btn}
                />
                <OverlayBtn
                  title="Favourite Places to get Food"
                  items={[
                    "Via Tevere Pizzeria",
                    "Ba-Le Deli & Bakery",
                    "Angus T Bakery & Cafe",
                    "Chocho Hotpot",
                  ]}
                />
              </div>
              <p className={styles.spotify}>What I'm Currently Listening To</p>
              <iframe
                style={{
                  borderRadius: "12px",
                  width: "100%",
                  height: "100px",
                  border: "none",
                  marginTop: "20px",
                }}
                src="https://open.spotify.com/embed/track/6ZRuF2n1CQxyxxAAWsKJOy?utm_source=generator&theme=0"
                allowFullScreen
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title="Spotify Embed"
                className={styles.player}
              ></iframe>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
