import React, { FC } from "react";
import MemberProfileCard from "./MemberProfileCard";
import { currentUserMock } from "../services/currentUser";

/**
 * MemberProfile Component
 * 
 * Renders the profile card for the currently authenticated user.
 */
const MemberProfile: FC = () => {
  return (
    <main className="flex justify-center p-8">
      <MemberProfileCard member={currentUserMock} />
    </main>
  );
};

export default MemberProfile;
