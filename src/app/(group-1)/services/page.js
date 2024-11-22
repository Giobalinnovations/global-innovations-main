import React from 'react';
import ContactForm from '@/components/sections/contactForm';
import StoryFour from '@/components/sections/ourStories/storyFour';
import PageTitle from '@/components/sections/pageTitle';
import ServiceTwo from '@/components/sections/services/serviceTwo';
import Solutions from '@/components/sections/solutions';

export const metadata = {
  title: 'Online Marketing Company & Agency in India - Global Innovations',
  description:
    'We specialise in providing online marketing services in India that cater to your business needs. Contact us for the best consultation and advice today.s',
  keywords:
    'media marketing, Online marketing Services, Online marketing agency in India, Online Marketing Company in India',
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
