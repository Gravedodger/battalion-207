import React from "react";
import styles from '../styles/Starter.module.css';
import Link from "next/link";
import Head from 'next/head';
import Image from 'next/image';
import logo from '../assets/images/logos/logo-112.png';
import flagOfUkraine from '../assets/images/flags/ukraine-flag.png';
import flagsOfUSAandUK from '../assets/images/flags/UK-US_flag.png';

export default function Home() {
  return (
    <div className='container'>
      <Head>
        <title>Battalion-207</title>
        <meta name="description" content="Battalion-207 needs and requirements" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='mainWrap'>
          <div className={styles.starterWrap}>

              <div className={styles.starterDesktop}>
                  <div className={styles.starterLogoContainer}>
                      <Image src={ logo } />
                  </div>

                  <div className={styles.starterFlagWrap}>
                      <div className={styles.starterFlagContainer}>
                          <p className={styles.starterFlagText}>Українською</p>
                          <div className={styles.starterUkrFlag}>
                              <Link href='homepage/ukr'>
                                  <Image src={ flagOfUkraine } />
                              </Link>
                          </div>
                      </div>

                      <div className={styles.starterFlagContainer}>
                          <p className={styles.starterFlagText}>In English</p>
                          <div className={styles.starterEngFlag}>
                              <Link href="homepage/eng">
                                  <Image src={ flagsOfUSAandUK } />
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </main>
    </div>
  )
}

// <div className={styles.starterItemMobile}>
//     <Image src={ logo } className={styles.logoMobile} />
// </div>


{/*<div className={styles.starterItemFlagsMobile}>*/}
{/*    <div className={styles.starterItemFlag}>*/}
{/*        <Link href="homepage/eng">*/}
{/*            <Image src={ flagsOfUSAandUK } className={styles.nationalFlag}*/}
{/*                   width={300} height={200} />*/}
{/*        </Link>*/}
{/*    </div>*/}

{/*    <div className={styles.starterItemFlag}>*/}
{/*        <Link href='homepage/ukr'>*/}
{/*            <Image src={ flagOfUkraine } className={styles.nationalFlag} width={300} height={200} />*/}
{/*        </Link>*/}
{/*    </div>*/}
{/*</div>*/}