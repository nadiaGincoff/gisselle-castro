import Head from 'next/head';

// Components
import {
  Text, Flex, Box, Image, Stack, VStack, SimpleGrid,
} from '@chakra-ui/react';

import { DynamicShadowImage }  from '../../common/components';

import { FaPlay } from 'react-icons/fa';

const images = [
  {
    src: "/assets/follow-my-journey/1.jpg", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni error enim",
  },
  {
    src: "/assets/follow-my-journey/1.jpg", 
   text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni error enim",
  },
  {
    src: "/assets/follow-my-journey/1.jpg", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni error enim",
  },
  {
    src: "/assets/follow-my-journey/1.jpg", 
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro magni error enim",
  },
];

function InstagramVideos() {
  return (
    <Stack 
      width="100%" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
    >
      <Text 
        fontSize={{ base: '1.2rem', md: '2.5rem', lg: '2rem' }} 
        fontWeight="bold"
        marginTop="5vh"
        marginBottom="1vh"
        color="black"
      >
        FOLLOW MY JOURNEY
      </Text>
      <Box height="0.5" width={["30%", "90%", "20%","20%"]} bg="orange" />
      <Flex 
        flexDirection={["column", "column", "row", "row"]} 
        width={["90%", "90%", "85%", "80%"]}
        alignItems="center"
        overflow="hidden"
        justifyContent="space-evenly"
        flexWrap="wrap"
      >
        {images.map(img => {
          const { src, text } = img
          return (
            <DynamicShadowImage src={src} text={text} key={src} />
          )
        }
        )}
      </Flex>
    </Stack>
  )
}

function HomeScreen() {
  return (
    <Stack width="100%" justifyContent="space-between" flexDirection="column"> 
      <Stack 
        justifyContent="center" 
        alignItems="center"
        paddingY={0} 
        width="100%" 
        flexDirection={["column", "column", "row"]}
        marginTop={["0", "0", "1vh"]}
        height={["100vh", "100vh", "55vh"]}
      >
        <Box
          paddingX={{ base: '2rem', md: '0rem', lg: '2rem' }} 
          alignItems={{ base: 'center', md: 'center', lg: 'left' }} 
          justifyContent={{ base: 'center', md: 'center', lg: 'left' }}
          width={{ base: '100%', md: '50%', lg: '50%' }}
        >
          <Text 
            fontSize={{ base: '2rem', md: '2.2rem', lg: '4rem' }} 
            fontWeight="extrabold"
            bgGradient='linear(to-l, #958671, #806655, #794426, #634436, #121313)'
            bgClip="text"
          >
            Hey! I'm Gisele
          </Text>
          <Text 
            fontSize={{ base: '1rem', md: '1.2rem', lg: '1.8rem' }} 
            width={{ base: '100%', md: '100%', lg: '100%' }} 
            marginBottom="5vh"
          >
            "If it doesn't challenge you, it won't change you."
            It's my Slogan and I will help you be the best you can be
            I'm Emma Jones, I've been a Fitness Trainer since 2010,
            Fitness, Health and Lifestyle influencer.
          </Text>
        </Box>
        <Image
          marginTop="5rem"
          borderRadius='full'
          src="/assets/home.jpg"
          alt="background-home"
          w={["40vh", "30vh", "25vh", "50vh" ]}
          h={["40vh", "30vh", "25vh", "50vh" ]}
          objectFit="cover"
        />
      </Stack>
      <Image
        marginTop="3rem"
        height="37vh"
        src="/assets/middle-home.jpg"
        alt="background-home"
        objectFit="cover"
        filter="grayscale(100%)"
      />
      <InstagramVideos />
    </Stack>
  )
}



export default HomeScreen;
