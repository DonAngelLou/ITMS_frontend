// src/pages/BookingPage.tsx
"use client"; // Ensure this is at the top

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { useRouter } from 'next/navigation'; // Next.js router
import { Button, Input, Select, FormControl, FormLabel, Heading, Container } from '@chakra-ui/react';

const BookingPage = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [destination, setDestination] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [deliveryType, setDeliveryType] = useState('passenger');
  const [destinations, setDestinations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false); // Loading state
  const router = useRouter(); // Initialize the Next.js router

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response = await fetch('/api/destinations/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setDestinations(data.map((dest: { name: string }) => dest.name) || []);
      } catch (error) {
        console.error('Error fetching destinations:', error);
      }
    };

    fetchDestinations();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true); // Start loading

    const bookingDetails = {
      date,
      time,
      destination,
      vehicle_type: vehicleType,
      delivery_type: deliveryType,
    };

    try {
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(bookingDetails),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result); // Handle response from backend
      
      // Redirect to the next step (e.g., payment page or booking confirmation)
      router.push('/steptwo'); // Change to the appropriate path
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error processing your booking. Please try again.');
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <Container maxW="container.md" py={6}>
      <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-50 to-blue-100 p-6">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full max-w-5xl mb-8"
          loop
          autoplay={{ delay: 4000 }}
        >
          <SwiperSlide>
            <motion.div
              className="flex items-center justify-center bg-blue-200 h-64 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-white">Travel in Comfort</h2>
            </motion.div>
          </SwiperSlide>
          <SwiperSlide>
            <motion.div
              className="flex items-center justify-center bg-blue-400 h-64 rounded-lg shadow-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-4xl font-bold text-white">Reliable Services</h2>
            </motion.div>
          </SwiperSlide>
        </Swiper>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-white rounded-lg shadow-xl p-8"
        >
          <Heading as="h1" size="lg" mb={6} textAlign="center" color="gray.800">
            Book Your Trip
          </Heading>
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormControl id="date" isRequired>
              <FormLabel>Date</FormLabel>
              <Input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </FormControl>

            <FormControl id="time" isRequired>
              <FormLabel>Time</FormLabel>
              <Input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              />
            </FormControl>

            <FormControl id="destination" isRequired>
              <FormLabel>Destination</FormLabel>
              <Select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Select destination</option>
                {destinations.map((dest) => (
                  <option key={dest} value={dest}>
                    {dest}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl id="vehicleType" isRequired>
              <FormLabel>Vehicle Type</FormLabel>
              <Select
                value={vehicleType}
                onChange={(e) => setVehicleType(e.target.value)}
                className="border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="">Select vehicle type</option>
                <option value="bus">Bus</option>
                <option value="van">Van</option>
              </Select>
            </FormControl>

            <FormControl id="deliveryType" isRequired>
              <FormLabel>Delivery Type</FormLabel>
              <Select
                value={deliveryType}
                onChange={(e) => setDeliveryType(e.target.value)}
                className="border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
              >
                <option value="passenger">Passenger</option>
                <option value="package">Package</option>
              </Select>
            </FormControl>

            <Button
              type="submit"
              colorScheme="blue"
              width="full"
              mt={4}
              isLoading={loading} // Disable button when loading
            >
              Submit Booking
            </Button>
          </form>
        </motion.div>
      </div>
    </Container>
  );
};

export default BookingPage;
