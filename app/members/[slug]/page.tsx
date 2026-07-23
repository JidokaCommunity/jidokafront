import { notFound } from "next/navigation";
import MemberProfileCard from "../../components/MemberProfileCard";
import { findMemberById } from "../../services/members";
import { getMemberIdFromSlug } from "../../services/memberSlug";

interface MemberPageProps {
  params: Promise<{ slug: string }>;
}

export default async function MemberPage({ params }: MemberPageProps) {
  const { slug } = await params;
  const member = findMemberById(getMemberIdFromSlug(slug));

  if (!member) {
    notFound();
  }

  return (
    <main className="flex justify-center p-8">
      <MemberProfileCard member={member} />
    </main>
  );
}
