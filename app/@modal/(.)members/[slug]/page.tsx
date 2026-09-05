import { notFound } from "next/navigation";
import MemberModal from "../../../components/MemberModal";
import { getMemberById } from "../../../services/api";
import { getMemberIdFromSlug } from "../../../services/memberSlug";

interface InterceptedMemberModalProps {
  params: Promise<{ slug: string }>;
}

/**
 * Intercepted Member Modal Route
 * 
 * Renders a member's profile inside a modal when navigated to
 * from the members list, intercepting the standard page route.
 */
export default async function InterceptedMemberModal({ params }: InterceptedMemberModalProps) {
  const { slug } = await params;
  let member;
  try {
    member = await getMemberById(getMemberIdFromSlug(slug));
  } catch (error) {
    // If the API call fails (e.g., 404), member remains undefined
  }

  if (!member) {
    notFound();
  }

  return <MemberModal member={member} />;
}
