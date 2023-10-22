import React, {useState} from 'react';
import {Button, Text} from "@chakra-ui/react";


interface Props {
    text: string;
}

const ExpandableText = ({text}: Props) => {
    const [expanded, isExpanded] = useState(false);
    const limit = 300;

    if(!text) return null;

    if (text.length <= limit) {
        return <Text>{text}</Text>;
    }

    const summary = expanded ? text : text.substring(0, limit) + "...";

    return (
        <Text>
            {summary}
            <Button onClick={() => isExpanded(!expanded)} size='xs' fontWeight='bold' colorScheme='yellow' marginLeft={1}>
                {expanded ? 'Show Less' : 'Read More'}
            </Button>
        </Text>
    );
};

export default ExpandableText;