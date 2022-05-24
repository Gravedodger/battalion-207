import React from 'react';
import Link from 'next/link';
import { Center, Box, Text, Image, IconButton, Container } from '@chakra-ui/react';

export default function Custom404() {
    return <>
        <Center flexDir='column' mt='10rem'>
            <Box w='100%'>
                <IconButton
                    position='relative'
                    left='80%'
                    mt='2rem'
                    fontSize='40px'
                    variant="ghost"
                    aria-label="Toggle theme"
                    cursor='pointer'
                    icon={themeIcon}
                    onClick={toggleColorMode}
                    color='#c59d5f'
                />
            </Box>

            <Box width={{ lg: '17rem', md: '13rem', sm: '10rem', base: '10rem' }} ml='1.7rem' mb='5rem'>
                <Image src='/logo.WebP' lazy='true' alt="main logo" objectFit='contain' boxSize="90%" layout='fill'/>
            </Box>
            <Box mb='2rem'>
                <Text mb='1rem'>404 - Сторінка на знайдена чи була переміщена</Text>
                <Text>404 - Page Not Found Or Had Been Moved Elsewhere</Text>
            </Box>
            <Box>
                <Link href="/">
                    <a>
                        Повернутися на головну сторінку / Go back to the start page
                    </a>
                </Link>
            </Box>
        </Center>
    </>
}
