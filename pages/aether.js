import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Aether.module.css";
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
            width={11512}
            height={4997}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Aether</h1>
          <h4 className={styles.subhead}>
            Streamlining paperwork for caregivers to reduce administrative
            burnout and improve efficiency.
          </h4>
          <h2 className={styles.emoticon}>Overview</h2>
          <h3 classname={styles.subby}>AI powered support for caregivers</h3>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              Aether is an app created to help caregivers with paperwork. At its
              core, it uses AI to
              <strong> Simplify</strong>, <strong>Summarize</strong>, and{" "}
              <strong>Streamline</strong> paperwork to reduce burnout and save
              time to allow caregivers to focus on what matters most, providing
              high quality care to seniors.
              <a
                href="https://www.figma.com/proto/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-15800&p=f&t=aUvsnkSsikpWtUfx-0&scaling=scale-down&content-scaling=fixed&page-id=1%3A15138&starting-point-node-id=1%3A16070"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.abtn}
              >
                <button className={styles.btn}>Prototype</button>
              </a>
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
              <h2 className={styles.aetherproblem}>The problem currently</h2>
              <h3 className={styles.giver}>
                Caregivers lose up to 30 days in a year due to filling out
                paperwork for seniors.
              </h3>
              <p className={styles.caregiver}>
                Caregivers face significant challenges with{" "}
                <strong>repetitive</strong>,<strong> stressful</strong>, and{" "}
                <strong> time-consuming</strong> paperwork which affects their
                ability to focus on providing quality care to seniors. This task
                can be done more effeciently, yet caregivers are still
                struggling with it due to ineffecient tools. By making paperwork
                more efficient, it enhances the caregiver experience by reducing
                stress and freeing up time but also directly improves senior
                care outcomes, allowing caregivers to focus on what matters
                most, providing compassing and support for seniors
              </p>
            </div>
            <div className={styles.solution}>
              <h2 className={styles.solution2}>The solution</h2>
              <h3 className={styles.solution_2}>
                Aether, an AI powered app to help caregivers witth paperwork.
              </h3>
              <p className={styles.ae_solution}>
                To address caregivers' paperwork challenges, the app
                <strong> Aether</strong> was developed. It is an app that
                combines intuitive UX/UI design with AI technology to streamline
                paperwork. Using Optical Image Recognition and GPT-4, it
                simplifies complex paperwork in clear and easy-to-understand
                language. It also enables autofill with stored information in
                the app. The app's design minimizes cognitive load, saving time
                and reducing burnout, so caregivers can focus on providing high
                quality care.
              </p>
            </div>
          </div>
          <div className={styles.process}>
            <h3 className={styles.research}>When talking to caregivers</h3>
            <p className={styles.research_content}>
              It turns outs caregivers really struggle with paperwork, they find
              it tedious and time-consuming.
            </p>
            <p>
              The 3 pain points caregivers faced and focused the design around
              it. Caregivers found paperwork:
            </p>
            <div className={styles.research_img}>
              <Image
                src="/researchvector2.svg"
                alt="difficult, time, stress"
                className={styles.research_img2}
                width={100}
                height={100}
              />
            </div>
            <div className={styles.research_content2}>
              <ul>
                <li>
                  Caregivers often found <strong>complex wording</strong> and{" "}
                  <strong>legal jargon difficult to understand</strong>, making
                  it hard for them to fill out paperwork.
                </li>
                <li>
                  Many forms required the same type of information being filled
                  out repetitively, making the process time consuming.
                  <strong>
                    {" "}
                    A single page for takes on average 7 minutes to fill out.
                  </strong>
                </li>
                <li>
                  The sheer amount of forms they had to fill out and submit was
                  stressful{" "}
                  <strong>causing caregivers to feel burntout.</strong>
                </li>
              </ul>
            </div>
            <h3 className={styles.persona}>Creating real-life insights</h3>
            <p className={styles.persona_content}>
              Caregivers spoke and their voices led the way.
            </p>
            <div>
              Based on the research, two user personas were created based on
              real-life interviews and online research:
              <ul>
                <li>
                  The primary persona is of a full-time senior home caregiver
                </li>
                <li>
                  The secondary persona is an office worker who is the caregiver
                  of his mother at home
                </li>
              </ul>
              By creating these personas, the needs of the caregiver can be
              understood to ensure the product is designed for ease of use and
              to reduce the learning curve.
            </div>
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
            <p className={styles.persona_content}>
              Spotting an opportunity in a competitive market.
            </p>
            <p className={styles.analysis}>
              Currently, there are apps that offer similar features. However, an
              opportunity to focus on a specific audience, caregivers, was
              identified. While existing tools provided basic functionality, the
              goal was to design an app that was not only intuitive but also
              aligned with the specific needs of caregivers. The focus centered
              on crafting a user experience that felt thoughtful and seamless
              for those who use it.
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
            <p>
              The competitor analysis found that many apps on the market can
              help simplify complex language and jargon. However, those apps{" "}
              <strong>
                did not allow their users to directly edit and input information
                into the paperwork.
              </strong>{" "}
              Additionally, the apps{" "}
              <strong>did not have a very intuitive interface.</strong> The one
              that did have a simple and intuitive interface was
              <strong>
                {" "}
                lacking in functionality and missing several key features.
              </strong>
            </p>
            <h3 className={styles.journey}>User Flow</h3>
            <p className={styles.persona_content}>
              From start to finish with no roadbumps.
            </p>
            <p className={styles.flow}>
              The user flow is designed to guide caregivers through a seamless
              and intuitive process. By simplifying tasks like uploading files,
              filling out forms, and reviewing information, this flow can help
              caregivers efficiently handle paperwork.
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
            <p className={styles.persona_content}>
              Designing around usability and accessbility.
            </p>
            <p className={styles.lofi_content}>
              After completing the research and identifying the key pain points
              and needs for caregivers, it became clear the app must be centered
              around its usability and accessibility. Caregivers often work
              under high levels of stress and time constraints, so the app
              needed to be intuitive, easy-to-navigate, and inclusive to users
              with different levels of technical literacy.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "1200px",
                  height: "750px",
                }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=39-9915&embed-host=share"
                allowFullScreen
              />
            </div>
            <h3 className={styles.midfi}> Mid Fidelity Wireframes</h3>
            <p className={styles.persona_content}>
              Building upon the accessibility and layout of the app.
            </p>

            <p className={styles.midfi_content}>
              The feedback on the low fidelity wireframes were positive and
              caregivers thought the design was intuitive to use. With that, the
              mid fidelity wireframes began. The focus was on adding content to
              it while keeping the layout the same.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "1200px",
                  height: "750px",
                }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=0-1&embed-host=share"
                allowFullScreen
              />
            </div>
            <p>
              The decision was made to preserve the original layout in the low
              fidelity wireframe for several reseaons:
              <ul>
                <li>
                  <strong>Consistencty: </strong> The layout was designed to
                  prioritize accessibility and ease of use, so keeping it
                  consistent ensured that caregivers could navigate the app
                  easily.
                </li>
                <li>
                  <strong>Focus on content: </strong> By keeping the layout
                  unchanged it allows for a focus on adding more detailed
                  content such as input fields, overlays, and icons.
                </li>
                <li>
                  <strong>Visual heiarchy: </strong> Using typography, spacing,
                  and visual elements, we created a clear hierarchy of
                  information. This ensured that the most important features and
                  content were the focus, making the app easier to navigate.{" "}
                </li>
              </ul>
            </p>

            <h3 className={styles.vis_design}>Visual Design System</h3>
            <p className={styles.persona_content}>
              Defining colours and typography for trust, reliability, and
              calmness.
            </p>
            <p className={styles.vis_design_content}>
              With the completion and testing of the mid fidelity wireframes,
              the visual design of the app started. The goal of the design
              choices is to provide a sense of trust, reliability, and calmness.
              With that, the colour palette and font choice was chosen
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
            <div>
              <ul>
                <li>#F2F2F7 a soft colour to ensure clarity</li>
                <li>
                  #137FA5 and a gradient of #71AFCE to #5B8399 to promote a
                  calming yet professional aesthetic
                </li>
                <li>
                  DM sans being a sans-serif fot with soft rounded edges has
                  high readblity and balanced proportions, making it ideal for
                  the app.
                </li>
              </ul>
            </div>

            <h3 className={styles.hifi1}>Initial High Fidelity Wireframes</h3>
            <p className={styles.persona_content}>
              Implementing visual design but falling short.
            </p>
            <p className={styles.hifi1_content}>
              The intial version of the high fidelity wireframe and prototype
              incorporated the colour palette and typography. This version
              included detailed visuals, such as colors, typography, icons, and
              interactive elements, to create the look for the final product.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "1200px",
                  height: "750px",
                }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-3721&embed-host=share"
                allowFullScreen
              />
            </div>

            <div>
              After testing:
              <ul>
                <li>
                  <strong>Accessibility fell short: </strong> 60% of caregivers
                  found that the text colour and background colour were too
                  similair and made it hard to read.
                </li>
                <li>
                  <strong> Visuals felt too outdated: </strong> Other designers
                  that looked at the app felt like it looked too outdated.
                </li>
              </ul>
              This iteration of the app served as a testing ground. The next
              iteration of the app was designed with the feedback in mind.
            </div>

            <h3 className={styles.hifi1}>Final High Fidelity Wireframes</h3>
            <p className={styles.persona_content}>
              Iterating and learning from mistakes.
            </p>
            <p className={styles.hifi1_content}>
              After taking in the feedback from the intial high fidelity
              wireframes, improvements were made. For the final design, the
              decision to have a <strong> lighter background </strong>
              and <strong> more contrasting buttons</strong> made the app more
              accesible. Adjustments to the pages of the app made it look more
              modern while{" "}
              <strong>
                {" "}
                keeping the accessibility and user-centric design in mind.{" "}
              </strong>
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "1200px",
                  height: "750px",
                }}
                src="https://embed.figma.com/design/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-15138&embed-host=share"
                allowFullScreen
              />
            </div>
            <p>The final results:</p>
            <div>
              <ul>
                <li>
                  <strong>A/B testing:</strong> Caregivers found the app much
                  more accessible on the new iteration. Complaints about
                  readability fell from 60% to 10%.
                </li>
                <li>
                  <strong>Designer feedback:</strong> Designers thought the new
                  iteration was much more pleasing to the eye and the
                  accessbility and usability were still at the forefront of the
                  design.
                </li>
              </ul>
            </div>
            <h3 className={styles.hifi1}>After using the app</h3>
            <p className={styles.persona_content}>
              Time to complete paperwork fell from 7 minutes to 4 minutes.
            </p>
            <p>
              Without Aether, the average time to fill out paperwork was 7
              minutes for a single page. After having caregivers and many other
              users use the app, time to fill out a single page of paperwork
              fell to <strong>4 minutes, a drop of ~42%.</strong> Users
              particularly liked the paraphrasing feature of the app which
              simplifies complex wording making it easier to understand what
              information is required. <br />
              By cutting down on time spent on paperwork, Aether empowers
              caregivers to work more efficiently, ultimately reducing burnout
              and allowing them to focus on what matters most, high quality
              caregiving.
            </p>

            <h3 className={styles.hifi1}>Test out the Prototype</h3>
            <p className={styles.persona_content}>Give the prototype a try! </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                paddingTop: "1rem",
                paddingBottom: "1rem",
              }}
            >
              <iframe
                style={{
                  border: "1px solid rgba(0, 0, 0, 0.1)",
                  width: "1200px",
                  height: "750px",
                }}
                src="https://embed.figma.com/proto/wx1RABSScHZ6qZIt72YoDL/case-study?node-id=1-15800&p=f&scaling=scale-down&content-scaling=fixed&page-id=1%3A15138&starting-point-node-id=1%3A16070&embed-host=share"
                allowFullScreen
              />
            </div>
            <div>
      <h3 className={styles.hifi1}>Marketing Material</h3>
      <p className={styles.persona_content}>Take a look at the brochure and business cards!</p>

      <div className={styles.bcontainer}>
        <Image src="/aebroch.png" alt="Brochure 1" width={500} height={200} />
        <Image src="/aecard.png" alt="Brochure 1" width={500} height={200} />
        
      </div>
    </div>
          </div>
          <div className={styles.conclude}>
            <h2 className={styles.conclude_head}>
              Final Thoughts and Reflection
            </h2>
            <h3 className={styles.finalhead}>Key Learnings:</h3>
            <ul>
              <li>
                <strong>User-centric design is essential: </strong>
                The feedback from user testing highlighted the importance of
                designing with the end-user in mind. Their feedback and insights
                were what shaped the app into something that addresses the
                caregivers needs.
              </li>
              <li>
                <strong>Accessibility matters: </strong>
                Ensuring the app was accesible and easy to navigate was curcial.
                The adjustments made on user feedback significantly improved
                user experience.
              </li>
              <li>
                <strong>Balancing aesthetic and Functionality: </strong>
                While designing an eye pleasing app was important, it was
                equally as important maintian the functionality and accessiblity
                of the app.
              </li>
            </ul>
            <h3 className={styles.finalhead}>Areas for Improvement:</h3>
            <ul>
              <li>
                <strong>Expand user testing: </strong>
                Conducting more extensive user testing with a more diverse group
                of caregivers could uncover additional pain points.
              </li>
              <li>
                <strong>Microinteractions: </strong>
                Incorporating some sublte microinteractions can make the app
                feel more responsive and engaging.
              </li>
            </ul>
            <h3 className={styles.finalhead}>Reflection:</h3>
            <div className={styles.conclude_content}>
              My time working on Aether was a great experience that allowed me
              to grow as a designer, developer, and marketer. I gained valuable
              insights into cross-functional collaboration with multiple teams,
              navigating challenges, and designing and developing a successful
              product. While the development of the app was successful, it was
              not without and setbacks.
              <ul>
                <li>
                  Effective communication is important when it come to fostering
                  a collaborative environment.
                </li>
                <li>
                  Adaptability is essential, as projects often evolve and
                  flexibility is required in order to adjust for the obstacles.
                </li>
                <li>
                  Desgin is an interative process, and adjustments are a natural
                  part of refining and developing a good user experience
                </li>
                <li>
                  Having fun in the creative process is just as important as
                  achieving the end result.
                </li>
              </ul>
              These takeaways have not only helped me hone my skills as a
              designer and team member, it also let me experience and show my
              appreciation for product development.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
