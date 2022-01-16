import { Flex, Image, Text } from "@chakra-ui/react";
import { RiArrowRightSLine } from "react-icons/ri";
import { SliderMovies } from "../SliderMovies";
import { PosterMovies } from "../SliderMovies/PosterMovies";

export function Dash() {
  return (
    <Flex direction="column" px="20">
      <Text fontSize="26" fontWeight="500" my="5">
        Continue assistindo
      </Text>

      <Flex>
        <SliderMovies image="/images/b99.svg" isWatching progress={50} />
        <SliderMovies image="/images/snowTrain.svg" isWatching progress={15} />
        <SliderMovies image="/images/morty.svg" isWatching progress={70} />
        <SliderMovies
          image="/images/ginny.svg"
          isWatching
          progress={30}
          icon={RiArrowRightSLine}
        />
      </Flex>


      <Text fontSize="26" fontWeight="500" my="5">
        Originais Netflix
      </Text>

      <Flex>
        <PosterMovies image="/images/posterAnne.svg" />
        <PosterMovies image="/images/posterMeters.svg" />
        <PosterMovies image="/images/posterGinny.svg" />
        <PosterMovies image="/images/posterTribes.svg" icon={RiArrowRightSLine} />
      </Flex>



      <Text fontSize="26" fontWeight="500" my="7">
        Top 10 no Brasil
      </Text>
      <Image src="/images/top10Line.svg" />



      <Text fontSize="26" fontWeight="500" my="5">
        Sua lista
      </Text>

      <Flex >
        <SliderMovies image="/images/morty.svg" />
        <SliderMovies image="/images/matrix.svg" />
        <SliderMovies image="/images/witcher.svg" />
        <SliderMovies image="/images/lupin.svg" icon={RiArrowRightSLine} />
      </Flex>

    </Flex>
  )
}