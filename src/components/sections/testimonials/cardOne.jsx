import React from 'react';
import Rating from '@/components/ui/rating';
import Title from '@/components/ui/title';

const CardOne = ({ rating, name, position, review }) => {
  return (
    <div className="pt-12.5">
      <div className="py-25 px-7 lg:px-20 bg-primary rounded-[30px]">
        <div className="content-center h-full">
          <Rating star={rating} />
          <Title
            size={'2xl'}
            className={'text-secondary-foreground mt-2 dark:text-white'}
          >
            {review}
          </Title>
          <div className="pt-6 lg:pt-10">
            <h5 className="font-semibold text-1xl text-secondary-foreground dark:text-white">
              {name}
            </h5>
            <p className="flex items-center gap-1 pt-1 text-secondary-foreground dark:text-white">
              {' '}
              <span className="w-5 h-[1px] bg-background dark:bg-muted-foreground block"></span>{' '}
              <span>{position}</span>{' '}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOne;
