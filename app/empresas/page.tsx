"use client";

import { useEffect, useState } from "react";

import { Empresa } from "@/types/Empresa";
import { Agencia } from "@/types/Agencia";

import TarjetaEmpresa from "../components/TarjetaEmpresa";

export default function Empresas() {

  const [empresas, setEmpresas] = useState<Empresa[]>([]);
  const [agencias, setAgencias] = useState<Agencia[]>([]);

  useEffect(() => {

    const empresasGuardadas = localStorage.getItem("empresas");

    if (empresasGuardadas) {
      setEmpresas(JSON.parse(empresasGuardadas));
    }

    const agenciasGuardadas = localStorage.getItem("agencias");

    if (agenciasGuardadas) {
      setAgencias(JSON.parse(agenciasGuardadas));
    }

  }, []);

  return (

    <main className="min-h-screen bg-blue-50 p-10">

      <h1 className="text-5xl font-bold text-blue-700 mb-8">
        🏭 Empresas
      </h1>

      <div className="space-y-5">

        {empresas.map((empresa) => {

          const agencia = agencias.find(
            (a) => a.id === empresa.agenciaId
          );

          return (

            <TarjetaEmpresa
              key={empresa.id}
              empresa={empresa}
              agencia={agencia}
            />

          );

        })}

      </div>

    </main>

  );

}