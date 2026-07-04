"use client";

import { useEffect, useState } from "react";

import { Vacante } from "@/types/Vacante";

import PerfilVacante from "@/app/components/PerfilVacante";

export default function Perfil() {

  const [vacantes, setVacantes] = useState<Vacante[]>([]);

  useEffect(() => {

    const datos = localStorage.getItem("vacantes");

    if (datos) {

      setVacantes(JSON.parse(datos));

    }

  }, []);

  if (vacantes.length === 0) {

    return (

      <main className="p-10">

        No hay vacantes registradas.

      </main>

    );

  }

  return (

    <main className="min-h-screen bg-gray-100 p-10">

      <PerfilVacante
        vacante={vacantes[0]}
      />

    </main>

  );

}