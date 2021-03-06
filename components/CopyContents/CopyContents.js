import React, { useState } from 'react';
import { Button, Tooltip } from "@chakra-ui/react";

export default function CopyContents() {
    if (typeof window !== "undefined") {
        const [text] = useState('s.malyshevskyi.08@aberdeen.ac.uk');

        const copy = async () => {
            await navigator.clipboard.writeText(text);
            alert('Text copied');
        }

        return <div>
            <Tooltip label='click to copy' aria-label='Copy tooltip'>
                <Button id='emailAddress'
                        py={5}
                        px={4}
                        backgroundColor='#c59d5f'
                        border='#c59d5f'
                        borderRadius={50}
                        fontSize='11px'
                        fontWeight={600}
                        color='#ffffff'
                        onClick={copy}
                >
                    s.malyshevskyi.08@aberdeen.ac.uk
                </Button>
            </Tooltip>
        </div>;
    }
}
