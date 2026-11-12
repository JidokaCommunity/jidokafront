"use client";
import React, { FC, useEffect, useRef, useState } from "react";
import { getFallbackAvatarUrl } from "../services/members";

interface MemberAvatarProps {
  src?: string;
  name: string;
  className?: string;
  width?: number;
  height?: number;
}

/**
 * MemberAvatar Component
 *
 * Renders a member's avatar image and automatically falls back to
 * a generated initials avatar (ui-avatars) if the image URL is missing
 * or fails to load (including pre-hydration SSR errors).
 */
const MemberAvatar: FC<MemberAvatarProps> = ({
  src,
  name,
  className,
  width,
  height,
}) => {
  const fallbackUrl = getFallbackAvatarUrl(name);
  const initialSrc = src?.trim() ? src : fallbackUrl;
  const [imgSrc, setImgSrc] = useState<string>(initialSrc);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const nextSrc = src?.trim() ? src : fallbackUrl;
    setImgSrc(nextSrc);
  }, [src, fallbackUrl]);

  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0 && imgSrc !== fallbackUrl) {
      setImgSrc(fallbackUrl);
    }
  }, [imgSrc, fallbackUrl]);

  return (
    <img
      ref={imgRef}
      src={imgSrc}
      alt={name}
      width={width}
      height={height}
      onError={() => {
        if (imgSrc !== fallbackUrl) {
          setImgSrc(fallbackUrl);
        }
      }}
      className={className}
    />
  );
};

export default MemberAvatar;

