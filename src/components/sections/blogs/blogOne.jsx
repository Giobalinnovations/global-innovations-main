'use client';

import { Button } from '@/components/ui/button';
import Title from '@/components/ui/title';
import React from 'react';
import CardOne from './cardOne';
import SlideUp from '@/components/animations/slideUp';
import { useBlogs } from '@/hooks/useBlogs';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';

const BlogOne = () => {
  const { data: blogs, isLoading, isError, error } = useBlogs({ limit: 3 });

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between">
          {[1, 2, 3].map(index => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      );
    }

    if (isError) {
      return (
        <NoDataFound
          message={
            error?.message || 'Something went wrong while fetching blogs'
          }
        />
      );
    }

    if (!blogs?.length) {
      return <NoDataFound />;
    }

    return (
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pt-7.5 gap-7.5 justify-between">
        {blogs.map(({ id, author, date, thumb, title, category }) => (
          <CardOne
            key={id}
            id={id}
            title={title}
            thumb={thumb}
            author={author}
            date={date}
            category={category}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Our Blog</Button>
            <Title size={'5xl'} className="pt-6 text-center max-w-[898px]">
              Explore Ideas That Fuel Your Growth Journey
            </Title>
          </div>
        </SlideUp>

        {renderContent()}
      </div>
    </section>
  );
};

export default BlogOne;
