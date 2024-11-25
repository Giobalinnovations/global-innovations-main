'use client';

import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';

export const blogKeys = {
  all: ['blogs'],
  lists: () => [...blogKeys.all, 'list'],
  list: filters => [...blogKeys.lists(), { filters }],
  details: () => [...blogKeys.all, 'detail'],
  detail: id => [...blogKeys.details(), id],
};

export const useBlogs = ({ limit = 3 } = {}) => {
  return useQuery({
    queryKey: blogKeys.list(`limit=${limit}`),
    queryFn: () => blogService.getBlogs({ limit }),
    staleTime: 1000 * 60 * 5, // Consider data fresh for 5 minutes
    gcTime: 1000 * 60 * 60 * 24, // Keep unused data in cache for 24 hours
  });
};

export const useBlog = id => {
  return useQuery({
    queryKey: blogKeys.detail(id),
    queryFn: () => blogService.getBlogById(id),
    enabled: !!id, // Only run query if we have an ID
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
