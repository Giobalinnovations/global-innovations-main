import React from 'react';
import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import Title from '../ui/title';
import { cn } from '@/lib/utils';

const PageTitle = ({
  pageName,
  breadcrumbLink,
  breadcrumbCurrent,
  className,
}) => {
  return (
    <div
      className={cn(
        `lg:pt-[188px] pt-28 lg:mb-15 mb-9 bg-no-repeat bg-cover bg-[center_bottom] overflow-hidden relative z-[1] after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-[rgba(0,31,63,0.4)] after:backdrop-blur after:z-[-1] bg-[url('/images/banner/hero-about1-1.jpg')]`,
        className
      )}
    >
      <div className="pb-[130px] pt-25 px-[15px]">
        <div className="flex flex-col items-center">
          <Title size={'h1-title'} className={'text-white '}>
            {pageName}
          </Title>
          <div className="flex items-center flex-wrap gap-[15px] pt-6">
            <Link href={'/'} className="font-semibold text-white text-1xl">
              Home
            </Link>
            <span className="text-white">
              <FaChevronRight />
            </span>
            {breadcrumbCurrent ? (
              <>
                <Link
                  href={`/${breadcrumbLink}`}
                  className="font-semibold text-white capitalize text-1xl"
                >
                  {breadcrumbLink}
                </Link>
                <span className="text-white">
                  <FaChevronRight />
                </span>
              </>
            ) : (
              <p className="text-1xl font-semibold text-[#C0C0C0] capitalize">
                {breadcrumbLink}
              </p>
            )}
            <p className="text-1xl font-semibold text-[#C0C0C0]">
              {breadcrumbCurrent}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTitle;
