import { Newspaper } from 'lucide-react';

const NoRecentPosts = ({
  message = 'Check back soon for more interesting articles',
}) => {
  return (
    <div className="flex flex-col items-center justify-center py-8 text-center">
      <div className="bg-primary/5 p-4 rounded-full mb-4">
        <Newspaper className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        No Recent Posts Yet
      </h3>
      <p className="text-sm text-gray-500 max-w-[200px]">{message}</p>
    </div>
  );
};

export default NoRecentPosts;
