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
          <h1 className="mb-8 text-4xl font-bold">Terms of Service</h1>

          <div className="space-y-6">
            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-600">
                By accessing and using this website, you accept and agree to be
                bound by the terms and provision of this agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">2. Use License</h2>
              <p className="text-gray-600">
                Permission is granted to temporarily download one copy of the
                materials (information or software) on Global Innovations's
                website for personal, non-commercial transitory viewing only.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">3. Disclaimer</h2>
              <p className="text-gray-600">
                The materials on Global Innovations's website are provided on an
                'as is' basis. Global Innovations makes no warranties, expressed
                or implied, and hereby disclaims and negates all other
                warranties including, without limitation, implied warranties or
                conditions of merchantability, fitness for a particular purpose,
                or non-infringement of intellectual property or other violation
                of rights.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">4. Limitations</h2>
              <p className="text-gray-600">
                In no event shall Global Innovations or its suppliers be liable
                for any damages (including, without limitation, damages for loss
                of data or profit, or due to business interruption) arising out
                of the use or inability to use the materials on Global
                Innovations's website.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-semibold">
                5. Revisions and Errata
              </h2>
              <p className="text-gray-600">
                The materials appearing on Global Innovations's website could
                include technical, typographical, or photographic errors. Global
                Innovations does not warrant that any of the materials on its
                website are accurate, complete or current.
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
