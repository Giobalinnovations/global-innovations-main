import ContactForm from '@/components/sections/contactForm';
import PageTitle from '@/components/sections/pageTitle';
import { Search, Share2, MousePointer2, PenTool, Globe } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Best Digital Marketing Agency in Delhi | SEO, SMM, PPC Services',
  description:
    'Global Innovations is one of the foremost digital marketing agencies in Delhi that has customized SEO, SMM, PPC, and web development services with the aim to elevate the online presence of your product, bring organic traffic and maximize the return on investment. Call us for assured results!',
  alternates: {
    canonical: '/leading-digital-marketing-agency-in-delhi',
  },
};

const LeadingDigitalMarketingAgencyInDelhi = () => {
  const services = [
    {
      title: 'SEO',
      description:
        'As a digital marketing firm in Delhi, we offer highly complex SEO techniques that will improve the ranking of your websites on search engines like Google. It will therefore prominently increase the views of your company. Our SEO services include off-page and on-page optimization.',
      icon: Search,
    },
    {
      title: 'SMM',
      description:
        'We connect your target audience and create a strong online presence with our social media marketing packages. We will run campaigns for your brand on Facebook, Instagram, and LinkedIn.',
      icon: Share2,
    },
    {
      title: 'PPC Advertising',
      description:
        'Optimize return on investment using focused PPC campaigns. Paying for low-cost, high-intent paid advertising for the right audience at the right time.',
      icon: MousePointer2,
    },
    {
      title: 'Content Marketing',
      description:
        'Quality content is what success on the Internet boils down to. Our content development service makes sure your website, blog, or social media post are search engine optimized, interesting and relevant to your business.',
      icon: PenTool,
    },
    {
      title: 'Web Development',
      description:
        'Responsive websites become not only user-friendly but optimized also on performance and search engine rank. Seamless web design allows users to stay longer while encouraging more visitors to become converted leads or customers.',
      icon: Globe,
    },
  ];

  const workProcess = [
    {
      title: 'Initial Consultation',
      description:
        'We begin by understanding your business, goals, target audience, and current digital presence. This will help us craft a strategy that aligns with your objectives.',
    },
    {
      title: 'Comprehensive Strategy Development',
      description:
        'Delhi based digital marketing agency, our agency puts out a customized approach developed by comprehensive research and analysis which will include competitor analysis and also audience insights.',
    },
    {
      title: 'Execution of the campaign',
      description:
        'After we get a plan, we start the execution on multi-platforms focusing on areas where results best come from. Be it SEO or PPC, the use is made of the latest tools and techniques.',
    },
    {
      title: 'Monitoring and Optimization',
      description:
        'Digital marketing is a process which is continuous, and we are always tracking your campaigns, ensuring necessary adjustments and seeing that your strategy goes ahead with the change in market.',
    },
  ];

  const businessDevelopment = [
    {
      title: 'Increase Website Traffic',
      description:
        'We achieve organic traffic to your website with proven SEO strategies and effective content marketing.',
    },
    {
      title: 'Quality Leads',
      description:
        'We focus on targeting high-intent users, and therefore ensure you generate leads that are more likely to convert into paying customers.',
    },
    {
      title: 'Brand Visibility',
      description:
        'Make your brand more visible in more places. Making it convenient for the prospects to locate and find your products and services,',
    },
    {
      title: 'Maximize the ROI',
      description:
        'We aim at maximizing the ROI and ensuring every dollar spent on advertisement gives valuable and increased returns.',
    },
  ];

  const benefits = [
    {
      title: 'Proven Expertise',
      description:
        'Our Delhi digital marketing experts team has years of experience and expertise in delivering results across various industries.',
    },
    {
      title: 'Tailored Solutions',
      description:
        'We believe that every business is unique. We, therefore, have bespoke solutions tailored to the exact requirements of our customers to gain marketing success.',
    },
    {
      title: 'Service Lines',
      description:
        'From SEO to social media marketing, and PPC to each and everything related to online marketing, Delhi is equipped with an array of digital marketing services.',
    },
    {
      title: 'Inexpensive Packages',
      description:
        'Quality, non-compromised affordable digital marketing services, a mission to make professional digital marketing accessible to businesses of all sizes.',
    },
    {
      title: 'Proven Track Record',
      description:
        'We have helped various businesses across different industries to grow wonderfully online and thus rank us among the most trusted marketing agencies in Delhi NCR. Time to start your business with the best digital marketing agency in Delhi',
    },
  ];

  return (
    <main>
      <PageTitle
        pageName={'Leading Digital Marketing Agency in Delhi'}
        breadcrumbLink={'services'}
        breadcrumbCurrent={'Leading Digital Marketing Agency in Delhi'}
      />
      <div className="pb-9">
        <div className="max-w-[1350px] mx-auto px-[15px]">
          <p>
            Global Innovations has earned the reputation of the best digital
            marketing company in Delhi. We have proven expertise in providing
            tailored digital marketing services in Delhi that helps your
            business grow and help achieve their marketing goals with
            improvement in the online visibility. We have become one of the
            leading digital marketing agencies in Delhi NCR, with our proven
            track record of success. We offer extensive solutions that are
            results driven for business dimensions.
          </p>

          {/* Services Section */}
          <section className="py-16 bg-gray-50">
            <div>
              <h2 className="text-3xl font-bold text-center text-muted-foreground">
                Our End to End Digital Marketing Services in Delhi
              </h2>
              <p className="text-center mb-12 mt-2 max-w-5xl mx-auto text-base">
                Global Innovations provides a wide spectrum of digital marketing
                services that can drive organic traffic and maximize
                conversions. The services we offer include
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service, index) => {
                  const IconComponent = service.icon;
                  return (
                    <div
                      key={index}
                      className="p-6 transition-shadow bg-white rounded-lg shadow-lg hover:shadow-xl"
                    >
                      <div className="w-12 h-12 mb-4 text-ddd">
                        <IconComponent size={48} className="text-primary" />
                      </div>
                      <h3 className="mb-3 text-xl font-semibold">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">{service.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Work Process Section */}
          <section className="py-16">
            <div>
              <h2 className="text-3xl font-bold text-center text-muted-foreground">
                How We Work
              </h2>
              <p className="text-center mb-12 mt-2 max-w-5xl mx-auto text-base">
                As the best digital marketing agency in Delhi, we do things
                systematically and according to data. We work upon transparency,
                collaboration, and results. Here is how we work
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                {workProcess.map((step, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-2xl font-bold text-white rounded-full bg-primary">
                      {index + 1}
                    </div>
                    <h3 className="mb-3 text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Business Development Section */}
          <section className="py-16 bg-gray-50">
            <div>
              <h2 className="text-3xl font-bold text-center text-muted-foreground">
                How Do We Help In Business Development?
              </h2>
              <p className="text-center mb-12 mt-2 max-w-5xl mx-auto text-base">
                Global Innovations believes in the digital world, but it also
                needs creativity and expertise along with that. The services of
                internet marketing in Delhi are provided keeping in view the
                fact that
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {businessDevelopment.map((item, index) => (
                  <div
                    key={index}
                    className="p-8 bg-white rounded-lg shadow-lg"
                  >
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      {item.title}
                    </h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-16">
            <div>
              <h2 className="text-3xl font-bold text-center text-muted-foreground">
                Why Global Innovations for Digital Marketing Services in Delhi?
              </h2>
              <p className="text-center mb-12 mt-2 max-w-5xl mx-auto text-base">
                One of the top 10 digital marketing agencies in Delhi, Global
                Innovations offers you many benefits
              </p>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="p-8 rounded-lg bg-gray-50">
                    <h3 className="mb-4 text-xl font-semibold text-primary">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-16 text-white bg-blue-900">
            <div>
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="mb-6 text-3xl font-bold">
                  Ready to Take Your Online Presence to the Next Level?
                </h2>
                <p className="mb-8 text-lg">
                  Call Global Innovations, the best digital marketing company in
                  Delhi, today! Let our team of experts create a tailored
                  digital marketing strategy that ensures measurable success for
                  you
                </p>
                <Link
                  href={'/contact-us'}
                  className="px-8 py-3 font-semibold transition-colors bg-white rounded-full text-primary hover:bg-blue-50"
                >
                  Contact Us Now
                </Link>
              </div>
            </div>
          </section>

          {/* Contact Form Section */}
          <ContactForm
            color={'text-white'}
            inputColor={
              'bg-transparent border-white border text-white placeholder:text-white'
            }
          />
        </div>
      </div>
    </main>
  );
};

export default LeadingDigitalMarketingAgencyInDelhi;
