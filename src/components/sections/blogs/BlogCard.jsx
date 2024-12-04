import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const BlogCard = ({ blog }) => {
  return (
    <div className="overflow-hidden bg-white shadow-sm rounded-xl group">
      <div className="grid gap-6 md:grid-cols-5">
        {/* Image */}
        <div className="relative md:col-span-2">
          <Link
            href={`/blog/${blog.slug}`}
            className="relative block aspect-[4/3] md:aspect-auto md:h-full"
          >
            <Image
              src={blog.imageCover}
              alt={blog.imageCoverAlt}
              fill
              className="object-cover w-full h-full"
            />
          </Link>
        </div>

        {/* Content */}
        <div className="p-6 md:col-span-3 md:p-8">
          {/* Category & Date */}
          <div className="flex items-center gap-4 mb-3">
            {blog.category && (
              <Link
                href={`/blog/category/${blog.category._id}`}
                className="px-3 py-1 text-xs transition-colors rounded-full bg-primary/10 text-primary hover:bg-primary/20"
              >
                {blog.category.name}
              </Link>
            )}
            <span className="text-sm text-gray-500">
              {formatDate(blog.createdAt)}
            </span>
          </div>

          {/* Title */}
          <h2 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
            <Link href={`/blog/${blog.slug}`}>{blog.title}</Link>
          </h2>

          {/* Excerpt */}
          <p className="mb-4 text-gray-600 line-clamp-2">{blog.excerpt}</p>

          {/* Read More Link */}
          <Link
            href={`/blog/${blog.slug}`}
            className="inline-flex items-center font-medium transition-all text-primary hover:gap-2"
          >
            Read More <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
