import SlideRight from '@/components/animations/slideRight';
import SlideUp from '@/components/animations/slideUp';
import { Button } from '@/components/ui/button';
import PlayIcon from '@/components/ui/playIcon';
import Title from '@/components/ui/title';
import Link from 'next/link';
import React from 'react';

const StoryContentOne = ({
  title = 'Technology That Transforms Your Business',
  text1 = 'Choose Global innovations as your business needs more than just a technology support to accelerate the business growth.',
  text2 = 'it needs a partner who will understand your business goals. Global Innovations provides all-around digital marketing solutions that enhance your operations by streamlining them, enhancing productivity and customer experience. We offer 7 years of expertise in the industry, enabling companies worldwide to be better equipped with trusted, adaptive, and future-ready solutions.  ',
}) => {
  return (
    <div>
      <SlideUp>
        <Title size={'5xl'} className={'xl:leading-[140%] lg:max-w-[645px]'}>
          {title}
        </Title>

        <div className="lg:max-w-[645px]">
          <p className="mt-6 font-semibold text-muted-foreground">{text1}</p>

          <p className="mt-7.5 font-medium">{text2}</p>
        </div>

        <div className="flex items-center sm:gap-[32px] gap-6 md:pt-[55px] pt-7 pb-[22px]">
          <div>
            <Button asChild>
              <Link href="/about-us"> Get Started</Link>
            </Button>
          </div>
          {/* <div className="flex items-center gap-2">
            <PlayIcon playOne={false} />
            <p className="hidden font-semibold sm:block">How It works?</p>
          </div> */}
        </div>
      </SlideUp>
    </div>
  );
};

export default StoryContentOne;
