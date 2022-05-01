import React from 'react';
import styles from '/components/Categories/Categories.module.css';
import cardsUKR from "/pages/api/data/Items/itemsDataUKR";
import { FilterIcon } from "../Icons";
import { Menu, Tooltip, MenuList, MenuButton, MenuItemOption, useColorModeValue } from "@chakra-ui/react";

const Categories = ({ filterItems, setItem, filterFunction }) => {
    const textColor = useColorModeValue('#222222', '#c59d5f');
    const borderColor = useColorModeValue('#c59d5f', '')

    return (
        <Menu closeOnSelect={false}>
            <Tooltip label='Вибрати категорії'>
                <MenuButton
                    onClick={() => setItem(cardsUKR)}
                    defaultValue='Все'
                    color={textColor}
                    fontSize={40}
                    cursor='pointer'
                    as={FilterIcon}
                    variant="ghost"
                    aria-label="Toggle theme"
                    icon={FilterIcon}
                />
            </Tooltip>

            <MenuList display='flex' flexDirection='column' borderColor={borderColor} borderWidth='3px'>
                {filterItems.map((Val, id) => {
                    return (
                        <MenuItemOption
                            key={id}
                            fontSize={18}
                            cursor='pointer'
                            variant="ghost"
                            onClick={() => filterFunction(Val)}
                        >
                            {Val}
                        </MenuItemOption>
                    );
                })}
            </MenuList>
        </Menu>
    );
}

export default Categories;
