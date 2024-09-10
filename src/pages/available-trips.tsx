import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

const AvailableTrips = () => {
  const [trips, setTrips] = useState<any[]>([]);
  const [selectedTrip, setSelectedTrip] = useState<string | undefined>(undefined); // Change `null` to `undefined`
  const router = useRouter();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const response = await fetch('/api/get-available-trips?' + new URLSearchParams({
          date: router.query.date as string,
          time: router.query.time as string,
          destination: router.query.destination as string,
          vehicle_type: router.query.vehicle_type as string,
          delivery_type: router.query.delivery_type as string,
        }));
        const data = await response.json();
        setTrips(data.available_trips);
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    };

    fetchTrips();
  }, [router.query]);

  const handleSelection = async () => {
    if (selectedTrip) {
      try {
        const response = await fetch('/api/select-transport-company', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ trip_id: selectedTrip }),
        });
        const data = await response.json();
        // Handle success response
        alert('Selection successful');
      } catch (error) {
        console.error('Error selecting transport:', error);
      }
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Available Trips</Text>
      <FormControl as="form">
        <RadioGroup onChange={setSelectedTrip} value={selectedTrip}>
          <Stack spacing={4}>
            {trips.map(trip => (
              <Radio key={trip.trip_id} value={trip.trip_id}>
                <Box>
                  <Text fontWeight="bold">{trip.company}</Text>
                  <Text>{trip.departure_time}</Text>
                  <Text>{trip.vehicle_type}</Text>
                  <Text>Seats available: {trip.available_seats}</Text>
                  <Text>Price: ${trip.price}</Text>
                </Box>
              </Radio>
            ))}
          </Stack>
        </RadioGroup>
        <Button mt={4} colorScheme="teal" onClick={handleSelection}>
          Proceed
        </Button>
      </FormControl>
    </Box>
  );
};

export default AvailableTrips;
