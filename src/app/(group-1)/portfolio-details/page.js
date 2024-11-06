import React from 'react';
import PageTitle from '@/components/sections/pageTitle';
import ProjectArtical from '@/components/sections/projectArtical';
import SubscribeTwo from '@/components/sections/subscribes/subscribeTwo';

export const metadata = {
  title: 'Global Innovations| Portfolio-Details',
  description:
    'Global Innovations a modern Next.js and Tailwind CSS Template there features General Marketing, Social Media Marketing, AI in Marketing, Paid Advertising, Video Marketing, Analytics and Reporting, Industry news & Trends, E-commerce Marketing',
};

const PortfolioDetails = () => {
  return (
    <main>
      <PageTitle
        pageName={'Portfolio Details'}
        breadcrumbLink={'Portfolio Details'}
      />
      <ProjectArtical />
      <SubscribeTwo />
    </main>
  );
};

export default PortfolioDetails;
