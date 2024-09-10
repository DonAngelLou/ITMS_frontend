// src/components/BookingConfirmation.tsx
import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

interface BookingConfirmationProps {
  bookingId: string;
  message: string;
}

const BookingConfirmation: React.FC<BookingConfirmationProps> = ({ bookingId, message }) => {
  return (
    <Box p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb={4}>Booking Confirmation</Heading>
      <Text mb={2}>Your booking ID: {bookingId}</Text>
      <Text>{message}</Text>
    </Box>
  );
};

export default BookingConfirmation;
