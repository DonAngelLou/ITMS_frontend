import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { date, time, destination, vehicle_type, delivery_type } = req.body;

    try {
      // Handle booking logic (e.g., save to database)
      
      // Send confirmation response
      res.status(200).json({ message: 'Booking successful' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to process booking' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
