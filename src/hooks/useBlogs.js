'use client';

import { useQuery } from '@tanstack/react-query';
import { blogService } from '@/services/blogService';

export const blogKeys = {
  all: ['blogs'],
  lists: () => [...blogKeys.all, 'list'],
  list: filters => [...blogKeys.lists(), { filters }],
  details: () => [...blogKeys.all, 'detail'],
  detail: slug => [...blogKeys.details(), slug],
};

export const useBlogs = ({ limit = 9, page = 1, search = '', category }) => {
  return useQuery({
    queryKey: blogKeys.list(
      `limit=${limit}&page=${page}&search=${search}&category=${category}`
    ),
    queryFn: () => blogService.getBlogs({ limit, page, search, category }),
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
    keepPreviousData: true,
  });
};

export const useBlog = slug => {
  return useQuery({
    queryKey: blogKeys.detail(slug),
    queryFn: () => blogService.getBlogById(slug),
    enabled: !!slug,
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 60 * 24,
  });
};
