import React, { Fragment } from 'react';
import styles from "../../styles/Styles.module.css";
import Head from "next/head";
import Link from "next/link";
import Header from "../../components/Header";
import { Center, TableContainer, Table, Tbody, Tr, Td, Image, Text } from '@chakra-ui/react';
import { ExternalLinkIcon } from "@chakra-ui/icons";

const ContactsPageEng = ({ pageTitle }) => {
    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 contact information" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Contacts</title>
        </Head>

        <Header pageTitle="Contact information" />

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
                                        Battalion command:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text>
                                        military base А7376, Kyiv city
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600}>
                                        Contact person:
                                    </Text>
                                </Td>
                                <Td>
                                    <Text display='flex' alignItems='center' justifyContent='space=between'>
                                        <p className={styles.contactsItemLink}>Sviatoslav Malyshevskyi</p>
                                        <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref
                                              target="_blank" rel="noopener noreferrer">
                                            <ExternalLinkIcon ml={3} />
                                        </Link>
                                    </Text>
                                </Td>
                            </Tr>

                            <Tr className={styles.contactsItem}>
                                <Td>
                                    <Text fontWeight={600}>
                                        Contact tel:
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
                                        Email:                                </Text>
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

export default ContactsPageEng;
