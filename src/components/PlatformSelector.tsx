import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/all";
import usePlatforms from "src/hooks/usePlatforms.ts";
import {Platform} from "src/hooks/useGames.ts";
import usePlatform from "src/hooks/usePlatform.ts";

interface Props {
    selectedPlatformId?: number;
    onSelectPlatform: (platform: Platform) => void;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data: platforms, error} = usePlatforms();
    const platform = usePlatform(selectedPlatformId);


    if (error) return null;

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
