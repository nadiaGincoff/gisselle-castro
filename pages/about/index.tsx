import {
  Text, Flex, Box, Image, Stack,
} from '@chakra-ui/react';

function About({ children }) {
  return (
  <Stack 
        justifyContent="center" 
        alignItems="center"
        width={[`100%`, `70%`]} 
        flexDirection={["column", "column", "row"]}
        marginTop={["0", "0", "1vh"]}
        height={{ sm: '70vh', base: '100vh', md: '100vh', lg: '55vh' }}
      >
        <Box
          paddingX={{ base: '2rem', md: '0rem', lg: '2rem' }} 
          alignItems={{ base: 'center', md: 'center', lg: 'left' }} 
          justifyContent={{ base: 'center', md: 'center', lg: 'left' }}
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
            width={{ base: '100%', md: '100%', lg: '70%' }} 
            marginBottom="5vh"
          >
             I offer online and in-person classes for all levels. I blend my skills as a dancer and yoga teacher to give a holistic approach to my instruction. Sign up for my class today and improve flexibility and strength while understanding your body.
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
  )
}

export default About