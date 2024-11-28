import axios from 'axios';
import { notFound } from 'next/navigation';
import BlogDetailPageContent from './blog-details-page-content';

// Create axios instance for server-side fetching
const axiosInstance = axios.create({
  baseURL:
    process.env.API_URL ||
    'https://pgyuqtbyfn.us-east-1.awsapprunner.com/api/v1',
});

async function getBlogData(slug) {
  try {
    const { data: response } = await axiosInstance.get(`/blogs/${slug}`);
    return response;
  } catch (error) {
    console.error('Error fetching blog data:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const response = await getBlogData(slug);
  const blog = response?.data;

  if (!blog) {
    return notFound();
  }

  return {
    title: blog.title || 'Blog Details',
    description: blog.description || 'Blog details page',
    keywords: blog.keywords || 'Blog details page keywords',
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

const BlogDetailPage = ({ params }) => {
  const { slug } = params;
  return <BlogDetailPageContent slug={slug} />;
};

export default BlogDetailPage;
