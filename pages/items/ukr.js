import React, { useState } from 'react';
import items from "/api/data/Items/itemsDataUKR";
import styles from '/styles/Styles.module.css';
import Head from "next/head";
import Card from "/components/Card/Card";
import DandD from "/components/D&D";
import Header from "/components/Header/Header";
import Categories from "/components/Categories/Categories";
import { Center, Box, Tooltip } from '@chakra-ui/react';

const ItemsPageUkr = ({progressValueNum}) => {
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
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Battalion-207 нагальна необхіждність" />
            <link rel="icon" href="/public/favicon.ico" />
            <title>Батальйон-207 || Нагальна необхідність</title>
        </Head>

        <main className='main'>
            <Header pageTitle='Нагальна необхідність' />

            <Box display='flex' alignItems='center' justifyContent='center'
                 mt={{ lg: '-4rem', md: '-2.5rem', sm: '-2.5rem', base: '-2rem' }}
                 mb={{ lg: '2rem', md: '1rem', sm: '1rem', base: '1rem' }}
            >
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

            <DandD />
        </main>
    </>
}

export default ItemsPageUkr;
