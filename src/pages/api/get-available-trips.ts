import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { date, time, destination, vehicle_type, delivery_type } = req.query;
    const response = await fetch('YOUR_BACKEND_URL/get_available_trips?' + new URLSearchParams({
      date: date as string,
      time: time as string,
      destination: destination as string,
      vehicle_type: vehicle_type as string,
      delivery_type: delivery_type as string,
    }));
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch available trips' });
  }
}
