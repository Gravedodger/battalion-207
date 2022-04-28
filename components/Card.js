import React from 'react';
import styles from '/styles/Card.module.css';
import { Box, Image, Text, useColorModeValue } from '@chakra-ui/react';

const Card = ({items}) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    return <div className={styles.sectionCenter}>
        {items.map(cardItem => {
            const { id, img, requiredAmount, desc, title } = cardItem;

            return <article key={id} className={styles.cardItem}>

                <Image objectFit='contain' className={styles.photo} src={img} alt={title} />

                <Box flexDirection='column' className={styles.itemInfo}>
                    <header>
                        <Text fontSize='xl' fontWeight={600} color={textColor} className={styles.cardTitle}>
                            {title}
                        </Text>
                        <Text fontSize='lg' fontWeight={600} color={textColor} className={styles.requiredAmount}>
                            {requiredAmount} од.
                        </Text>
                    </header>
                    <Text className={styles.itemText}>
                        {desc}
                    </Text>
                </Box>
            </article>
        })}
    </div>
}

export default Card;
