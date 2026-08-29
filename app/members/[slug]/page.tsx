import { notFound } from "next/navigation";
import MemberProfileCard from "../../components/MemberProfileCard";
import { getMemberById } from "../../services/api";
import { getMemberIdFromSlug } from "../../services/memberSlug";

interface MemberPageProps {
  params: Promise<{ slug: string }>;
}

/**
 * Member Details Page
 * 
 * Renders the profile page for a specific member based on the slug.
 */
export default async function MemberPage({ params }: MemberPageProps) {
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

  return (
    <main className="flex justify-center p-8">
      <MemberProfileCard member={member} />
    </main>
  );
}
