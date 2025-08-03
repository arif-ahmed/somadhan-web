// theme/index.ts
import { extendTheme } from '@chakra-ui/react';
import { config } from './config';

const theme = extendTheme({
  config,
  colors: { // <-- correct spelling
    brand: {
      50: '#e3f9f5',
      100: '#c1e8df',
      200: '#9ed7c9',
      300: '#7bc6b3',
      400: '#58b59d',
      500: '#3e9b84',
      600: '#2f7967',
      700: '#21574a',
      800: '#12352d',
      900: '#011310',
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Open Sans', sans-serif`,
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
          },
        },
      },
    },
  },
});

export default theme;
