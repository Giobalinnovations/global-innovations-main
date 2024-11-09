import { servicesDataTwo } from './servicesDataTwo';

export const menuList = [
  {
    id: 1,
    path: '/',
    lable: 'Home',
    megaMenu: false,
    dropDown: [],
  },
  {
    id: 2,
    path: '/about-us',
    lable: 'About',
    megaMenu: false,
    dropDown: [],
  },

  {
    id: 3,
    path: '/services',
    lable: 'Services',
    dropDown: servicesDataTwo.map(item => ({
      id: item.id,
      path: `/services/${item.slug}`,
      lable: item.service_name,
    })),
    megaMenu: false,
  },

  {
    id: 4,
    path: '/careers',
    lable: 'Careers',
    megaMenu: false,
    dropDown: [],
  },
  {
    id: 5,
    path: '/contact-us',
    lable: 'Contact',
    megaMenu: false,
    dropDown: [],
  },
  // {
  //   id: 4,
  //   path: '#',
  //   lable: 'Portfolio',
  //   dropDown: [
  //     {
  //       id: 1,
  //       path: '/portfolio',
  //       lable: 'Portfolio',
  //       tag: '',
  //     },
  //     {
  //       id: 2,
  //       path: '/portfolio-details',
  //       lable: 'Portfolio Details',
  //       tag: '',
  //     },
  //   ],
  //   megaMenu: false,
  // },
  // {
  //   id: 5,
  //   path: '#',
  //   lable: 'Blog',
  //   dropDown: [
  //     {
  //       id: 1,
  //       path: '/modern-with-sidebar',
  //       lable: 'Modern With Sidebar',
  //       tag: '',
  //     },
  //     {
  //       id: 2,
  //       path: '/classic-with-sidebar',
  //       lable: 'Classic With Sidebar',
  //       tag: '',
  //     },
  //     {
  //       id: 3,
  //       path: '/blog-list',
  //       lable: 'Blog List',
  //       tag: '',
  //     },
  //     {
  //       id: 4,
  //       path: '/modern-without-sidebar',
  //       lable: 'Modern Without Sidebar',
  //       tag: '',
  //     },
  //     {
  //       id: 5,
  //       path: '/blog-single-sidebar',
  //       lable: 'Blog Single Sidebar',
  //       tag: '',
  //     },
  //     {
  //       id: 6,
  //       path: '/blog-single-no-siderbar',
  //       lable: 'Blog Single No Siderbar',
  //       tag: '',
  //     },
  //   ],
  //   megaMenu: false,
  // },
];
