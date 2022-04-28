import React, { useState } from 'react';
import styles from '/styles/Categories.module.css';
import {FilterIcon} from "./Icons";
import {useColorModeValue, Box, Menu, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, Tooltip } from "@chakra-ui/react";
import items from "../pages/api/data/Items/itemsDataUKR";

const Categories = (item) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');

    const allCategories = ['Все', ...new Set(items.map(item => item.category))];
    const [cardItems, setCardItems] = useState(null);
    // eslint-disable-next-line
    const [categories, setCategories] = useState('Все');

    const filterItems = (category) => {
        if (category === 'Все') {
            setCardItems(items);
        } else {
            const newItems = items.filter(item => item.category === category);
            setCardItems(newItems);
        }
    }


    return (
        <Menu closeOnSelect={false}>
            <Tooltip label='Вибрати категорії'>
                <MenuButton
                    color={textColor}
                    fontSize={40}
                    cursor='pointer'
                    as={FilterIcon}
                    variant="ghost"
                    aria-label="Toggle theme"
                    icon={FilterIcon}
                />
            </Tooltip>

            <MenuList>
                <MenuOptionGroup
                    title="Filter"
                    defaultValue='CRITICAL NEED'
                    type="radio"
                    onChange={(val) => {
                        setCardItems(items)
                    }}>
                    {allCategories.map((categories) => (
                        <MenuItemOption value={categories}>{categories}</MenuItemOption>
                    ))}
                    );
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
};

export default Categories;