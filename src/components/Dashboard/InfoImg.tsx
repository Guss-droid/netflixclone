import { Box, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";

import { InfoPlayerBtn } from "../Buttons/InfoPlayerBtn";
import { PlayBtn } from "../Buttons/PlayBtn";
import { SliderMovies } from "../SliderMovies";

import { RiArrowRightSLine } from "react-icons/ri";

export function InfoImg() {
  return (
    <Box as="div" alignItems="center" mt="40" >
      <Heading
        fontWeight="700"
        fontSize="70"
        lineHeight="10"
        mb="-5"
      >
        FIQUE
      </Heading>
      <Text ml="28" fontWeight="300" fontSize="64">COMIGO</Text>

      <Flex align="center">
        <Image src="/images/top10Badge.svg" alt="Top 10" />
        <Text ml="5" fontSize="24" fontWeight="500">Número 4 no Brasil hoje</Text>
      </Flex>

      <Flex mt="4" maxW="810" pr="16">
        <Text fontSize="26" fontWeight="400" textAlign="justify">
          Emir, que aprendeu a cuidar de si ainda jovem e que trabalhou duro e alcançou uma posição importante no mundo dos negócios, um dia conhece uma garota que é cantora de rua e sua vida muda.
        </Text>
      </Flex>

      <Stack direction="row" spacing="3" mt="5">
        <PlayBtn />
        <InfoPlayerBtn />
      </Stack>

      <Flex direction="column">
        <Text fontSize="26" fontWeight="500" my="5">
          Populares na Netflix
        </Text>
        <Flex >
          <SliderMovies image="/images/newAmsterdan.svg" />
          <SliderMovies image="/images/modernFamily.svg" />
          <SliderMovies image="/images/fiftyMeters.svg" />
          <SliderMovies image="/images/matrix.svg" icon={RiArrowRightSLine} />
        </Flex>
      </Flex>

    </Box>
  )
}