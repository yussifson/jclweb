import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JCL Royal Group | Real Estate, Land Development & Engineering',
  description: 'Official corporate website of JCL Royal Group — premier residential & commercial real estate, litigation-free titled land parcels, civil engineering, and quantity surveying.',
  keywords: 'JCL Royal Group, Real Estate, Properties for Sale, Land in Ghana, Cadastral Surveying, Civil Engineering, Quantity Surveying, Luxury Homes',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico?v=2" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=2" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=2" />
      </head>
      <body className="bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col font-sans antialiased selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
