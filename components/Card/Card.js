import React from 'react';
import styles from '/components/Card/Card.module.css';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const Card = ({ item }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return (
        <div className={styles.sectionCenter}>
            {item.map((Val) => {
                return (
                    <article key={Val.id} className={styles.cardItem}>

                        <Image objectFit='contain' className={styles.photo} src={Val.img} alt={Val.title} />

                        <Box flexDirection='column' className={styles.itemInfo}>
                            <header>
                                <Text fontSize='xl' fontWeight={600} color={textColor} className={styles.cardTitle}>
                                    {Val.title}
                                </Text>

                                <Text fontSize='lg' fontWeight={600} color={textColor} className={styles.requiredAmount}>
                                    {Val.requiredAmount} {Val.i}
                                </Text>
                            </header>

                            <Text className={styles.itemText}>
                                {Val.desc}
                            </Text>
                        </Box>
                    </article>
                );
            })}
        </div>
    );
}

export default Card;
