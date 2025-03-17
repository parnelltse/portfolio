import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState } from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";
import OverlayBtn from "@/components/overlaybtn";

export default function About() {
  const [isBlank, setIsBlank] = useState(false); // State to control blank page
  const [startAnimation, setStartAnimation] = useState(false); // New state for animation trigger

  const handleClick = () => {
    setIsBlank(true); // Make the page blank
    console.log("Button clicked, page will go blank for 1 second...");

    // After 1 second, restore the page content and trigger animation
    setTimeout(() => {
      setIsBlank(false); // Restore the content
      setStartAnimation(true); // Start animation
    }, 1000);

    // Reset animation state after another second to allow re-triggering
    setTimeout(() => {
      setStartAnimation(false); // Reset animation state
    }, 2000);
  };

  return (
    <>
      <Header />
      <div className={styles.homeContainer}>
        <main className={isBlank ? styles.blankPage : styles.mainContent}>
          <div className={`${styles.content} ${startAnimation ? styles.falling : ""}`}>
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
              <div>
                <button onClick={handleClick}>Click me!</button>
              </div>
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
