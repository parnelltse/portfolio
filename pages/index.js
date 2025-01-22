import Head from "next/head";
import Header from "./components/header";
import Footer from "./components/footer";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Parnell Tse</title>
        <meta name="description" content="Parnell's Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.homeContainer}>
        <div class="background">
          <Header />
          <main className={styles.content}>
            <p>asdasdasdsa</p>
            <p>asdasdasdsa</p>
            <p>asdasdasdsa</p>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}
