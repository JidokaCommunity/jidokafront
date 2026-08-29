"use client";
import { useRouter } from "next/navigation";
import ModalShell from "../../../components/ModalShell";

/**
 * Intercepted Member Not Found Modal
 * 
 * Renders a 404 state within a modal if the intercepted member
 * route fails to find the requested member.
 */
export default function InterceptedMemberNotFound() {
  const router = useRouter();

  return (
    <ModalShell onClose={() => router.back()}>
      <div className="flex flex-col items-center gap-3 rounded-2xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-lg font-bold text-gray-900">Member not found</h1>
        <p className="text-sm text-gray-600">This link doesn&apos;t match any community member.</p>
      </div>
    </ModalShell>
  );
}
