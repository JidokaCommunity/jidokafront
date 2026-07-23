import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "../app/components/Navbar";
import ProfileModal from "../app/components/ProfileModal";
import { ProfileModalProvider } from "../app/context/ProfileModalContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jidoka Portal",
  description: "This the Jidoka main portal for the community",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ProfileModalProvider>
          <Navbar />
          {children}
          {modal}
          <ProfileModal />
        </ProfileModalProvider>
      </body>
    </html>
  );
}
