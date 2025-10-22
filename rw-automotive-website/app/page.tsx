import Link from 'next/link';
import { Phone, Calendar, Wrench, Star, CheckCircle, Clock, Shield, DollarSign } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: 'Expert Brake Repair & Maintenance',
      description: 'Professional brake service including pads, rotors, and fluid. Same-day service available.',
      link: '/services/repairs',
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: 'Professional Tire Sales & Installation',
      description: 'New and quality used tires from trusted brands. Expert installation and balancing.',
      link: '/services/tire-services',
    },
    {
      icon: <Wrench className="w-12 h-12 text-red-600" />,
      title: 'Fast Oil Changes & Fluid Services',
      description: 'Quick oil changes starting at $65. Conventional and synthetic options available.',
      link: '/services/maintenance',
    },
  ];

  const whyChooseUs = [
    {
      icon: <Clock className="w-8 h-8 text-red-600" />,
      title: '20+ Years Serving Douglasville',
      description: 'Trusted local automotive experts since day one.',
    },
    {
      icon: <Shield className="w-8 h-8 text-red-600" />,
      title: 'ASE-Certified Technicians',
      description: 'Expert mechanics with advanced training and certifications.',
    },
    {
      icon: <DollarSign className="w-8 h-8 text-red-600" />,
      title: 'Transparent Pricing & Free Estimates',
      description: 'No hidden fees. You know the cost before we start work.',
    },
  ];

  const testimonials = [
    {
      name: 'JERO',
      rating: 5,
      text: 'Outstanding service! The team is professional and the work quality is exceptional. 7 star rating if I could!',
    },
    {
      name: 'TRACY',
      rating: 5,
      text: 'Roland and Brian are fantastic. Great prices on CV joint and A/C service. Highly recommend!',
    },
    {
      name: 'JONNY',
      rating: 5,
      text: 'Fast and knowledgeable service. Roland did an amazing job on my brakes and rotors. Will be back!',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Douglasville&apos;s Trusted Auto Repair & Tire Service
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Quality repairs, honest pricing, and expert service you can count on.
              Serving Douglasville and West Atlanta since 2003.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/appointment"
                className="inline-flex items-center justify-center bg-red-600 text-white px-8 py-4 rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Service
              </Link>
              <a
                href="tel:4044290256"
                className="inline-flex items-center justify-center bg-white text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (404) 429-0256
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Auto Services in Douglasville, GA
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to complex repairs, we&apos;ve got you covered.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  href={service.link}
                  className="text-red-600 font-semibold hover:text-red-700 inline-flex items-center"
                >
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose RW General Automotive?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Full-Service Auto Repair Shop
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At RW General Automotive and Tire Services, we provide comprehensive
                auto repair and maintenance services for all makes and models. Our
                experienced technicians use state-of-the-art diagnostic equipment to
                quickly identify and fix any issues.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Tire Services:</strong> New & used tires, alignments, rotation, balancing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Maintenance:</strong> Oil changes, brake service, fluid services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Repairs:</strong> Engine diagnostics, A/C repair, CV joints, electrical
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">
                    <strong>Additional Services:</strong> Used car sales, U-Haul truck rental
                  </span>
                </li>
              </ul>
              <Link
                href="/services"
                className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
              >
                Explore All Services
              </Link>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Popular Services & Starting Prices
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-700 font-medium">Oil Change</span>
                  <span className="text-red-600 font-bold">Starting at $65</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-700 font-medium">Used Tires</span>
                  <span className="text-red-600 font-bold">Starting at $45</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-700 font-medium">Brake Repair</span>
                  <span className="text-red-600 font-bold">Call for Quote</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-700 font-medium">A/C Compressor Service</span>
                  <span className="text-red-600 font-bold">Call for Quote</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b border-gray-300">
                  <span className="text-gray-700 font-medium">Wheel Alignment</span>
                  <span className="text-red-600 font-bold">Call for Quote</span>
                </div>
              </div>
              <div className="mt-6 p-4 bg-red-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Note:</strong> Prices may vary based on vehicle make, model, and specific service requirements.
                  Contact us for a free, detailed estimate.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <div className="flex justify-center items-center gap-2 text-yellow-500 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-gray-600">Rated 5.0 stars by our satisfied customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex gap-1 text-yellow-500 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">&quot;{testimonial.text}&quot;</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/reviews"
              className="inline-block text-red-600 font-semibold hover:text-red-700"
            >
              Read More Reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Schedule Your Service Today
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the RW difference. Fast, reliable, and affordable auto repair
            in Douglasville, GA.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Online Now
            </Link>
            <a
              href="tel:4044290256"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-red-600 transition-colors font-semibold text-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call (404) 429-0256
            </a>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Visit Us in Douglasville
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Location</h3>
                <p className="text-gray-700 mb-2">3795 Kings Hwy</p>
                <p className="text-gray-700 mb-4">Douglasville, GA 30135</p>
                <a
                  href="https://maps.google.com/?q=3795+Kings+Hwy+Douglasville+GA+30135"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 font-semibold hover:text-red-700"
                >
                  Get Directions →
                </a>
              </div>
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex justify-between">
                    <span>Monday - Saturday</span>
                    <span className="font-semibold">8:30 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-blue-50 rounded">
                  <p className="text-sm text-gray-700">
                    <strong>After-hours drop-off available!</strong> Learn more about our convenient drop-off service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
