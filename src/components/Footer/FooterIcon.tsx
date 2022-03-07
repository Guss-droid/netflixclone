import { ElementType } from "react";
import { Flex, Icon, Text } from "@chakra-ui/react";

interface IFooterIcon {
  icon: ElementType;
  text: string;
  isActive?: boolean;
}

export function FooterIcon({ icon, text, isActive = false}: IFooterIcon) {
  return (
    <Flex
      as="button"
      flexDir="column"
      align="center"
      fontWeight={isActive ? "800" : "normal"}
      mx="10"
    >
      <Icon as={icon} fontSize="24"/>
      <Text fontSize="14">{text}</Text>
    </Flex>
  )
}