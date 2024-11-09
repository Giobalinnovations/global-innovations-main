import React from 'react';
import { FaFacebook } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa6';
import { FaPinterest } from 'react-icons/fa6';

import Link from 'next/link';
import { cn } from '@/lib/utils';

const SocialIcons = ({ color, prantBorder }) => {
  return (
    <ul className={`flex items-center gap-5 ${color}`}>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder}`
        )}
      >
        <Link
          href={'https://www.facebook.com/share/k1hfphoyck8ThCXB/'}
          aria-label="facebook"
        >
          <FaFacebook />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder}`
        )}
      >
        <Link href={'https://pin.it/2gb8dF9Uh'} aria-label="pinterest">
          <FaPinterest />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder}`
        )}
      >
        <Link
          href={'https://www.instagram.com/globalinnovations6'}
          aria-label="instagram"
        >
          <FaInstagram />
        </Link>
      </li>
      <li
        className={cn(
          `hover:text-primary-foreground transition-all duration-300 ${prantBorder}`
        )}
      >
        <Link
          href={'https://www.linkedin.com/company/globalinnovations6'}
          aria-label="linkedin"
        >
          <FaLinkedin />
        </Link>
      </li>
    </ul>
  );
};

export default SocialIcons;
