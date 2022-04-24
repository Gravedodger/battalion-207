import React, { useState } from 'react';
import styles from '/styles/Styles.module.css';
import items from "/pages/api/data/dataENG";
import Categories from "/components/Categories";
import Card from "/components/Card";
import Header from "../../components/Header";
import Head from "next/head";
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

    return (
        <div>
            <Head>
                <meta lang="en" />
                <meta name="description" content="Battalion-207 specific requirements" />
                <link rel="icon" href="/favicon.ico" />
                <title>Battalion-207 || Items</title>
            </Head>

            <main>
                <div>
                    <Header pageTitle="Current needs">
                        <Categories categories={categories} filterItems={ filterItems } />
                    </Header>
                    <Card items={cardItems}/>
                </div>
            </main>
        </div>
    );
};

export default ItemsPageEng;
