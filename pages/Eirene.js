import Footer from "./components/footer";
import Header from "./components/header";
import Head from "next/head";
import InfoBlock from "./components/info_block";

export default function Eirene() {
    return (
        <>
            <Head>
                <title>Eirene</title>
                <meta name="description" content="Eirene Magazine" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.homeContainer}>
                <Header />
                <main className={styles.content}>
                    <h0 className={styles.title}>Eirene</h0>
                    <h4 className={styles.subhead}>Designing and curating an Art Deco-inspired interior design magazine</h4>
                    <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
                    <div className={styles.textAndRoleContainer}>
                        <p className={styles.body_text}>Eirene is an interior design magazine created to showcase the
                            architectural and design style of Art Deco. Drawing from the monotony
                            of boring modern interiors, this project
                            aims to showcase a different architectural
                            and design style while keeping readers engaged. The publication showcases the different textures,
                            colours, and layouts of Art Deco. By bringing together all those design elements
                            and combining them into one magazine, it keeps the reader interested and engaged while
                            reading the publication.
                        </p>
                        <InfoBlock className={styles.role} items={[
                            { title: "Year", bodyText: "September 2024 – October 2024" },
                            { title: "Role", bodyText: "Designer, Researcher" },
                            { title: "Skills", bodyText: "InDesign, Photoshop, Text layout, Graphic Design, Typography, Photo editing, Research" }
                        ]} />

                    </div>
                </main>
                <Footer />
            </div>
        </>
    );
}
