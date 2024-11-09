import React from 'react';
import Link from 'next/link';
import { Button } from '../ui/button';
import Title from '../ui/title';

import Growth from '../../../public/icons/growth';
import TechPower from '../../../public/icons/techPower';
import CustomerFocus from '../../../public/icons/customerFocus';
import Collaboration from '../../../public/icons/collaboration';
import SlideLeft from '../animations/slideLeft';
import SlideUp from '../animations/slideUp';
const ourItems = [
  {
    id: 1,
    title: 'Growth Innovations',
    icon: <Growth />,
    desc: "We help companies scale and succeed in a world that's becoming increasingly digital-first.",
  },
  {
    id: 2,
    title: 'Brands Powered by Technology',
    icon: <TechPower height={'36'} width={'36'} />,
    desc: 'Making technology powerful for transformative solutions and durable impact.',
  },
  {
    id: 3,
    title: 'Customer Focus',
    icon: <CustomerFocus height={'36'} width={'36'} />,
    desc: 'Your goals are front and center in everything we do, creating solutions tailored to your needs.',
  },
  {
    id: 4,
    title: 'Collaborative Success',
    icon: <Collaboration height={'36'} width={'36'} />,
    desc: 'It is about delivery of outcome and exceeding expectations through measurable success.',
  },
];
const Mission = () => {
  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="flex lg:flex-row flex-col justify-between items-start gap-7.5">
          <div className="lg:max-w-[620px] w-full">
            <SlideLeft>
              <div className="pb-5 lg:pb-10">
                <Button variant="secondary">Mission</Button>
                <Title size={'5xl'} className="pt-6">
                  Our Mission For a Brighter Future
                </Title>
              </div>
              <p className="font-semibold text-muted-foreground">
                Our mission is to drive innovation and business growth. We are
                in the business of delivering unique, insightful solutions that
                cater to your business objectives. From strategies that capture
                attention with meaningful results to contributing meaningfully
                to our clients' business objectives, we apply innovation at the
                core of what we do.
              </p>
              <p className="text-muted-foreground pt-7.5">
                Objective-setting lies at the heart of everything we do,
                committed to helping you achieve impactful success with
                consequences that are measurable.
              </p>
            </SlideLeft>
          </div>
          <div className="pt-3 lg:pt-0">
            <div
              className="grid sm:grid-cols-2 grid-cols-1 sm:gap-y-[72px] gap-y-10 gap-x-7.5
                        [&>*:nth-child(2)>.icon]:text-[#5A5579] [&>*:nth-child(2)>.icon]:bg-[#5a55791a]
                        [&>*:nth-child(3)>.icon]:text-[#FE2E79] [&>*:nth-child(3)>.icon]:bg-[#9a2e791a]
                        [&>*:nth-child(4)>.icon]:text-[#009F96] [&>*:nth-child(4)>.icon]:bg-[#009f961a]
                        "
            >
              {ourItems.map(({ desc, icon, id, title }) => (
                <Card key={id} id={id} desc={desc} title={title} icon={icon} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;

const Card = ({ id, icon, title, desc }) => {
  return (
    <SlideUp id={id}>
      <div className="bg-[rgba(162,46,254,0.10)] icon rounded-2xl p-[22px] w-[85px] h-[85px] mb-7.5 flex justify-center items-center text-purple ">
        {icon}
      </div>
      <Link
        href={'/service-details'}
        className="text-xl font-extrabold text-muted-foreground relative hover-underline after:bg-muted after:h-[1px]"
      >
        {title}
      </Link>
      <p className="pt-5">{desc}</p>
    </SlideUp>
  );
};
