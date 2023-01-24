// components
import {
  Button,
  color,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link'
import { Logo } from '../components/index';

function DesktopMenu() {
  return (
    <Stack marginTop="0 !important" backgroundColor="transparent">
      <Flex 
        height="10vh" 
        justifyContent="space-between" 
        width="100%"  
        paddingX="3" 
        backgroundColor="#1D1D1D"
      >
        <HStack color="white">
          <Link 
            href={`/`}
            passHref
          >
            <Text color="white">GisContorsión</Text>
          </Link>
        </HStack>
        <HStack spacing="24px">
          <Link 
            href={`/classes/`}
            passHref
          >
            <Button     
              transition="all 400ms ease" 
              _hover={{ transform: 'translateY(-1px)' }} 
              cursor="pointer" 
              color="white"
              _focus={{ borderColor: 'transparent' }}
              bg="transparent"
            >
              Classes
            </Button>
          </Link>
          <Link 
            href={`/about/`}
            passHref
          >
            <Button     
              transition="all 400ms ease" 
              _hover={{ transform: 'translateY(-1px)' }} 
              cursor="pointer" 
              color="white"
              bg="transparent"
              _focus={{ borderColor: 'transparent' }}
            >
              About
            </Button>
          </Link>
          {/* <Link 
            href='/workshops'
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            color="white"
          >
            WORKSHOPS
          </Link>
          <Link 
            href='/about'
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            color="white"
          >
            ABOUT
          </Link> */}
        </HStack>
      </Flex>
    </Stack>
  );
}

export default DesktopMenu