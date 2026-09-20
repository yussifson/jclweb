import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'JCL Royal Group | Real Estate, Land Development & Engineering',
  description: 'Official corporate website of JCL Royal Group — premier residential & commercial real estate, litigation-free titled land parcels, civil engineering, and quantity surveying.',
  keywords: 'JCL Royal Group, Real Estate, Properties for Sale, Land in Ghana, Cadastral Surveying, Civil Engineering, Quantity Surveying, Luxury Homes',
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
      </head>
      <body className="bg-[#F8FAFC] text-[#0F172A] min-h-screen flex flex-col font-sans antialiased selection:bg-brand-gold selection:text-white">
        {children}
      </body>
    </html>
  );
}
