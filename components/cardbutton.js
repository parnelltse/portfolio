import Image from "next/image";
import Link from "next/link";
import styles from "./cardbutton.module.css";

export default function CardButton({ link, bgImage, frontImage, text, category }) {
  return (
    <div className={styles.container}>
      <Link href={link || "/default-page"} className={styles.linkWrapper}>
        <button className={styles.cardButton}>
          {/* Image Container */}
          <div className={styles.imageContainer}>
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
          </div>

          {/* Category Section */}
          <div className={styles.categoryContainer}>
            <p className={styles.category}>{category || "Default Category"}</p>
          </div>

          {/* Text Container */}
          <div className={styles.textContainer}>
            <p className={styles.text}>{text || "Default Text"}</p>
          </div>
        </button>
      </Link>
    </div>
  );
}
