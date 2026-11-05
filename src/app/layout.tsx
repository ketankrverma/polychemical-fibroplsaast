import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Polychemical Fibroplast Private Limited | FRP, SMC, BMC & Composite Manufacturing Bhosari MIDC Pune',
  description: 'Polychemical Fibroplast Private Limited is a premier composite manufacturing enterprise in Bhosari MIDC, Pune, India. High precision FRP, SMC, BMC, fiberglass, and matched die compression moulding solutions.',
  keywords: [
    'Polychemical Fibroplast',
    'FRP Pune',
    'SMC Moulding Bhosari',
    'BMC Products India',
    'Composite manufacturing Pune',
    'Compression moulding Maharashtra',
    'Fiberglass components',
    'Industrial composite moulders'
  ],
  authors: [{ name: 'Polychemical Fibroplast Private Limited' }],
  robots: 'index, follow',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-orange-500 selection:text-white">
        <Navbar />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
