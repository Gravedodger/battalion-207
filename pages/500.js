import React from 'react';
import Link from 'next/link';
import { Center, Box, Text, Image } from '@chakra-ui/react';

export default function Custom500() {
    return <>
        <Center flexDir='column' mt='10rem'>
            <Box width={{ lg: '17rem', md: '13rem', sm: '10rem', base: '10rem' }} ml='1.7rem' mb='5rem'>
                <Image src='/logo.WebP' lazy='true' alt="main logo" objectFit='contain' boxSize="90%" layout='fill'/>
            </Box>
            <Box mb='2rem'>
                <Text>500 - Сталася помилка на сервері</Text>
                <Text>500 - Server-side error occurred</Text>
            </Box>
            <Box>
                <Link href="/">
                    <a>
                        Повернутися на головну сторінку / Go back home
                    </a>
                </Link>
            </Box>
        </Center>
    </>
}
