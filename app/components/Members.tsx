import React, { FC } from "react";
import Image from "next/image";

const members = [
  {
    image: '/images/tomato.jpg',
    title: 'Tomato',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor conva...'
  },
  {
    image: '/images/ginger.jpg',
    title: 'Organic ginger',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor conva...'
  },
  {
    image: '/images/tomato.jpg',
    title: 'Tomato',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor conva...'
  },
  {
    image: '/images/ginger.jpg',
    title: 'Organic ginger',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit porttitor conva...'
  },
];

const Members: FC = () => {
  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-jidoka-newsreader">Members</h1>
        
        <div className="flex space-x-2">
          <button className="border px-4 py-2 rounded-full bg-[#1F5D6B] text-white">Default</button>
          <button className="border px-4 py-2 rounded-full">A-Z</button>
          <button className="border px-4 py-2 rounded-full">List view</button>
        </div>
      </div>

      <div className="border-b border-gray-300 mb-6"></div>

      <div className="space-y-4">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex p-4 bg-gray-100 rounded-lg items-center"
          >
            <Image
              src={member.image}
              alt={member.title}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{member.title}</h2>
              <p>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
