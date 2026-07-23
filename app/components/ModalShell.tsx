"use client";
import React, { FC, PropsWithChildren, useEffect } from "react";

interface ModalShellProps extends PropsWithChildren {
  onClose: () => void;
}

const ModalShell: FC<ModalShellProps> = ({ onClose, children }) => {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Member Profile"
      data-testid="profile-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div className="relative w-full max-w-sm" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          data-testid="profile-modal-close"
          className="absolute -top-3 -right-3 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-md text-gray-700 hover:bg-gray-100"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
};

export default ModalShell;
