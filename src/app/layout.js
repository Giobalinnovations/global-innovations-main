import { DM_Sans, Inter, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';
import { ThemeProvider } from '@/contextApi/themeProvider';
import CountryProvider from '@/contextApi/countryProvider';
import HeaderTwo from '@/components/sections/headers/headerTwo';
import FooterTwo from '@/components/sections/footers/footerTwo';
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
  // title: 'Award Winning Marketing Agency in India | Global Innovations',
  // description: `Global Innovations Innovations is an award-winning best Marketing agency in India. We offer's a experts team that will help you grow your business traditional to digital & Join us Today!`,
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
        {/* <HeaderTwo haveOvcanvsIcon={true} haveShadow={true} /> */}
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
        {/* <FooterTwo /> */}
      </body>
    </html>
  );
}
