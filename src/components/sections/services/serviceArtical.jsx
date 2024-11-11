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
              <ul className="pt-7.5 flex flex-col gap-[15px]">
                {data?.content?.servicesArticle?.list?.items?.map(
                  ({ id, text }) => {
                    return (
                      <li className="flex items-center gap-2" key={id}>
                        <Image
                          src={'/images/shapes/check-icon-blue.svg'}
                          width={20}
                          height={20}
                          alt="check-icon"
                        />
                        <span>{text}</span>
                      </li>
                    );
                  }
                )}
              </ul>
              <div className="pt-7.5"></div>
            </div>
            {/* list end  */}

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
