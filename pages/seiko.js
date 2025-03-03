import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Seiko.module.css";
import Image from "next/image";

export default function Seiko() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <div className={styles.imageContainer2}>
          <Image
            src="/Sekio ad.png"
            alt="shunbun"
            width={825}
            height={600}
            className={styles.mag}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Grand Seiko Heritage Ad</h1>
          <h4 className={styles.subhead}>
            Designing watch ads and poster mockups
          </h4>
          <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              The design process for these Grand Seiko ads were focused on creating a
              connection with the seasons. With these watches being from the Heritage Collection,
              each one of them represents a different season. The focus was to ensure that each 
              background for the watch corresponds with the season it represents.
            </p>
            <InfoBlock
              className={styles.role}
              items={[
                {
                  title: "Year",
                  bodyText: "December 2024 – December 2024",
                },
                {
                  title: "Role",
                  bodyText: "Designer",
                },
                {
                  title: "Skills",
                  bodyText:
                    "Photoshop, Graphic Design, Typography, Photo editing",
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.captionContent}>
          <p className={styles.caption}>Watch ad designs</p>
        </div>
        <div className={styles.imageGrid}>
          <div className={styles.imageItem}>
            <Image
              src="/Sekio ad.png"
              alt="mock1"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image1}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/seikofal.png"
              alt="mock2"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/seikosum.png"
              alt="mock3"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/seikowin.png"
              alt="mock3"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
        </div>
        <div className={styles.captionContent}>
          <p className={styles.caption}>Ad Mockups</p>
        </div>
        <div className={styles.imageGrid2}>
          <div className={styles.imageItem}>
            <Image
              src="/seiko1ad.png"
              alt="ad1"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/seiko3ad.png"
              alt="ad2"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image2}
            />
          </div>
          <div className={styles.imageItem}>
            <Image
              src="/seiko4ad.png"
              alt="ad3"
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
