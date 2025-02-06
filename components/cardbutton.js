import Image from "next/image";
import Link from "next/link"; 
import styles from "./cardbutton.module.css";

export default function CardButton({ link, bgImage, frontImage, text }) {
  return (
    <div className={styles.container}>
      <Link href={link || "/default-page"} className={styles.linkWrapper}>
        <button className={styles.cardButton}>
          <div className={styles.yoda}>
            {/* Background Image */}
            <Image
              src={bgImage || "/default-bg.png"}
              alt="Background image"
              fill
              className={styles.bgImage}
              priority
              style={{ position: "absolute" }}
            />

            {/* Front Image */}
            <Image
              src={frontImage || "/default-front.png"}
              alt="Front image"
              fill
              className={styles.frontImage}
              unoptimized
              style={{ position: "absolute" }}
            />

            {/* Overlay & Shadow */}
            <div className={styles.overlay}></div>
            <div className={styles.shadow}></div>

            {/* Text (Moved inside .yoda) */}
            <div className={styles.text}>{text || "Default Text"}</div>
          </div>
        </button>
      </Link>
    </div>
  );
}
