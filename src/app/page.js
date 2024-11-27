import React from 'react';
import BlogOne from '@/components/sections/blogs/blogOne';
import FaqOne from '@/components/sections/faqs/faqOne';
import HeroTwo from '@/components/sections/heroes/heroTwo';
import StoryTwo from '@/components/sections/ourStories/storyTwo';

import ServiceTwo from '@/components/sections/services/serviceTwo';
import Solutions from '@/components/sections/solutions';
import Strategy from '@/components/sections/strategy';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';
import TestimonialOne from '@/components/sections/testimonials/testimonialOne';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';
import Script from 'next/script';

export const metadata = {
  title: 'Award Winning Marketing Agency in India | Global Innovations',
  description: `Global Innovations Innovations is an award-winning best Marketing agency in India. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!`,
  keywords: `Best Marketing Agency in India, Top Marketing Agency in India, Digital Marketing services in India, Web development services in India, Website Marketing Services in India, Seo Marketing services in India, Best seo Marketing Agency in India, Social Media Marketing Agency in India, Best pr Marketing Agency in India, Marketing Agency in India`,
  // metadataBase: new URL('https://www.globalinnovations.co.in'),
  alternates: {
    canonical: '/',
  },
  // verification: {
  //   google: 'YsTlOsZiwtGZbGt2tjHOKhd10CXrHKhEez-SUhmCDg0',
  // },
  // openGraph: {
  //   url: '/',
  // },
};

const HomeTwo = () => {
  return (
    <>
      <HeaderTwo haveOvcanvsIcon={true} haveShadow={true} />
      <main>
        <HeroTwo />
        <ServiceTwo />
        <StoryTwo />
        <Strategy />
        <TestimonialOne />
        <Solutions />
        <FaqOne />
        <BlogOne />
        <SubscribeTwo />
      </main>
      <FooterTwo />
      <Script
        id="structured-data-home-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the digital marketing offered at Global Innovations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Some of our services include SEO, PPC, social media marketing, affiliate marketing, influencer marketing, and media buying to heighten your online presence.',
                  },
                },
                {
                  '@type': 'Question',
                  name: "How is my website's visibility enhanced through the application of SEO?",
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: "Our SEO tactics will optimize your website's search engine results with increased organic traffic, more exposure for your brand, and higher conversion rates.",
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How is SEO and PPC different?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'SEO is an organic-based form, which means that the optimization of ranking leads to an increased appearance in the list of results. However, PPC is a form of paid advertisement through the generation of immediate traffic and higher visibility.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'In what ways can social media marketing benefit my brand?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our social media marketing solutions activate the engagement of your audience, create loyalty among your customers, and generate new leads through tailor-made content and ads across all platforms.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Is influencer marketing helpful for my brand?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'You will reach a wider, targeted audience by using influencer marketing in association with influencers whom your target audience trusts. It will also enhance the credibility of your brand and increase engagement.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What is affiliate marketing, and how does it work?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Affiliate marketing is an arrangement between you and affiliates promoting your products. You pay them a commission for every piece of traffic and sale going to your website.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I begin with my business in digital marketing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Contact us for discussing a customized plan by our expert consultants.',
                  },
                },
              ],
            },
          ]),
        }}
      />
    </>
  );
};

export default HomeTwo;
