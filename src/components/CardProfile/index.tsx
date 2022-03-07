import Link, { LinkProps } from "next/link";
import { Flex, Image, Text } from "@chakra-ui/react";

interface ICardProfile extends LinkProps {
  image: string;
  name: string;
}

export function CardProfile({ image, name, ...rest }: ICardProfile) {
  return (
    <Link {...rest} >
      <Flex as="a" direction="column" align="center" mb={["5", "5", 0]}>
       <Image
          src={image}
          alt="Profile img"
          width={["30", "30", "50"]}
          height={["110", "110", "200"]}
        />
        <Text mt="5" color="gray.500" fontSize="26" fontWeight="400">{name}</Text>
      </Flex>
    </Link>
  )
}