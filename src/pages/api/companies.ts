import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Handle GET request to fetch transport companies
    try {
      const companies = [
        { id: 1, name: 'Company A', vehicleType: 'Bus', price: 100 },
        { id: 2, name: 'Company B', vehicleType: 'Van', price: 80 },
        // Add more companies as needed
      ];
      res.status(200).json(companies);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching companies' });
    }
  } else if (req.method === 'POST') {
    // Handle POST request to submit a booking
    const { company } = req.body;

    try {
      const response = await fetch('http://localhost:8000/api/booking/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ company }),
      });

      if (response.ok) {
        res.status(200).json({ message: 'Booking successful' });
      } else {
        res.status(500).json({ message: 'Failed to submit booking' });
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      res.status(500).json({ message: 'Error submitting booking' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
