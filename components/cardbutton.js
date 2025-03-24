import Image from "next/image";
import Link from "next/link";
import styles from "./cardbutton.module.css";

export default function CardButton({
  link,
  bgImage,
  frontImage,
  text,
  title,
  category,
}) {
  return (
    <div className={styles.container}>
      <Link href={link || "/default-page"} className={styles.linkWrapper}>
        <button className={styles.cardButton}>
          <div className={styles.imageContainer}>
            <Image
              src={bgImage || "/default-bg.png"}
              alt="Background image"
              fill
              className={styles.bgImage}
              priority
              style={{ position: "absolute" }}
            />

            <Image
              src={frontImage || "/default-front.png"}
              alt="Front image"
              fill
              className={styles.frontImage}
              unoptimized
              style={{ position: "absolute" }}
            />

            <div className={styles.overlay}></div>
            <div className={styles.shadow}></div>
          </div>

          <p className={styles.cardTitle}>{title || "Default Text"}</p>

          <p className={styles.category}>{category || "Default Category"}</p>

          <p className={styles.text}>{text || "Default Text"}</p>
        </button>
      </Link>
    </div>
  );
}
