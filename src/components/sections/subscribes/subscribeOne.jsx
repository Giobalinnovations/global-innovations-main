import React from 'react';
import RightArrow from '../../../../public/icons/rightArrow';
import Title from '@/components/ui/title';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const SubscribeOne = ({ className }) => {
  return (
    <section className={cn(`lg:py-15 py-9 ${className}`)}>
      <div className="max-w-[1350px] mx-auto px-[15px] relative overflow-x-hidden">
        <div
          className="absolute top-0 w-[95%] md:w-full h-full object-contain bg-no-repeat bg-right rounded-[30px]"
          style={{
            backgroundImage: `url(/images/background/services-bg1-1.png)`,
          }}
        ></div>
        <div className="rounded-[30px] bg-primary lg:px-12.5 px-7.5 lg:pt-14 pt-7.5 lg:pb-16 pb-7.5 flex lg:flex-row flex-col justify-between lg:items-center">
          <div className="pb-6">
            <Title
              size={'5xl'}
              className={
                'max-w-[420px] text-secondary-foreground dark:text-white'
              }
            >
              Subscribe to our Newsletter
            </Title>
          </div>
          <div className="relative lg:max-w-[594px] w-full">
            <Link href="/contact-us">
              <span className="group rounded-full sm:px-[38px] sm:py-[18px] border-2 border-primary font-bold sm:min-w-[198px] sm:max-h-[64px] h-[64px] w-full bg-primary text-secondary-foreground dark:text-white flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-primary-foreground">
                <span className="hidden sm:block">Subscribe to Newsletter</span>
                <span className="transition-all -rotate-45 group-hover:rotate-0">
                  <RightArrow />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SubscribeOne;
