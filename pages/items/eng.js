import React, { useState } from 'react';
import styles from '/styles/Styles.module.css';
import items from "/pages/api/data/Items/itemsDataENG";
import Categories from "/components/Categories";
import Card from "/components/Card";
import Header from "../../components/Header";
import Head from "next/head";
import { Center, Box, useColorModeValue, Tooltip } from '@chakra-ui/react';
import { FilterIcon } from "../../components/Icons";

const ItemsPageEng = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    const allCategories = ['all', ...new Set(items.map(item => item.category))];
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

    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 specific requirements" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Items</title>
        </Head>

        <Header pageTitle="Current needs" />

        <Box display='flex' alignItems='center' justifyContent='center' mt='-3%' mb='3%'>
            <Tooltip label='Choose categories'>
                <FilterIcon color={textColor} fontSize={40} cursor='pointer' />
            </Tooltip>
        </Box>

        <Center>
            <Box>
                <Card items={cardItems}/>
            </Box>
        </Center>
    </>
}

export default ItemsPageEng;
