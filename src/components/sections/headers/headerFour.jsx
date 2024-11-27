'use client';
import React from 'react';
import Link from 'next/link';

import Logo from '@/components/ui/logo';
import { menuList } from '@/lib/fackData/menuList';
import MegaMenu from './megaMenu';
import DropDownMenu from './dropDownMenu';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '@/components/ui/button';

import MobileMenu from './mobileMenu';

import StickyHeader from '@/components/ui/stickyHeader';
import TopHeader from './topHeader';
import { usePathname } from 'next/navigation';

const HeaderFour = () => {
  const pathname = usePathname();
  if (pathname.startsWith('/blog')) return null;
  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky z-50 top-0 transition-[top] duration-300"
      >
        <div id="header-container" className="absolute top-0 left-0 w-full">
          <div id="top-header">
            <TopHeader bgColor={'bg-white'} color={'text-white'} />
          </div>
          <div className="container mx-auto">
            <div className="flex justify-between items-center bg-background rounded-2.5xl relative px-6 mt-5 xl:mt-0 [.header-pinned_&]:mt-5 [.header-pinned_&]:shadow-3xl dark:[.header-pinned_&]:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]">
              <div className="flex items-center gap-3 py-5">
                <Logo />
              </div>
              <div className="flex items-center gap-16">
                <nav className="hidden xl:block">
                  <ul className="flex items-center 2xl:gap-12.5 gap-7">
                    {menuList.map(({ id, lable, path, dropDown, megaMenu }) => {
                      return (
                        <li className="pt-[43px] pb-[42px] group" key={id}>
                          <Link
                            href={path}
                            className="font-semibold leading-[22px] flex items-center gap-1 text-muted-foreground relative transition-all duration-500 group-hover:text-primary-foreground"
                          >
                            {lable}
                            {dropDown.length > 0 ? (
                              <span className="transition-all duration-500 group-hover:rotate-180 group-hover:text-primary-foreground">
                                <IoIosArrowDown />
                              </span>
                            ) : null}
                          </Link>
                          {megaMenu.length > 0 ? (
                            <MegaMenu data={megaMenu} />
                          ) : null}
                          {dropDown.length > 0 ? (
                            <DropDownMenu data={dropDown} />
                          ) : null}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="items-center hidden gap-5 xl:flex ">
                  <Button asChild size="xl" className="dark:text-white">
                    <Link href={'/contact-us'}> Let’s Talk </Link>
                  </Button>
                </div>
                <MobileMenu data={menuList} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HeaderFour;
