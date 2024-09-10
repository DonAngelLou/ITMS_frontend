import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { trip_id, transport_company_id, vehicle_id } = req.body;
    const response = await fetch('YOUR_BACKEND_URL/select_transport_company', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        trip_id,
        transport_company_id,
        vehicle_id
      }),
    });
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to select transport company and vehicle' });
  }
}
