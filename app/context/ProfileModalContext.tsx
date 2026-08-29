"use client";
import React, { FC, PropsWithChildren, createContext, useCallback, useContext, useState } from "react";

interface ProfileModalContextValue {
  isOpen: boolean;
  openProfileModal: () => void;
  closeProfileModal: () => void;
}

const ProfileModalContext = createContext<ProfileModalContextValue | undefined>(undefined);

/**
 * Provides the ProfileModal context to its children, managing the modal's
 * open/closed state.
 */
export const ProfileModalProvider: FC<PropsWithChildren> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openProfileModal = useCallback(() => setIsOpen(true), []);
  const closeProfileModal = useCallback(() => setIsOpen(false), []);

  return (
    <ProfileModalContext.Provider value={{ isOpen, openProfileModal, closeProfileModal }}>
      {children}
    </ProfileModalContext.Provider>
  );
};

/**
 * Custom hook to consume the ProfileModalContext.
 * 
 * @returns The profile modal context value.
 */
export function useProfileModal(): ProfileModalContextValue {
  const context = useContext(ProfileModalContext);
  if (!context) {
    throw new Error("useProfileModal must be used within a ProfileModalProvider");
  }
  return context;
}
