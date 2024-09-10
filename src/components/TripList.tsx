// src/components/TripList.tsx
import React from 'react';
import { Select, FormControl, FormLabel } from '@chakra-ui/react';

interface TripListProps {
  trips: { id: string; destination: string; departure_time: string }[];
  selectedTrip: string;
  onSelect: (trip: string) => void;
}

const TripList: React.FC<TripListProps> = ({ trips, selectedTrip, onSelect }) => {
  return (
    <FormControl id="trip" isRequired>
      <FormLabel>Trip</FormLabel>
      <Select
        value={selectedTrip}
        onChange={(e) => onSelect(e.target.value)}
      >
        <option value="">Select a trip</option>
        {trips.map((trip) => (
          <option key={trip.id} value={trip.id}>
            {trip.destination} - {trip.departure_time}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default TripList;
