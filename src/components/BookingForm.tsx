import { useState } from 'react';
import { FormControl, FormLabel, Input, Button, FormErrorMessage } from '@chakra-ui/react';

const BookingForm = ({ onSubmit }: { onSubmit: (details: any) => void }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [deliveryType, setDeliveryType] = useState('');
  const [error, setError] = useState('');

  const validateForm = () => {
    if (!date || !time || !destination || !vehicleType || !deliveryType) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ date, time, destination, vehicleType, deliveryType });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl isRequired isInvalid={!!error}>
        <FormLabel>Date</FormLabel>
        <Input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        <FormErrorMessage>{error}</FormErrorMessage>
      </FormControl>
      {/* Repeat for other form fields */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default BookingForm;
