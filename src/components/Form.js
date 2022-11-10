import {
  Heading,
  Flex,
  Box,
  Container,
  Input,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useTranslation } from 'react-i18next';

const Form = () => {
  const schema = yup
    .object({
      firstName: yup
        .string()
        .required('Пожалуйста, укажите имя')
        .min(2, 'Минимум 2 символа'),
      lastName: yup
        .string()
        .required('Пожалуйста, укажите фамилию')
        .min(2, 'Минимум 2 символа'),
      middleName: yup
        .string()
        .required('Пожалуйста, укажите отчество')
        .min(2, 'Минимум 2 символа'),
      mediaName: yup.string().required('Пожалуйста, укажите название сми'),
      mediaLicense: yup.string().required('Пожалуйста, укажите номер лицензии'),
      job: yup.string().required('Пожалуйста, укажите должность'),
      email: yup
        .string()
        .email('Неправильный формат email')
        .required('Пожалуйста, укажите email'),
    })
    .required();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    console.log(data);
    reset();
  };

  const { t } = useTranslation();

  return (
    <Flex align="center" justify="center" flex={1}>
      <Container variant="ite-container">
        <Heading as="h1" variant="ite-heading">
          Аккредитация СМИ
        </Heading>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={errors?.firstName} mb={4}>
            <FormLabel variant="ite-label">{t("fisrtName")}</FormLabel>
            <Input
              type="text"
              size="sm"
              placeholder="Иван"
              _placeholder={{ opacity: 0.4 }}
              {...register('firstName')}
            />
            <FormErrorMessage>{errors?.firstName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.lastName} mb={4}>
            <FormLabel variant="ite-label">{t("lastName")}</FormLabel>
            <Input
              type="text"
              size="sm"
              placeholder="Иванов"
              _placeholder={{ opacity: 0.4 }}
              {...register('lastName')}
            />
            <FormErrorMessage>{errors?.lastName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.middleName} mb={4}>
            <FormLabel variant="ite-label">{t("middleName")}</FormLabel>
            <Input
              type="text"
              size="sm"
              placeholder="Иванович"
              _placeholder={{ opacity: 0.4 }}
              {...register('middleName')}
            />
            <FormErrorMessage>{errors?.middleName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.mediaName} mb={4}>
            <FormLabel variant="ite-label">{t("mediaName")}</FormLabel>
            <Input
              type="text"
              color="gray.500"
              size="sm"
              placeholder="Ультра (Ultra)"
              _placeholder={{ opacity: 0.4 }}
              {...register('mediaName')}
            />
            <FormErrorMessage>{errors?.mediaName?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.mediaLicense} mb={4}>
            <FormLabel variant="ite-label">{t("mediaLicense")}</FormLabel>
            <Input
              type="text"
              color="gray.500"
              size="sm"
              placeholder="ЭЛ № ФС 77"
              _placeholder={{ opacity: 0.4 }}
              {...register('mediaLicense')}
            />
            <FormErrorMessage>{errors?.mediaLicense?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.job} mb={4}>
            <FormLabel variant="ite-label">{t("job")}</FormLabel>
            <Input
              type="text"
              color="gray.500"
              size="sm"
              placeholder="Редактор"
              _placeholder={{ opacity: 0.4 }}
              {...register('job')}
            />
            <FormErrorMessage>{errors?.job?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={errors?.email} mb={4}>
            <FormLabel variant="ite-label">{t("email")}</FormLabel>
            <Input
              type="email"
              color="gray.500"
              size="sm"
              placeholder="example@example.ru"
              _placeholder={{ opacity: 0.4 }}
              {...register('email')}
            />
            <FormErrorMessage>{errors?.email?.message}</FormErrorMessage>
          </FormControl>

          <Box>
            <Button type="submit" minW="full" colorScheme="blue">
              Подать заявку
            </Button>
          </Box>
        </form>
      </Container>
    </Flex>
  );
};

export { Form };
