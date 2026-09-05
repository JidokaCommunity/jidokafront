"use client";
import React, { FC } from "react";
import { useRouter } from "next/navigation";
import MemberProfileCard from "./MemberProfileCard";
import ModalShell from "./ModalShell";
import { Member } from "../services/api";

interface MemberModalProps {
  member: Member;
}

/**
 * MemberModal Component
 * 
 * Displays a member's profile inside a modal shell.
 * It provides a way to navigate back when the modal is closed.
 * 
 * @param member - The member data object to display.
 */
const MemberModal: FC<MemberModalProps> = ({ member }) => {
  const router = useRouter();

  return (
    <ModalShell onClose={() => router.back()}>
      <MemberProfileCard member={member} />
    </ModalShell>
  );
};

export default MemberModal;
