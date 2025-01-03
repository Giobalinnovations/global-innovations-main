'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoIosArrowDown } from 'react-icons/io';

import Logo from '@/components/ui/logo';
import { Button } from '@/components/ui/button';
import { menuList } from '@/lib/fackData/menuList';
import MegaMenu from './megaMenu';
import DropDownMenu from './dropDownMenu';
import MobileMenu from './mobileMenu';
import StickyHeader from '@/components/ui/stickyHeader';
import TopHeader from './topHeader';

const HeaderTwo = ({ haveOvcanvsIcon, haveShadow }) => {
  // haveOvcanvsIcon and haveShadow true prosp come from home page two
  const pathName = usePathname();
  if (pathName.startsWith('/contact-us')) {
    return null;
  }
  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 w-full transition-[top] duration-300 z-40 bg-background"
      >
        <div
          id="header-container"
          className={`${
            haveShadow
              ? 'dark:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)] shadow-3xl'
              : ''
          }`}
        >
          <div id="top-header">
            <TopHeader />
          </div>
          <div
            className={`${
              pathName !== '/home-2'
                ? '[.header-pinned_&]:shadow-3xl dark:[.header-pinned_&]:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]'
                : null
            }`}
          >
            <div className="container relative mx-auto">
              <span className="block border-t border-accent"></span>
              <div className="flex items-center justify-between">
                <div className="py-5">
                  <Logo />
                </div>

                <nav className="hidden lg:block">
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
                              <span className="transition-all duration-500 group-hover:rotate-180 group-hover:text-primary-foreground ">
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
                <div className="items-center hidden gap-5 lg:flex">
                  <Button asChild size="xl">
                    <Link href={'/contact-us'}> Let’s Talk </Link>
                  </Button>

                  {/* <Offcanvas>
                    <OffcanvasTrigger>
                      <div
                        className={`${
                          haveOvcanvsIcon
                            ? 'flex flex-col gap-3 cursor-pointer'
                            : 'hidden'
                        }`}
                      >
                        <span className="h-[4px] w-10 bg-muted rounded-lg block"></span>
                        <span className="h-[4px] w-5 bg-muted rounded-lg block"></span>
                      </div>
                    </OffcanvasTrigger>
                    <OffcanvasOverlay />
                    <OffcanvasContent className="top-0">
                      <OffcanvasClose />
                      <HeaderShortInfo />
                    </OffcanvasContent>
                  </Offcanvas> */}
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

export default HeaderTwo;
