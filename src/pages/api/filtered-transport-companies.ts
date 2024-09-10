// src/pages/api/filtered-transport-companies.ts

import type { NextApiRequest, NextApiResponse } from 'next';

interface Vehicle {
  id: number;
  type: string;
  details: string;
}

interface TransportCompany {
  id: number;
  name: string;
  vehicles: Vehicle[];
}

const mockData: TransportCompany[] = [
  // Mock data or fetch from your database
  {
    id: 1,
    name: 'Company A',
    vehicles: [
      { id: 1, type: 'Van', details: 'Van with 12 seats' },
      { id: 2, type: 'Van', details: 'Van with 10 seats' }
    ]
  },
  {
    id: 2,
    name: 'Company B',
    vehicles: [
      { id: 3, type: 'Van', details: 'Van with 15 seats' }
    ]
  }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Filter the mock data based on query parameters
  // In a real application, you would fetch this data from your database
  res.status(200).json(mockData);
}
