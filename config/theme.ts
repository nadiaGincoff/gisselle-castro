// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react';

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  white: '#E7ECEF',
  darkColor: '#1d1d1d',
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
  brown: {
    0: '#F9F8F6',
    1: 'rgba(140, 135, 126, 0.5)',
    2: '#634436'
  },
  gray: {
    1: '#92928A',
  },
};

const theme = extendTheme({ colors });

export default theme;
