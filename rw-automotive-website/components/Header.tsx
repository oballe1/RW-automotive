'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, Clock, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    {
      name: 'Services',
      href: '/services',
      submenu: [
        { name: 'Tire Services', href: '/services/tire-services' },
        { name: 'Maintenance', href: '/services/maintenance' },
        { name: 'Repairs', href: '/services/repairs' },
        { name: 'Fleet Services', href: '/services/fleet' },
      ],
    },
    { name: 'Tires', href: '/tires' },
    { name: 'Used Cars', href: '/used-cars' },
    { name: 'Truck Rental', href: '/truck-rental' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Sat: 8:30 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>3795 Kings Hwy, Douglasville, GA 30135</span>
            </div>
          </div>
          <a
            href="tel:4044290256"
            className="flex items-center gap-2 hover:text-red-500 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="font-semibold">(404) 429-0256</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                <span className="text-red-600">RW</span> Automotive
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className="text-gray-700 hover:text-red-600 font-medium transition-colors py-2"
                  >
                    {item.name}
                  </Link>
                  {item.submenu && (
                    <div className="absolute left-0 mt-2 w-56 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="py-2">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                href="/appointment"
                className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-gray-900 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden overflow-hidden"
              >
                <div className="py-4 space-y-2">
                  {/* Mobile Contact Info */}
                  <a
                    href="tel:4044290256"
                    className="flex items-center gap-2 px-4 py-3 bg-red-600 text-white rounded-md mb-4"
                  >
                    <Phone className="w-5 h-5" />
                    <span className="font-semibold">(404) 429-0256</span>
                  </a>

                  {navigation.map((item) => (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md font-medium"
                        onClick={() => !item.submenu && setIsMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.submenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          {item.submenu.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-md text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}

                  <Link
                    href="/appointment"
                    className="block mx-4 mt-4 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Book Appointment
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>
    </>
  );
};

export default Header;
