import React from 'react';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';

export const metadata = {
  title: 'Privacy Policy | Global Innovations',
  description:
    'Privacy policy and data protection information for Global Innovations website and services.',
  alternates: {
    canonical: '/privacy-policy',
  },
};

const PrivacyPolicyPage = () => {
  return (
    <>
      <HeaderTwo haveShadow={true} />
      <main className="pt-10 pb-20">
        <div className="container">
          <h1 className="mb-8 text-4xl font-bold">Privacy Policy</h1>

          <div className="space-y-6">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                1. Information We Collect
              </h2>
              <p className="text-gray-600">
                We collect information that you provide directly to us,
                including when you fill out a contact form, subscribe to our
                newsletter, or communicate with us via email or social media.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600">
                We use the information we collect to provide, maintain, and
                improve our services, to communicate with you, and to send you
                marketing communications (with your consent).
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                3. Information Sharing
              </h2>
              <p className="text-gray-600">
                We do not sell, trade, or otherwise transfer your personally
                identifiable information to third parties. This does not include
                trusted third parties who assist us in operating our website or
                servicing you.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                4. Cookies and Tracking
              </h2>
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to track
                activity on our website and hold certain information. You can
                instruct your browser to refuse all cookies or to indicate when
                a cookie is being sent.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">5. Data Security</h2>
              <p className="text-gray-600">
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the Internet or electronic storage is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">6. Your Rights</h2>
              <p className="text-gray-600">
                You have the right to access, correct, or delete your personal
                information. You can also object to processing of your personal
                information or request data portability.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterTwo />
    </>
  );
};

export default PrivacyPolicyPage;
