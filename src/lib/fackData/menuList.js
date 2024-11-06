import home_1_screenshrot from '../../../public/images/home-showcase/home-showcase-1.jpg';
import home_2_screenshrot from '../../../public/images/home-showcase/home-showcase-2.jpg';
import home_3_screenshrot from '../../../public/images/home-showcase/home-showcase-3.jpg';
import home_4_screenshrot from '../../../public/images/home-showcase/home-showcase-4.jpg';
import home_5_screenshrot from '../../../public/images/home-showcase/home-showcase-5.jpg';
import home_6_screenshrot from '../../../public/images/home-showcase/up-coming-showcase.png';
export const menuList = [
  {
    id: 1,
    path: '#',
    lable: 'Home',
    megaMenu: false,
    dropDown: false,
  },
  {
    id: 2,
    path: '#',
    lable: 'Pages',
    dropDown: [
      {
        id: 1,
        path: '/about-us',
        lable: 'About Us',
        tag: '',
      },
      {
        id: 2,
        path: '/contact-us',
        lable: 'Contact Us',
        tag: '',
      },
      {
        id: 3,
        path: '#',
        lable: 'Our Team',
        tag: '',
        subDropdonwn: [
          {
            id: 1,
            path: '/team',
            lable: 'Our Team',
            tag: '',
          },
          {
            id: 2,
            path: '/team-carousel',
            lable: 'Team Carousel',
            tag: '',
          },
          {
            id: 3,
            path: '/team-details',
            lable: 'Team Details',
            tag: '',
          },
        ],
      },
      {
        id: 4,
        path: '#',
        lable: 'Career',
        tag: '2 Open Job',
        subDropdonwn: [
          {
            id: 1,
            path: '/career',
            lable: 'Career',
            tag: '',
          },
          {
            id: 2,
            path: '/career-details',
            lable: 'Career Details',
            tag: '',
          },
        ],
      },
      {
        id: 5,
        path: '/pricing',
        lable: 'Pricing Plan',
        tag: 'HOT',
      },
      {
        id: 6,
        path: '/faq',
        lable: 'FAQs',
        tag: '',
      },
      {
        id: 7,
        path: '/testimonial',
        lable: 'Testimonial',
        tag: '',
      },
      {
        id: 8,
        path: '/categories',
        lable: 'Categories',
        tag: '',
      },
      {
        id: 9,
        path: '/author',
        lable: 'Author',
        tag: '',
      },
      {
        id: 10,
        path: '#',
        lable: 'Coming Soon',
        tag: '',
      },
      {
        id: 11,
        path: '/not-found',
        lable: '404',
        tag: '',
      },
    ],
    megaMenu: false,
  },
  {
    id: 3,
    path: '#',
    lable: 'Services',
    dropDown: [
      {
        id: 1,
        path: '/services',
        lable: 'Services',
        tag: '',
      },
      {
        id: 2,
        path: '/service-details',
        lable: 'Service Details',
        tag: '',
      },
    ],
    megaMenu: false,
  },
  {
    id: 4,
    path: '#',
    lable: 'Portfolio',
    dropDown: [
      {
        id: 1,
        path: '/portfolio',
        lable: 'Portfolio',
        tag: '',
      },
      {
        id: 2,
        path: '/portfolio-details',
        lable: 'Portfolio Details',
        tag: '',
      },
    ],
    megaMenu: false,
  },
  {
    id: 5,
    path: '#',
    lable: 'Blog',
    dropDown: [
      {
        id: 1,
        path: '/modern-with-sidebar',
        lable: 'Modern With Sidebar',
        tag: '',
      },
      {
        id: 2,
        path: '/classic-with-sidebar',
        lable: 'Classic With Sidebar',
        tag: '',
      },
      {
        id: 3,
        path: '/blog-list',
        lable: 'Blog List',
        tag: '',
      },
      {
        id: 4,
        path: '/modern-without-sidebar',
        lable: 'Modern Without Sidebar',
        tag: '',
      },
      {
        id: 5,
        path: '/blog-single-sidebar',
        lable: 'Blog Single Sidebar',
        tag: '',
      },
      {
        id: 6,
        path: '/blog-single-no-siderbar',
        lable: 'Blog Single No Siderbar',
        tag: '',
      },
    ],
    megaMenu: false,
  },
];
