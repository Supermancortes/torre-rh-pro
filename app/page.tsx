"use client";

<h2 className="text-2xl font-bold mt-10 mb-6 text-gray-700">
  🚨 Operación del Día
</h2>

import { useEffect, useState } from "react";
import Link from "next/link";
import RadarRH from "./components/RadarRH";

export default function Home() {
  const [empresas, setEmpresas] = useState<any[]>([]);
const [vacantes, setVacantes] = useState<any[]>([]);
const [candidatos, setCandidatos] = useState<any[]>([]);

useEffect(() => {

  const empresasGuardadas = localStorage.getItem("empresas");
console.log("Dashboard empresas:", empresasGuardadas);
  
if (empresasGuardadas) {
    setEmpresas(JSON.parse(empresasGuardadas));
  }

  const vacantesGuardadas = localStorage.getItem("vacantes");
console.log("Dashboard vacantes:", vacantesGuardadas);

  if (vacantesGuardadas) {
    setVacantes(JSON.parse(vacantesGuardadas));
  }

  const candidatosGuardados = localStorage.getItem("candidatos");

if (candidatosGuardados) {
  setCandidatos(JSON.parse(candidatosGuardados));
}
}, []);
  return (
    <main className="min-h-screen bg-gray-100 p-8">

      <h1 className="text-5xl font-bold text-blue-700 text-center">
        TORRE RH PRO
      </h1>
<div className="mt-10 mb-8">

  <RadarRH
    vacantes={vacantes}
  />

</div>

      <p className="text-center text-gray-600 mt-3 text-xl">
        Centro de Control de Reclutamiento
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <Link href="/empresas">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
            <h2 className="text-xl font-bold">
              🏭 Empresas Activas
            </h2>

            <p className="text-4xl mt-4 text-green-600">
  {empresas.length}
</p>
          </div>
        </Link>

        <Link href="/vacantes/nueva">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">
            <h2 className="text-xl font-bold">
              📢 Vacantes Activas
            </h2>

          <p className="text-4xl mt-4 text-orange-600">
  {vacantes.length}
</p>  
          </div>
        </Link>

<Link href="/candidatos">

  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer">

    <h2 className="text-xl font-bold">
      👤 Candidatos
    </h2>

    <p className="text-4xl mt-4 text-blue-600">
      {candidatos.length}
    </p>

  </div>

</Link>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-bold">
            📘 Último Grupo
          </h2>

          <p className="mt-4 text-lg">
            EMPLEOS APODACA 17
          </p>
        </div>

      </div>
<h2 className="text-2xl font-bold mt-12 mb-6 text-gray-700">
  ⚡ Acciones Rápidas
</h2>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  <Link href="/empresas/nueva">
    <div className="bg-blue-700 text-white rounded-xl shadow-lg p-6 text-center hover:bg-blue-800 cursor-pointer">
      <h3 className="text-xl font-bold">
        ➕ Nueva Empresa
      </h3>
    </div>
  </Link>

  <Link href="/vacantes/nueva">
    <div className="bg-green-700 text-white rounded-xl shadow-lg p-6 text-center hover:bg-green-800 cursor-pointer">
      <h3 className="text-xl font-bold">
        ➕ Nueva Vacante
      </h3>
    </div>
  </Link>

  <Link href="/candidatos/nuevo">
    <div className="bg-orange-600 text-white rounded-xl shadow-lg p-6 text-center hover:bg-orange-700 cursor-pointer">
      <h3 className="text-xl font-bold">
        ➕ Nuevo Candidato
      </h3>
    </div>
  </Link>

</div>

    </main>
  );
}