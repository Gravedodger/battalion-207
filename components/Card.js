import React from 'react';
import styles from '/styles/Card.module.css';
import { Box, Image, Text } from '@chakra-ui/react';

const Card = ({items}) => {
    return (
        <div className={styles.sectionCenter}>
            {items.map(cardItem => {
                const { id, img, requiredAmount, desc, title } = cardItem;

                return (
                    <article key={id} className={styles.cardItem}>

                        <Image
                            objectFit='contain'
                            className={styles.photo}
                            src={img}
                            alt={title}
                        />

                        <Box flexDirection='column' className={styles.itemInfo}>
                            <header>
                                <Text fontSize='xl' fontWeight={600}>
                                    {title}
                                </Text>
                                <Text fontSize='lg' fontWeight={600} className={styles.requiredAmount}>
                                    {requiredAmount} од.
                                </Text>
                            </header>
                            <p className={styles.itemText}>
                                {desc}
                            </p>
                        </Box>
                    </article>
                )
            })}
        </div>
    );
};

export default Card;
