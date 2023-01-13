import {
  Text, Flex, Box, Image, Stack,
} from '@chakra-ui/react';

function About({ children }) {
  return (
    <Stack>
      <Image
        marginTop="5rem"
        borderRadius='full'
        src="/assets/home.jpg"
        alt="background-home"
        w={["40vh", "30vh", "50vh" ]}
        h={["40vh", "30vh", "50vh" ]}
        objectFit="cover"
      />
    </Stack>
  )
}

export default About