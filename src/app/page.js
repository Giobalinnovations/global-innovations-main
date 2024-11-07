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

export const metadata = {
  title: 'Global Innovations',
  description:
    'Global Innovations a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing',
};

const HomeTwo = () => {
  return (
    <>
      {/* <HeaderTwo haveOvcanvsIcon={true} haveShadow={true} /> */}
      <main>
        <HeroTwo />
        <ServiceTwo />
        <StoryTwo />
        <Dashboard />
        {/* <ProvideOne />s */}
        <Strategy />
        <TestimonialOne />
        <Solutions />
        <PriceTwo />
        <FaqOne />
        <BlogOne />
        <SubscribeTwo />
      </main>
    </>
  );
};

export default HomeTwo;
