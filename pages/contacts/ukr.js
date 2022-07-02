import React  from 'react';
import styles from "/styles/Contacts.module.css";
import Head from "next/head";
import Link from "next/link";
import DandD from "/components/D&D";
import Header from "/components/Header/Header"
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Center, TableContainer, Table, Tbody, Tr, Td, Image, Text, useColorModeValue } from '@chakra-ui/react';

const ContactsPageUkr = () => {
    const textColor = useColorModeValue('#222222', '#fff');
    const labelColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="uk" />
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
            <meta name="description" content="Батальйон 207 контактна інформація" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Контакти</title>
        </Head>

        <main className='main'>
            <Header pageTitle="Контактна інформація" />

            <Center>
                <div className={styles.contacts}>
                    <div className={styles.contactsLogoContainer}>
                        <Image src='/logo.WebP' alt="battalion logo" />
                    </div>

                    <TableContainer className={styles.contactsInfo}>
                        <Table overflow='hidden'>
                            <Tbody>
                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
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
                                        <Text fontWeight={600} color={labelColor}>
                                            Контактна особа:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text display='flex'
                                              alignItems='center'
                                              color={textColor}
                                              justifyContent='space=between'
                                        >
                                            <Text color={textColor}
                                                  className={styles.contactsItemLink}
                                            >
                                                Святослав Малишевський
                                            </Text>
                                            <Link href="https://www.facebook.com/sviatoslav.malyshevskyi"
                                                  passhref="true"
                                                  target="_blank"
                                                  rel="noopener noreferrer"
                                            >
                                                <ExternalLinkIcon ml={3} />
                                            </Link>
                                        </Text>
                                    </Td>
                                </Tr>

                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Контактний телефон:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Link href="tel:+380964954677">
                                            <Text color={textColor}
                                                  className={styles.contactsItemLink}
                                            >
                                                +38 096 495 46 77
                                            </Text>
                                        </Link>
                                    </Td>
                                </Tr>

                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Листування:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Link href="mailto:battalion207.info@gmail.com">
                                            <Text color={textColor}
                                                  className={styles.contactsItemLink}
                                            >
                                                battalion207.info@gmail.com
                                            </Text>
                                        </Link>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </div>
            </Center>

            <DandD />
        </main>
    </>
}

export default ContactsPageUkr;
