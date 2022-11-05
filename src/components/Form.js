import {
  Heading,
  Flex,
  Box,
  Container,
  FormControl,
  FormLabel,
  Input,
  Button,
} from '@chakra-ui/react';

const Form = () => {
  return (
    <Flex minH="100vh" w="full" align="center" justify="center">
      <Container maxW="sm">
        <Heading
          as="h1"
          align="center"
          textTransform="uppercase"
          size="md"
          py={5}
        >
          Аккредитация СМИ
        </Heading>
        <Box as="form">
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Имя" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Фамилия" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Отчество" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Наименование СМИ" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="№ свидетельства" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Должность" />
          </Box>
          <Box py={1.5}>
            <Input color="gray.500" placeholder="Email" />
          </Box>
          <Box py={1.5}>
            <Button minW="full" colorScheme='blue'>Подать заявку</Button>
          </Box>
        </Box>
      </Container>
    </Flex>
  );
};

export { Form };
