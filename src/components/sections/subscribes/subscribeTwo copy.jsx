import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from '@/components/ui/dialog';
import InputTwo from '@/components/ui/inputTwo';
import SlideUp from '@/components/animations/slideUp';

const SubscribeTwo = ({
  title = 'All set to intensify your Online presence?',
  description = `Book a meeting with our Digital Experts To Drive your brand’s Digital Footprint.`,
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
              <Form />
            </div>
          </div>
        </div>
      </SlideUp>
    </section>
  );
};

export default SubscribeTwo;

const Form = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <span className="group rounded-full px-[38px] py-[18px] border-2 border-primary font-bold max-h-12.5 bg-primary text-secondary-foreground dark:text-muted-foreground flex justify-center items-center gap-2.5 transition-all duration-500 hover:bg-transparent hover:text-primary-foreground">
          {' '}
          Let’s Connect, Schedule a Call
        </span>
      </DialogTrigger>
      <DialogContent className="max-w-[700px] p-0">
        <div className="flex items-center justify-between py-6 border-b border-b-[#dee2e6]">
          <DialogTitle className="pl-4">
            <h6 className="text-2xl font-bold text-muted-foreground">
              Let’s Connect, Schedule a Call
            </h6>
          </DialogTitle>
          <DialogClose></DialogClose>
        </div>
        <form className="p-4 pt-0">
          <div className="flex flex-col justify-between gap-5 md:flex-row">
            <InputTwo
              type={'text'}
              placeholder={'Your Name'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
            <InputTwo
              type={'text'}
              placeholder={'Your SurName'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
          </div>
          <div className="flex flex-col justify-between gap-5 mt-4 md:flex-row">
            <InputTwo
              type={'text'}
              placeholder={'Your Country'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
            <InputTwo
              type={'text'}
              placeholder={'Your Number'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
          </div>
          <div className="flex flex-col justify-between gap-5 mt-4 md:flex-row">
            <InputTwo
              type={'email'}
              placeholder={'Your Country'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
            <InputTwo
              type={'time'}
              placeholder={'Your Number'}
              className={
                'bg-primary font-medium placeholder:text-white text-white w-full'
              }
            />
          </div>

          <div className="flex justify-end pb-8 mt-8">
            <Button>Send request</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
