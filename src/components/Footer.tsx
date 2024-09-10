// src/components/Footer.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box bg="teal.500" p={4} color="white" textAlign="center">
      <Text>© {new Date().getFullYear()} Booking App. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
