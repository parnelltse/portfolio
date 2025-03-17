import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/F1.module.css";
import Image from "next/image";

export default function F1() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <div className={styles.imageContainer2}>
          <Image
            src="/f1img.PNG"
            alt="f1"
            width={825}
            height={600}
            className={styles.mag}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>F1 Motion Graphics</h1>
          <h4 className={styles.subhead}>
            Creating and animating F1 motion graphics video
          </h4>
          <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              The creation of this F1 Pit Stop motion graphics video was driven
              by the desire to capture the high-energy, fast-paced nature of
              Formula 1 racing. It is aimed to highlight the precision and
              teamwork required during a pit stop, where every second counts.
              Using Illustrator and After Effects, the assets and animation
              reflect the seamless coordination that defines the sport. The goal
              was to create a dynamic visual experience that not only showcases
              the intensity of a pit stop but also engages viewers with the
              energy of F1 racing.
            </p>
            <InfoBlock
              className={styles.role}
              items={[
                {
                  title: "Year",
                  bodyText: "April 2024 – April 2024",
                },
                {
                  title: "Role",
                  bodyText: "Editor, Graphic Designer, Animator",
                },
                {
                  title: "Skills",
                  bodyText:
                    "Illustrator, Graphic Design, After Effects, Video Editing, Animation, Motion Graphics",
                },
              ]}
            />
          </div>
        </div>

        <div className={styles.captionContent}>
          <p className={styles.caption}>Motion Graphics Video</p>
        </div>

        <div className={styles.imageItem}>
          <video width="75%" controls>
            <source src="/Aevid1.mp4" type="video/mp4" />
          </video>
        </div>
      </main>
      <Footer />
    </div>
  );
}
