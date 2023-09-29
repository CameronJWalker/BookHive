import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';
import { ClerkProvider } from '@clerk/nextjs'
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookHive',
  description: 'Book catalog',
}

export default function RootLayout({ children }) {
  
  return (
    <ClerkProvider>
      <html lang="en">
        <Head>
          <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        </Head>
        <body class="bg-milk">
          <Navbar />
          {children}
          </body>
      </html>
    </ClerkProvider>
  )
}
