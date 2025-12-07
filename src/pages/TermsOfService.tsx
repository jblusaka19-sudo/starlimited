import { motion } from 'framer-motion';

export default function TermsOfService() {
  return (
    <div className="min-h-screen pt-24 bg-gray-50">
      <div className="container mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-12"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Terms of Service</h1>
          <p className="text-gray-600 mb-12">Last updated: December 2024</p>

          <div className="space-y-12 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="leading-relaxed mb-4">
                By accessing and using the StarLime Consultant & General Dealer Limited website and services, you accept and agree to be bound by and comply with these Terms of Service. If you do not agree to abide by the foregoing, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Use License</h2>
              <p className="leading-relaxed mb-4">
                Permission is granted to temporarily download one copy of the materials (information or software) on StarLime's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Modifying or copying the materials</li>
                <li>Using the materials for any commercial purpose or for any public display</li>
                <li>Attempting to decompile or reverse engineer any software contained on the website</li>
                <li>Removing any copyright or other proprietary notations from the materials</li>
                <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
                <li>Violating any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Disclaimer</h2>
              <p className="leading-relaxed mb-4">
                The materials on StarLime's website are provided on an 'as is' basis. StarLime makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Limitations</h2>
              <p className="leading-relaxed mb-4">
                In no event shall StarLime or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on StarLime's website, even if StarLime or a StarLime authorized representative has been notified orally or in writing of the possibility of such damage.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Accuracy of Materials</h2>
              <p className="leading-relaxed mb-4">
                The materials appearing on StarLime's website could include technical, typographical, or photographic errors. StarLime does not warrant that any of the materials on its website are accurate, complete, or current. StarLime may make changes to the materials contained on its website at any time without notice.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Materials and Content</h2>
              <p className="leading-relaxed mb-4">
                The materials on StarLime's website are protected by copyright law and international treaties. Unauthorized reproduction or distribution of the materials is prohibited and will result in severe civil and criminal penalties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Links</h2>
              <p className="leading-relaxed mb-4">
                StarLime has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by StarLime of the site. Use of any such linked website is at the user's own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Modifications</h2>
              <p className="leading-relaxed mb-4">
                StarLime may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Governing Law</h2>
              <p className="leading-relaxed mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of the Republic of Zambia, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. User Responsibilities</h2>
              <p className="leading-relaxed mb-4">
                When using our services, you agree to:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Provide accurate and truthful information</li>
                <li>Not engage in any unlawful or unauthorized activities</li>
                <li>Respect intellectual property rights</li>
                <li>Not transmit malware or harmful code</li>
                <li>Not attempt to gain unauthorized access to our systems</li>
                <li>Not harass or harm other users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Service Agreement Terms</h2>
              <p className="leading-relaxed mb-4">
                When you engage StarLime for consulting services:
              </p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Projects will be conducted according to agreed-upon scope and timeline</li>
                <li>Confidentiality agreements will protect sensitive client information</li>
                <li>Payment terms will be specified in individual service agreements</li>
                <li>Deliverables will meet quality standards outlined in the contract</li>
                <li>Client cooperation and timely information provision is required</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Limitation of Liability</h2>
              <p className="leading-relaxed mb-4">
                To the fullest extent permitted by law, StarLime shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website or services, even if StarLime has been advised of the possibility of such damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Indemnification</h2>
              <p className="leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless StarLime, its officers, directors, and employees from any claims, damages, or losses arising from your use of the website or services or your violation of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Contact Information</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about these Terms of Service, please contact us at:
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
