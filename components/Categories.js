import React, { useState } from 'react';
import styles from '/styles/Categories.module.css';

const Categories = ({ categories, filterItems }) => {
    return (
        <div>
            <div className={styles.btnContainer}>
                { categories.map((category, index) => {
                    return <button className={styles.filterBtn} key={ index } onClick={ () => filterItems(category) }>
                        { category }
                    </button>
                })}
            </div>

            <div className={styles.categoriesExpand}>
            </div>

        </div>
    );
};

export default Categories;