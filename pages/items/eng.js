import React, { useState } from 'react';
import styles from '/styles/Styles.module.css';
import items from "/pages/api/data/Items/itemsDataENG";
import Head from "next/head";
import Header from "/components/Header/Header";
import Card from "/components/Card/Card";
import Categories from "/components/Categories/Categories";
import { Center, Box, Tooltip } from '@chakra-ui/react';

const ItemsPageEng = () => {
    const [item, setItem]= useState(items);
    const filterItems = [...new Set(items.map((Val) => Val.category))];

    const filterFunction = (curcat) => {
        const newItem = items.filter((newVal) => {
            return newVal.category === curcat;
        });
        setItem(newItem);
    };

    return <>
        <Head>
            <meta lang="en" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 specific requirements" />
            <link rel="icon" href="./../../public/favicon.ico" />
            <title>Battalion-207 || Required Items</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Required Items' />

            <Box display='flex' alignItems='center' justifyContent='center' mt='-3%' mb='3%'>
                <Tooltip label='Choose categories'>
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
        </main>
    </>
}

export default ItemsPageEng;
