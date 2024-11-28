'use client';

import { useBlog, useRecentPosts } from '@/hooks/useBlogs';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';
import { Clock, BookOpen } from 'lucide-react';
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

const BlogDetailPageContent = ({ slug }) => {
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
      <HeaderTwo haveOvcanvsIcon={true} haveShadow={true} />
      <article className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white">
          <div className="max-w-[1350px] mx-auto px-4">
            <div className="py-4">
              <Breadcrumb items={breadcrumbItems} />
            </div>
          </div>
        </div>

        <div className="max-w-[1350px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              <div className="overflow-hidden bg-white shadow-sm rounded-xl">
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
                      <p className="text-sm capitalize">
                        {blog.imageCoverCaption}
                      </p>
                    </div>
                  )}
                </div>

                <div className="p-6 md:p-8 lg:p-10">
                  {/* Category */}
                  {blog.category && (
                    <Link
                      href={`/blog/category/${blog.category._id}`}
                      className="inline-block bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium hover:bg-primary/20 transition-colors mb-4"
                    >
                      {blog.category.name}
                    </Link>
                  )}

                  {/* Title */}
                  <h1 className="mb-4 text-3xl font-bold leading-tight text-gray-900 capitalize md:text-4xl lg:text-5xl">
                    {blog.title}
                  </h1>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 pb-8 mb-8 text-sm text-gray-600 border-b">
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-2" />
                      {formatDate(blog.createdAt)}
                    </span>
                    <span className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2" />5 min read
                    </span>
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
                      <h3 className="mb-4 text-lg font-semibold">Topics</h3>
                      <div className="flex flex-wrap gap-2">
                        {blog.keywords.split(',').map((keyword, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 px-4 py-1.5 rounded-full text-sm text-gray-700"
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

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="space-y-6 lg:sticky lg:top-6">
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

export default BlogDetailPageContent;
