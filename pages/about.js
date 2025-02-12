import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

export default function About() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <div className={styles.content}>
          <h2 className={styles.hello}>I guess you're here to get to know me 😉</h2>
          <div className={styles.ms_char}>
            <Image
              src="/yeti.png"
              alt="yeti"
              width={400}
              height={400}
              className={styles.character}
            />
          </div>
          <div className={styles.content_text}>
            <p className={styles.content_text2}>
              My name is Parnell and I am a UX/UI and Graphic Designer hailing
              from the rainy city of Vancouver! I am passionate about creating
              simple yet creative solutions for complex problems and driven by
              curiosity.
            </p>
            <p className={styles.content_text2}>
              I am currently a student at the British Columbia Institute of
              Technology studying Digital Design and Development. I am currently
              looking for an internship for 2025.
            </p>
            <p className={styles.content_text3}>My Current Favourites</p>
            <p className={styles.content_text4}>
              When I'm not designing or studying, you will find me training
              martial arts or playing video games. Below, you can see what some
              of my current favourites are:
            </p>
              <ul className={styles.obssesed}>
             <li><strong>Food:</strong> Pizza, Croissants, Banh Mi</li> 
              <li><strong>Video Games:</strong> Marvel Rivals, MapleStory</li>
              <li><strong>Martial arts:</strong> Brazilian Jiu Jitsu, Muay Thai</li>
              </ul>
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
            ></iframe>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}