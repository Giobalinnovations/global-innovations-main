import React from 'react';
import ContactForm from '@/components/sections/contactForm';
import StoryFour from '@/components/sections/ourStories/storyFour';
import PageTitle from '@/components/sections/pageTitle';
import ServiceTwo from '@/components/sections/services/serviceTwo';
import Solutions from '@/components/sections/solutions';

export const metadata = {
  title: 'Global Innovations| Services',
  description:
    'Global Innovations a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing',
  alternates: {
    canonical: '/services',
  },
};
const Services = () => {
  return (
    <main>
      <PageTitle pageName={'Services'} breadcrumbLink={'Services'} />
      <StoryFour />
      <ServiceTwo />
      {/* <Approach /> */}
      {/* <CountDown /> */}
      {/* <ProvideOne /> */}
      <Solutions />
      {/* <PriceThree /> */}
      <ContactForm
        color={'text-white'}
        inputColor={
          'bg-transparent border-white border text-white placeholder:text-white'
        }
      />
    </main>
  );
};

export default Services;
