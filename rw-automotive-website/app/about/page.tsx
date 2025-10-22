import { Metadata } from 'next';
import Link from 'next/link';
import { Award, Users, Wrench, Heart, Shield, Clock, Star, CheckCircle, MapPin, Phone, DollarSign } from 'lucide-react';

export const metadata: Metadata = {
  title: "About RW Automotive | Douglasville Auto Repair & Tire Shop",
  description: "Learn about RW General Automotive and Tire Services in Douglasville, GA. Family-owned shop providing honest, reliable auto repair and tire services since [year].",
};

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Honesty & Integrity',
      description: 'We believe in transparent pricing and honest recommendations. We only suggest repairs you actually need.',
    },
    {
      icon: Award,
      title: 'Quality Workmanship',
      description: 'Our skilled technicians take pride in every job, ensuring your vehicle receives the best care possible.',
    },
    {
      icon: Users,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We treat every customer like family and every vehicle like our own.',
    },
    {
      icon: Shield,
      title: 'Reliable Service',
      description: 'We stand behind our work with quality parts and comprehensive warranties for your peace of mind.',
    },
  ];

  const whyChooseUs = [
    {
      icon: Wrench,
      title: 'Expert Technicians',
      description: 'Our team has years of experience working on all makes and models. We stay current with the latest automotive technology.',
    },
    {
      icon: DollarSign,
      title: 'Fair Pricing',
      description: 'Competitive rates with no hidden fees. We provide detailed estimates before any work begins.',
    },
    {
      icon: Clock,
      title: 'Convenient Hours',
      description: 'Open Monday through Saturday with flexible scheduling to fit your busy lifestyle.',
    },
    {
      icon: MapPin,
      title: 'Local & Trusted',
      description: 'Proudly serving Douglasville and surrounding communities. We\'re your neighbors, not a corporate chain.',
    },
    {
      icon: CheckCircle,
      title: 'Complete Services',
      description: 'From oil changes to major repairs, tires to used cars. We\'re your one-stop automotive shop.',
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: 'Hundreds of satisfied customers trust us with their vehicles. Read our reviews and see for yourself.',
    },
  ];

  const services = [
    'Auto Repair & Maintenance',
    'New & Used Tires',
    'Brake Service',
    'Engine Diagnostics',
    'Oil Changes',
    'A/C Repair',
    'Transmission Service',
    'Fleet Services',
    'DOT Inspections',
    'Used Car Sales',
    'Truck Rental',
    'And Much More!',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About RW General Automotive and Tire Services
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Your trusted local auto repair and tire shop in Douglasville, GA. We&apos;re committed to
              providing honest, reliable service that keeps you safely on the road.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                RW General Automotive and Tire Services has been proudly serving the Douglasville community
                with quality auto repair and tire services. What started as a small shop with big dreams has
                grown into a trusted name in automotive care, thanks to our commitment to honest service and
                customer satisfaction.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We understand that your vehicle is more than just transportation—it&apos;s your connection to
                work, family, and the things you love. That&apos;s why we treat every customer like family and
                every repair with the care and attention it deserves.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Located conveniently at 3795 Kings Highway in Douglasville, we&apos;ve built our reputation on
                honest diagnostics, quality repairs, and fair pricing. Whether you need a simple oil change,
                new tires, or major engine work, our experienced technicians have the knowledge and tools to
                get the job done right.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We&apos;re not just mechanics—we&apos;re your neighbors, and we take pride in being part of this
                community. Thank you for trusting us with your automotive needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-red-600" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Why Choose RW Automotive?
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            What sets us apart from other auto repair shops
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Automotive Services
            </h2>
            <p className="text-xl text-red-100 mb-8">
              Everything you need to keep your vehicle running smoothly
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur rounded-lg p-4 hover:bg-white/20 transition-colors"
                >
                  <CheckCircle className="w-6 h-6 mx-auto mb-2" />
                  <p className="text-sm font-semibold">{service}</p>
                </div>
              ))}
            </div>

            <Link
              href="/services"
              className="inline-block mt-8 bg-white text-red-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Experienced professionals dedicated to keeping your vehicle in top shape
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-gradient-to-br from-red-100 to-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-16 h-16 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Expert Technicians</h3>
                <p className="text-gray-600">
                  Our team of skilled technicians brings years of experience and a passion for automotive excellence.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Wrench className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">ASE Certified</h4>
                  <p className="text-sm text-gray-600">
                    Certified technicians with ongoing training
                  </p>
                </div>
                <div className="text-center">
                  <Award className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Years of Experience</h4>
                  <p className="text-sm text-gray-600">
                    Decades of combined automotive expertise
                  </p>
                </div>
                <div className="text-center">
                  <Heart className="w-12 h-12 text-red-600 mx-auto mb-3" />
                  <h4 className="font-semibold text-gray-900 mb-2">Customer Focused</h4>
                  <p className="text-sm text-gray-600">
                    Committed to your satisfaction
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Involvement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Part of the Douglasville Community
            </h2>
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                We&apos;re proud to be part of the Douglasville community. As a locally-owned business, we understand
                the importance of supporting our neighbors and giving back to the area we call home.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beyond providing quality automotive services, we&apos;re committed to being good neighbors. We believe
                in treating everyone with respect, offering honest advice, and building lasting relationships with
                our customers.
              </p>
              <p className="text-gray-700 leading-relaxed">
                When you choose RW Automotive, you&apos;re supporting a local business that cares about this community
                and the people in it. Thank you for being part of our story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Hours */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Visit Us Today
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-4">
                <MapPin className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Location</h3>
              </div>
              <p className="text-gray-700 mb-4">
                3795 Kings Hwy<br />
                Douglasville, GA 30135
              </p>
              <Link
                href="/contact"
                className="inline-block bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                Get Directions
              </Link>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-red-600" />
                <h3 className="text-xl font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-gray-700 mb-4">
                <div className="flex justify-between">
                  <span>Monday - Saturday:</span>
                  <span className="font-semibold">8:30 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <a
                href="tel:4044290256"
                className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors font-semibold"
              >
                <Phone className="w-5 h-5" />
                (404) 429-0256
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Experience the RW Automotive Difference
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
            Join hundreds of satisfied customers who trust us with their vehicles. Schedule your service today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/appointment"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              Schedule Appointment
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-gray-900 transition-colors font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
