import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Privacy Policy | RW Automotive",
  description: "Privacy policy for RW General Automotive and Tire Services. Learn how we collect, use, and protect your personal information.",
};

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 20, 2025</p>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              RW General Automotive and Tire Services ("we," "our," or "us") is committed to protecting your privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit
              our website rwgeneralautomotiveandtires.com or use our services at our Douglasville, GA location.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Information We Collect</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">2.1 Personal Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Schedule an appointment online or by phone</li>
              <li>Request a quote or estimate</li>
              <li>Contact us through our website or email</li>
              <li>Sign up for promotional offers or newsletters</li>
              <li>Provide vehicle information for service</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              This information may include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Name and contact information (email address, phone number, mailing address)</li>
              <li>Vehicle information (make, model, year, VIN, license plate number)</li>
              <li>Service history and preferences</li>
              <li>Payment information (processed securely through third-party payment processors)</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">2.2 Automatically Collected Information</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              When you visit our website, we may automatically collect certain information, including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. How We Use Your Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide, maintain, and improve our automotive services</li>
              <li>Process appointments and service requests</li>
              <li>Communicate with you about your vehicle service, appointments, and estimates</li>
              <li>Send promotional materials and special offers (with your consent)</li>
              <li>Maintain service records for your vehicle</li>
              <li>Process payments and prevent fraud</li>
              <li>Respond to your inquiries and customer service requests</li>
              <li>Comply with legal obligations and protect our legal rights</li>
              <li>Analyze website usage to improve user experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We do not sell your personal information. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf (payment processing, email delivery, analytics)</li>
              <li><strong>Parts Suppliers:</strong> To order necessary parts for your vehicle service</li>
              <li><strong>Legal Requirements:</strong> When required by law, court order, or legal process</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition of our business</li>
              <li><strong>Protection of Rights:</strong> To protect our rights, property, safety, and that of our customers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Cookies and Tracking Technologies</h2>
            <p className="text-gray-700 leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our website and store certain information.
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you
              do not accept cookies, you may not be able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over
              the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Data Retention</h2>
            <p className="text-gray-700 leading-relaxed">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy
              Policy, unless a longer retention period is required or permitted by law. Service records may be retained for
              warranty purposes, legal compliance, and to provide ongoing service to your vehicle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Your Privacy Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Children's Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
              information from children. If you become aware that a child has provided us with personal information,
              please contact us, and we will take steps to delete such information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices
              of these external sites. We encourage you to review the privacy policies of any third-party sites you visit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700"><strong>RW General Automotive and Tire Services</strong></p>
              <p className="text-gray-700">3795 Kings Hwy, Douglasville, GA 30135</p>
              <p className="text-gray-700">Phone: (404) 429-0256</p>
              <p className="text-gray-700">Email: info@rwautomotive.com</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600 italic">
              By using our website and services, you acknowledge that you have read and understood this Privacy Policy
              and agree to its terms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
