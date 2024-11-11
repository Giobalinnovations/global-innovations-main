import { Button } from '@/components/ui/button';
import InputTwo from '@/components/ui/inputTwo';
import TextareaTwo from '@/components/ui/textareaTwo';
import Title from '@/components/ui/title';
import React from 'react';

const LeveRelpy = () => {
  return (
    <div>
      <Title size={'4xl'}>Write a Comment</Title>
      <form className="pt-6 lg:pt-15">
        <div className="flex sm:flex-row flex-col items-center lg:gap-7.5 gap-5">
          <InputTwo
            type={'text'}
            placeholder={'Your Name'}
            className={'bg-[rgba(46,77,254,0.05)] border-accent w-full'}
          />
          <InputTwo
            type={'email'}
            placeholder={'Your Email'}
            className={'bg-[rgba(46,77,254,0.05)] border-accent w-full'}
          />
        </div>
        <div className="pt-5">
          <TextareaTwo
            placeholder={'Write your Comment'}
            className={'bg-[rgba(46,77,254,0.05)] border-accent'}
          />
        </div>
        <div className="flex justify-end mt-4">
          <Button variant="outline">Submit</Button>
        </div>
      </form>
    </div>
  );
};

export default LeveRelpy;
