import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Eirene.module.css";
import Image from "next/image";

export default function Eirene() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Header />
        <main>
          <div className={styles.imageContainer2}>
            <Image
              src="/cov.png"
              alt="Eirene Magazine Cover"
              width={825}
              height={600}
              className={styles.mag}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Eirene</h1>
            <h4 className={styles.subhead}>
              Designing and curating an Art Deco-inspired interior design
              magazine
            </h4>
            <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
            <div className={styles.textAndRoleContainer}>
              <p className={styles.body_text}>
                Eirene is an interior design magazine created to showcase the
                architectural and design style of Art Deco. Drawing from the
                monotony of boring modern interiors, this project aims to
                showcase a different architectural and design style while
                keeping readers engaged. The publication showcases the different
                textures, colours, and layouts of Art Deco. By bringing together
                all those design elements and combining them into one magazine,
                it keeps the reader interested and engaged while reading the
                publication.
              </p>
              <InfoBlock
                className={styles.role}
                items={[
                  {
                    title: "Year",
                    bodyText: "September 2024 – October 2024",
                  },
                  {
                    title: "Role",
                    bodyText: "Designer, Researcher",
                  },
                  {
                    title: "Skills",
                    bodyText:
                      "InDesign, Photoshop, Text layout, Graphic Design, Typography, Photo editing, Research",
                  },
                ]}
              />
            </div>
          </div>

          <div className={styles.captionContent}>
            <p className={styles.caption}>
              Full spreads from different pages of the magazine
            </p>
          </div>
          <div className={styles.imageGrid}>
            <div className={styles.imageItem}>
              <Image
                src="/wallpap.png"
                alt="Art Deco Design"
                width={500}
                height={400}
                layout="responsive"
                className={styles.image1}
              />
            </div>
            <div className={styles.imageItem}>
              <Image
                src="/yellow.png"
                alt="Art Deco Layout"
                width={500}
                height={400}
                layout="responsive"
                className={styles.image2}
              />
            </div>
            <div className={styles.imageItem}>
              <Image
                src="/din.png"
                alt="Art Deco Layout"
                width={500}
                height={400}
                layout="responsive"
                className={styles.image2}
              />
            </div>
            <div className={styles.imageItem}>
              <Image
                src="/kitch.png"
                alt="Art Deco Layout"
                width={500}
                height={400}
                layout="responsive"
                className={styles.image2}
              />
            </div>
          </div>
          <div className={styles.imageItem2}>
            <Image
              src="/bath.png"
              alt="Art Deco Layout"
              width={500}
              height={400}
              layout="responsive"
              className={styles.image3}
            />
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
