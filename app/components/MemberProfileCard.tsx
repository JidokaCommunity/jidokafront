import React, { FC } from "react";
import Image from "next/image";

const GithubIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.58.1.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.38.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.67 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.8 1.18 1.83 1.18 3.08 0 4.4-2.69 5.37-5.25 5.66.41.36.78 1.07.78 2.15 0 1.55-.01 2.8-.01 3.18 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
  </svg>
);

const LinkedinIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.28 2.38 4.28 5.47v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
  </svg>
);

const PortfolioIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

interface MemberProfileData {
  name: string;
  role: string;
  specialty: string;
  bio: string;
  avatar: string;
  githubUrl: string;
  linkedinUrl: string;
  portfolioUrl: string;
}

const member: MemberProfileData = {
  name: "Alex Mercer",
  role: "Senpai",
  specialty: "Senior Software Engineer · Especialista en Backend",
  bio: "Apasionado por construir sistemas escalables y mentorear nuevos desarrolladores dentro de la comunidad Jidoka.",
  avatar: "https://ui-avatars.com/api/?name=Alex+Mercer&background=1F5D6B&color=fff&size=200",
  githubUrl: "https://github.com/alexmercer",
  linkedinUrl: "https://linkedin.com/in/alexmercer",
  portfolioUrl: "https://alexmercer.dev",
};

const MemberProfileCard: FC = () => {
  return (
    <div
      data-testid="member-profile-card"
      className="flex flex-col items-center w-full max-w-sm bg-white border rounded-2xl shadow-sm p-8"
    >
      <Image
        src={member.avatar}
        alt={member.name}
        width={96}
        height={96}
        className="w-24 h-24 rounded-full object-cover border-4 border-[#1F5D6B]"
      />

      <span className="mt-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white bg-[#1F5D6B] rounded-full">
        {member.role}
      </span>

      <h1 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h1>
      <p className="text-sm text-gray-600">{member.specialty}</p>

      <p className="mt-4 text-center text-sm leading-relaxed text-gray-700">
        {member.bio}
      </p>

      <div className="flex flex-wrap justify-center gap-2 mt-6">
        <a
          href={member.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver perfil de GitHub de ${member.name}`}
          className="flex items-center gap-2 border border-gray-800 text-gray-800 rounded-full px-4 py-2 text-sm hover:bg-gray-800 hover:text-white transition-colors"
        >
          <GithubIcon />
          GitHub
        </a>

        <a
          href={member.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver perfil de LinkedIn de ${member.name}`}
          className="flex items-center gap-2 bg-blue-600 text-white rounded-full px-4 py-2 text-sm hover:bg-blue-700 transition-colors"
        >
          <LinkedinIcon />
          LinkedIn
        </a>

        <a
          href={member.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Ver portfolio de ${member.name}`}
          className="flex items-center gap-2 text-gray-500 rounded-full px-4 py-2 text-sm hover:bg-gray-100 transition-colors"
        >
          <PortfolioIcon />
          Portfolio
        </a>
      </div>
    </div>
  );
};

export default MemberProfileCard;
