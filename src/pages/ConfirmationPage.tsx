import { Container, Heading, Text, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const ConfirmationPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container maxW="container.md" py={6}>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <Heading as="h1" size="lg" mb={6} textAlign="center" color="gray.800">
          Booking Confirmed!
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={4}>
          Your booking has been successfully submitted. Please check your email or SMS for the confirmation.
        </Text>

        <Button colorScheme="blue" onClick={handleGoHome}>
          Go to Homepage
        </Button>
      </div>
    </Container>
  );
};

export default ConfirmationPage;
