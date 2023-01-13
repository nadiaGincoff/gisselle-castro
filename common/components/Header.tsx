// components
import { Text, Button, Icon, Flex, Box, HStack } from '@chakra-ui/react';
import { FaInstagram, FaFacebookF, FaMailBulk } from "react-icons/fa";
import { Logo } from '.'

function Header() {
    return (
        <Flex justifyContent="space-between" width="100%" p="2" backgroundColor="transparent">
            <Box>
                <Logo 
                    width="86" 
                    height="57" 
                    cursor="pointer"
                />
            </Box>
            <HStack spacing='24px' w="50%">
                <Text transition='all 400ms ease' _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log(`go to`)}>CLASSES</Text>
                <Text transition='all 400ms ease' _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log(`go to`)}>WORKSHOPS</Text>
                <Text transition='all 400ms ease' _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log(`go to`)}>MWM ON DEMAND</Text>
                <Text transition='all 400ms ease' _hover={{ transform: 'translateY(-1px)' }} cursor="pointer" onClick={() => console.log(`go to`)}>ABOUT</Text>
                <Icon
                    as={FaInstagram}
                    color="black"
                    fontSize="25px"
                    cursor="pointer"
                    transition='all 400ms ease'
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                />
                <Icon
                    as={FaFacebookF}
                    color="black"
                    fontSize="25px"
                    cursor="pointer"
                    transition='all 400ms ease'
                    _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                />
                <Icon
                    as={FaMailBulk}
                    color="black"
                    fontSize="25px"
                    cursor="pointer"
                    transition='all 400ms ease'
                  _hover={{ boxShadow: 'xl', transform: 'translateY(-1px)' }}
                />
                <Button colorScheme='yellow' variant='outline'>
                  Book a class
                </Button>
            </HStack>
        </Flex>
  )
}

export default Header;
