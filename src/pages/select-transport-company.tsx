import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Box, Button, FormControl, FormLabel, Select, Text } from '@chakra-ui/react';

const SelectTransportCompany = () => {
  const [trip, setTrip] = useState<any>(null);
  const [transportCompanies, setTransportCompanies] = useState<any[]>([]);
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string | undefined>(undefined); // Change `null` to `undefined`
  const [selectedVehicle, setSelectedVehicle] = useState<string | undefined>(undefined); // Change `null` to `undefined`
  const router = useRouter();

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`/api/trip/${router.query.trip_id}`);
        const data = await response.json();
        setTrip(data.trip);
        setTransportCompanies(data.transport_companies);
        setVehicles(data.vehicles);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    if (router.query.trip_id) {
      fetchTripDetails();
    }
  }, [router.query.trip_id]);

  const handleSubmit = async () => {
    if (selectedCompany && selectedVehicle) {
      try {
        const response = await fetch('/api/select-transport-company', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            trip_id: router.query.trip_id,
            transport_company_id: selectedCompany,
            vehicle_id: selectedVehicle,
          }),
        });
        const data = await response.json();
        // Handle success response
        alert('Transport company and vehicle selected successfully');
      } catch (error) {
        console.error('Error selecting transport company and vehicle:', error);
      }
    }
  };

  return (
    <Box p={4}>
      <Text fontSize="2xl" mb={4}>Select Transport Company and Vehicle</Text>
      {trip && (
        <FormControl as="form">
          <Box mb={4}>
            <FormLabel htmlFor="transport_company">Transport Company:</FormLabel>
            <Select
              id="transport_company"
              placeholder="Select a company"
              onChange={(e) => setSelectedCompany(e.target.value)}
            >
              {transportCompanies.map(company => (
                <option key={company.id} value={company.id}>
                  {company.name}
                </option>
              ))}
            </Select>
          </Box>
          <Box mb={4}>
            <FormLabel htmlFor="vehicle">Vehicle:</FormLabel>
            <Select
              id="vehicle"
              placeholder="Select a vehicle"
              onChange={(e) => setSelectedVehicle(e.target.value)}
            >
              {vehicles.map(vehicle => (
                <option key={vehicle.id} value={vehicle.id}>
                  {vehicle.type}
                </option>
              ))}
            </Select>
          </Box>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Confirm Selection
          </Button>
        </FormControl>
      )}
    </Box>
  );
};

export default SelectTransportCompany;
