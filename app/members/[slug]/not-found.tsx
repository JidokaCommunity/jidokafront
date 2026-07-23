import Link from "next/link";

export default function MemberNotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-4 p-16 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Miembro no encontrado</h1>
      <p className="text-gray-600">Este enlace no corresponde a ningún miembro de la comunidad.</p>
      <Link href="/members" className="text-blue-600 hover:underline">
        Volver a Members
      </Link>
    </main>
  );
}
