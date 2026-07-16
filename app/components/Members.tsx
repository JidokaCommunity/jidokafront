"use client";
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { Member } from "../services/api";

const mockMembers: Member[] = [
  {
    id: "1",
    name: "Juan Maldonado",
    role: "CEO, Senpai",
    linkedinURL: "mailto:juan.carlos.maldonado.beltran@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Juan+Maldonado&background=random",
  },
  {
    id: "2",
    name: "Karine Florez",
    role: "CEO, Senpai",
    linkedinURL: "mailto:karineflo@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Karine+Florez&background=random",
  },
  {
    id: "3",
    name: "Ashmed Diaz",
    role: "Senpai, Desarrollador",
    linkedinURL: "mailto:ashmeddiaz5@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Ashmed+Diaz&background=random",
  },
  {
    id: "4",
    name: "Daniel Cardenas",
    role: "Senpai, Desarrollador",
    linkedinURL: "mailto:danielcardenasparra@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Cardenas&background=random",
  },
  {
    id: "5",
    name: "Alfonso",
    role: "Desarrollador",
    linkedinURL: "mailto:alfonsodanielsanchezlemus@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Alfonso&background=random",
  },
  {
    id: "6",
    name: "Clari Suarez",
    role: "Desarrollador",
    linkedinURL: "mailto:Clarisuarez@yahoo.com",
    avatar: "https://ui-avatars.com/api/?name=Clari+Suarez&background=random",
  },
  {
    id: "7",
    name: "Fabian",
    role: "Desarrollador",
    linkedinURL: "mailto:feng.suarezfj@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Fabian&background=random",
  },
  {
    id: "8",
    name: "Jhonatan Hurtado",
    role: "Desarrollador",
    linkedinURL: "mailto:jonafabian12@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Jhonatan+Hurtado&background=random",
  },
  {
    id: "9",
    name: "Ruben Moreno",
    role: "Desarrollador",
    linkedinURL: "mailto:rmxtronic@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Ruben+Moreno&background=random",
  },
  {
    id: "10",
    name: "Stiven Valencia",
    role: "Desarrollador",
    linkedinURL: "mailto:s.valenciar0@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Stiven+Valencia&background=random",
  },
];

const Members: FC = () => {
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulando el llamado a la API real de Jidoka
    async function loadMembers() {
      try {
        // Pequeño timeout para simular la carga asincrona de una red
        await new Promise(resolve => setTimeout(resolve, 500));
        setMembers(mockMembers);
      } catch (error) {
        setError("Failed to load members");
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

  return (
    <main className="p-8">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-5xl font-jidoka-newsreader">Members</h1>
      </div>

      <div className="border-b border-gray-300 mb-6"></div>

      <div className="space-y-4">
        {members.map((member) => (
          <div
            key={member.id}
            className="flex p-4 bg-gray-100 rounded-lg items-center"
          >
            <img
              src={member.avatar}
              className="rounded-full w-24 h-24 object-cover"
              alt={member.name}
            />
            <div className="ml-4">
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600 font-medium">{member.role}</p>
              <a
                href={member.linkedinURL}
                className="text-blue-500 hover:underline text-sm mt-1 inline-block"
              >
                Contacto (Email)
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
