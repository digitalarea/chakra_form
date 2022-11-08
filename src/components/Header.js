import { Box, Flex, Link } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {i18n} = useTranslation();
    const changeLanguage = lang => {
      i18n.changeLanguage(lang);
    };

  return (
    <Box as="header" py={4} pr={10} pl={10} bg="gray.200">
      <Flex justifyContent="right">
        <Link mr={1} onClick={() => changeLanguage('ru')}>
          RU
        </Link>
        /
        <Link ml={1} onClick={() => changeLanguage('en')}>
          ENG
        </Link>
      </Flex>
    </Box>
  );
};

export { Header };
