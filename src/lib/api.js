// src/lib/api.js
export async function fetchTransportOptions(criteria) {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/available-trips`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(criteria)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch transport options');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching transport options:', error);
        throw error;
    }
}
