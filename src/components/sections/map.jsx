'use client';
import React from 'react';
import { Button } from '../ui/button';
import Title from '../ui/title';
import Highlight from '../ui/highlight';
import team_icon from '../../../public/images/shapes/dynamic-team-icon.png';
import skills_icon from '../../../public/images/shapes/skills-icon.png';
import content_icon from '../../../public/images/shapes/content-writing-icon.png';
import Image from 'next/image';
import SlideUp from '../animations/slideUp';
import SocialIcons from '../ui/socialIcons';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const ContactMap = () => {
  const icon = L.icon({
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    iconUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.6/dist/images/marker-shadow.png',
  });

  return (
    <section className="lg:py-15 py-9">
      <div className="container">
        <div>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Contact Us</Button>
            <Title size={'5xl'} className="max-w-[832px] pt-6 text-center">
              {' '}
              Discover <Highlight>Our Location</Highlight>and Plan Your Visit
            </Title>
          </div>
        </div>
        <div>
          <div className="lg:pt-12.5 pt-7.5 relative z-[1] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[calc(100%-160px)] after:bg-gray after:rounded-[30px] after:z-[-1]">
            <div className="lg:pt-[46px] pt-4 flex lg:flex-row flex-col justify-between max-w-[1320px] mx-auto pb-12.5 px-3 lg:px-0">
              <Card
                icon={team_icon}
                title={'Address'}
                isIcon={false}
                desc={
                  'Plot no 136, 3rd floor, Rider House Sec 44, Gurugram 122003'
                }
              />
              <Card
                icon={skills_icon}
                title={'Contact'}
                isIcon={false}
                desc={`
                             <p> <span class='font-semibold'>Email:</span> <a href={"mailto:info@globalinnovations.co.in"} class='relative hover-underline after:h-[1px] after:bg-muted'> info@globalinnovations.co.in</a> </p>
                             <p> <span class='font-semibold'>Call us:</span> <a href={"tal:+919911113576"} class='relative hover-underline after:h-[1px] after:bg-muted'> +91-9911113576</Link> </p>
                             `}
              />
              <Card
                icon={content_icon}
                title={'Social'}
                desc={<SocialIcons prantBorder={'text-2xl mt-[22px]'} />}
                isSocalIcon={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;

// --------------- Card
const Card = ({ id, icon, title, desc, isSocalIcon }) => {
  return (
    <SlideUp>
      <div className="flex items-center gap-7 pt-7 lg:pt-0">
        <div className="xl:min-w-[75px] min-w-16 max-w-16 xl:min-h-[75px] min-h-16 max-h-16 p-3 xl:p-0 shadow-[0px_4px_20px_0px_rgba(0,31,63,0.1019607843)] bg-white rounded-lg flex justify-center items-center">
          <Image src={icon} alt="icon" />
        </div>
        <div className="lg:max-w-[450px]">
          <Title size={'2xl'}>{title}</Title>
          {isSocalIcon ? (
            <div>{desc}</div>
          ) : (
            <p
              className="max-w-[311px] "
              dangerouslySetInnerHTML={{ __html: desc }}
            />
          )}
        </div>
      </div>
    </SlideUp>
  );
};
