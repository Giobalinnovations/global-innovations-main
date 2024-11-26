import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react';

const ImportanceLinks = ({ color }) => {
  const importanceLinks = [
    {
      id: 1,
      title: 'Company',
      links: [
        {
          id: 1,
          path: '/about-us',
          label: 'About Us',
        },

        {
          id: 2,
          path: '/contact-us',
          label: 'Contact',
        },
      ],
    },
    {
      id: 2,
      title: 'Resources',
      links: [
        {
          id: 1,
          path: '/blog',
          label: 'Blog',
        },
        {
          id: 4,
          path: '/services',
          label: 'Services',
        },
      ],
    },
    {
      id: 3,
      title: 'Social',
      links: [
        {
          id: 1,
          path: 'https://www.facebook.com/share/k1hfphoyck8ThCXB/',
          label: 'Facebook',
        },
        {
          id: 2,
          path: 'https://www.instagram.com/globalinnovations6',
          label: 'Instagram',
        },
        {
          id: 3,
          path: 'https://www.linkedin.com/company/globalinnovations6',
          label: 'LinkedIn',
        },
        {
          id: 4,
          path: 'https://pin.it/2gb8dF9Uh',
          label: 'Pinterest',
        },
      ],
    },
    {
      id: 5,
      title: 'Other links',
      links: [
        {
          id: 1,
          path: '/terms-and-conditions',
          label: 'Terms',
        },
        {
          id: 2,
          path: '/privacy-policy',
          label: 'Privacy',
        },
      ],
    },
  ];
  return (
    <div className="grid grid-cols-2 md:grid-cols-4">
      {importanceLinks.map(({ id, links, title }) => {
        return (
          <div key={id} className="mt-7.5 lg:mt-0">
            <h3
              className={cn(
                `font-semibold text-1xl text-muted-foreground lg:pb-5 pb-3`,
                color
              )}
            >
              {title}
            </h3>
            <ul>
              {links.map(({ id, label, path }) => (
                <li key={id} className="mt-2.5">
                  <Link
                    href={path}
                    className={cn(
                      `font-semibold hover:text-primary-foreground transition-all duration-500`,
                      color
                    )}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ImportanceLinks;
