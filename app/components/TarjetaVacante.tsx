import { Vacante } from "@/types/Vacante";
import { Empresa } from "@/types/Empresa";
import { useEffect, useState } from "react";

interface Props {
  vacante: Vacante;
}

export default function TarjetaVacante({ vacante }: Props) {
  const [empresa, setEmpresa] = useState<Empresa | null>(null);

useEffect(() => {

  const empresasGuardadas = localStorage.getItem("empresas");

  if (!empresasGuardadas) return;

  const empresas: Empresa[] = JSON.parse(empresasGuardadas);

  const encontrada = empresas.find(
    (e) => e.id === vacante.empresaId
  );

  if (encontrada) {
    setEmpresa(encontrada);
  }

}, [vacante.empresaId]);

  return (
    <div className="border rounded-xl p-4 shadow bg-white">

      <h3 className="text-xl font-bold text-green-700">
        📋 {vacante.nombre}
      </h3>

     <p>
  🏭 <strong>Empresa:</strong>{" "}
  {empresa ? empresa.nombre : "No encontrada"}
</p>
<p>
  🚦 <strong>Estado:</strong> {vacante.estado}
</p>

      <p>
        💰 <strong>Sueldo diario:</strong> ${vacante.sueldoDiario}
      </p>

      <p>
        💵 <strong>Sueldo semanal:</strong> ${vacante.sueldoSemanal}
      </p>

      <p>
        🕒 <strong>Turno:</strong> {vacante.turno}
      </p>

    </div>
  );
}