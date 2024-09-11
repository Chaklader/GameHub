import { HStack, Image } from '@chakra-ui/react';
// @ts-ignore
import ColorModeSwitch from 'src/components/ColorModeSwitch.tsx';
import SearchInput from 'src/components/SearchInput.tsx';
import logo from '../assets/logo.webp';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
