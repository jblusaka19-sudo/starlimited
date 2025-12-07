import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-gray-600 mb-12">Last updated: December 2024</p>

          <div className="space-y-12 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="leading-relaxed mb-4">
                StarLime Consultant & General Dealer Limited ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect information about you in a variety of ways:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li><strong>Personal Information:</strong> Name, email address, phone number, organization, and any other information you voluntarily provide through our contact forms.</li>
                <li><strong>Device Information:</strong> Browser type, operating system, IP address, and device identifiers.</li>
                <li><strong>Usage Information:</strong> Pages visited, time spent on pages, and interactions with our website.</li>
                <li><strong>Location Data:</strong> General geographic information based on IP address.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Use of Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect for the following purposes:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>To respond to your inquiries and provide requested services</li>
                <li>To improve our website and services</li>
                <li>To send you marketing communications (with your consent)</li>
                <li>To comply with legal obligations</li>
                <li>To protect against fraud and security threats</li>
                <li>To analyze website performance and user behavior</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Security</h2>
              <p className="leading-relaxed mb-4">
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. These measures include:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Encryption of sensitive data in transit and at rest</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits and assessments</li>
                <li>Restricted access to personal information</li>
                <li>Employee confidentiality agreements</li>
              </ul>
              <p className="leading-relaxed">
                However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Third-Party Sharing</h2>
              <p className="leading-relaxed mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share information with:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Service providers who assist in our operations (under confidentiality agreements)</li>
                <li>Legal authorities when required by law</li>
                <li>Business partners for service delivery (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Cookies and Tracking Technologies</h2>
              <p className="leading-relaxed mb-4">
                Our website may use cookies and similar tracking technologies to enhance your user experience, analyze site usage, and track marketing effectiveness. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Request a copy of your data</li>
              </ul>
              <p className="leading-relaxed">
                To exercise these rights, please contact us at starLimeconsulting@gmail.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention</h2>
              <p className="leading-relaxed mb-4">
                We retain your personal information for as long as necessary to provide our services and fulfill the purposes outlined in this policy. You may request deletion of your data at any time, subject to legal retention requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. International Data Transfers</h2>
              <p className="leading-relaxed mb-4">
                Your information may be processed and stored in countries other than your country of residence. By using our services, you consent to the transfer of your information to countries outside your country of residence, which may have different data protection laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h2>
              <p className="leading-relaxed mb-4">
                Our website is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If we learn that we have collected information from a child under 13 without verification of parental consent, we will take steps to delete such information promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Policy Changes</h2>
              <p className="leading-relaxed mb-4">
                We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. Your continued use of our website following the posting of revised Privacy Policy means that you accept and agree to the changes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="bg-emerald-50 rounded-lg p-6">
                <p className="mb-2"><strong>StarLime Consultant & General Dealer Limited</strong></p>
                <p className="mb-2">Email: starLimeconsulting@gmail.com</p>
                <p className="mb-2">Phone: +260 (978) 155-958</p>
                <p>Address: Off Palm Drive Road, Chelstone, Lusaka, Zambia</p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
