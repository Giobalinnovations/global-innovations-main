import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';

const BlogCard = ({ blog }) => {
  const {
    slug,
    title,
    imageCover,
    imageCoverAlt,
    excerpt,
    category,
    createdAt,
  } = blog;

  return (
    <Link
      href={`/blog/${slug}`}
      className="flex flex-col overflow-hidden transition-shadow duration-300 bg-white rounded-lg shadow-sm group hover:shadow-md"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={imageCover}
          alt={imageCoverAlt}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-sm text-white rounded-full bg-primary/90">
            {category?.name || 'Uncategorized'}
          </span>
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-4 mb-3 text-sm text-gray-600">
          <span>{formatDate(createdAt)}</span>
        </div>

        <h3 className="mb-2 text-xl font-semibold transition-colors duration-200 group-hover:text-primary">
          {title}
        </h3>

        <p className="mb-4 text-sm text-gray-600 line-clamp-2">{excerpt}</p>

        <div className="mt-auto">
          <span className="text-sm font-medium text-primary">Read More →</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
