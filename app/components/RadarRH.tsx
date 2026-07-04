"use client";

import { Vacante } from "@/types/Vacante";

interface Props {
  vacantes: Vacante[];
}

export default function RadarRH({
  vacantes,
}: Props) {

  const activas = vacantes.filter(

    (v) =>
      v.estado === "Activa" ||
      v.estado === "Reclutamiento Intensivo"

  );

  return (

    <div className="bg-red-50 border border-red-300 rounded-xl p-6 shadow">

      <h2 className="text-2xl font-bold text-red-700 mb-4">

        🚨 RADAR RH

      </h2>

      <p className="text-lg">

        Vacantes en operación:

        <strong> {activas.length}</strong>

      </p>

    </div>

  );

}