import React  from 'react';
import styles from "/styles/Contacts.module.css";
import Head from "next/head";
import Link from "next/link";
import Header from "/components/Header/Header";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Center, Box, TableContainer, Table, Tbody, Tr, Td, Image, Text, useColorModeValue } from '@chakra-ui/react';

const ContactsPageEng = () => {
    const textColor = useColorModeValue('#222222', '#fff');
    const labelColor = useColorModeValue('#222222', '#c59d5f');

    return <>
        <Head>
            <meta lang="en" />
            <meta name="description" content="Battalion-207 contact information" />
            <link rel="icon" href="/favicon.ico" />
            <title>Battalion-207 || Contacts</title>
        </Head>

        <main className='main'>
            <Header pageTitle="Contact information" />

            <Center>
                <Box className={styles.contacts}>
                    <Box className={styles.contactsLogoContainer}>
                        <Image src='/logo.png' alt="battalion logo" />
                    </Box>

                    <TableContainer className={styles.contactsInfo}>
                        <Table overflow='hidden'>
                            <Tbody>
                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Battalion command:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text color={textColor}>
                                            military base А7376, Kyiv city
                                        </Text>
                                    </Td>
                                </Tr>

                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Contact person:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text display='flex' alignItems='center' color={textColor} justifyContent='space=between'>
                                            <Text color={textColor} className={styles.contactsItemLink}>Sviatoslav Malyshevskyi</Text>
                                            <Link href="https://www.facebook.com/sviatoslav.malyshevskyi" passHref
                                                  target="_blank" rel="noopener noreferrer">
                                                <ExternalLinkIcon ml={3} />
                                            </Link>
                                        </Text>
                                    </Td>
                                </Tr>

                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Contact tel:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>
                                            <Link href="tel:+380964954677"color={textColor}>
                                                <Text color={textColor} className={styles.contactsItemLink}>+38 096 495 46 77</Text>
                                            </Link>
                                        </Text>
                                    </Td>
                                </Tr>

                                <Tr className={styles.contactsItem}>
                                    <Td>
                                        <Text fontWeight={600} color={labelColor}>
                                            Email:
                                        </Text>
                                    </Td>
                                    <Td>
                                        <Text>
                                            <Link href="mailto:battalion207.info@gmail.com">
                                                <Text color={textColor} className={styles.contactsItemLink}>battalion207.info@gmail.com</Text>
                                            </Link>
                                        </Text>
                                    </Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>
            </Center>
        </main>
    </>
}

export default ContactsPageEng;
