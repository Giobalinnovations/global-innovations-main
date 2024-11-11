import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import Link from 'next/link';
import SlideUp from '@/components/animations/slideUp';

const SubscribeTwo = ({
  title = 'All set to intensify your Online presence?',
  description = `Book a meeting with our Digital Experts To Drive your brand's Digital Footprint.`,
}) => {
  return (
    <section className="lg:py-15 py-9">
      <SlideUp>
        <div className="max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden">
          <div className="rounded-[30px] bg-gray lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center">
            <div className="pb-6 max-w-[750px] w-full relative">
              <Title size={'5xl'} className={'max-w-[707px]'}>
                {title}
              </Title>
              <p>{description}</p>
              <div className="absolute hidden -translate-y-1/2 -right-20 top-1/2 lg:block">
                <Image
                  src={'/images/shapes/business-consultant-cta-arrow.png'}
                  width={188}
                  height={39}
                  className="dark:brightness-100 dark:invert"
                  alt="arrow"
                />
              </div>
            </div>
            <div className="relative flex items-center justify-between">
              <Link href="/contact-us">
                <span className="group rounded-full px-[38px] py-[18px] border-2 border-primary font-bold max-h-12.5 bg-primary text-secondary-foreground dark:text-muted-foreground flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-primary-foreground">
                  Let's Connect, Schedule a Call
                </span>
              </Link>
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default SubscribeTwo;
