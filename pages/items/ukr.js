import React, { useState } from 'react';
import styles from '/styles/Styles.module.css';
import items from "../api/data/Items/itemsDataUKR";
import Head from "next/head";
import Header from "/components/Header";
import Card from "/components/Card";
import Categories from "/components/Categories";
import { Center, Box, Tooltip } from '@chakra-ui/react';

const ItemsPageUkr = () => {
    const [item, setItem]= useState(items);
    const filterItems = [...new Set(items.map((Val) => Val.category))];

    const filterFunction = (curcat) => {
        const newItem = items.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return (
        <>
            <Head>
                <meta lang="uk" />
                <meta name="description" content="Battalion-207 нагальна необхіждність" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Нагальна необхідність</title>
            </Head>

            <Header pageTitle='Нагальна необхідність' />

            <Box display='flex' alignItems='center' justifyContent='center' mt='-3%' mb='3%'>
                <Tooltip label='Вибрати категорії'>
                    <Categories
                        filterFunction={filterFunction}
                        setItem={setItem}
                        filterItems={filterItems}
                        className={styles.filterIcn}
                    />
                </Tooltip>
            </Box>

            <Center>
                <Box>
                    <Card item={item} />
                </Box>
            </Center>
        </>
    );
}

export default ItemsPageUkr;
