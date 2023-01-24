import { useDisclosure } from '@chakra-ui/react';

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
  Stack,
  Text,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link'
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
      position="fixed" 
      height="5vh"
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
        <Link
          href={`/`}
          passHref
        >
          <Text color="white">GisContorsión</Text>
        </Link>
        <HamburgerIcon color={"white"} w={8} h={8} onClick={() => handleClick('open')} />
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
              <Link
                href={`/classes`}
                passHref
              >
                <Text 
                  marginY="3" 
                  fontSize="8.5vmin" 
                  fontWeight="300" 
                  textAlign="right" 
                  transition="all 400ms ease" 
                  _hover={{ transform: 'translateY(-1px)' }} 
                  cursor="pointer" 
                >
                  CLASSES
                </Text>
              </Link>
              <Link
                href={`/about`}
                passHref
              >
                <Text 
                  marginY="3" 
                  fontSize="8.5vmin" 
                  fontWeight="300" 
                  textAlign="right" 
                  transition="all 400ms ease" 
                  _hover={{ transform: 'translateY(-1px)' }} 
                  cursor="pointer" 
                >
                  ABOUT
                </Text>
              </Link>
              <Link
                href={`/about`}
                passHref
              >
                <Text 
                  marginY="3" 
                  fontSize="8.5vmin" 
                  fontWeight="300" 
                  textAlign="right" 
                  transition="all 400ms ease" 
                  _hover={{ transform: 'translateY(-1px)' }} 
                  cursor="pointer" 
                >
                  HOME
                </Text>
              </Link>
            </Box>
          </DrawerBody>
          {/* <DrawerFooter>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </Stack>
  );
}

export default ToggleMenu