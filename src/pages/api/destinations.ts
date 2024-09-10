import type { NextApiRequest, NextApiResponse } from 'next';

interface Destination {
  id: number;
  name: string;
  description?: string;
  location?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Destination[] | { error: string }>
) {
  try {
    const response = await fetch('http://localhost:8000/api/destinations/');
    if (!response.ok) {
      throw new Error('Failed to fetch destinations');
    }
    const data: Destination[] = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error fetching destinations:', error);
    res.status(500).json({ error: 'An error occurred while fetching destinations' });
  }
}
