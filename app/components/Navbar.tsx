import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="flex gap-6">

        <Link href="/">
          🏠 Inicio
        </Link>

        <Link href="/empresas">
          🏭 Empresas
        </Link>

        <Link href="/empresas/nueva">
          ➕ Nueva Empresa
        </Link>

        <Link href="/vacantes/nueva">
          📢 Vacantes
        </Link>

      </div>
    </nav>
  );
}