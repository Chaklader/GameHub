import {HStack, Image, Text} from "@chakra-ui/react";
// @ts-ignore
import logo from '../assets/logo.webp'

const NavBar = () => {
    return (
        <HStack>
            <Image src={logo} boxSize='60px'/>
            <Text>NavBar</Text>
        </HStack>
    );
};

export default NavBar;