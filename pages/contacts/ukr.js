import React  from 'react';
import styles from "/styles/Styles.module.css";
import Head from "next/head";
import Link from "next/link";
import Header from "/components/Header"
import { Center, TableContainer, Table, Tbody, Tr, Td, Image, Text, useColorModeValue } from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContactsPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fff');

    return <>
        <Head>
            <meta lang="uk" />
            <meta name="description" content="Батальйон 207 контактна інформація" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Контакти</title>
        </Head>

        <Header pageTitle="Контактна інформація" />

        <Center>
            <div className={styles.contacts}>
                <div className={styles.contactsLogoContainer}>
                    <Image src='/logo.png' alt="battalion logo" />
                </div>

                <TableContainer className={styles.contactsInfo}>
                    <Table overflow='hidden'>
                        <Tbody>
                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600} color={textColor}>
                                        Підпорядкування:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text color={textColor}>
                                        в/ч А7376, м.Київ
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600} color={textColor}>
                                        Контактна особа:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text display='flex' alignItems='center'color={textColor} justifyContent='space=between'>
                                        <Text color={textColor} className={styles.contactsItemLink}>Святослав Малишевський</Text>
                                        <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref
                                              target="_blank" rel="noopener noreferrer">
                                            <ExternalLinkIcon ml={3} />
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600} color={textColor}>
                                        Контактний телефон:
                                    </Text>
                                </Td>
                                <Td>
                                    <Link href="tel:+380964954677">
                                        <Text color={textColor} className={styles.contactsItemLink}>+38 096 495 46 77</Text>
                                    </Link>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600} color={textColor}>
                                        Листування:
                                    </Text>
                                </Td>
                                <Td>
                                    <Link href="mailto:battalion207.info@gmail.com">
                                        <Text color={textColor} className={styles.contactsItemLink}>battalion207.info@gmail.com</Text>
                                    </Link>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                </TableContainer>
            </div>
        </Center>
    </>
};

export default ContactsPageUkr;
