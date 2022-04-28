import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Header from "../../components/Header";
import { Center, Box, Text, useColorModeValue} from "@chakra-ui/react";

const ReportsPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return (
        <div>
            <Head>
                <meta lang="uk" />
                <meta name="description" content="Фінансова та інвентарна звітність Батальйону-207" />
                <link rel="icon" href="/favicon.ico" />
                <title>Батальйон-207 || Звітність</title>
            </Head>

            <main>
                <Header pageTitle="Звітність" />

                <Center>
                    <Box>
                        <Text color={textColor} fontSize={{ lg:'xl', md:'md', sm:'sm' }}>
                            Секція в процесі розробки та з'явиться незабаром!
                        </Text>
                    </Box>
                </Center>
            </main>
        </div>
    );
};

export default ReportsPageUkr;
