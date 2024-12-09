import Image from 'next/image';
import React from 'react';
import Title from '@/components/ui/title';
import SlideUp from '@/components/animations/slideUp';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SideBarServices from '../sideBarServices';
import {
  LayoutGrid,
  LineChart,
  Clock,
  RefreshCw,
  CircleDot,
  Share2,
  Search,
  FileText,
  Mail,
  MapPin,
  MousePointer2,
  Users,
} from 'lucide-react';

const ServiceArtical = ({ data, slug }) => {
  return (
    <div className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div className="grid lg:grid-cols-[33%_66%] grid-cols-1 gap-12.5">
          <div>
            <SideBarServices slug={slug} />
          </div>
          <article>
            <Image
              src={'/images/resource/sergices-details1-1.jpg'}
              width={872}
              height={472}
              alt="service-bg"
              className="rounded-[30px]"
            />
            <div className="pt-7.5">
              <Title size={'5xl'}>
                {data?.content?.servicesArticle?.title}
              </Title>
              <div className="pt-7.5">
                <p>{data?.content?.servicesArticle?.shortDescription}</p>
              </div>
            </div>

            {/* list */}
            <div className="pt-7.5">
              <Title size={'5xl'}>
                {data?.content?.servicesArticle?.list?.title}
              </Title>
              <div className="pt-7.5">
                <p>{data?.content?.servicesArticle?.list?.description}</p>
              </div>
              <div className="pt-7.5 grid md:grid-cols-2 grid-cols-1 gap-7.5">
                {data?.content?.servicesArticle?.list?.items?.map(
                  ({ id, text, title, icon: Icon }) => {
                    return (
                      <div
                        key={id}
                        className="bg-gray rounded-[15px] p-6 hover:shadow-lg transition-all duration-300"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="bg-primary/10 w-14 h-14 rounded-[10px] flex justify-center items-center">
                            {Icon && <Icon className="w-6 h-6 text-primary" />}
                          </div>
                          <div>
                            <h4 className="mb-2 text-lg font-bold text-primary-foreground">
                              {title}
                            </h4>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {text}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div className="pt-7.5"></div>
            </div>
            {/* list end  */}

            {/* list2 - Digital Marketing Tips */}
            <div className="pt-15">
              <Title size={'5xl'}>
                {data?.content?.servicesArticle?.list2?.title}
              </Title>

              <div className="pt-7.5 relative">
                {/* Vertical dotted line - visible on all screens */}
                <div className="absolute left-[17px] top-[45px] bottom-8 border-l-2 border-dashed border-primary/20" />

                <div className="flex flex-col gap-10">
                  {data?.content?.servicesArticle?.list2?.items?.map(
                    (item, index) => (
                      <div key={index} className="group">
                        {/* Desktop layout */}
                        <div className="items-start hidden gap-6 md:flex">
                          {/* Circle container with icon */}
                          <div className="relative shrink-0">
                            <div
                              className="w-[35px] h-[35px] rounded-full bg-white border-2
                            border-primary flex items-center justify-center z-10 relative
                            group-hover:scale-105 transition-transform"
                            >
                              {item.icon && (
                                <item.icon className="w-5 h-5 text-primary" />
                              )}
                            </div>
                          </div>

                          {/* Content - Desktop */}
                          <div
                            className="flex-1 bg-gray rounded-[15px] p-6 hover:shadow-lg
                          transition-all duration-300"
                          >
                            <h3 className="mb-3 text-xl font-bold text-primary-foreground">
                              {item.title}
                            </h3>
                            <p className="leading-relaxed text-muted-foreground">
                              {item.text}
                            </p>
                          </div>
                        </div>

                        {/* Mobile layout */}
                        <div className="flex md:hidden">
                          <div className="relative shrink-0">
                            <div
                              className="w-[35px] h-[35px] rounded-full bg-white border-2
                            border-primary flex items-center justify-center z-10 relative
                            shadow-sm"
                            >
                              {item.icon && (
                                <item.icon className="w-5 h-5 text-primary" />
                              )}
                            </div>
                          </div>

                          {/* Content - Mobile */}
                          <div
                            className="flex-1 bg-gray rounded-[15px] p-5 hover:shadow-lg
                          transition-all duration-300 ml-6"
                          >
                            <h3
                              className="mb-2.5 text-lg font-bold text-primary-foreground
                            leading-tight"
                            >
                              {item.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-muted-foreground">
                              {item.text}
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
            {/* list2 end */}
            {data?.content?.servicesArticle?.faq && (
              <div className="pt-12.5">
                <Title size={'4xl'}>
                  Your Questions, Our Proficiency. Everything You need to Know.
                </Title>

                <div className="pt-15">
                  <Accordion type="single" defaultValue="one" collapsible>
                    {data?.content?.servicesArticle?.faq?.map(
                      ({ ans, id, question }) => {
                        return (
                          <SlideUp key={id} id={id}>
                            <AccordionItem
                              value={id}
                              className="mb-2.5 bg-gray rounded-[15px] border-none"
                            >
                              <AccordionTrigger className="font-semibold text-primary-foreground border-none lg:px-7.5 px-4 lg:py-7.5 py-4 text-left">
                                {question}
                              </AccordionTrigger>
                              <AccordionContent className="lg:px-7.5 px-4 text-muted-foreground">
                                {ans}
                              </AccordionContent>
                            </AccordionItem>
                          </SlideUp>
                        );
                      }
                    )}
                  </Accordion>
                </div>
              </div>
            )}
          </article>
        </div>
      </div>
    </div>
  );
};

export default ServiceArtical;

const Card = ({ icon, title, desc }) => {
  return (
    <div className="grid grid-cols-[83px_auto] items-start gap-7.5">
      <div className="bg-primary w-[83px] h-[83px] rounded-[15px] flex justify-center items-center text-white">
        {icon}
      </div>
      <div>
        <h5 className="pb-2 text-xl font-extrabold text-muted-foreground">
          {title}
        </h5>
        <p>{desc}</p>
      </div>
    </div>
  );
};
