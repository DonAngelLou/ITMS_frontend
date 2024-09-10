// src/components/TransportSelection.tsx
import React, { useState, useEffect } from 'react';
import { Box, RadioGroup, Radio, Stack, Button, Text } from '@chakra-ui/react';
import { TransportCompany } from '../types/types';  // Make sure this is correctly imported

interface TransportSelectionProps {
  onTransportSelect: (company: TransportCompany) => void;
}

const TransportSelection: React.FC<TransportSelectionProps> = ({ onTransportSelect }) => {
  const [companies, setCompanies] = useState<TransportCompany[]>([]);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch('/api/companies'); // Adjust API endpoint as needed
        const data: TransportCompany[] = await response.json();
        setCompanies(data);
      } catch (error) {
        console.error('Error fetching companies:', error);
      }
    };
    fetchCompanies();
  }, []);

  return (
    <Box p={8}>
      <Text fontSize="2xl" mb={4}>Select a Transport Company</Text>
      <RadioGroup onChange={(id) => onTransportSelect(companies.find(c => c.id.toString() === id)!)}>
        <Stack direction="column">
          {companies.map(company => (
            <Radio key={company.id} value={company.id.toString()}>
              {company.name} - {company.vehicleType} ({company.price})
            </Radio>
          ))}
        </Stack>
      </RadioGroup>
    </Box>
  );
};

export default TransportSelection;
