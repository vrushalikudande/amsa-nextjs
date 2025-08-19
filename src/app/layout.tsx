import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsappButton from '@/components/WhatsappButton'; 
import { ReactNode } from 'react';

export const metadata = {
  title: 'Amsa Overseas',
  description: 'Professional IT Solutions',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsappButton /> 
      </body>
    </html>
  );
}