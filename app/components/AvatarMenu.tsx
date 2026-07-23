"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
// import { useProfileModal } from "../context/ProfileModalContext"; // reactivar cuando exista auth real

const UserIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const SettingsIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const FolderIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h5l2 3h9a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" />
  </svg>
);

const LogoutIcon: FC = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

interface MenuLinkItem {
  label: string;
  href: string;
  icon: FC;
}

const linkMenuItems: MenuLinkItem[] = [
  { label: "Configuración", href: "/settings", icon: SettingsIcon },
  { label: "Proyectos", href: "/projects", icon: FolderIcon },
];

const AvatarMenu: FC = () => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  // const { openProfileModal } = useProfileModal(); // reactivar cuando exista auth real

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={containerRef} data-testid="avatar-menu-container">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Menú de usuario"
        data-testid="avatar-button"
        className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#1F5D6B] focus:outline-none"
      >
        <Image
          src="https://ui-avatars.com/api/?name=User&background=1F5D6B&color=fff"
          alt="Avatar"
          width={40}
          height={40}
          className="w-full h-full object-cover"
        />
      </button>

      {open && (
        <div
          role="menu"
          data-testid="avatar-menu"
          className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg py-1 z-50"
        >
          {/* "Mi Perfil" comentado hasta que exista autenticación real (no hay usuario logueado todavía) */}
          {/* <button
            type="button"
            role="menuitem"
            data-testid="avatar-menu-my-profile"
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => {
              setOpen(false);
              openProfileModal();
            }}
          >
            <UserIcon />
            Mi Perfil
          </button> */}
          {linkMenuItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={label}
              href={href}
              role="menuitem"
              className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setOpen(false)}
            >
              <Icon />
              {label}
            </Link>
          ))}
          <button
            type="button"
            role="menuitem"
            className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
            onClick={() => setOpen(false)}
          >
            <LogoutIcon />
            Cerrar Sesión
          </button>
        </div>
      )}
    </div>
  );
};

export default AvatarMenu;
