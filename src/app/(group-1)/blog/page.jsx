'use client';

import { useBlogs } from '@/hooks/useBlogs';
import { useState, useCallback } from 'react';
import BlogCard from '@/components/sections/blogs/BlogCard';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import RecentPosts from '@/components/blog/RecentPosts';
import BlogContactForm from '@/components/blog/BlogContactForm';
import BlogSearch from '@/components/blog/BlogSearch';
import { Button } from '@/components/ui/button';

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const { data: blogData, isLoading } = useBlogs({
    limit: 6,
    page,
    search,
    category: selectedCategory !== 'all' ? selectedCategory : undefined,
  });

  const { data: recentBlogsData } = useBlogs({ limit: 4 });

  const blogs = blogData?.data || [];
  const categories = blogData?.categories || [];
  const totalPages = blogData?.totalPages || 1;
  const hasNextPage = page < totalPages;
  const recentPosts = recentBlogsData?.data || [];

  const handleSearch = useCallback(value => {
    setSearch(value);
    setPage(1);
  }, []);

  const handleCategoryChange = categoryId => {
    setSelectedCategory(categoryId);
    setPage(1);
  };

  return (
    <main>
      <HeaderTwo haveOvcanvsIcon={true} haveShadow={true} />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="py-16 text-white bg-primary">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="mb-6 text-4xl font-bold md:text-5xl">Our Blog</h1>
              <p className="text-lg opacity-90">
                Discover insights, tutorials, and updates from our team
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Blog Posts Grid */}
            <div className="lg:col-span-8">
              {/* Search Component */}
              <BlogSearch
                onSearch={handleSearch}
                categories={categories}
                selectedCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              />

              {/* Blog Posts */}
              {isLoading ? (
                <div className="grid gap-8">
                  {[...Array(6)].map((_, index) => (
                    <BlogCardSkeleton key={index} />
                  ))}
                </div>
              ) : blogs.length > 0 ? (
                <>
                  <div className="grid gap-8">
                    {blogs.map(blog => (
                      <BlogCard key={blog._id} blog={blog} />
                    ))}
                  </div>

                  {/* Pagination */}
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

            {/* Sidebar with sticky behavior */}
            <div className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-6">
                <RecentPosts posts={recentPosts} />
                <BlogContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogPage;
