import {Game} from "src/hooks/useGames.ts";
import {Card, CardBody, Heading, HStack, Image} from "@chakra-ui/react";
import PlatformIconList from "src/components/PlatformIconList.tsx";
import CriticScore from "src/components/CriticScore.tsx";
import getCroppedImageURL from "src/components/services/image-url.ts";
import Emoji from "src/components/Emoji.tsx";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageURL(game.background_image)}/>
            <CardBody>
                <HStack justifyContent={'space-between'} marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms.map(p => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'>{game.name}<Emoji rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
    );
};

export default GameCard;