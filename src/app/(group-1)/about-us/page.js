import React from 'react';
import FaqTwo from '@/components/sections/faqs/faqTwo';
import Mission from '@/components/sections/mission';
import StoryFive from '@/components/sections/ourStories/storyFive';
import PageTitle from '@/components/sections/pageTitle';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';
import TestimonialOne from '@/components/sections/testimonials/testimonialOne';
import Script from 'next/script';

export const metadata = {
  title: 'About Us | Global Innovations',
  description: `We are all about changing lives and solving problems. Global Innovations is known for its innovative approach, teamwork, and commitment to excellence.`,
  alternates: {
    canonical: '/about-us',
  },
};

const About = () => {
  return (
    <>
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
      <Script
        id="structured-data-about-us-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What services does Global Innovations offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Global Innovations specializes in areas of Digital Marketing, SEO, web development, social media marketing, influencer marketing, and media buying, all focused on business growth by innovation and technology.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does Global Innovations help businesses grow?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We tap modern technology and smart strategies designed especially for your business, helping you scale, engage with customers, and gain measurable success in the digital world.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Global Innovations cater most to which industries in the world.',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We service multiple industries such as eCommerce, technology, health, education, hospitality, and many more providing tailored digital services for every industry.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What are your Digital Marketing services?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our full-scale digital marketing strategy would include SEO, SEM, social media marketing, content creation for boosting the online presence of your brand and driving conversions.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What makes Global Innovations special?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'A customer-centric approach, innovative solutions, and a collaborative mindset assure we not only meet but exceed the expectations of our clients-and deliver results that truly matter.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does Social Media Marketing help my brand?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Our Social Media Marketing services target engagement, build brand loyalty, and drive traffic through well-thought strategies of content and targeted campaigns on Facebook and Instagram channels.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How to start with Global Innovations?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'The most convenient way is through a website. Book a free consultation or ask for an audit of your website with which we will see how it can help you realize your digital goals.',
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

export default About;
