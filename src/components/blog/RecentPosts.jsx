import Image from 'next/image';
import Link from 'next/link';
import { formatDate } from '@/lib/utils';
import NoRecentPosts from '@/components/ui/NoRecentPosts';

const RecentPosts = ({ posts = [], currentPostId = null }) => {
  const filteredPosts = posts.filter(post => post._id !== currentPostId);

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <h2 className="text-xl font-bold mb-6">Recent Posts</h2>
      {filteredPosts.length > 0 ? (
        <div className="space-y-6">
          {filteredPosts.map(post => (
            <Link
              key={post._id}
              href={`/blog/${post.slug}`}
              className="group block"
            >
              <div className="flex gap-4">
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={post.imageCover}
                    alt={post.imageCoverAlt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                      {post.category?.name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {formatDate(post.createdAt)}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold leading-snug mb-1 text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
              <div className="mt-2 border-b border-gray-100 last:border-0 pb-6 last:pb-0" />
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
