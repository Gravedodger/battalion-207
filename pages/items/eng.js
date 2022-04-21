import React, {useState} from 'react';
import styles from '/styles/Styles.module.css';
import items from "/assets/data/dataENG";
import Categories from "/components/Categories";
import Card from "/components/Card";
import Link from "next/link";
import Head from "next/head";
import { ReturnButtonEng } from "../../components/ReturnButton";

const allCategories = ['all', ...new Set(items.map(item => item.category))];

const ItemsPageEng = () => {
    const [cardItems, setCardItems] = useState(items);
    // eslint-disable-next-line
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'all') {
            setCardItems(items);
        } else {
            const newItems = items.filter(item => item.category === category);
            setCardItems(newItems);
        }
    }

    return <div className={styles.container}>
        <Head>
            <meta lang="en"/>
            <meta name="description" content="Battalion-207 specific requirements" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Items</title>
        </Head>

        <main>
            <section className={styles.mainWrap && styles.section}>
                <div className={styles.title}>
                    <ReturnButtonEng />
                    <h2>Current needs</h2>
                    <div className={styles.underline} />
                </div>
                <Categories categories={categories} filterItems={filterItems}/>
                <Card items={cardItems}/>
            </section>
        </main>
    </div>
};

export default ItemsPageEng;
