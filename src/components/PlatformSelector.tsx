import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/all';
import usePlatform from 'src/hooks/usePlatform.ts';
import usePlatforms from 'src/hooks/usePlatforms.ts';
import useGameQueryStore from 'src/store.ts';

const PlatformSelector = () => {
  const { data: platforms, error } = usePlatforms();

  const selectedPlatformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(selectedPlatformId);

  const onSelectPlatform = useGameQueryStore((s) => s.setPlatformId);

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem onClick={() => onSelectPlatform(platform.id)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
