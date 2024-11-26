'use client';

import { useBlog, useRecentPosts } from '@/hooks/useBlogs';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';
import { Clock, Eye, BookOpen } from 'lucide-react';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import Breadcrumb from '@/components/ui/Breadcrumb';
import RecentPosts from '@/components/blog/RecentPosts';
import BlogContactForm from '@/components/blog/BlogContactForm';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const BlogDetailPage = ({ params }) => {
  const { slug } = params;
  const { data: blogData, isLoading, isError, error } = useBlog(slug);
  const { data: recentPostsData } = useRecentPosts(4);

  const blog = blogData?.data;
  const recentPosts = recentPostsData?.data || [];

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: blog?.title || 'Loading...', href: null },
  ];

  if (isLoading) {
    return (
      <main>
        <HeaderTwo />
        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <BlogCardSkeleton />
        </div>
      </main>
    );
  }

  if (isError || !blog) {
    return (
      <main>
        <HeaderTwo />
        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <NoDataFound message={error?.message || 'Blog post not found'} />
        </div>
      </main>
    );
  }

  const categories = blog?.categories || [];
  console.log(categories);
  console.log(blog);

  return (
    <main>
      <HeaderTwo />
      <article className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="py-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                {/* Featured Image */}
                <div className="relative aspect-[16/9]">
                  <Image
                    src={blog.imageCover}
                    alt={blog.imageCoverAlt}
                    fill
                    className="object-cover"
                    priority
                  />
                  {blog.imageCoverCaption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white bg-black/50">
                      <p className="text-sm">{blog.imageCoverCaption}</p>
                    </div>
                  )}
                </div>

                <div className="p-8">
                  {/* Blog Header */}
                  <div className="mb-8">
                    {/* Category */}
                    {blog.category && (
                      <Link
                        href={`/blog/category/${blog.category._id}`}
                        className="inline-block px-3 py-1 mb-4 transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {blog.category.name}
                      </Link>
                    )}

                    {/* Title */}
                    <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
                      {blog.title}
                    </h1>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 pb-8 text-sm text-gray-600 border-b border-gray-100">
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {formatDate(blog.createdAt)}
                      </span>
                      <span className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-2" />5 min read
                      </span>
                      <span className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        {blog.count} views
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <div dangerouslySetInnerHTML={{ __html: blog.content }} />
                  </div>

                  {/* FAQs Section */}
                  {blog.faqs?.length > 0 && (
                    <div className="pt-8 mt-12 border-t">
                      <h2 className="mb-6 text-2xl font-bold">
                        Frequently Asked Questions
                      </h2>
                      <Accordion type="single" collapsible className="w-full">
                        {blog.faqs.map((faq, index) => (
                          <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg font-semibold">
                              {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="prose-sm prose text-gray-600">
                              {faq.answer}
                            </AccordionContent>
                          </AccordionItem>
                        ))}
                      </Accordion>
                    </div>
                  )}

                  {/* Keywords */}
                  {blog.keywords && (
                    <div className="pt-8 mt-8 border-t">
                      <h3 className="mb-4 text-lg font-semibold">Keywords</h3>
                      <div className="flex flex-wrap gap-2">
                        {blog.keywords.split(',').map((keyword, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                          >
                            {keyword.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar with sticky behavior */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-6 space-y-6">
                <RecentPosts posts={recentPosts} currentPostId={blog?._id} />
                <BlogContactForm />
              </div>
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default BlogDetailPage;
