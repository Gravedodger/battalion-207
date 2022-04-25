import React from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header"
import { Center, TableContainer, Table, Tbody, Tr, Td, Image, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContactsPageUkr = () => {
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
                                    <Text fontWeight={600}>
                                        Підпорядкування:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        в/ч А7376, м.Київ
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600}>
                                        Контактна особа:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text display='flex' alignItems='center' justifyContent='space=between'>
                                        <p className={styles.contactsItemLink}>Святослав Малишевський</p>
                                        <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref
                                              target="_blank" rel="noopener noreferrer">
                                            <ExternalLinkIcon />
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600}>
                                        Контактний телефон:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        <Link href="tel:+380964954677">
                                            <p>+38 096 495 46 77</p>
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600}>
                                        Листування:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        <Link href="mailto:battalion207.info@gmail.com">
                                            <p className={styles.contactsItemLink}>battalion207.info@gmail.com</p>
                                        </Link>
                                    </Text>
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
