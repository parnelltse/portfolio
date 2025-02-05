import Image from "next/image";
import Link from "next/link"; // Import Link from Next.js
import styles from "./cardbutton.module.css";

export default function CardButton({ link, bgImage, frontImage, text }) {
  return (
    <div className={styles.container}>
      {/* Wrap the button with Link for navigation */}
      <Link href={link || "/default-page"}>
        {" "}
        {/* Use default-page if link is not provided */}
        <button className={styles.cardButton}>
          <div className={styles.yoda}>
            {/* Background Image */}
            <Image
              src={bgImage || "/default-bg.png"} // Default background image if not provided
              alt="Background image"
              fill
              className={styles.bgImage}
              priority
              style={{ position: "absolute" }}
            />

            {/* Front Image */}
            <Image
              src={frontImage || "/default-front.png"} // Default front image if not provided
              alt="Front image"
              fill
              className={styles.frontImage}
              unoptimized
              style={{ position: "absolute" }}
            />
            {/* Overlay & Shadow */}
            <div className={styles.overlay}></div>
            <div className={styles.shadow}></div>
            {/* Text at the bottom */}
            <div className={styles.text}>{text || "Default Text"}</div>
          </div>
        </button>
      </Link>
    </div>
  );
}
