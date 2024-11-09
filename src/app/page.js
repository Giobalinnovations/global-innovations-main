import React from 'react';
import BlogOne from '@/components/sections/blogs/blogOne';
import Dashboard from '@/components/sections/dashboard';
import FaqOne from '@/components/sections/faqs/faqOne';
import HeroTwo from '@/components/sections/heroes/heroTwo';
import StoryTwo from '@/components/sections/ourStories/storyTwo';
import PriceTwo from '@/components/sections/pricing/priceTwo';
import ProvideOne from '@/components/sections/provides/provideOne';
import ServiceTwo from '@/components/sections/services/serviceTwo';
import Solutions from '@/components/sections/solutions';
import Strategy from '@/components/sections/strategy';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';
import TestimonialOne from '@/components/sections/testimonials/testimonialOne';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';

export const metadata = {
  title: 'Award Winning Marketing Agency in India | Global Innovations',
  description: `Global Innovations Innovations is an award-winning best Marketing agency in India. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!`,
  keywords: `Best Marketing Agency in India, Top Marketing Agency in India, Digital Marketing services in India, Web development services in India, Website Marketing Services in India, Seo Marketing services in India, Best seo Marketing Agency in India, Social Media Marketing Agency in India, Best pr Marketing Agency in India, Marketing Agency in India`,
  metadataBase: new URL('https://www.globalinnovations.co.in'),
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
        {/* <BlogOne /> */}
        <SubscribeTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
