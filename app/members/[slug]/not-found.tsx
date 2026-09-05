import Link from "next/link";

/**
 * Member Not Found Page
 * 
 * Renders a 404 page when a requested member is not found.
 */
export default function MemberNotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Member not found</h1>
      <p className="text-gray-600">This link doesn&apos;t match any community member.</p>
      <Link href="/members" className="text-blue-600 hover:underline">
        Back to Members
      </Link>
    </main>
  );
}
