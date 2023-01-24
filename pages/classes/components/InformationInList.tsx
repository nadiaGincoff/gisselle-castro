import {
  Text, Box, Image, Stack, Icon, chakra, shouldForwardProp
} from '@chakra-ui/react';

import { motion, isValidMotionProp } from 'framer-motion'

import { FaRegChartBar, FaMedal, FaUserCheck } from 'react-icons/fa';

interface Props {
  title: string
  elements: Array<string>
  id: number
}

//FaRegChartBar
//FaMedal
//FaUserCheck
const iconsForId = {
  1: FaRegChartBar,
  2: FaMedal,
  3: FaUserCheck
}

const ChakraUl = chakra(motion.ul, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const ChakraLi = chakra(motion.li, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
});

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
  transition: {
    duration: 1
  }
}



function InformationInList({ title, elements, id }: Props) {
  return (
    <Stack bg="gray.1" h={300} w={300} padding="6" borderRadius="5px">
      <Box 
        bg="brown.2" 
        w="6vh" 
        h="6vh"
        alignItems="center" 
        justifyContent="center"
        display="flex"
        borderRadius="5px"
        marginBottom="3"
      >
        <Icon
          as={iconsForId[id]}
          color="white"
          fontSize="25px"
        />
      </Box>
      <Box
        marginTop="5"
      >
        <Text 
          color="darkColor" 
          fontSize={{ base: '1rem' }} 
          mb="3" 
          fontWeight="bold"
        >
          {title}
        </Text>
        <Text color="darkColor">
          <ChakraUl 
            variants={container}
            initial="hidden"
            animate="show"
          >
            {elements.map(element => <ChakraLi key={element} variants={item}>{element}</ChakraLi>)}
          </ChakraUl>
        </Text>
      </Box>
    </Stack>
    
  )
}

export default InformationInList