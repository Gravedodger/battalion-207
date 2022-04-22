import React, {useState} from 'react';
import styles from '/styles/Styles.module.css';
import items from "/assets/data/dataUKR";
import Categories from "/components/Categories";
import Card from "/components/Card";
import Head from "next/head";
import { ReturnButtonUkr } from "../../components/ReturnButton";

const ItemsPageUkr = () => {

    const allCategories = ['Все', ...new Set(items.map(item => item.category))];

    const [cardItems, setCardItems] = useState(items);
    // eslint-disable-next-line
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if (category === 'Все') {
            setCardItems(items);
        } else {
            const newItems = items.filter(item => item.category === category);
            setCardItems(newItems);
        }
    }

    return <div className="container">
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Battalion-207 нагальна необхіждність" />
            <link rel="icon" href="/favicon.ico" />
            <title>Батальйон-207 || Нагальна необхідність</title>
        </Head>

        <main>
            <section className="section">
                <div className="title">
                    <ReturnButtonUkr />
                    <h2>Нагальна необхідність</h2>
                    <div className="underline" />
                </div>
                <Categories categories={categories} filterItems={ filterItems } />
                <Card items={cardItems}/>
            </section>
        </main>
    </div>
};

export default ItemsPageUkr;
