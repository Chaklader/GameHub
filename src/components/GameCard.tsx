import {Game} from "src/hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "src/components/PlatformIconList.tsx";
import CriticScore from "src/components/CriticScore.tsx";
import getCroppedImageURL from "src/components/services/image-url.ts";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card borderRadius='10px' overflow='hidden'>
            <Image src={getCroppedImageURL(game.background_image)}/>
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
            </CardBody>
            <HStack justifyContent={'space-between'}>
                <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                <CriticScore score={game.metacritic}/>
            </HStack>
        </Card>
    );
};

export default GameCard;