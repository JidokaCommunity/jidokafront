"use client";
import React, { FC } from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Member } from "../services/api";

interface MemberProfileCardProps {
  member: Member;
}

/**
 * MemberProfileCard Component
 * 
 * Displays a summarized card of a member, including their avatar, role, name,
 * specialty, and social links.
 * 
 * @param member - The member data object to display.
 */
const MemberProfileCard: FC<MemberProfileCardProps> = ({ member }) => {
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
        className="w-24 h-24 rounded-full object-cover border-2 border-slate-200 shadow-sm"
      />

      <span className="mt-3 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white bg-[#1F5D6B] rounded-full">
        {member.role}
      </span>

      <h1 className="mt-4 text-xl font-bold text-gray-900">{member.name}</h1>
      {member.specialty && <p className="text-sm text-gray-600">{member.specialty}</p>}

      <div className="flex flex-wrap justify-center gap-2 mt-6 pt-4 border-t border-gray-100 w-full">
        {member.githubUrl && (
          <a
            href={member.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            aria-label={`View ${member.name}'s GitHub profile`}
            className="flex items-center gap-1.5 border border-gray-800 text-gray-800 rounded-full px-4 py-2 text-sm font-medium hover:bg-gray-800 hover:text-white transition-colors"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        )}

        <a
          href={member.linkedinURL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(event) => event.stopPropagation()}
          aria-label={`View ${member.name}'s LinkedIn profile`}
          className="flex items-center gap-1.5 bg-blue-600 text-white rounded-full px-4 py-2 text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          <FaLinkedin size={16} />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default MemberProfileCard;
