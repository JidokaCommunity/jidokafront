"use client";
import React, { FC } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import MemberProfileCard from "./MemberProfileCard";
import { mockMembers, sortMembers } from "../services/members";
import { getMemberSlug } from "../services/memberSlug";

const members = sortMembers(mockMembers);

const CommunitySection: FC = () => {
  const router = useRouter();

  return (
    <section className="w-full overflow-hidden bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Meet our community</h2>
        <p className="mt-3 text-lg text-gray-600">Real people, building, learning, and growing together at Jidoka.</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        centeredSlides
        loop
        slidesPerView="auto"
        spaceBetween={32}
        speed={600}
        autoplay={{ delay: 3500, pauseOnMouseEnter: true, disableOnInteraction: false }}
        navigation
        pagination={{ clickable: true }}
        className="community-swiper mt-12"
      >
        {members.map((member) => {
          const href = `/members/${getMemberSlug(member)}`;
          return (
            <SwiperSlide key={member.id} style={{ width: 300 }}>
              <div
                role="link"
                tabIndex={0}
                onClick={() => router.push(href)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") router.push(href);
                }}
                className="cursor-pointer"
              >
                <MemberProfileCard member={member} />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="mt-12 flex justify-center">
        <Link
          href="/members"
          className="bg-[#1F5D6B] hover:bg-[#164752] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
        >
          View all members
        </Link>
      </div>
    </section>
  );
};

export default CommunitySection;
