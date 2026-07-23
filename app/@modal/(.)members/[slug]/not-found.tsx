"use client";
import { useRouter } from "next/navigation";
import ModalShell from "../../../components/ModalShell";

export default function InterceptedMemberNotFound() {
  const router = useRouter();

  return (
    <ModalShell onClose={() => router.back()}>
      <div className="flex flex-col items-center gap-3 rounded-2xl border bg-white p-8 text-center shadow-sm">
        <h1 className="text-lg font-bold text-gray-900">Miembro no encontrado</h1>
        <p className="text-sm text-gray-600">Este enlace no corresponde a ningún miembro de la comunidad.</p>
      </div>
    </ModalShell>
  );
}
