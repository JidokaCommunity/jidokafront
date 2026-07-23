import { notFound } from "next/navigation";
import MemberModal from "../../../components/MemberModal";
import { findMemberById } from "../../../services/members";
import { getMemberIdFromSlug } from "../../../services/memberSlug";

interface InterceptedMemberModalProps {
  params: Promise<{ slug: string }>;
}

export default async function InterceptedMemberModal({ params }: InterceptedMemberModalProps) {
  const { slug } = await params;
  const member = findMemberById(getMemberIdFromSlug(slug));

  if (!member) {
    notFound();
  }

  return <MemberModal member={member} />;
}
