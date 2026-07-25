"use client";
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Member } from "../services/api";
import { mockMembers } from "../services/members";
import { getMemberSlug } from "../services/memberSlug";

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
  const router = useRouter();
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
    <main className="mx-auto max-w-5xl p-8">
      <Link href="/" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700">
        ← Back to home
      </Link>

      <h1 className="mt-3 text-4xl font-jidoka-newsreader font-bold text-gray-900">Members</h1>
      <p className="mt-1 text-gray-500">Members building, learning, and growing together at Jidoka.</p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => {
          const href = `/members/${getMemberSlug(member)}`;
          return (
            <div
              key={member.id}
              data-testid="member-profile-card"
              role="link"
              tabIndex={0}
              onClick={() => router.push(href)}
              onKeyDown={(event) => {
                if (event.key === "Enter") router.push(href);
              }}
              className="flex min-h-[220px] cursor-pointer flex-col items-center rounded-2xl border bg-white p-6 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <img
                src={member.avatar}
                alt={member.name}
                className="h-16 w-16 rounded-full border-2 border-slate-200 object-cover shadow-sm"
              />

              <span className="mt-3 rounded-full bg-[#1F5D6B] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                {member.role}
              </span>

              <p className="mt-2 text-[15px] font-bold text-gray-900">{member.name}</p>
              {member.specialty && <p className="mt-0.5 text-xs text-gray-500">{member.specialty}</p>}

              <div className="mt-auto flex flex-wrap justify-center gap-2 border-t border-gray-100 pt-4">
                {member.githubUrl && (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={`View ${member.name}'s GitHub profile`}
                    className="flex items-center gap-1.5 rounded-full border border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    <FaGithub size={14} />
                    GitHub
                  </a>
                )}
                <a
                  href={member.linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  aria-label={`View ${member.name}'s LinkedIn profile`}
                  className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <FaLinkedin size={14} />
                  LinkedIn
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Members;
