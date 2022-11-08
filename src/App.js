import React from 'react';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { Wrapper } from './components/Wrapper';
import { Footer } from './components/Footer';

function App() {
  const theme = extendTheme({
    components: {
      Container: {
        variants: {
          'ite-container': {
            maxW: 'sm',
            borderRadius: 4,
            borderWidth: 1,
            p: 6,
            boxShadow: 'lg',
          },
        },
      },
      Heading: {
        variants: {
          'ite-heading': {
            textAlign: 'center',
            textTransform: 'uppercase',
            fontSize: 'md',
            mb: 5,
            color: 'gray.500',
          },
        },
      },
      FormLabel: {
        variants: {
          'ite-label': {
            color: 'gray.600',
            mb: 1,
          },
        },
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Wrapper>
      <Header />
      <Form />
      <Footer />
      </Wrapper>
    </ChakraProvider>
  );
}

export default App;
