"use client";

import { useEffect, useState } from "react";

import { Candidato } from "@/types/Candidato";

import TarjetaCandidato from "../components/TarjetaCandidato";

export default function Candidatos() {
const [candidatos, setCandidatos] = useState<Candidato[]>([]);

useEffect(() => {

  const candidatosGuardados = localStorage.getItem("candidatos");

  if (candidatosGuardados) {

    setCandidatos(JSON.parse(candidatosGuardados));

  }

}, []);

function eliminarCandidato(id: number) {

  const nuevosCandidatos = candidatos.filter(
    (candidato) => candidato.id !== id
  );

  setCandidatos(nuevosCandidatos);

  localStorage.setItem(
    "candidatos",
    JSON.stringify(nuevosCandidatos)
  );

}

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        👥 Candidatos
      </h1>

      <div className="bg-white rounded-xl shadow-lg p-6">

        <h2 className="text-2xl font-bold mb-4">
          Candidatos registrados
        </h2>

        <div className="space-y-4">

  {candidatos.length === 0 ? (

    <p className="text-gray-600">
      No hay candidatos registrados.
    </p>

  ) : (

    candidatos.map((candidato) => (

     <TarjetaCandidato
  key={candidato.id}
  candidato={candidato}
  onEditar={() => alert("Editar: " + candidato.nombre)}
  onEliminar={() => eliminarCandidato(candidato.id)}
  />
    ))

  )}

      </div>

      </div>

    </main>

  );

}