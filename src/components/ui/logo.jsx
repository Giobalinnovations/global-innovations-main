import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Logo = () => {
  return (
    <div className="w-auto h-auto">
      <Link href={'/'} className="relative">
        <Image
          src={'/images/logo.webp'}
          width={75}
          height={53}
          unoptimized="true"
          alt="logo-white"
          className={`object-cover dark:block hidden`}
          style={{
            mixBlendMode: 'multiply',
          }}
        />
        <Image
          src={'/images/logo.webp'}
          width={75}
          height={45}
          unoptimized="true"
          alt="logo-original"
          className="block object-cover dark:hidden"
          style={{
            mixBlendMode: 'multiply',
          }}
        />
      </Link>
    </div>
  );
};

export default Logo;
