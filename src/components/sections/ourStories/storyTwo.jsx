import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';
import StroyContentOne from './storyContentOne';
import UserList from '@/components/ui/userList';
import SlideLeft from '@/components/animations/slideLeft';
import SlideUp from '@/components/animations/slideUp';

const userList = [
  {
    id: 1,
    name: '',
    src: '/images/banner/join-manimg1-1.png',
  },
  {
    id: 2,
    name: '',
    src: '/images/banner/join-manimg1-2.png',
  },
  {
    id: 3,
    name: '',
    src: '/images/banner/join-manimg1-3.png',
  },
];
const StoryTwo = () => {
  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="flex flex-col justify-between lg:flex-row">
          <div className="order-1 mt-8 lg:order-0 lg:mt-0">
            <StroyContentOne />
          </div>
          <div className="mx-auto lg:mr-0 order-0 lg:order-1">
            <SlideUp>
              <Image
                src={'/images/resource/our-story2-1.png'}
                width={554}
                height={629}
                alt="stroy background"
              />
            </SlideUp>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryTwo;
