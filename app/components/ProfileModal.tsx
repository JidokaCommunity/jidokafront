"use client";
import React, { FC } from "react";
import MemberProfileCard from "./MemberProfileCard";
import ModalShell from "./ModalShell";
import { useProfileModal } from "../context/ProfileModalContext";
import { currentUserMock } from "../services/currentUser";

const ProfileModal: FC = () => {
  const { isOpen, closeProfileModal } = useProfileModal();

  if (!isOpen) return null;

  return (
    <ModalShell onClose={closeProfileModal}>
      <MemberProfileCard member={currentUserMock} />
    </ModalShell>
  );
};

export default ProfileModal;
