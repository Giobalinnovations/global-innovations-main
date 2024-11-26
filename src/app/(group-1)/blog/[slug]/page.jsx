'use client';

import { useBlog } from '@/hooks/useBlogs';
import Image from 'next/image';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';
import BlogCardSkeleton from '@/components/ui/BlogCardSkeleton';
import NoDataFound from '@/components/ui/NoDataFound';

const BlogDetailPage = ({ params }) => {
  const { slug } = params;
  const { data: blog, isLoading, isError, error } = useBlog(slug);

  if (isLoading) {
    return (
      <div className="max-w-[1350px] mx-auto px-4 py-12">
        <BlogCardSkeleton />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="max-w-[1350px] mx-auto px-4 py-12">
        <NoDataFound message={error?.message || 'Blog post not found'} />
      </div>
    );
  }
  console.log(blog?.data);

  return (
    <article className="max-w-[1350px] mx-auto px-4 py-12">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-4 mb-4">
          <Link
            href={`/blog/category/${blog?.data?.category?._id}`}
            className="text-primary hover:text-primary/80"
          >
            {blog?.data?.category?.name}
          </Link>
          <span className="text-gray-500">
            {formatDate(blog?.data?.createdAt)}
          </span>
        </div>
        <h1 className="mb-4 text-4xl font-bold">{blog?.data?.title}</h1>
        <p className="mb-6 text-xl text-gray-600">{blog?.data?.excerpt}</p>
      </header>

      {/* Featured Image */}
      <div className="relative w-full h-[500px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={blog?.data?.imageCover}
          alt={blog?.data?.imageCoverAlt}
          fill
          className="object-cover"
        />
        <p className="absolute bottom-0 left-0 right-0 p-4 text-sm text-white bg-black/50">
          {blog?.data?.imageCoverCaption}
        </p>
      </div>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: blog?.data?.content }}
      />

      {/* FAQs Section */}
      {blog?.data?.faqs?.length > 0 && (
        <section className="mt-12">
          <h2 className="mb-6 text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {blog?.data?.faqs?.map((faq, index) => (
              <div key={index} className="p-6 rounded-lg bg-gray-50">
                <h3 className="mb-3 text-xl font-semibold">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Meta Information */}
      <footer className="pt-8 mt-12 border-t">
        <div className="flex flex-wrap gap-4">
          {blog?.data?.keywords?.split(',').map((keyword, index) => (
            <span
              key={index}
              className="px-3 py-1 text-sm bg-gray-100 rounded-full"
            >
              {keyword.trim()}
            </span>
          ))}
        </div>
      </footer>
    </article>
  );
};

export default BlogDetailPage;
