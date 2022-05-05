import React from 'react';
import './Gallery.module.css';
import Pagination from "../Pagination";
import { SimpleGrid, Center, Stack, Box, Text, Image } from '@chakra-ui/react';

class Gallery extends React.Component {
    constructor() {
        super();

        // const galleryItems = [...Array(150).keys()].map(
        //     i => ({ id: (i + 1), name: 'Item ' + (i+1) }));

        const galleryItems = [
            {
                id: 1,
                alt: 'Battalion photo',
                src: '/featured-1.jpg'
            },
            {
                id: 2,
                alt: 'Battalion photo',
                src: '/featured-2.jpg'
            },
            {
                id: 3,
                alt: 'Battalion photo',
                src: '/featured-3.jpg'
            },
            {
                id: 4,
                alt: 'Battalion photo',
                src: '/featured-4.jpg'
            },
            {
                id: 5,
                alt: 'Battalion photo',
                src: '/featured-5.jpg'
            },
            {
                ig: 6,
                alt: 'Battalion photo',
                src: '/featured-6.jpg'
            },
            {
                id: 7,
                alt: 'Battalion photo',
                src: '/featured-7.jpg'
            },
            {
                id: 8,
                alt: 'Battalion photo',
                src: '/featured-8.jpg'
            },
            {
                id: 9,
                alt: 'Battalion photo',
                src: '/Gutsul.jpg'
            }
        ]

        this. state = {
            galleryItems: galleryItems,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <Box mb='10%'>


                <Center>
                    <SimpleGrid autoFlow={true}
                                maxChildWidth='20%' columns={{ lg: 3, md: 2, sm: 1 }}
                                spacing={{ lg: '20px', md: '15px', sm: '20px' }} w='80%' alignItems='center'>
                        {this.state.pageOfItems.map(item =>
                            <Box key={item.id}>
                                <Image src={item.src} alt={item.alt} w='100%'/>
                            </Box>
                        )}

                        <Pagination items={this.state.galleryItems} onChangePage={this.onChangePage} />
                    </SimpleGrid>
                </Center>
            </Box>
        );
    }
}

export default Gallery;