import { Alert, AlertIcon } from '@chakra-ui/react';

const ErrorAlert = ({ message }: { message: string }) => (
  <Alert status="error">
    <AlertIcon />
    {message}
  </Alert>
);

export default ErrorAlert;
