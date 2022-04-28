import React, { useState } from 'react';
import styles from '/styles/Styles.module.css';
import items from "/pages/api/data/Items/itemsDataUKR";
import Card from "/components/Card";
import Head from "next/head";
import Header from "../../components/Header";
import { Center, Box, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FilterIcon } from "../../components/Icons";
import Categories from "../../components/Categories";

const ItemsPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

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

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Battalion-207 нагальна необхіждність" />
            <link rel="icon" href="/favicon.ico" />
            <title>Батальйон-207 || Нагальна необхідність</title>
        </Head>

        <Header pageTitle="Нагальна необхідність" />

        <Box display='flex' alignItems='center' justifyContent='center' mt='-3%' mb='3%'>
            <Tooltip label='Сортувати'>
                <Categories />
            </Tooltip>
        </Box>

        <Center>
            <Box>
                <Card items={cardItems} />
            </Box>
        </Center>
    </>
}

export default ItemsPageUkr;
