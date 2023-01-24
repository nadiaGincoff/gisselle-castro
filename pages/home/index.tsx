// Components
import {
  Text, Flex, Box, Image, Stack, chakra, shouldForwardProp
} from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion'

import { DynamicShadowImage }  from '../../common/components';


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
        color="white"
      >
        FOLLOW MY JOURNEY
      </Text>
      <Box height="0.5" width={["30%", "90%", "20%","20%"]} bg="orange"  marginBottom="3vh" />
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
        })}
      </Flex>
    </Stack>
  )
}

const ChakraBox = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

function HomeScreen() {
  return (
    <Stack 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      as={motion.div}
      width="100%" 
      justifyContent="space-between" 
      flexDirection="column" 
      flexWrap="wrap" 
      alignItems="center"
    >
      <Stack     
        style={{
          backgroundImage: `linear-gradient(
              to bottom,
              #1D1D1D,
              rgba(140, 135, 126, 0.5)
            ), url("/assets/home-.jpg")`,
          backgroundSize: `cover`,
          backgroundPosition: `center`,
          backgroundRepeat: `no-repeat`,
        }} 
        width="100%" 
        height="100vh"
        alignItems="center"
        justifyContent={{ base: `flex-end`, lg: `center`}}
      >
        <ChakraBox
          textAlign="center"
          paddingX={{ base: '2rem', md: '0rem', lg: '2rem' }} 
          alignItems={{ base: 'center', md: 'center', lg: 'center' }} 
          justifyContent={{ base: 'center', md: 'center', lg: 'center' }}
          width={{ base: '100%', md: '50%', lg: '50%' }}
        >
          <Text 
            fontSize={{ base: "7vw", lg: "3vw" }}
            fontWeight="extrabold"
            color="white"
          > 
            GISELE ESCUDERO  
          </Text>
          <Text 
            fontSize={{ base: '0.8rem', md: '1rem', lg: '1.5rem' }} 
            mb="3" 
            fontWeight="bold"
            color="white"
          >
            PROFESSIONAL CONTORTIONIST TEACHER 
          </Text>
          <Text 
            fontSize={{ base: '0.8rem', md: '1rem', lg: '1.1rem' }} 
            width={{ base: '100%', md: '100%', lg: '100%' }} 
            marginBottom="5vh"
          >
            Creadora de GisContorsion, me dedico a mejorar el rendimiento físico de toda persona, desde iniciación a atletas, bailarines o artistas circenses.
Me formé con una base sólida en la danza clásica, como Maestra superior en Danzas clásicas, diplomada internacional como profesora de yoga y diversos cursos de Flexibilidad, acondicionamiento físico en diferentes áreas, como la gimnasia rítmica, handstands y otras disciplinas.
          </Text>
        </ChakraBox>
      </Stack>
      <Stack bg="#1D1D1D" height={["auto", "auto", "auto", "55vh"]} width="100%">
        <InstagramVideos />
      </Stack>
    </Stack>
  )
}



export default HomeScreen;
