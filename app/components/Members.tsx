"use client";
import React, { FC } from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { getMembers, Members as mb } from "../services/api";

/* const members = [
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
]; */

const Members: FC = () => {
  const [members, setMembers] = useState<mb[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMembers() {
      try {
        const data = await getMembers();
        setMembers(data);
      } catch (error) {
        setError("Failed to load memebers");
      } finally {
        setLoading(false);
      }
    }
    loadMembers();
  }, [])


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if (!Array.isArray(members)) {
    return <p>Invalid data format</p>;
  }
  console.log(members);


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
            <img src="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" className="rounded-full w-24 h-24 object-cover" alt="" />
            {/* <Image
              src={"https://cdn2.thecatapi.com/images/ebv.jpg"}
              alt={member.name}
              width={100}
              height={100}
              className="rounded-full"
            /> */}
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p>{member.linkedinURL}</p>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
