import React from "react";
import styles from '../DonationsFeature.module.css';
import { Tabs, Tab, TabList, TabPanels, TabPanel } from '@chakra-ui/react';

function DFBody() {

    function DataTabs({ data }) {

        return(
            <Tabs>
                <TabList>
                    {data.map((tab, index) => (
                        <Tab key={index}>{tab.currency}</Tab>
                    ))}
                </TabList>
                <TabPanels>
                    {data.map((tab, index) => (
                        <TabPanel p={4} key={index}>
                            from {tab.name} +{tab.amount}
                        </TabPanel>
                    ))}
                </TabPanels>
            </Tabs>
        )
    }
    const Patrons = [
        {
            id: 1,
            name: 'Sviatoslav Malyshevskyi',
            currency: 'USD',
            amount: 300,
        },
        {
            id: 2,
            name: 'Ivan I.',
            currency: 'EUR',
            amount: 100,
        },
        {
            id: 3,
            name: 'Ruslan  M,',
            currency: 'UAH',
            amount: 2300,
        }
    ]

    return <DataTabs data={Patrons} />
}

export default DFBody;
