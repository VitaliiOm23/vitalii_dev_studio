'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const menuItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  return (
    <nav className="sticky top-0 w-full z-50 flex items-center justify-center bg-white/60 backdrop-blur-md shadow-md py-3 px-2">
      <ul className="flex flex-row items-center justify-center gap-2 sm:gap-6 rounded-2xl bg-white/70 px-4 py-2 shadow-sm">
        {menuItems.map((item) => (
          <li key={item.name}>
            <Link href={item.href} legacyBehavior>
              <a
                className={`px-3 py-1 rounded-lg font-medium text-base transition-colors duration-200 ${pathname === item.href ? 'bg-black text-white shadow font-bold' : 'text-gray-700 hover:bg-gray-200 hover:text-black'}`}
              >
                {item.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}