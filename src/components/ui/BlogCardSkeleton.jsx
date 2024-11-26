const BlogCardSkeleton = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden shadow-sm animate-pulse">
      <div className="relative h-48 bg-gray-200"></div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="h-4 bg-gray-200 rounded w-1/4 mb-3"></div>
        <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-1/4 mt-auto"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
