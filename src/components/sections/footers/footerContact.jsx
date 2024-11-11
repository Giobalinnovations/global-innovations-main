import Logo from '@/components/ui/logo';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterContact = ({ bgColor, color, white_logo }) => {
  return (
    <div className="grid lg:grid-cols-[30%_60%] items-center gap-8">
      <div className=" max-w-[178px]">
        {white_logo ? (
          <Image
            src={'/images/logo-light2.png'}
            width={500}
            height={200}
            alt="logo-white"
            className={`w-full h-full`}
          />
        ) : (
          <Logo />
        )}
      </div>
      <div className="flex flex-col justify-between gap-8 md:flex-row">
        <div className="flex items-center gap-8">
          <div
            className={cn(
              `w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`
            )}
          >
            <Image
              src={'/images/shapes/google-map-pin.png'}
              width={45}
              height={50}
              alt="map arrwo"
            />
          </div>
          <div className={cn(`${color}`)}>
            <p>Plot no 136, 3rd floor, Rider House Sec 44,</p>
            <p> Gurugram 122003</p>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <div
            className={cn(
              `w-[75px] h-[75px] rounded-lg ${bgColor} flex justify-center items-center`
            )}
          >
            <Image
              src={'/images/shapes/skills-icon.png'}
              width={44}
              height={50}
              alt="comments icon"
            />
          </div>
          <div className={cn(`${color}`)}>
            <p>
              {' '}
              <span className="font-semibold">Email:</span>{' '}
              <Link
                href={'mailto:info@globalinnovations.co.in'}
                className="relative hover-underline after:h-[1px] after:bg-muted"
              >
                {' '}
                info@globalinnovations.co.in
              </Link>{' '}
            </p>
            <p>
              {' '}
              <span className="font-semibold">Call us:</span>{' '}
              <Link
                href={'tal:+919911113576'}
                className="relative hover-underline after:h-[1px] after:bg-muted"
              >
                {' '}
                +91-9911113576
              </Link>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterContact;
