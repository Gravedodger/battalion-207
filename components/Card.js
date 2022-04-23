import React from 'react';
import styles from '/styles/Card.module.css';
import Image from "next/image";

const Card = ({items}) => {
    return (
        <div className={styles.sectionCenter}>
            {items.map(cardItem => {
                const { id, img, requiredAmount, desc, title } = cardItem;
                return <article key={ id } className={styles.cardItem}>

                        <img
                            src={ img }
                            alt={ title }
                            className={styles.photo}
                        />

                    <div className={styles.itemInfo}>
                        <header>
                            <h4>
                                { title }
                            </h4>
                            <h5 className={styles.requiredAmount}>{ requiredAmount }</h5>
                        </header>
                        <p className={styles.itemText}>{ desc }</p>
                    </div>
                </article>
            })}
        </div>
    );
};

export default Card;
