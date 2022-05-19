import React from 'react';
import UseAnimations from 'react-useanimations';
import activity from 'react-useanimations/lib/activity';
import { Text, Center, Link, useColorModeValue } from '@chakra-ui/react';

const DandD = () => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return (
        <Center position='relative'
                bottom={{ lg: '-19rem', md: '-7rem', sm: '-3rem', base: '-3rem' }}
                alignItems='center'
                flexDirection='column'
        >
            <Text fontSize='12px' mt='10px' color={textColor}>Designed and developed by:</Text>
            <Link
                display='flex'
                href='https://www.facebook.com/sviatoslav.malyshevskyi'
                target='_blank'
                noopener noreferrer
            >
                <Text color={textColor}
                      fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
                      fontWeight={600}>
                    S
                </Text>

                <UseAnimations
                    animation={activity}
                    size={30}
                    strokeColor={textColor}
                    style={{ cursor: "pointer" }}
                />

                <Text
                    color={textColor}
                    fontSize={{ lg: "18px", md: "16px", sm: "14px", base: "12px" }}
                    fontWeight={600}>
                    M
                </Text>
            </Link>
        </Center>
    );
}

export default DandD;
