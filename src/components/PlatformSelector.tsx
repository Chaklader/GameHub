import React from 'react';
import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const PlatformSelector = () => {

    const setPlatformId = useGameQueryStore(s=>s.setPlatformId);
    const selectedPlatformId = useGameQueryStore(s=> s.gameQuery.platformId);

    const {data: platforms, error} = usePlatforms();
    const selectedPlatform = usePlatform(selectedPlatformId);

    if (error) return null;

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map(platform => <MenuItem onClick={() => setPlatformId(platform.id)}
                                                              key={platform.id}>
                    {platform.name}
                </MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;