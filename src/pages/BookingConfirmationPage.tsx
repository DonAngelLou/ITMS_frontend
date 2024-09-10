// src/pages/BookingConfirmationPage.tsx
"use client";

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import BookingConfirmation from '../components/BookingConfirmation';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BookingConfirmationPage = () => {
  const router = useRouter();
  const [bookingId, setBookingId] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Get booking ID from query params or state
    const { id } = router.query;
    if (id) {
      setBookingId(id as string);
      setMessage('Your booking is confirmed!'); // Customize this message as needed
    }
  }, [router.query]);

  return (
    <>
      <Header />
      <main>
        <BookingConfirmation bookingId={bookingId} message={message} />
      </main>
      <Footer />
    </>
  );
};

export default BookingConfirmationPage;
