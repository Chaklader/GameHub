import React, {ReactNode} from 'react';
import {Box, Heading} from "@chakra-ui/react";


interface Props {
    term: string;
    children: ReactNode | ReactNode[];
}

const DefinitionItem = ({term, children}: Props) => {

    return (
        <Box marginY={5}>
            <Heading as='dt' fontSize='md' color='gray.500'>
                {term}
                {children}
            </Heading>
        </Box>
    );
};

export default DefinitionItem;