import React from 'react';
import Title from '../ui/title';
import Link from 'next/link';
import { servicesDataContent } from '@/lib/fackData/servicesDataTwo';

const SideBarServices = ({ slug }) => {
  const uniqueServices = servicesDataContent?.filter(
    service => service.slug !== slug
  );
  return (
    <aside className="sticky top-[var(--header-height)] transition-all duration-300">
      <div>
        <Title size={'4xl'} className={'pb-7.5'}>
          Services
        </Title>
        <ul className="bg-[rgba(46,77,254,0.05)] lg:p-5 p-3 rounded-lg flex flex-col gap-[15px]">
          {uniqueServices.map((service, index) => {
            return (
              <li key={index} className="">
                <Link
                  href={`/services/${service.slug}`}
                  className={`lg:text-1xl text-lg font-semibold block bg-background rounded-lg lg:px-6 px-3 lg:pt-[18px] lg:pb-[22px] py-3 relative z-[1]  after:absolute after:z-[-1] after:left-0 after:top-0 after:w-0 hover:after:w-full after:h-full after:bg-primary after:text-white after:rounded-lg after:transition-all after:duration-500 hover:text-white transition-all duration-500 overflow-hidden `}
                >
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};

export default SideBarServices;
