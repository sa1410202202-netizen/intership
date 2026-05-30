import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'SparkleBots | Robotics, AI & STEM Learning',
  description: 'SparkleBots empowers young innovators with hands-on robotics, AI, coding and drone technology programs for ages 6-18.',
  metadataBase: new URL('https://sparkle-bot.vercel.app'),
  viewport: 'width=device-width, initial-scale=1.0',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

