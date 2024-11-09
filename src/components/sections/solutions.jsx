import React from 'react';
import { Button } from '../ui/button';
import Title from '../ui/title';
import SlideUp from '../animations/slideUp';
import Image from 'next/image';

const leaders = [
  {
    id: 1,
    name: 'Jay Gulati',
    role: 'Director',
    experience: 'Exp: 13 Years in Digital Marketing',
    image: 'images/team/jay-gulati.png',
  },
  {
    id: 2,
    name: 'Akshay Gupta',
    role: 'Business Head & Partner',
    experience: 'Exp: 12 years in Digital Marketing',
    image: 'images/team/akshay-gupta.png',
  },
  {
    id: 3,
    name: 'Anurag Gupta',
    role: 'Business Head & Partner',
    experience: 'Exp: 8 years in Digital Marketing',
    image: 'images/team/anurag-gupta.png',
  },
];

const Solutions = () => {
  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <div>
          <SlideUp>
            <div className="text-center">
              <Button variant="secondary">Our Leadership</Button>
              <Title size={'5xl'} className="pt-6">
                Meet Our Leaders
              </Title>
              <p className="font-semibold text-muted-foreground pt-7.5 max-w-[638px] mx-auto">
                Our experienced leadership team brings decades of digital
                marketing expertise to drive your success
              </p>
            </div>
          </SlideUp>

          <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2 lg:grid-cols-3">
            {leaders.map(leader => (
              <LeaderCard key={leader.id} {...leader} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const LeaderCard = ({ name, role, experience, image }) => {
  return (
    <SlideUp>
      <div className="text-center group">
        <div className="relative w-[280px] h-[280px] mx-auto mb-6 rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-yellow-400 rounded-full" />
          <Image
            src={image}
            alt={name}
            width={280}
            height={280}
            className="relative z-10 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="mb-2 text-2xl font-bold text-foreground">{name}</h3>
        <p className="mb-1 text-lg text-muted-foreground">{role}</p>
        <p className="text-sm text-muted-foreground">{experience}</p>
      </div>
    </SlideUp>
  );
};

export default Solutions;
