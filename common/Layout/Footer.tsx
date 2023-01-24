import { HStack, Stack, Text, Icon } from '@chakra-ui/react'
import { FaInstagram, FaFacebookF, FaMailBulk, FaWhatsapp } from 'react-icons/fa';

function Footer() {
  return (
    <Stack 
      as="footer" 
      width="100%" 
      alignItems="flex-end"
      justifyContent="center"
      padding="5"
      flexDirection="row"
      bg="#1D1D1D"
      bottom="0"
      height="20vh"
    >
      <HStack width="50%">
        <Icon
          as={FaInstagram}
          color="white"
          fontSize="25px"
          cursor="pointer"
          transition="all 400ms ease"
          _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
        />
        <Icon
          as={FaFacebookF}
          color="white"
          fontSize="25px"
          _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
          cursor="pointer"
          transition="all 400ms ease"
        />
        <Icon
          as={FaMailBulk}
          color="white"
          fontSize="25px"
          cursor="pointer"
          transition="all 400ms ease"
          _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
        />
        <Icon
          as={FaWhatsapp}
          color="white"
          fontSize="25px"
          cursor="pointer"
          transition="all 400ms ease"
          _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
        />
      </HStack>
      <Text textAlign="right" width="50%" color="white">All rights reserved © Gisele Castro</Text>
    </Stack>
  )
}

export default Footer