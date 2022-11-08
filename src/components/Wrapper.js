import { Box, Flex, Link, Container } from '@chakra-ui/react';

const Wrapper = ({children}) => {
  return <Flex minH="100vh" w="full" flexDirection="column">
    {children}
  </Flex>;
};

export { Wrapper };
