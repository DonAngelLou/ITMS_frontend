// src/pages/step2.tsx
"use client";

import React, { useEffect, useState } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import TransportSelection from '../components/TransportSelection';
import Link from 'next/link';  // Use Link for navigation
import { TransportCompany } from '../types/types';  // Ensure you have this type defined

const StepTwo = () => {
  const [selectedCompany, setSelectedCompany] = useState<TransportCompany | null>(null);

  const handleTransportSelect = (company: TransportCompany) => {
    setSelectedCompany(company);
  };

  return (
    <Box p={6}>
      <Text fontSize="2xl" mb={6}>Step 2: Choose Your Transport</Text>
      <TransportSelection onTransportSelect={handleTransportSelect} />
      {selectedCompany && (
        <Box>
          <Text fontSize="xl" mb={4}>You selected: {selectedCompany.name}</Text>
          <Link href="/step3" passHref>
            <Button as="a" colorScheme="blue">
              Proceed
            </Button>
          </Link>
        </Box>
      )}
    </Box>
  );
};

export default StepTwo;
