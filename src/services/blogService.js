import axiosInstance from '@/lib/axios';

export const blogService = {
  getBlogs: async ({ limit = 9, page = 1, search = '', category }) => {
    const params = new URLSearchParams({
      limit: String(limit),
      page: String(page),
    });

    if (search) params.append('search', search);
    if (category && category !== 'all') params.append('category', category);

    try {
      const { data: response } = await axiosInstance.get(`/blogs?${params}`);

      return {
        data: response.data || [],
        categories: response.categories || [],
        totalPages: response.totalPages || 1,
        hasNextPage: page < (response.totalPages || 1),
      };
    } catch (error) {
      console.error('Error fetching blogs:', error);
      throw new Error(error.message || 'Failed to fetch blogs');
    }
  },

  getBlogById: async slug => {
    try {
      const { data } = await axiosInstance.get(`/blogs/${slug}`);
      return data;
    } catch (error) {
      console.error('Error fetching blog:', error);
      throw new Error(error.message || 'Failed to fetch blog');
    }
  },
};
