import { useEffect, useState } from 'react';

// Define the type for your API response
interface MessageResponse {
  message: string;
}

const Hello = () => {
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8000/api/hello/')
      .then((response) => response.json())
      .then((data: MessageResponse) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
}

export default Hello;
