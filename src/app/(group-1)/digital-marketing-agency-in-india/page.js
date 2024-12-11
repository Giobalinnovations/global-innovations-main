// // 'use client';
// import SlideUp from '@/components/animations/slideUp';
// import ContactForm from '@/components/sections/contactForm';
// import PageTitle from '@/components/sections/pageTitle';
// import {
//   Accordion,
//   AccordionContent,
//   AccordionItem,
//   AccordionTrigger,
// } from '@/components/ui/accordion';
// import {
//   LayoutGrid,
//   LineChart,
//   Clock,
//   RefreshCw,
//   Share2,
//   Search,
//   FileText,
//   Mail,
//   MapPin,
//   MousePointer2,
//   Users,
//   ChevronDown,
// } from 'lucide-react';

// export const metadata = {
//   title:
//     'Global Innovation:  Best Digital Marketing Agency & Company in India| Digital Marketing Services',
//   description: `Partner with the best digital marketing agency & company in India. We offer best & expert digital marketing services for all your business needs. Let's connect today to increase your website traffic.`,
//   keywords:
//     'digital marketing services, media marketing, digital marketing company, best digital marketing, digital marketing solutions, best digital marketing services, digital marketing online, digital marketing seo, digital marketing business, best digital marketing company, digital marketing agency, services for digital marketing, digital marketing agency india, digital marketing agency in india​, digital marketing company in india​, digital marketing in India, digital marketing services in india​, best digital marketing agency in india​, best digital marketing company in india​, website traffic',
//   alternates: {
//     canonical: '/digital-marketing-agency-in-india',
//   },
// };

// const DigitalMarketingServices = () => {
//   // const [openFaq, setOpenFaq] = useState('one');

//   const whyChooseUs = [
//     {
//       id: 1,
//       icon: LayoutGrid,
//       title: 'A holistic strategy',
//       text: "We deliver end-to-end digital marketing solutions that are tailored to your brand's unique needs, meaning that all channels will always be cohesive and integrated.",
//     },
//     {
//       id: 2,
//       icon: LineChart,
//       title: 'Data-Driven Results',
//       text: 'Our strategies are found in rigorous analytics and data-driven insights to ensure each campaign yields measurable results.',
//     },
//     {
//       id: 3,
//       icon: Clock,
//       title: 'Years of Expertise',
//       text: 'Years of experience in different fields have made our team effective in developing marketing strategies which ensure it really touches the hearts of your audience and pushes forward growth.',
//     },
//     {
//       id: 4,
//       icon: RefreshCw,
//       title: 'Continuous Optimization',
//       text: 'Monitor and refine strategies to achieve maximum ROI, through continuous campaign adjustment ensuring peak performance based on real-time information.',
//     },
//   ];

//   const marketingTips = [
//     {
//       icon: Share2,
//       title: 'Engage on Social Media Consistently',
//       text: 'Post on an agreement schedule on Facebook, Instagram, and LinkedIn. Engaging with your followers helps them increase loyalty to your brand and its online presence.',
//     },
//     {
//       icon: Search,
//       title: 'Optimize your website for SEO',
//       text: 'You can make your website search engine optimized by using relevant keywords and meta descriptions, replete with quality content. Such a website tends to attract more organic traffic while ensuring enhanced visibility on search engines.',
//     },
//     {
//       icon: FileText,
//       title: 'Invest in Quality Content Marketing',
//       text: 'If you can produce quality and valuable content, then you are attracting people and keeping them around. Create informative blogs, videos, and infographics that tell people what they need to know.',
//     },
//     {
//       icon: Mail,
//       title: 'Use Email Marketing for Retaining Existing Customers',
//       text: 'Email marketing campaigns will help you nurture the relationship with your existing customers. Keep in touch through updates, special offers, or helpful resources that keep them abreast of your brand.',
//     },
//     {
//       icon: MapPin,
//       title: 'Leverage Local SEO',
//       text: 'Incorporate location-specific keywords and a Google Business Profile in the local search optimization process. Local SEO brings you those customers who are specifically in your locality and actively look for services like yours.',
//     },
//     {
//       icon: MousePointer2,
//       title: 'Use Pay-per-click Ads for Targeted Reach',
//       text: 'PPC ads on Google and other social media enable you to reach a targeted section of potential customers precisely. Roll out carefully and constantly calibrate your moves by tweaking your ROI.',
//     },
//     {
//       icon: Users,
//       title: 'Team up with industry experts such as Global Innovation',
//       text: 'For particular digital marketing support, work with professionals in this regard, such as Global Innovation. Tailored solutions, delivered by the professionals, are going to optimize your campaigns and lead to impactful results.',
//     },
//   ];

//   const faqItems = [
//     {
//       id: 'one',
//       question: 'How can this be done using digital marketing?',
//       ans: 'It makes their product very visible and connects with the target audience while driving more traffic to their sites, which then raises the sales and recognition of their brand.',
//     },
//     {
//       id: 'two',
//       question: 'What kind of digital marketing services do you offer?',
//       ans: 'The services provided are SEO, PPC, content marketing, social media marketing, email campaigns, and web analytics.',
//     },
//     {
//       id: 'three',
//       question: 'How long does it take to see results from digital marketing?',
//       ans: 'Results differ; in many cases, you can measure and see a difference within three to six months according to your approach.',
//     },
//     {
//       id: 'four',
//       question: 'How many types of digital marketing are available in India?',
//       ans: 'There are many forms of digital marketing available in India like SEO, social media marketing, content marketing, email marketing, PPC, affiliate marketing. Each one involves different ways of getting at and connecting with the target online public.',
//     },
//     {
//       id: 'five',
//       question:
//         'How do you measure the success of a digital marketing campaign?',
//       ans: 'We measure the performances of our campaigns through key metrics like website traffic, conversion rates, engagement levels, and ROI to ensure effectiveness.',
//     },
//   ];

//   return (
//     <main>
//       <PageTitle
//         pageName="Digital Marketing Agency in India"
//         breadcrumbLink="services"
//         breadcrumbCurrent="Digital Marketing Agency in India"
//       />

//       {/* Introduction Section */}
//       <section className="py-5">
//         <div>
//           <div className="max-w-4xl mx-auto">
//             <h2 className="mb-6 text-3xl font-bold text-center text-muted-foreground">
//               What is Digital Marketing?
//             </h2>
//             <p className="text-lg leading-relaxed text-gray-600">
//               Digital marketing services include virtually everything online for
//               the promotional goals of brands, products, or services. All types
//               of SEO, content marketing, email campaigns, and social media
//               engagement comprise all kinds of paid advertising done across
//               digital channels to elevate the brand, generate lead traffic, and
//               drive business outcomes.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="py-16 bg-gray-50">
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-4 text-3xl font-bold text-center text-muted-foreground">
//             Level Up Your Digital Performance With The Best Digital Marketing
//             Services In India
//           </h2>
//           <p className="mb-12 text-lg text-center text-gray-600">
//             Why Choose Global Innovations as your Digital Marketing Partner?
//           </p>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
//             {whyChooseUs.map(item => (
//               <div
//                 key={item.id}
//                 className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
//               >
//                 <item.icon className="w-12 h-12 mb-4 text-primary" />
//                 <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
//                 <p className="text-gray-600">{item.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Marketing Tips Section */}
//       <section className="py-16">
//         <div className="container px-4 mx-auto">
//           <h2 className="mb-12 text-3xl font-bold text-center text-muted-foreground">
//             Essential Digital Marketing Tips To Grow Your Business
//           </h2>
//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
//             {marketingTips.map((tip, index) => (
//               <div
//                 key={index}
//                 className="p-6 transition-colors rounded-lg bg-gray-50 hover:bg-gray-100"
//               >
//                 <tip.icon className="w-10 h-10 mb-4 text-primary" />
//                 <h3 className="mb-3 text-xl font-semibold">{tip.title}</h3>
//                 <p className="text-gray-600">{tip.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       {/* <section className="py-16 bg-gray-50">
//         <div>
//           <h2 className="mb-12 text-3xl font-bold text-center text-muted-foreground">
//             Your Questions, Our Proficiency. Everything You need to Know.
//           </h2>
//           <div className="max-w-3xl mx-auto">
//             <Accordion type="single" defaultValue="one" collapsible>
//               {faqItems.map(({ ans, id, question }) => {
//                 return (
//                   <SlideUp key={id} id={id}>
//                     <AccordionItem
//                       value={id}
//                       className="mb-2.5 bg-gray rounded-[15px] border-none"
//                     >
//                       <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left">
//                         {question}
//                       </AccordionTrigger>
//                       <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
//                         {ans}
//                       </AccordionContent>
//                     </AccordionItem>
//                   </SlideUp>
//                 );
//               })}
//             </Accordion>
//           </div>
//         </div>
//       </section> */}

//       {/* Contact Form */}
//       <section className="py-16">
//         <div className="container px-4 mx-auto">
//           <ContactForm
//             color="text-white"
//             inputColor="bg-transparent border-white border text-white placeholder:text-white"
//           />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default DigitalMarketingServices;

export const metadata = {
  title:
    'Global Innovation:  Best Digital Marketing Agency & Company in India| Digital Marketing Services',
  description: `Partner with the best digital marketing agency & company in India. We offer best & expert digital marketing services for all your business needs. Let's connect today to increase your website traffic.`,
  keywords:
    'digital marketing services, media marketing, digital marketing company, best digital marketing, digital marketing solutions, best digital marketing services, digital marketing online, digital marketing seo, digital marketing business, best digital marketing company, digital marketing agency, services for digital marketing, digital marketing agency india, digital marketing agency in india​, digital marketing company in india​, digital marketing in India, digital marketing services in india​, best digital marketing agency in india​, best digital marketing company in india​, website traffic',
  alternates: {
    canonical: '/digital-marketing-agency-in-india',
  },
};
export default function DigitalMarketingServices() {
  return (
    <div>
      <section className="py-5">
        <div>
          <div className="max-w-4xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold text-center text-muted-foreground">
              What is Digital Marketing?
            </h2>
            <p className="text-lg leading-relaxed text-gray-600">
              Digital marketing services include virtually everything online for
              the promotional goals of brands, products, or services. All types
              of SEO, content marketing, email campaigns, and social media
              engagement comprise all kinds of paid advertising done across
              digital channels to elevate the brand, generate lead traffic, and
              drive business outcomes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
