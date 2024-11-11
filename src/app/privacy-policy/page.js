import React from 'react';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';
import Link from 'next/link';

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

          <div className="space-y-8">
            <section>
              <p className="text-gray-600">
                Global Innovations respects and honors your privacy. This
                Privacy Policy outlines how we collect, process, and protect
                information about you when you use our services or access our
                website. All those who access this website give their consent to
                the practices listed here.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Information Collection and Use
              </h2>
              <p className="text-gray-600">
                We obtain only the information you have given to us voluntarily.
                This could range from contact information to details relevant to
                the services we offer. We assure you that such information shall
                solely be used with regards to the provision and enhancement of
                our services. And, on no account, do we sell, lease, or disclose
                your personal information to third parties for whatever reason,
                except as necessary to administer our obligations or
                requirements with the law.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Data Security</h2>
              <p className="text-gray-600">
                Global Innovations ensures that proper care is taken with regard
                to your private information. Data safety, both online and
                offline, is heavily implemented within the systems. Only
                authorized persons receive access to your information. In this
                way, your information will be kept safe and confidential.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Cookies</h2>
              <p className="text-gray-600">
                Our website uses cookies to give you a richer experience
                browsing on our site. Cookies are small data files stored in
                your local machine to aid us in identifying you whenever you are
                returning; therefore, the website can efficiently function its
                aspects. You may disable such cookies when accessing your
                browser. However, it might make some services of this website
                unavailable in your utilization.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Amendments to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                Global Innovations reserves the right to update this Privacy
                Policy as needed. Any changes will be posted on this page, and
                continued use of or services signifies acceptance of these
                updates.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions regarding the privacy policy, please
                write to us at{' '}
                <Link href="mailto:info@globalinnovations.co.in">
                  info@globalinnovations.co.in
                </Link>
                .
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
