import React from 'react';
import FaqTwo from '@/components/sections/faqs/faqTwo';
import Mission from '@/components/sections/mission';
import StoryFive from '@/components/sections/ourStories/storyFive';
import PageTitle from '@/components/sections/pageTitle';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';
import TestimonialOne from '@/components/sections/testimonials/testimonialOne';

export const metadata = {
  title: 'About Us | Global Innovations',
  description: `We are all about changing lives and solving problems. Global Innovations is known for its innovative approach, teamwork, and commitment to excellence.`,
  alternates: {
    canonical: '/about-us',
  },
};

const About = () => {
  return (
    <main>
      <PageTitle pageName={'About'} breadcrumbLink={'About us'} />
      <StoryFive
        counter={false}
        title={`Building Success by Crafting Digital Solutions, Defined by Excellence.`}
        text1={`Global Innovations is in the business of delivering unique, insightful solutions that cater to your business objectives.`}
        text2={`From strategies that capture attention with meaningful results to contributing meaningfully to our clients' business objectives, we apply innovation at the core of what we do. Objective-setting lies at the heart of everything we do, committed to helping you achieve impactful success with consequences that are measurable.`}
      />
      <Mission />

      <TestimonialOne title="Real Stories, Real Success : A Testimony to Our Excellence" />
      <FaqTwo />
      <SubscribeTwo />
    </main>
  );
};

export default About;
