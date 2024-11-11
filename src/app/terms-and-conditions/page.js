import React from 'react';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';

export const metadata = {
  title: 'Terms of Service | Global Innovations',
  description:
    'Terms and conditions for using Global Innovations services and website.',
  alternates: {
    canonical: '/terms',
  },
};

const TermsPage = () => {
  return (
    <>
      <HeaderTwo haveShadow={true} />
      <main className="pt-10 pb-20">
        <div className="container">
          <h1 className="mb-8 text-4xl font-bold">Terms and Conditions</h1>

          <div className="space-y-8">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">Terms of Use</h2>
              <p className="text-gray-600">
                Global Innovations welcomes you. Access to our site and our
                services is subject to the conditions, terms, and notices
                contained herein. If you do not agree with any part of these
                terms, we request that you do not use our website and services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Refund Policy</h2>
              <p className="text-gray-600">
                Global Innovations provides services that can be of the highest
                standard to clients. We do not give back, although it is usually
                under special circumstances where we find that services cannot
                meet what we offer. In some services, such refunds could be
                partial as per the services delivered.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Intellectual Property Rights
              </h2>
              <p className="text-gray-600">
                All content on this website is owned by Global Innovations
                and/or its licensors, unless otherwise stated. The following
                includes but is not limited to text, graphics, and other
                materials. All rights are reserved, and unauthorized use of our
                intellectual property is strictly prohibited.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Restrictions</h2>
              <p className="text-gray-600">You are not allowed:</p>
              <ul className="mt-2 ml-6 space-y-2 text-gray-600 list-disc">
                <li>
                  Republish material from this website without obtaining a
                  license from us.
                </li>
                <li>Sell, rent, or sublicense any website content.</li>
                <li>
                  Duplication, photocopying or reproduction of material from
                  this site for commercial purposes.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                User-Generated Content
              </h2>
              <p className="text-gray-600">
                Global Innovations shall have no responsibility for any content
                which you may provide on your website or transmit via our
                services. You agree to hold harmless and indemnify us from and
                against any and all claims and liabilities arising from your
                submissions or from third parties' misuse of our services.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Reservation of Rights
              </h2>
              <p className="text-gray-600">
                We reserve the right to request that you remove any link to our
                website or services at any time. You agree to promptly remove
                any such link upon request.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Disclaimer</h2>
              <p className="text-gray-600">
                To the fullest extent permitted by law, Global Innovations
                excludes all representations, warranties, and conditions
                relating to the website and the use of our services. No direct,
                indirect, special, or consequential damages arising out of the
                use of our website or services shall be deemed to be caused by
                us.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                Modifications to Terms and Conditions
              </h2>
              <p className="text-gray-600">
                Global Innovations may update the terms and conditions listed
                here from time to time. Continued use of our website after
                posting such changes shall constitute acceptance of those
                changes.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">Governing Law</h2>
              <p className="text-gray-600">
                These terms and conditions are governed by laws prevailing in
                India. In using our website and services, you submit to the
                exclusive jurisdiction of the courts in India.
              </p>
            </section>
          </div>
        </div>
      </main>
      <FooterTwo />
    </>
  );
};

export default TermsPage;
