// src/components/Header.tsx
import React from 'react';
import { Box, Flex, Link, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

const Header: React.FC = () => {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justify="space-between" align="center">
        <Text fontSize="lg" fontWeight="bold">Booking App</Text>
        <Flex>
          <NextLink href="/" passHref>
            <Link px={4} color="white">Home</Link>
          </NextLink>
          <NextLink href="/bookings" passHref>
            <Link px={4} color="white">Bookings</Link>
          </NextLink>
          <NextLink href="/confirmation" passHref>
            <Link px={4} color="white">Confirmation</Link>
          </NextLink>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Header;
