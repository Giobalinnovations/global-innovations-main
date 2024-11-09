import Link from 'next/link';
import React from 'react';
import { headerExtraInfo } from '@/lib/fackData/headerExtraInfo';
import { FaRegEnvelope, FaPhoneFlip } from 'react-icons/fa6';
import SocialIcons from '../../ui/socialIcons';
const MobileExtraInfo = () => {
  return (
    <div>
      <div className="px-4 mt-10 text-secondary-foreground dark:text-muted-foreground">
        <ul className="mb-[26px]">
          <li className="flex items-center gap-3">
            <span className="mt-[3px]">
              <FaRegEnvelope />
            </span>
            <Link
              href={'mailto:info@globalinnovations.co.in'}
              className="text-base"
            >
              info@globalinnovations.co.in
            </Link>
          </li>
          <li className="flex items-center gap-3 mt-[9px]">
            <span>
              <FaPhoneFlip />
            </span>
            <Link href={'tel:+919911113576'} className="text-base">
              +91-9911113576
            </Link>
          </li>
        </ul>
        <SocialIcons />
      </div>
    </div>
  );
};

export default MobileExtraInfo;
