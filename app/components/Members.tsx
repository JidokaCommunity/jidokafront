"use client";
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { Member } from "../services/api";

const LinkedinIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const mockMembers: Member[] = [
  {
    id: "1",
    name: "Juan Carlos Maldonado Beltran",
    role: "FOUNDER",
    linkedinURL: "https://www.linkedin.com/in/juan-carlos-maldonado-beltran-a87a5054/",
    avatar: "https://ui-avatars.com/api/?name=Juan+Carlos+Maldonado+Beltran&background=random",
  },
  {
    id: "2",
    name: "Luz Karine Florez daza",
    role: "FOUNDER",
    linkedinURL: "https://www.linkedin.com/in/karineflorez/",
    avatar: "https://ui-avatars.com/api/?name=Luz+Karine+Florez+daza&background=random",
  },
  {
    id: "3",
    name: "Daniel Cardenas Parra",
    role: "Senpai",
    linkedinURL: "https://www.linkedin.com/in/daniel-cardenas-88545a181/?locale=es",
    avatar: "https://ui-avatars.com/api/?name=Daniel+Cardenas+Parra&background=random",
  },
  {
    id: "4",
    name: "Ruben Moreno Guerra",
    role: "Trainee",
    linkedinURL: "https://www.linkedin.com/in/ruben-dario-moreno-guerra-720b8b103",
    avatar: "https://ui-avatars.com/api/?name=Ruben+Moreno+Guerra&background=random",
  },
  {
    id: "5",
    name: "Alfonso Daniel Sanchez Lemus",
    role: "TRAINEE",
    linkedinURL: "https://www.linkedin.com/in/alfonso-daniel-sánchez-lemus-92a24130b",
    avatar: "https://ui-avatars.com/api/?name=Alfonso+Daniel+Sanchez+Lemus&background=random",
  },
  {
    id: "6",
    name: "Clari Suarez",
    role: "Trainee",
    linkedinURL: "mailto:Clarisuarez@yahoo.com",
    avatar: "https://ui-avatars.com/api/?name=Clari+Suarez&background=random",
  },
  {
    id: "7",
    name: "Fabian",
    role: "Trainee",
    linkedinURL: "mailto:feng.suarezfj@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Fabian&background=random",
  },
  {
    id: "8",
    name: "Jhonatan Hurtado",
    role: "Trainee",
    linkedinURL: "mailto:jonafabian12@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Jhonatan+Hurtado&background=random",
  },
  {
    id: "9",
    name: "Ashmed Diaz",
    role: "Senpai",
    linkedinURL: "mailto:ashmeddiaz5@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Ashmed+Diaz&background=random",
  },
  {
    id: "10",
    name: "Stiven Valencia",
    role: "Senpai",
    linkedinURL: "mailto:s.valenciar0@gmail.com",
    avatar: "https://ui-avatars.com/api/?name=Stiven+Valencia&background=random",
  },
];

const roleOrder: Record<string, number> = {
  FOUNDER: 1,
  SENSEI: 2,
  SENPAI: 3,
  TRAINEE: 4
};

const sortMembers = (membersList: Member[]) => {
  return [...membersList].sort((a, b) => {
    const roleA = a.role.toUpperCase();
    const roleB = b.role.toUpperCase();
    
    const weightA = roleOrder[roleA] || 99;
    const weightB = roleOrder[roleB] || 99;

    if (weightA !== weightB) {
      return weightA - weightB;
    }
    
    return a.name.localeCompare(b.name);
  });
};

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
        setMembers(sortMembers(mockMembers));
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
        {members.map((member) => (
          <div
            key={member.id}
            data-testid="member-profile-card"
            className="flex flex-col items-center w-full max-w-sm bg-white border rounded-2xl shadow-sm p-8"
          >
            <img
              src={member.avatar}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-[#1F5D6B]"
            />

            <span className="mt-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white bg-[#1F5D6B] rounded-full text-center">
              {member.role}
            </span>

            <h1 className="mt-4 text-xl font-bold text-gray-900 text-center">{member.name}</h1>

            <div className="flex flex-wrap justify-center gap-2 mt-6">
              <a
                href={member.linkedinURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ver perfil de LinkedIn de ${member.name}`}
                className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-700 transition-colors"
              >
                <LinkedinIcon />
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Members;
