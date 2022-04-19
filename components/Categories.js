import React from 'react';
import styles from '/styles/Categories.module.css';

const Categories = ({ categories, filterItems }) => {
    return (
        <div className={styles.btnContainer}>
            { categories.map((category, index) => {
                return <button className={styles.filterBtn} key={ index } onClick={ () => filterItems(category) }>
                    { category }
                </button>
            })}
        </div>
    );
};

export default Categories;
