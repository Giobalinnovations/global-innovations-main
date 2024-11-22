import React from 'react';
import ContactForm from '@/components/sections/contactForm';
import StoryFour from '@/components/sections/ourStories/storyFour';
import PageTitle from '@/components/sections/pageTitle';
import ServiceTwo from '@/components/sections/services/serviceTwo';
import Solutions from '@/components/sections/solutions';

export const metadata = {
  title: 'Global Innovations| Services',
  description:
    'Global Innovations offers comprehensive digital marketing services including SEO, SEM, web development, PR, media buying, and influencer marketing to help businesses grow online.',
  keywords:
    'digital marketing services, SEO services, web development, PR agency, media buying, influencer marketing, SEM services, digital marketing company india, marketing agency india',
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
