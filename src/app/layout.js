import { DM_Sans, Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';
import Providers from './providers';
import { ThemeProvider } from '@/contextApi/themeProvider';
import CountryProvider from '@/contextApi/countryProvider';
import ScrollCircle from '@/components/ui/scrollCircle';
const CustomCursor = dynamic(() => import('@/components/ui/customCursor'), {
  ssr: false,
});
const Setting = dynamic(() => import('@/components/ui/setting'), {
  ssr: false,
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--inter',
});
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--plus-jakarta-sans',
});
const dm_sans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--dm-sans',
});

export const metadata = {
  metadataBase: new URL('https://www.globalinnovations.co.in'),
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${plus_jakarta_sans.variable} ${dm_sans.variable}`}
        suppressHydrationWarning={true}
      >
        <Providers>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <CountryProvider>
              {children}
              <Setting />
              <ScrollCircle />
              <CustomCursor />
            </CountryProvider>
          </ThemeProvider>
        </Providers>
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org/',
                '@type': 'WebSite',
                name: 'Global Innovations',
                url: 'https://www.globalinnovations.co.in/',
                potentialAction: {
                  '@type': 'SearchAction',
                  target: '{search_term_string}',
                  'query-input': 'required name=search_term_string',
                },
              },
            ]),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
