import {HStack, Image} from "@chakra-ui/react";
// @ts-ignore
import logo from '../assets/logo.webp'
import ColorModeSwitch from "src/components/ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src={logo} boxSize='60px'/>
            <ColorModeSwitch/>
        </HStack>
    );
};

export default NavBar;