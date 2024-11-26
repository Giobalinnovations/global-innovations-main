import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import NoRecentPosts from '@/components/ui/NoRecentPosts';

const RecentPosts = ({ posts = [], currentPostId = null }) => {
  const filteredPosts = posts.filter(post => post._id !== currentPostId);

  return (
    <div className="p-6 bg-white shadow-sm rounded-xl">
      <h2 className="mb-6 text-xl font-bold">Recent Posts</h2>
      {filteredPosts.length > 0 ? (
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="block group"
            >
              <div className="flex gap-4">
                <div className="relative flex-shrink-0 w-24 h-24 overflow-hidden rounded-lg">
                  <Image
                    src={post.imageCover}
                    alt={post.imageCoverAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    {/* <span className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary">
                      {post.category?.name}
                    </span> */}
                    <span className="text-xs text-gray-500">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                  <h3 className="mb-1 text-sm font-semibold leading-snug text-gray-900 transition-colors group-hover:text-primary line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="pb-6 mt-2 border-b border-gray-100 last:border-0 last:pb-0" />
            </Link>
          ))}
        </div>
      ) : (
        <NoRecentPosts />
      )}
    </div>
  );
};

export default RecentPosts;
