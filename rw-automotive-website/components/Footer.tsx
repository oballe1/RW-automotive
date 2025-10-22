import Link from 'next/link';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-red-600">RW</span> Automotive
            </h3>
            <p className="text-gray-400 mb-4">
              Your trusted auto repair and tire service center in Douglasville, GA.
              Quality service, honest pricing, and expert technicians.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1877F2] hover:text-[#0C63D4] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6 fill-current" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] p-1 rounded-lg hover:opacity-80 transition-opacity"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/tires" className="text-gray-400 hover:text-red-600 transition-colors">
                  Tires
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-400 hover:text-red-600 transition-colors">
                  Book Appointment
                </Link>
              </li>
              <li>
                <Link href="/special-offers" className="text-gray-400 hover:text-red-600 transition-colors">
                  Special Offers
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/tire-services" className="text-gray-400 hover:text-red-600 transition-colors">
                  Tire Services
                </Link>
              </li>
              <li>
                <Link href="/services/maintenance" className="text-gray-400 hover:text-red-600 transition-colors">
                  Oil Changes
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-gray-400 hover:text-red-600 transition-colors">
                  Brake Repair
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-gray-400 hover:text-red-600 transition-colors">
                  Engine Diagnostics
                </Link>
              </li>
              <li>
                <Link href="/services/repairs" className="text-gray-400 hover:text-red-600 transition-colors">
                  A/C Repair
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  3795 Kings Hwy<br />
                  Douglasville, GA 30135
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="tel:4044290256" className="text-gray-400 hover:text-red-600 transition-colors">
                  (404) 429-0256
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                <div className="text-gray-400">
                  <div>Mon-Sat: 8:30 AM - 6:00 PM</div>
                  <div>Sunday: Closed</div>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-red-600 flex-shrink-0" />
                <a href="mailto:info@rwautomotive.com" className="text-gray-400 hover:text-red-600 transition-colors">
                  info@rwautomotive.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>
              &copy; {currentYear} RW General Automotive and Tire Services. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-red-600 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-red-600 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
