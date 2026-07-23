"use client";
import React, { FC } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Member } from "../services/api";
import { mockMembers, sortMembers } from "../services/members";
import { getMemberSlug } from "../services/memberSlug";

const GithubIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon: FC = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

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
        ← Volver al inicio
      </Link>

      <h1 className="mt-3 text-4xl font-jidoka-newsreader font-bold text-gray-900">Members</h1>
      <p className="mt-1 text-gray-500">Miembros construyendo, aprendiendo y creciendo juntos en Jidoka.</p>

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
                className="h-16 w-16 rounded-full border-[3px] border-[#1F5D6B] object-cover"
              />

              <span className="mt-3 rounded-full bg-[#1F5D6B] px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                {member.role}
              </span>

              <p className="mt-2 text-[15px] font-bold text-gray-900">{member.name}</p>
              {member.specialty && <p className="mt-0.5 text-xs text-gray-500">{member.specialty}</p>}

              <div className="mt-auto flex flex-wrap justify-center gap-2 pt-4">
                {member.githubUrl && (
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    aria-label={`Ver perfil de GitHub de ${member.name}`}
                    className="flex items-center gap-1.5 rounded-full border border-gray-800 px-3 py-1.5 text-xs font-medium text-gray-800 transition-colors hover:bg-gray-800 hover:text-white"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                )}
                <a
                  href={member.linkedinURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(event) => event.stopPropagation()}
                  aria-label={`Ver perfil de LinkedIn de ${member.name}`}
                  className="flex items-center gap-1.5 rounded-full bg-blue-600 px-3 py-1.5 text-xs font-medium text-white transition-colors hover:bg-blue-700"
                >
                  <LinkedinIcon />
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
