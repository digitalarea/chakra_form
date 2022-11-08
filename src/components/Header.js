import { Box, Flex, Link, Container } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box as="header" py={4} pr={10} pl={10} bg="gray.200">
      <Flex justifyContent="right">
        <Link mr={1}>RU</Link> / <Link ml={1}>ENG</Link>
      </Flex>
    </Box>
  );
};

export { Header };
