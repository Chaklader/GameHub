import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import {Platform} from "../hooks/useGames";


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatform}: Props) => {

    const {data: platforms, error} = usePlatforms();

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}
                                                              key={platform.id}>
                    {platform.name}
                </MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;