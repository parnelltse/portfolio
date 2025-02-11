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
          <h2 className={styles.hello}>Hey Hi Hello!👋</h2>
          <div className={styles.ms_char}>
            <Image
              src="/ms.png"
              alt="character"
              width={325}
              height={300}
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
              I am currently a student at the British Columnbia Institute of
              Technology studying Digital Design and Development. I am currently
              looking for an internship for 2025.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
