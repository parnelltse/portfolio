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
            src="/aetherbanner3.png"
            alt="phone screens"
            className={styles.mag}
            layout="responsive"
            width={11512}
            height={4997}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Aether</h1>
          <h4 className={styles.subhead}>
            Streamlining paperwork for caregivers to reduce administrative burnout and improve efficiency.
          </h4>
          <h2 className={styles.emoticon}>Overview</h2>
          <h3 classname={styles.subby}>AI powered support for caregivers</h3>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              Aether is an app created to help caregivers with paperwork. At its core, it uses AI to
              <strong> Simplify</strong>, <strong>Summarize</strong>, and <strong>Streamline</strong> paperwork
              to reduce burnout and save time to allow caregivers to focus on what matters most, providing high
              quality care to seniors.
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
          <div className={styles.problemSolution}>
            <div className={styles.problem}>
              <h2 className={styles.aetherproblem}>
                The problem currently
              </h2>
              <h3 className={styles.giver}>Caregivers lose up to 30 days in a year due to filling out paperwork for seniors.</h3>
              <p className={styles.caregiver}>
                Caregivers face significant challenges with <strong>repetitive</strong>,
                <strong> stressful</strong>, and <strong> time-consuming</strong> paperwork
                which affects their ability to focus on providing quality care to seniors.
                This task can be done more effeciently, yet caregivers are still struggling with it due to ineffecient tools.
                By making paperwork more efficient, it enhances the caregiver experience by reducing stress and freeing up time
                but also directly improves senior care outcomes, allowing caregivers to focus on what matters most, providing compassing and support for seniors
              </p>
            </div>
            <div className={styles.solution}>
              <h2 className={styles.solution2}>The solution</h2>
              <h3 className={styles.solution_2}>Aether, an AI powered app to help caregivers.</h3>
              <p className={styles.ae_solution}>
                To address caregivers' paperwork challenges, my team and I developed <strong>Aether</strong> an app that combines intuitive
                UX/UI design with AI technology to streamline paperwork. Using Optical Image Recognition and GPT-4, it simplifies complex
                paperwork in clear and easy-to-understand language. It also enables autofill with stored information in the app. The app's
                design minimizes cognitive load, saving time and reducing burnout, so caregivers can focus on providing high quality care.

              </p>
            </div>
          </div>
          <div className={styles.process}>
            <h2 className={styles.process_sub}>The Process</h2>
            <h3 className={styles.research}>Research</h3>
            <p className={styles.research_content}>
              To get a better understanding of the target audience, I conducted research with caregivers who will use the
              app. Through talking with them and using surveys, I found that caregivers thought forms and paperwork were:
            </p>
            <div className={styles.research_img}>
              <Image
                src="/researchvector2.svg"
                alt="difficult, time, stress"
                className={styles.research_img2}
                layout="responsive"
                width={100}
                height={100}
              />
            </div>
            <h3 className={styles.persona}>User Personas</h3>
            <p className={styles.persona_content}>
              Based on the research, I created two user personas. The primary persona is of a
              full-time senior home caregiver and the secondary persona is an office worker who
              is the caregiver of his mother at home. By creating these personas, we can understand the needs
              of the caregiver to ensure the product is designed to be easy to use and reduce the learning curve of it.
            </p>
            <div className={styles.persona_img}>
              <Image
                src="/primary.jpg"
                alt="primary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
              <Image
                src="/secondary.jpg"
                alt="secondary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
            </div>
            <h3 className={styles.journey}>User Journey</h3>
            
          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}
