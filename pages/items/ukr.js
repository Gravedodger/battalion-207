import React, {useState} from 'react';
import styles from '/styles/Styles.module.css';
import items from "/pages/api/data/dataUKR";
import Categories from "/components/Categories";
import Card from "/components/Card";
import Head from "next/head";
import Header from "../../components/Header";

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

    return (
        <div>
            <Head>
                <meta lang="uk" />
                <meta name="description" content="Battalion-207 нагальна необхіждність" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Нагальна необхідність</title>
            </Head>

            <main>
                <Header pageTitle="Нагальна необхідність">
                    <Categories categories={categories} filterItems={ filterItems } />
                </Header>
                <Card items={cardItems}/>
            </main>
        </div>
    )
};

export default ItemsPageUkr;
