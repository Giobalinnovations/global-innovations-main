import ContactForm from '@/components/sections/contactForm';
import PageTitle from '@/components/sections/pageTitle';
import ServiceArtical from '@/components/sections/services/serviceArtical';
import { servicesDataContent } from '@/lib/fackData/servicesDataTwo';
import { notFound } from 'next/navigation';
import Script from 'next/script';

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = servicesDataContent.find(item => item.slug === slug);

  if (!service) {
    return {
      title: 'Service Details',
      description: 'Service details page',
    };
  }

  return {
    title: service?.meta?.title || 'Service Details',
    description: service?.meta?.description || 'Service details page',
    keywords: service?.meta?.keywords || 'Service details page keywords',
    // openGraph: {
    //   title: service?.title || 'Service Details',
    //   description: service?.description || 'Service details page',
    //   type: 'website',
    // },
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

const ServicesDetails = ({ params }) => {
  const { slug } = params;
  const data = servicesDataContent.find(item => item.slug === slug);
  if (!data) {
    return notFound();
  }

  return (
    <>
      <main>
        <PageTitle
          pageName={data?.content?.pageTitle?.pageName ?? ''}
          breadcrumbLink={'services'}
          breadcrumbCurrent={data?.content?.pageTitle?.breadcrumbCurrent ?? ''}
        />
        <ServiceArtical data={data} slug={slug} />
        <ContactForm
          color={'text-white'}
          inputColor={
            'bg-transparent border-white border text-white placeholder:text-white'
          }
        />
        <div className="lg:pb-15 pb-9"></div>
      </main>
      <Script
        id="structured-data-services-details-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: data?.content?.servicesArticle?.faq?.map(item => ({
                '@type': 'Question',
                name: item?.question,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: item?.ans,
                },
              })),
            },
          ]),
        }}
      />
    </>
  );
};

export default ServicesDetails;
