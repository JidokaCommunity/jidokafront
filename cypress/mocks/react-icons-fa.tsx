import React from "react";

interface StubIconProps {
  size?: number;
}

export const FaGithub: React.FC<StubIconProps> = ({ size = 16 }) => (
  <svg data-icon="github-stub" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" />
);

export const FaLinkedin: React.FC<StubIconProps> = ({ size = 16 }) => (
  <svg data-icon="linkedin-stub" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" />
);
