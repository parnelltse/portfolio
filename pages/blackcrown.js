import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Blackcrown.module.css";
import Image from "next/image";

export default function BlackCrown() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <div className={styles.imageContainer2}>
          <Image
            src="/123.png"
            alt="blackcrown"
            width={825}
            height={600}
            className={styles.mag}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>BlackCrown Meadery</h1>
          <h4 className={styles.subhead}>
            Designing drink proofs and client mockups
          </h4>
          <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              The design process for BlackCrown Meadery focused on creating a
              bold visual identity inspired by royal battles, featuring a modern
              crown emblem in black, white, and crimson for the logo, while the
              can’s colour represents the mead’s flavor. The bilingual
              English-French design adheres to Canadian guidelines, with a
              sophisticated palette conveying power and luxury. This approach
              targets premium beverage consumers seeking a drink that embodies
              legacy, craftsmanship, and a rich sensory experience.
            </p>
            <InfoBlock
              className={styles.role}
              items={[
                {
                  title: "Year",
                  bodyText: "October 2024 – October 2024",
                },
                {
                  title: "Role",
                  bodyText: "Designer, Researcher",
                },
                {
                  title: "Skills",
                  bodyText:
                    "Photoshop, Graphic Design, Typography, Photo editing, Research",
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.captionContent}>
          <p className={styles.caption}>Drink can mockups</p>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <Image
              src="/123.png"
              alt="mock1"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image1}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/1234.png"
              alt="mock2"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/12345.png"
              alt="mock3"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
        </div>
        <div className={styles.captionContent}>
          <p className={styles.caption}>Dielines</p>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <Image
              src="/reddie.png"
              alt="dieline1"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/yellowdie.png"
              alt="dieline2"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/pinkdie.png"
              alt="dieline3"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
