import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "src/hooks/usePlatforms.ts";
import {Platform} from "src/hooks/useGames.ts";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data: platforms, error} = usePlatforms();
    if (error) return null;


    const platform = platforms.results.find(p => p.id === selectedPlatformId);

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {platform?.name || "Platforms"}
            </MenuButton>
            <MenuList>
                {platforms?.results.map(platform =>
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>
                        {platform.name}
                    </MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
