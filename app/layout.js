import './globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BookHive',
  description: 'Book catalog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <Head>
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
