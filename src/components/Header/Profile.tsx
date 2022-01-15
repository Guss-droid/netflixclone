import { Flex, Icon, Image, Stack, Text } from "@chakra-ui/react";

import { ImSearch } from 'react-icons/im'
import { BsBellFill } from 'react-icons/bs'
import { RiArrowDownSFill } from 'react-icons/ri'

export function Profile() {
  return (
    <Flex align="center">
      <Stack direction="row" spacing="5">
        <Icon as={ImSearch} fontSize="20" />
        <Text>Gustavo</Text>
        <Icon as={BsBellFill} fontSize="20" />

        <Flex align="center">
          <Image src="/images/profileHero.svg" mr="2" />
          <Icon as={RiArrowDownSFill} fontSize="24" />
        </Flex>
      
      </Stack>
    </Flex>
  )
}