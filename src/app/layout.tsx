// src/app/layout.tsx

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Inter } from 'next/font/google';
import Header from '../components/Header'; // Adjust path as needed
import Footer from '../components/Footer'; // Adjust path as needed
import BookingPage from '../pages/BookingPage';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'My Booking App',
  description: 'Book your trips easily and efficiently.',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Header />
          {/* Main content of the page */}
          <main>{children}</main>
          <Footer />
        </ChakraProvider>
      </body>
    </html>
  );
};

export default RootLayout;
