'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, SlidersHorizontal, X } from 'lucide-react';

const BlogSearch = ({
  onSearch,
  categories,
  selectedCategory,
  onCategoryChange,
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
    onSearch('');
  };

  const handleSearchChange = e => {
    setSearchValue(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div className="mb-8 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <div className="relative flex items-center">
          <Search className="absolute w-5 h-5 text-gray-400 left-4" />
          <Input
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Search articles..."
            className="h-12 pl-12 pr-24 text-base border-gray-200 focus:border-primary"
          />
          <div className="absolute flex items-center gap-2 right-2">
            {searchValue && (
              <Button
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-gray-400 hover:text-gray-600"
                onClick={handleClear}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            <Button
              variant="ghost"
              size="icon"
              className={`h-8 w-8 ${
                showFilters
                  ? 'text-primary'
                  : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => setShowFilters(!showFilters)}
            >
              <SlidersHorizontal className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div
        className={`transition-all duration-300 ease-in-out ${
          showFilters
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="p-4 space-y-4 bg-white rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-900">Categories</h3>
          <div className="flex flex-wrap gap-2">
            <Button
              size="sm"
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => onCategoryChange('all')}
              className="rounded-full"
            >
              All
            </Button>
            {categories.map(category => (
              <Button
                key={category._id}
                size="sm"
                variant={
                  selectedCategory === category._id ? 'default' : 'outline'
                }
                onClick={() => onCategoryChange(category._id)}
                className="rounded-full"
              >
                {category.name}
                <span className="ml-1 text-xs opacity-70">
                  ({category.blogs?.length || 0})
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;
