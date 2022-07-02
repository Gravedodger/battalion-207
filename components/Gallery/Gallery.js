import React from 'react';
import Pagination from "../Pagination";
import { SimpleGrid, Center, Box, Image } from '@chakra-ui/react';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        // const galleryItems = [...Array(150).keys()].map(
        //     i => ({ id: (i + 1), name: 'Item ' + (i+1) }));

        const galleryItems = [
            {
                id: 1,
                alt: 'Battalion photo',
                src: '/gallery/featured-1.WebP'
            },
            {
                id: 2,
                alt: 'Battalion photo',
                src: '/gallery/featured-2.WebP'
            },
            {
                id: 3,
                alt: 'Battalion photo',
                src: '/gallery/featured-3.WebP'
            },
            {
                id: 4,
                alt: 'Battalion photo',
                src: '/gallery/featured-4.WebP'
            },
            {
                id: 5,
                alt: 'Battalion photo',
                src: '/gallery/featured-5.WebP'
            },
            {
                ig: 6,
                alt: 'Battalion photo',
                src: '/gallery/featured-6.WebP'
            },
            {
                id: 7,
                alt: 'Battalion photo',
                src: '/gallery/featured-7.WebP'
            },
            {
                id: 8,
                alt: 'Battalion photo',
                src: '/gallery/featured-8.WebP'
            },
            {
                id: 9,
                alt: 'Battalion photo',
                src: '/gallery/Gutsul.WebP'
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
                                maxchildwidth='20%'
                                columns={{ lg: 3, md: 2, sm: 1 }}
                                spacing={{ lg: '20px', md: '15px', sm: '20px' }}
                                w='80%'
                                alignItems='center'
                    >
                        {this.state.pageOfItems.map(item =>
                            <Box mb={{ sm: '1rem', base: '1rem' }}>
                                <Image lazy="true"
                                       key={item.id}
                                       src={item.src}
                                       alt={item.alt}
                                       w='100%'
                                />
                            </Box>
                        )}

                        <Pagination items={this.state.galleryItems}
                                    onChangePage={this.onChangePage}
                        />
                    </SimpleGrid>
                </Center>
            </Box>
        );
    }
}

export default Gallery;
