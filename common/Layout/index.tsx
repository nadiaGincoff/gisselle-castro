import Head from 'next/head';
import { useMediaQuery, useDisclosure } from '@chakra-ui/react';
import { useEffect, useState } from 'react' 

// components
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Image,
  Spacer,
  Stack,
  Text,
  Link, 
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { FaInstagram, FaFacebookF, FaMailBulk, FaWhatsapp } from 'react-icons/fa';
import { Logo } from '../components/index';

function ToggleMenu(): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (action: string) => {
    if (action === 'open') {
      onOpen();
    } else {
      onClose();
    }
  };

  return (
    <Stack 
      marginTop="0 !important" 
      backgroundColor="white" 
      position="fixed" 
      height="10vh"
      zIndex="100"
      paddingX={[0, 0, 0]}
    >
      <Flex
        alignItems="center"
        justifyContent="space-between"
        width="100vw"
        paddingInlineStart="var(--chakra-space-6)"
        paddingInlineEnd="var(--chakra-space-6)"
        paddingTop="var(--chakra-space-4)"
        padding="4"
      >
        <Logo
          width="75"
          height="46"
          cursor="pointer"
        />
        <HamburgerIcon w={8} h={8} onClick={() => handleClick('open')} />
      </Flex>
      <Drawer
        onClose={onClose}
        isOpen={isOpen}
        size="full"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader paddingTop="var(--chakra-space-4)">
            <Flex
              alignItems="center"
              justifyContent="space-between"
            >
              <HStack w="75" h="46" />
              <CloseIcon w={6} h={6} onClick={() => handleClick(``)} />
            </Flex>
          </DrawerHeader>
          <DrawerBody>
            <Box
              letterSpacing={3}
              display="flex"
              flexDirection="column"
              height="80%"
              justifyContent="center"
            >
              <Text marginY="3" fontSize="8.5vmin" fontWeight="300" textAlign="right" transition="all 400ms ease" _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log('go to')}>CLASSES</Text>
              <Text marginY="3" fontSize="8.5vmin" fontWeight="300" textAlign="right" transition="all 400ms ease" _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log('go to')}>WORKSHOPS</Text>
              <Text marginY="3" fontSize="8.5vmin" fontWeight="300" textAlign="right" transition="all 400ms ease" _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log('go to')}>ABOUT</Text>
            </Box>
            <HStack
              justifyContent="flex-end"
              spacing={4}
            >
              <Link>
                <Icon
                  as={FaInstagram}
                  color="black"
                  fontSize="25px"
                  cursor="pointer"
                  transition="all 400ms ease"
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                />
              </Link>
              <Icon
                as={FaFacebookF}
                color="black"
                fontSize="25px"
                cursor="pointer"
                transition="all 400ms ease"
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
              />
              <Icon
                as={FaMailBulk}
                color="black"
                fontSize="25px"
                cursor="pointer"
                transition="all 400ms ease"
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
              />
              <Icon
                as={FaWhatsapp}
                color="black"
                fontSize="25px"
                cursor="pointer"
                transition="all 400ms ease"
                _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
              />
            </HStack>
          </DrawerBody>
          <DrawerFooter>
            <Button 
              colorScheme="black" 
              variant="outline" 
              paddingX="10" 
              paddingY="8" 
              border="2px solid black" 
              fontSize={18} 
              marginBottom="3"
            >
              Book a class
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}

function DesktopMenu() {
  return (
    <Stack marginTop="0 !important" backgroundColor="transparent">
      <Flex 
        height="10vh" 
        justifyContent="space-between" 
        width="100%"  
        paddingX="3" 
        backgroundColor="white"
      >
        <HStack>
          <Logo
            width="86"
            height="57"
            cursor="pointer"
          />
          <Text />
        </HStack>
        <HStack spacing="24px">
          <Text
            fontWeight="600" 
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            onClick={() => console.log('go to')}
          >
            CLASSES
          </Text>
          <Text
            fontWeight="600" 
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            onClick={() => console.log('go to')}
          >
            WORKSHOPS
          </Text>
          <Text
            fontWeight="600" 
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            onClick={() => console.log('go to')}
          >
            MWM ON DEMAND
          </Text>
          <Text
            fontWeight="600" 
            transition="all 400ms ease" 
            _hover={{ transform: 'translateY(-1px)' }} 
            cursor="pointer" 
            onClick={() => console.log('go to')}
          >
            <Link href='/about'>
              ABOUT
            </Link>
          </Text>
          <Icon
            as={FaInstagram}
            color="black"
            fontSize="25px"
            cursor="pointer"
            transition="all 400ms ease"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
          />
          <Icon
            as={FaFacebookF}
            color="black"
            fontSize="25px"
            cursor="pointer"
            transition="all 400ms ease"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
          />
          <Icon
            as={FaMailBulk}
            color="black"
            fontSize="25px"
            cursor="pointer"
            transition="all 400ms ease"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
          />
          <Icon
            as={FaWhatsapp}
            color="black"
            fontSize="25px"
            cursor="pointer"
            transition="all 400ms ease"
            _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
          />
          <Button colorScheme="black" variant="outline">
            Book a class
          </Button>
        </HStack>
      </Flex>
    </Stack>
  );
}

function Layout({ children }: {
  children: React.ReactNode;
}): JSX.Element {
  const [isLessThanTablet, setLessThanTablet] = useState(false)
  const [lessThanTablet] = useMediaQuery(['(max-width: 810px)']);

  useEffect(() => {
    if (lessThanTablet) {
      setLessThanTablet(true)
    }
  }, [lessThanTablet])

  return (
    <Stack paddingX={[0, 0, 0]}>
      <Head>
        <title>Gisele Escudero</title>
        <meta name="description" content="All about Rick and Morty series" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack maxHeight="100vh" maxWidth="100%">
        {isLessThanTablet ? <ToggleMenu /> : <DesktopMenu />}
        <Stack as="section" alignItems="center">
          {children} 
        </Stack> 
      </Stack>
    </Stack>
  );
}

export default Layout;
