import React from "react";
import styles from '../styles/Home.module.css';
import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';
import logo from '../assets/images/logos/logo-112.png';
import flagOfUkraine from '../assets/images/flags/ukraine-flag.png';
import flagsOfUSAandUK from '../assets/images/flags/UK-US_flag.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Battalion-207</title>
        <meta name="description" content="Battalion-207 needs and requirements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.mainWrap}>
          <div className={styles.homepageWrap}>
              <div className={styles.starterItemMobile}>
                  <Image src={ logo } className={styles.logoMobile} />
              </div>
              <div className={styles.starterItemFlag}>
                  <Link href='homepage/ukr'>
                      <Image src={ flagOfUkraine } className={styles.nationalFlag}
                             width={300} height={200} />
                  </Link>
              </div>
              <div className={styles.starterItem}>
                  <Image src={ logo } className={styles.mainLogo}
                         width={500} height={600} />
              </div>
              <div className={styles.starterItemFlag}>
                  <Link href="homepage/eng">
                      <Image src={ flagsOfUSAandUK } className={styles.nationalFlag}
                             width={300} height={200} />
                  </Link>
              </div>
          </div>
      </main>
    </div>
  )
}
