import { cn } from '@/lib/utils';
import React from 'react';

const TextareaTwo = ({ name, placeholder, className, props }) => {
  return (
    <textarea
      {...props}
      name={name}
      placeholder={placeholder}
      className={cn(
        `border-2 border-[#C0C0C0] outline-blue-200 w-full rounded-lg px-[25px] py-[18px] min-h-48 bg-background`,
        className
      )}
    ></textarea>
  );
};

export default TextareaTwo;
