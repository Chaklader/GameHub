import {HStack, Image} from "@chakra-ui/react";
// @ts-ignore
import logo from '../assets/logo.webp'
import ColorModeSwitch from "src/components/ColorModeSwitch.tsx";
import SearchInput from "src/components/SearchInput.tsx";


interface Props {
    onSearch: (searchText: string) => void;
}

const NavBar = ({onSearch}: Props) => {

    return (
        <HStack padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;