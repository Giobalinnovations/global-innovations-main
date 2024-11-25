import { axiosInstance } from '@/lib/axios';

export const blogService = {
  getBlogs: async ({ limit = 10, page }) => {
    return axiosInstance.get(`/blogs`, {
      params: {
        limit,
        page,
      },
    });
  },

  getBlogById: async id => {
    return axiosInstance.get(`/blogs/${id}`);
  },
};
