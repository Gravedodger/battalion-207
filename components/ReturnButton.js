import React from 'react';
import styles from '/styles/ReturnButton.module.css';
import returnBtn from '/assets/images/icons/back.png';
import Link from "next/link";
import Image from "next/image";

export const ReturnButtonUkr = () => {
    return (
        <Link href="../pages/homepage/ukr.js">
            <div className={styles.returnBtnWrap}>
                <div className={styles.returnBtnContainer}>
                    <Image src={returnBtn} className={styles.returnBtn} />
                </div>
                <div className={styles.returnBtnTxt}>
                    <p>Назад до меню</p>
                </div>
            </div>
        </Link>
    );
};

export const ReturnButtonEng = () => {
    return (
        <Link href="../pages/homepage/eng.js">
            <div className={styles.returnBtnWrap}>
                <div className={styles.returnBtnContainer}>
                    <Image src={returnBtn} className={styles.returnBtn} />
                </div>
                <div className={styles.returnBtnTxt}>
                    <p>Back to menu</p>
                </div>
            </div>
        </Link>
    );
};
