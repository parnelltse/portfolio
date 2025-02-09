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
              <h3 className={styles.solution_2}>Aether, an AI powered app to help caregivers witth paperwork.</h3>
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
                src="/Primary.jpg"
                alt="primary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
              <Image
                src="/Secondary.jpg"
                alt="secondary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
            </div>
            <h3 className={styles.comp}>Competitive analysis</h3>
            <p className={styles.analysis}>
              Currently, there are apps that offer similar features. However, my team and I
              recognized an opportunity to focus on a specific audience, caregivers.
              While existing tools provided basic functionality, we aimed to design an app
              that was not only intuitive but also aligned with the specific needs of caregivers.
              Our focus was on crafting a user experience that felt thoughtful and seamless for those
              who use it.
            </p>
            <div className={styles.compAnal}>
              <Image
                src="/companal.png"
                alt="secondary persona"
                className={styles.compAnal2}
                width={700} // Adjust size as needed
                height={525}
              />
            </div>
            <h3 className={styles.journey}>User Flow</h3>
            <p className={styles.flow}>
              The user flow is designed to guide caregivers through a seamless and intuitive process. By simplifying
              tasks like uploading files, filling out forms, and reviewing information, this flow can help caregivers
              efficiently handle paperwork.
            </p>
            <div className={styles.flow_img}>
              <Image
                src="/flow.png"
                alt="User Flow"
                className={styles.flow_img2}
                width={900} // Adjust size as needed
                height={275}
              />
            </div>
            <h3 className={styles.lofi}> Low Fidelity Wireframes</h3>
            <p className={styles.lofi_content}>
              With our research complete and key features identified,
              we transitioned into the design phase. Using low-fidelity wireframes, we prioritize accessibility and layout
              creating a clear framework for the app.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#99755c" }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "900px", height: "550px" }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=39-9915&embed-host=share"
                allowFullScreen
              />
            </div>

            <h3 className={styles.midfi}> Mid Fidelity Wireframes</h3>
            <p className={styles.midfi_content}>
              With our low fidelity wireframes complete, my team and I were able to start putting more content into the
              wireframes, starting the mid fidelity design. During this stage, we kept the initial layout the same and
              added content and details to the design. We focused on keeping the design user-centric and started to implement
              screens to see what the app will look like with functionality.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#374735" }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "900px", height: "550px" }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=0-1&embed-host=share"
                allowFullScreen
              />
            </div>


            <h3 className={styles.vis_design}>Visual Design System</h3>
            <p className={styles.vis_design_content}>
              After finishing the mid fidelity wireframes, the team and I started our visual design of the app with
              the goal of providing a sense trust, reliability, and calmness. With that, we chose our colour palette
              and font for the app.
            </p>
            <div className={styles.palette}>
              <Image
                src="/palette.png"
                alt="Visual Design"
                className={styles.palette_img}
                width={700} // Adjust size as needed
                height={330}
              />
            </div>

            <h3 className={styles.hifi1}>High Fidelity Wireframes and Prototype</h3>
            <p className={styles.hifi1_content}>
              With the visual design process complete, my team and I startetd crafting
              the initial high-fidelity version of the app. This version served as a testing
              ground, allowing us to gather valuable feedback from users. We then incorporated the feedback
              from the users to refine and perfect the app.
            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#374735" }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "900px", height: "550px" }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-3721&embed-host=share"
                allowFullScreen
              />
            </div>

            <h3 className={styles.hifi1}>Final High Fidelity Wireframes and Prototype</h3>
            <p className={styles.hifi1_content}>
              After getting the prototype tested and validated, we found areas that needed adjustment in the app.
              The users found the intial prototype too blue. With a lack of contrast, some users found it difficult
              to find certain buttons. The users also said some screens looked out-of-date, recommending that we
              give the app a more modern facelift. For the final design, we decided to have a lighter background
              and more contrasting buttons but still keeping our initial colour palette. We also added a more modern
              design onto some of the pages while still keeping the accessibility and user-centric design in mind.
              When validating the app again, users found the accessibility of the app much better and the modern touch
              to it much more pleasing to the eye.

            </p>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", paddingTop: "1rem", paddingBottom: "1rem", backgroundColor: "#99755c" }}>
              <iframe
                style={{ border: "1px solid rgba(0, 0, 0, 0.1)", width: "900px", height: "550px" }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-15138&embed-host=share"
                allowFullScreen
              />
            </div>
          </div>
          <div className={styles.conclude}>
            <h2 className={styles.conclude_head}>
              Final Thoughts and Reflection
            </h2>
            <h3 className={styles.finalhead}>
              Key Learnings:
            </h3>
            <ul>
              <li><strong>User-centric design is essential: </strong> 
               The feedback from user testing highlighted the importance of 
              designing with the end-user in mind. Their feedback and insights were 
              what shaped the app into something that addresses the caregivers needs.</li>
              <li><strong>Accessibility matters: </strong> 
                Ensuring the app was accesible and easy to navigate was curcial. 
              The adjustments made on user feedback significantly improved user experience.</li>
              <li><strong>Balancing aesthetic and Functionality: </strong>
              While designing an eye pleasing app was important, it was equally as important maintian 
              the functionality and accessiblity of the app.</li>
            </ul>
            <h3 className={styles.finalhead}>
              Areas for Improvement:
              
            </h3>
            <ul>
                <li><strong>Expand user testing: </strong>
                Conducting more extensive user testing with a more diverse group 
                of caregivers could uncover additional pain points.</li>
                <li><strong>Microinteractions: </strong>
                Incorporating some sublte microinteractions can make the app feel more responsive and engaging.</li>
              </ul>
              <h3 className={styles.finalhead}>Reflection:</h3>
            <p className={styles.conclude_content}>
              My time working on Aether was a great experience that allowed me to grow as a designer, developer, and marketer. 
              I gained valuable insights into cross-functional collaboration with multiple teams, navigating challenges, and 
              designing and developing a successful product. While the development of the app was successful, it was not without
              and setbacks.
              <ul>
                <li>Effective communication is important when it come to fostering a collaborative environment.</li>
                <li>Adaptability is essential, as projects often evolve and flexibility is required in order to adjust 
                  for the obstacles.</li>
                  <li>Desgin is an interative process, and adjustments are a natural part of refining and developing a good user experience</li>
                  <li>Having fun in the creative process is just as important as achieving the end result.</li>
              </ul>
              These takeaways have not only helped me hone my skills as a designer and team member, it also 
              let me experience and show my appreciation for product development.
            </p>
  

          </div>
        </div>
      </main>
      <Footer />
    </div>

  );
}
