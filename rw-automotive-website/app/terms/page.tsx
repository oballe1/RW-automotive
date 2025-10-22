import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Terms of Service | RW Automotive",
  description: "Terms of service for RW General Automotive and Tire Services. Review our terms and conditions for using our auto repair and tire services.",
};

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last Updated: January 20, 2025</p>

        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to RW General Automotive and Tire Services ("RW Automotive," "we," "our," or "us"). These Terms of
              Service ("Terms") govern your use of our website, services, and facilities located at 3795 Kings Hwy,
              Douglasville, GA 30135. By accessing our website or using our services, you agree to be bound by these Terms.
              If you do not agree to these Terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">2. Services Provided</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              RW Automotive provides automotive repair and maintenance services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Tire sales, installation, balancing, and repair</li>
              <li>Oil changes and fluid services</li>
              <li>Brake inspection, repair, and replacement</li>
              <li>Engine diagnostics and repair</li>
              <li>Air conditioning service and repair</li>
              <li>General automotive maintenance and repair</li>
              <li>State inspections (where applicable)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">3. Appointments and Service</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">3.1 Scheduling</h3>
            <p className="text-gray-700 leading-relaxed">
              Appointments can be scheduled online, by phone, or in person. While we strive to honor all scheduled
              appointment times, delays may occur due to unforeseen circumstances. We appreciate your understanding
              and will make every effort to minimize wait times.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">3.2 Cancellations</h3>
            <p className="text-gray-700 leading-relaxed">
              If you need to cancel or reschedule an appointment, please contact us at least 24 hours in advance.
              Repeated no-shows may result in a requirement for advance payment or deposits for future appointments.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">3.3 Vehicle Drop-Off</h3>
            <p className="text-gray-700 leading-relaxed">
              When dropping off your vehicle, you authorize us to test drive and operate your vehicle as necessary
              to perform the requested services and diagnostics. We will treat your vehicle with care and respect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">4. Estimates and Authorization</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">4.1 Estimates</h3>
            <p className="text-gray-700 leading-relaxed">
              We provide written estimates for services upon request. Estimates are based on initial inspections and
              may change if additional issues are discovered during service. We will contact you for approval before
              performing any work that exceeds the original estimate by more than 10% or $50, whichever is less.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">4.2 Customer Authorization</h3>
            <p className="text-gray-700 leading-relaxed">
              All services require customer authorization. By signing a work order or providing verbal authorization,
              you agree to pay for all parts and labor necessary to complete the authorized services.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">4.3 Additional Repairs</h3>
            <p className="text-gray-700 leading-relaxed">
              If additional repairs are needed beyond the original scope of work, we will contact you for approval
              before proceeding. In emergency situations where we cannot reach you, we reserve the right to perform
              necessary repairs to ensure the vehicle is safe to operate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">5. Payment Terms</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">5.1 Payment Due</h3>
            <p className="text-gray-700 leading-relaxed">
              Payment is due in full upon completion of services. We accept cash, credit cards, and debit cards.
              Personal checks may be accepted at our discretion.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">5.2 Pricing</h3>
            <p className="text-gray-700 leading-relaxed">
              All prices are subject to change without notice. The price quoted at the time of service authorization
              will be honored for that specific service.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">5.3 Parts and Labor</h3>
            <p className="text-gray-700 leading-relaxed">
              Charges include parts, labor, shop supplies, and applicable taxes. Parts pricing may vary based on
              availability and supplier costs.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">5.4 Storage and Lien Rights</h3>
            <p className="text-gray-700 leading-relaxed">
              Vehicles must be picked up within 3 business days of service completion notification. After 3 days,
              storage fees of $25 per day may apply. We reserve the right to place a mechanic's lien on any vehicle
              for unpaid services and may dispose of unclaimed vehicles in accordance with Georgia law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">6. Warranties</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">6.1 Labor Warranty</h3>
            <p className="text-gray-700 leading-relaxed">
              We warrant our labor for 90 days or 3,000 miles, whichever comes first, from the date of service.
              This warranty covers defects in workmanship only.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">6.2 Parts Warranty</h3>
            <p className="text-gray-700 leading-relaxed">
              New parts are covered by the manufacturer's warranty. We will assist in warranty claims but are not
              responsible for manufacturer defects. Used or aftermarket parts may have limited or no warranty.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">6.3 Warranty Limitations</h3>
            <p className="text-gray-700 leading-relaxed mb-3">
              Our warranty does not cover:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Damage caused by accidents, abuse, or neglect</li>
              <li>Normal wear and tear</li>
              <li>Repairs performed by other shops after our service</li>
              <li>Modifications or alterations to the vehicle</li>
              <li>Failure to follow recommended maintenance schedules</li>
              <li>Acts of nature or environmental damage</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">7. Customer Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Customers are responsible for:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Providing accurate information about vehicle problems and service history</li>
              <li>Removing all personal items from the vehicle before service</li>
              <li>Informing us of any existing damage or concerns</li>
              <li>Picking up vehicles in a timely manner</li>
              <li>Following all recommended maintenance and safety advisories</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-3">
              We are not responsible for items left in vehicles or for pre-existing damage not reported at drop-off.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">8. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              To the fullest extent permitted by law, RW Automotive's liability for any claim arising out of or relating
              to our services shall be limited to the amount paid for the specific service that gave rise to the claim.
              We shall not be liable for any indirect, incidental, consequential, or punitive damages, including but not
              limited to loss of use, loss of profits, or rental car expenses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">9. Disclaimer of Warranties</h2>
            <p className="text-gray-700 leading-relaxed">
              EXCEPT AS EXPRESSLY PROVIDED IN THESE TERMS, ALL SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT
              WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. WE DISCLAIM ALL IMPLIED WARRANTIES, INCLUDING BUT NOT
              LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">10. Indemnification</h2>
            <p className="text-gray-700 leading-relaxed">
              You agree to indemnify, defend, and hold harmless RW Automotive, its owners, employees, and agents from
              any claims, damages, losses, or expenses arising from your violation of these Terms or misuse of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">11. Dispute Resolution</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">11.1 Informal Resolution</h3>
            <p className="text-gray-700 leading-relaxed">
              If you have a concern about our services, please contact us directly. We are committed to resolving issues
              amicably and will make every reasonable effort to address your concerns.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">11.2 Governing Law</h3>
            <p className="text-gray-700 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of the State of Georgia,
              without regard to its conflict of law provisions.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">11.3 Jurisdiction</h3>
            <p className="text-gray-700 leading-relaxed">
              Any legal action or proceeding arising under these Terms shall be brought exclusively in the courts
              located in Douglas County, Georgia.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">12. Website Use</h2>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">12.1 Permitted Use</h3>
            <p className="text-gray-700 leading-relaxed">
              You may use our website for lawful purposes only. You agree not to use the website in any way that
              violates applicable laws or regulations.
            </p>

            <h3 className="text-xl font-semibold mb-3 mt-4 text-gray-900">12.2 Intellectual Property</h3>
            <p className="text-gray-700 leading-relaxed">
              All content on our website, including text, graphics, logos, and images, is the property of RW Automotive
              or its licensors and is protected by copyright and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">13. Privacy</h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of our services is also governed by our Privacy Policy. Please review our Privacy Policy to
              understand how we collect, use, and protect your personal information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">14. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting
              to our website. Your continued use of our services after changes are posted constitutes acceptance of the
              modified Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">15. Severability</h2>
            <p className="text-gray-700 leading-relaxed">
              If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited
              or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force
              and effect.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">16. Entire Agreement</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and RW Automotive
              regarding the use of our services and supersede all prior agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-gray-900">17. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 p-4 rounded-md">
              <p className="text-gray-700"><strong>RW General Automotive and Tire Services</strong></p>
              <p className="text-gray-700">3795 Kings Hwy, Douglasville, GA 30135</p>
              <p className="text-gray-700">Phone: (404) 429-0256</p>
              <p className="text-gray-700">Email: info@rwautomotive.com</p>
              <p className="text-gray-700 mt-2">Business Hours:</p>
              <p className="text-gray-700">Monday - Saturday: 8:30 AM - 6:00 PM</p>
              <p className="text-gray-700">Sunday: Closed</p>
            </div>
          </section>

          <section className="border-t pt-6 mt-8">
            <p className="text-sm text-gray-600 italic">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these
              Terms of Service.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
