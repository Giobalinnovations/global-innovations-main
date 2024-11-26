'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useBlogs } from '@/hooks/useBlogs';
import { useState, useCallback } from 'react';
import BlogCard from '@/components/sections/blogs/BlogCard';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: blogData, isLoading } = useBlogs({
    limit: 9,
    page,
    search,
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
  });

  const blogs = blogData?.data || [];
  const categories = blogData?.categories || [];
  const totalPages = blogData?.totalPages || 1;
  const hasNextPage = page < totalPages;

  const handleSearch = useCallback(value => {
    const timeoutId = setTimeout(() => {
      setSearch(value);
      setPage(1);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, []);

  const handleCategoryChange = categoryId => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  return (
    <div className="max-w-[1350px] mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Our Blog</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          Discover insights and updates from our team
        </p>
      </div>

      <div className="flex flex-col gap-4 mb-8 md:flex-row">
        <div className="flex-1">
          <Input
            placeholder="Search articles..."
            onChange={e => handleSearch(e.target.value)}
            className="w-full"
          />
        </div>
        <div className="flex gap-2 pb-2 overflow-x-auto">
          <Button
            variant={selectedCategory === 'all' ? 'default' : 'outline'}
            onClick={() => handleCategoryChange('all')}
          >
            All
          </Button>
          {categories.map(category => (
            <Button
              key={category._id}
              variant={
                selectedCategory === category._id ? 'default' : 'outline'
              }
              onClick={() => handleCategoryChange(category._id)}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[...Array(9)].map((_, index) => (
            <BlogCardSkeleton key={index} />
          ))}
        </div>
      ) : blogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map(blog => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              disabled={page === 1 || isLoading}
              onClick={() => setPage(prev => Math.max(prev - 1, 1))}
            >
              Previous
            </Button>
            <span className="text-sm">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              disabled={!hasNextPage || isLoading}
              onClick={() => setPage(prev => prev + 1)}
            >
              Next
            </Button>
          </div>
        </>
      ) : (
        <NoDataFound message="No blog posts found matching your criteria" />
      )}
    </div>
  );
};

export default BlogPage;
