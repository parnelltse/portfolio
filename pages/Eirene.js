import styles from "../styles/eirene.module.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Head from "next/head";


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
        </main>
        <Footer />
      </div>
    </>
  );
}
