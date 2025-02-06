import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Aether.module.css"
import Image from "next/image";

export default function Aether() {
  return (
    
      <div className={styles.homeContainer}>
        <Header />
        <main>
          <div className={styles.imageContainer2}>
            <Image
              src="/a1.png"
              alt="Eirene Magazine Cover"
              width={825}
              height={600}
              className={styles.mag}
            />
            <Image
              src="/a2.png"
              alt="Eirene Magazine Cover"
              width={825}
              height={600}
              className={styles.mag}
            />
            <Image
              src="/a3.png"
              alt="Eirene Magazine Cover"
              width={825}
              height={600}
              className={styles.mag}
            />
            <Image
              src="/a4.png"
              alt="Eirene Magazine Cover"
              width={825}
              height={600}
              className={styles.mag}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Aether</h1>
            <h4 className={styles.subhead}>
              Streamlining paperwork for caregivers to reduce administrative burnout and improve efficiency.
            </h4>
            <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
            <h2 classname={styles.subby}>AI powered support for caregivers</h2>
            <div className={styles.textAndRoleContainer}>
              <p className={styles.body_text}>
                Aether is an app created to help caregivers with paperwork. At its core, it uses AI to
                <strong> Simplify</strong>, <strong>Summarize</strong>, and <strong>Streamline</strong> paperwork
                to reduce burnout and save time.
              </p>
              <InfoBlock
                className={styles.role}
                items={[
                  {
                    title: "Year",
                    bodyText: "September 2024 – December 2024",
                  },
                  {
                    title: "Role",
                    bodyText: "Designer, Developer, Marketer, Researcher",
                  },
                  {
                    title: "Skills",
                    bodyText:
                      "Figma, Illustrator, InDesign, Photoshop, Expo, React, UX/UI Design, Graphic Design, Typography, Photo editing, Research",
                  },
                ]}
              />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    
  );
}
