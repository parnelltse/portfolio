import Footer from "@/components/footer";
import Header from "@/components/header";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Budding.module.css";
import Image from "next/image";

export default function Budding() {
  return (
    <div className={styles.homeContainer}>
      <Header />
      <main>
        <div className={styles.imageContainer2}>
          <Image
            src="/buddban.png"
            alt="budding laptop"
            className={styles.mag}
            width={800}
            height={417}
          />
        </div>

        <div className={styles.content}>
          <h1 className={styles.title}>Budding Writers</h1>
          <h4 className={styles.subhead}>
            Designing and developing a brand identity and website for a
            grassroots bookstore cafe - Budding Writers
          </h4>
          <h2 className={styles.emoticon}>Overview</h2>
          <h3 classname={styles.subby}>
            Website for cafe and literature lovers
          </h3>
          <div className={styles.textAndRoleContainer}>
            <p className={styles.body_text}>
              Budding Writers is not just a cafe; it’s a haven for literary
              enthusiasts and aspiring wordsmiths alike. This website is
              designed to help people navigate through their literary adventures
              and find hidden gems, all while having them grab a drink and some
              food, or even attending events.
              <a
                href="https://budding-writers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.abtn}
              >
                <button className={styles.btn}>Visit the Website</button>
              </a>
            </p>
            <InfoBlock
              className={styles.role}
              items={[
                {
                  title: "Year",
                  bodyText: "March 2024 – May 2024",
                },
                {
                  title: "Role",
                  bodyText: "Designer, Developer, Researcher",
                },
                {
                  title: "Skills",
                  bodyText:
                    "Figma, Illustrator, WordPress, Photoshop, UX/UI Design, Graphic Design, Typography, Photo editing, Research",
                },
              ]}
            />
          </div>
          <div className={styles.conclude}>
            <div className={styles.problem}>
              <h2 className={styles.aetherproblem}>Introduction</h2>
              <h3 className={styles.giver}>Context</h3>
              <p className={styles.caregiver}>
                This project, completed as part of a design course at the
                British Columbia Institute of Technology, focused on developing
                a cohesive brand identity and a fully functional WordPress
                website for Budding Writers. The process involved in-depth
                research on the target audience, the creation of a distinctive
                logo, the selection of typography and color schemes, and the
                establishment of a brand voice that resonates with aspiring
                writers and coffee lovers. Additionally, a responsive WordPress
                website was designed and developed, incorporating custom themes,
                essential plugins, and an intuitive user experience to enhance
                accessibility and engagement. The final outcome delivered a
                professional and polished digital presence tailored to the
                client's needs.
              </p>
            </div>
          </div>
          <div className={styles.process}>
            <h3 className={styles.research}>The client</h3>
            <p>
              Budding Writers Cafe is a thoughtfully curated space designed for
              literary enthusiasts, offering a welcoming environment to explore
              secondhand books, connect with the writing community, or enjoy a
              selection of pastries and coffee. The website aims to enhance the
              customer experience by featuring a digital menu, online
              reservations, a virtual bookstore, and an event
              calendar—facilitating seamless interaction with the café’s
              offerings both online and in-person. With a focus on warmth and
              creativity, the site employs an earthy color palette of soft
              greens, browns, and neutrals to convey growth, while clean
              layouts, organic shapes, and refined typography reinforce its
              identity as a hub for writers and book lovers.
            </p>

            <h3 className={styles.research}>Reseach</h3>
            <p>
              Jumping into research. the research was done in two methods,
              primary and secondary. The primary method used was surveys while
              the secondary research was done doing online research. From the
              research, there were several key points that were found:
            </p>
            <ul>
              <li>
                <strong>Users bought more books online than in person</strong>
              </li>
              <li>
                <strong>Users don't like pop-ups</strong>
              </li>
              <li>
                <strong>
                  Users don't want an overcrowded site with a lot of images and
                  banners
                </strong>
              </li>
            </ul>

            <h3 className={styles.persona}>Creating real-life insights</h3>
            <div>
              Based on the research, two user personas were created based on
              real-life surveys and online research. These personas help
              conceptualize the data and make it more understandable.
              <ul>
                <li>The primary persona is of a full-time student</li>
                <li>
                  The secondary persona is a professional events coordinator
                </li>
              </ul>
              By creating these personas, the needs of the people using the
              website and going to the cafe can be understood to ensure the
              website is designed for ease of use and to reduce the learning
              curve.
            </div>
            <div className={styles.persona_img}>
              <Image
                src="/per1.png"
                alt="primary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
              <Image
                src="/per2.png"
                alt="secondary persona"
                className={styles.persona_img2}
                width={500} // Adjust size as needed
                height={500}
              />
            </div>
            <h3 className={styles.comp}>Competitive analysis</h3>
            <p className={styles.analysis}>
              There are many, many bookstores and cafes that have websites and a
              similar theme to budding writers. In order to see what the client
              likes and doesn't like, a competitive analysis was conducted on
              several websites and cafes to find the pros and cons of each. 2
              direct competitors and 2 indirect competitors were analyzed to
              understand the strengths and weakness of their UX/UI, branding,
              and functionality.
            </p>
            <div className={styles.compAnal}>
              <Image
                src="/budcomp.PNG"
                alt="Competitive Analysis"
                className={styles.flow_img2}
                width={900} // Adjust size as needed
                height={275}
              />
            </div>
            <a
              href="https://docs.google.com/spreadsheets/d/1RCPPM5PdGDt8yS380GO-4ETorB_CDGzmc7eBbYbbUJk/edit?gid=0#gid=0"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.analysisButton}
            >
              <button className={styles.btn}>
                Click to see whole analysis
              </button>
            </a>
            <h3 className={styles.journey}>Site map</h3>

            <p className={styles.flow}>
              The sitemap for Budding Writers Cafe’s website was strategically
              designed to ensure a seamless and intuitive user experience. The
              structure is organized with clear categories to guide visitors
              effortlessly through the site. Key sections include an accessible
              homepage, an online bookstore, a digital menu, an event calendar,
              and an easy-to-navigate reservation system. The design prioritizes
              user flow, with a straightforward layout that allows users to
              quickly access essential features, such as browsing books, making
              reservations, and exploring upcoming events. This logical
              structure ensures visitors can interact with the cafe’s offerings
              in a streamlined and efficient manner, both online and in person.
            </p>
            <div className={styles.flow_img}>
              <Image
                src="/sitemap.svg"
                alt="User Flow"
                className={styles.flow_img2}
                width={1000} // Adjust size as needed
                height={875}
              />
            </div>
            <h3 className={styles.lofi}> Wireframes</h3>
            <p className={styles.lofi_content}>
              Explore the wireframes below. Each iteration of the design was
              based off feedback gathered from the client and users that tested
              the design.
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
                src="https://embed.figma.com/design/4xcnBvqDk14Ly2SPaPtdoF/budding?node-id=0-1&embed-host=share"
                allowfullscreen
              />
            </div>

            <h3 className={styles.vis_design}>Visual Design System</h3>

            <p className={styles.vis_design_content}>
              The goal of the design system was to provide a sense of warmth and
              creativity while incorporating and earthy colour palette.
            </p>
            <div className={styles.palette}>
              <Image
                src="/buddingstyle.svg"
                alt="Visual Design"
                className={styles.palette_img}
                width={700} // Adjust size as needed
                height={330}
              />
              <Image
                src="/buddinglogo.svg"
                alt="Visual Design"
                className={styles.palette_img}
                width={700} // Adjust size as needed
                height={330}
              />
            </div>

            <h3 className={styles.hifi1}>The final design</h3>
            <p>
              The final design for Budding Writers Cafe’s brand and website
              successfully captures the essence of warmth and creativity,
              reflecting the cafe’s inviting atmosphere and literary focus. The
              design system is centered around an earthy color palette of soft
              greens, browns, and neutrals, evoking a sense of growth and
              tranquility. Organic shapes, clean layouts, and refined typography
              enhance the overall aesthetic, creating a visually cohesive
              experience. The website’s design prioritizes usability, ensuring
              that visitors can easily navigate the site while engaging with the
              cafe’s offerings, whether browsing the online bookstore, checking
              the event calendar, or making reservations. The combination of
              these elements reinforces the cafe’s identity as a creative
              sanctuary for writers and book lovers alike.
              <a
                href="https://budding-writers.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.abtn}
              >
                <button className={styles.btn}>Visit the Website</button>
              </a>
            </p>

            <h3 className={styles.hifi1}>Some mockups</h3>
           <div>
           <Image
                src="/budmocks.png"
                alt="Visual Design"
                className={styles.palette_img2}
                width={700} // Adjust size as needed
                height={330}
              />
           </div>
          </div>
          <div className={styles.conclude}>
            <h2 className={styles.conclude_head}>
              Final Thoughts and Reflection
            </h2>
            <h3 className={styles.finalhead}>Key Learnings:</h3>
            <ul>
              <li>
                <strong>User-Centered Design: </strong>
                Understanding the target audience's needs and preferences was
                essential for creating a website that is intuitive and easy to
                navigate. Prioritizing user experience helped ensure that
                visitors could easily access the café's key offerings, such as
                the online bookstore, event calendar, and reservation system.
              </li>
              <li>
                <strong>Consistency Across Brand and Website: </strong>
                Maintaining a consistent aesthetic between the cafe’s physical
                environment and its digital presence was crucial in establishing
                a strong brand identity. Using an earthy color palette and
                organic design elements reinforced the cafe’s warm, creative
                atmosphere, both online and offline.
              </li>
              <li>
                <strong>Balancing aesthetic and Functionality: </strong>
                Striking the right balance between a visually appealing design
                and practical functionality was key. Ensuring that the website
                was both beautiful and functional allowed users to interact with
                the cafe’s services seamlessly while enjoying an engaging
                digital experience.
              </li>
            </ul>
            <h3 className={styles.finalhead}>Reflection:</h3>
            <div className={styles.conclude_content}>
              Working on the Budding Writers Café project was an incredibly
              enriching experience that allowed me to develop both my design and
              web development skills. Throughout the process, I gained valuable
              insights into designing a brand and website that accurately
              represented a physical space while catering to the needs of its
              online visitors. There were challenges along the way, but each
              presented an opportunity to learn and grow.
              <ul>
                <li>
                  Clear Communication is Key: Successful collaboration with
                  clients and team members hinged on effective communication,
                  ensuring everyone was aligned on the project goals and vision.
                </li>
                <li>
                  Iterative Design Process: I gained a deeper appreciation for
                  how design is an ongoing process. Each iteration helped refine
                  the user experience, and small adjustments were essential in
                  creating a more seamless final product.
                </li>
                <li>
                  Flexibility in Design: As the project evolved, I learned how
                  to stay adaptable, making necessary adjustments to accommodate
                  new ideas and feedback, ensuring the design remained true to
                  the brand.
                </li>
                <li>
                  Creativity and Fun in Design: The creative process was not
                  only about meeting the client's needs but also about enjoying
                  the journey of bringing the vision to life. Embracing the
                  design process allowed for greater creativity and a more
                  satisfying end result.
                </li>
              </ul>
              These key takeaways have not only sharpened my skills as a
              designer and developer but also deepened my appreciation for the
              collaborative and evolving nature of brand and web development.
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
