import { cn } from '@/lib/utils';

import React from 'react';

const CopyRight = ({ className }) => {
  return (
    <div className="bg-accent">
      <div
        className={cn(
          `flex xl:flex-row flex-col justify-center items-center text-center lg:text-start py-7.5 ${className}`
        )}
      >
        <p>Copyright: © 2024. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default CopyRight;
