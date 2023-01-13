import { Box, Image, Text } from "@chakra-ui/react";

type Props = { 
  src: string;
  text: string;
};

function DynamicShadowImage({ src, text }: Props) {
  return (
    <Box 
      flexDirection="column"
      cursor="pointer"
      marginY="12"
      w={["45vh", "45vh", "30vh", "25vh" ]}
      h={["50vh", "50vh", "35vh", "30vh" ]} 
    >
     <Image
        zIndex={1}
        position="relative"
        src={src}
        w={["45vh", "45vh", "30vh", "25vh" ]}
        h={["45vh", "45vh", "30vh", "25vh" ]} 
        objectFit="cover"
      />
      <Text   
        fontSize={{ base: '1.2rem', md: '1.1rem', lg: '1.2rem' }} 
        fontWeight="500"
        color="black"
        height="5vh"
        marginTop="2"
      >
        {text}
      </Text>
    </Box>
  )
}

export default DynamicShadowImage