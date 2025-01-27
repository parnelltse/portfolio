import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import InfoBlock from "@/components/info_block";
import styles from "../styles/Blackcrown.module.css";
import Image from "next/image";

export default function Eirene() {
    return (
        <>
            <Head>
                <title>BlackCrown</title>
                <meta name="description" content="Eirene Magazine" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
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
                        <h4 className={styles.subhead}>Designing drink proofs and client mockups</h4>
                        <p className={styles.emoticon}>(∩｀-´)⊃ ☆ﾟ.*･｡ﾟ</p>
                        <div className={styles.textAndRoleContainer}>
                            <p className={styles.body_text}>
                                BlackCrown Meadery is a drink company owned by Royal Beverages based in Canada.
                                It captures the essence of battles through history as royal families fought
                                eachother for power. With this drink being from Canada, it is translated into
                                both English and French, meeting government guidelines.
                            </p>
                            <InfoBlock className={styles.role} items={[{
                                title: "Year", bodyText: "October 2024 – October 2024"
                            }, {
                                title: "Role", bodyText: "Designer, Researcher"
                            }, {
                                title: "Skills", bodyText: "Photoshop, Graphic Design, Typography, Photo editing, Research"
                            }]} />
                        </div>
                    </div>

                    <div className={styles.captionContent}>
                        <p className={styles.caption}>
                            Client proofs for the beverage
                        </p>
                    </div>
                    <div className={styles.imageGrid}>
                        <div className={styles.imageItem}>
                            <Image
                                src="/blackcrown1.png"
                                alt="proof1"
                                width={500}
                                height={400}
                                layout="responsive"
                                className={styles.image1}
                            />
                        </div>
                        <div className={styles.imageItem}>
                            <Image
                                src="/blackcrown2.png"
                                alt="proof2"
                                width={500}
                                height={400}
                                layout="responsive"
                                className={styles.image2}
                            />
                        </div>
                        <div className={styles.imageItem}>
                            <Image
                                src="/blackcrown3.png"
                                alt="proof3"
                                width={500}
                                height={400}
                                layout="responsive"
                                className={styles.image2}
                            />
                        </div>
</div>
                        <div className={styles.captionContent}>
                            <p className={styles.caption}>
                                Drink can mockups
                            </p>
                        </div>
                        <div className={styles.imageGrid}>
                            <div className={styles.imageItem}>
                                <Image
                                    src="/123.png"
                                    alt="drinkmockup"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                    className={styles.image2}
                                />
                            </div>
                            <div className={styles.imageItem}>
                                <Image
                                    src="/1234.png"
                                    alt="drinkmockup2"
                                    width={500}
                                    height={400}
                                    layout="responsive"
                                    className={styles.image2}
                                />
                            </div>
                            <div className={styles.imageItem}>
                                <Image
                                    src="/12345.png"
                                    alt="drinkmockup3"
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
        </>
    );
}
