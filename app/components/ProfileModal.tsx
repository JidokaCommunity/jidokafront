"use client";
import React, { FC, useEffect } from "react";
import MemberProfileCard from "./MemberProfileCard";
import { useProfileModal } from "../context/ProfileModalContext";

const ProfileModal: FC = () => {
  const { isOpen, closeProfileModal } = useProfileModal();

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeProfileModal();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeProfileModal]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Member Profile"
      data-testid="profile-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={closeProfileModal}
    >
      <div className="relative w-full max-w-sm" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={closeProfileModal}
          aria-label="Cerrar"
          data-testid="profile-modal-close"
          className="absolute -top-3 -right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100"
        >
          ✕
        </button>
        <MemberProfileCard />
      </div>
    </div>
  );
};

export default ProfileModal;
