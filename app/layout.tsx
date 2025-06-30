'use client'
import { Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-primary min-h-screen w-full overflow-x-hidden">
        <Navbar />
        <main className="pt-8 w-full max-w-full min-h-screen flex flex-col items-center justify-start">
          {children}
        </main>
      </body>
    </html>
  )
}