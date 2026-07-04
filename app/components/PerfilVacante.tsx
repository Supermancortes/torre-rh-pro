import { Vacante } from "@/types/Vacante";

interface Props {
  vacante: Vacante;
}

export default function PerfilVacante({
  vacante,
}: Props) {

  return (

    <div className="bg-white rounded-xl shadow-lg p-8">

      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        📋 {vacante.nombre}
      </h1>

      <div className="space-y-3 text-lg">

        <p>
          💰 <strong>Sueldo diario:</strong> ${vacante.sueldoDiario}
        </p>

        <p>
          💵 <strong>Sueldo semanal:</strong> ${vacante.sueldoSemanal}
        </p>

        <p>
          🕒 <strong>Turno:</strong> {vacante.turno}
        </p>

        <p>
          👨 <strong>Sexo:</strong> {vacante.sexo}
        </p>

        <p>
          🎂 <strong>Edad:</strong> {vacante.edad}
        </p>

        <p>
          🔁 <strong>Reingreso:</strong> {vacante.reingreso}
        </p>

        <p>
          🏠 <strong>INFONAVIT:</strong> {vacante.infonavit}
        </p>

      </div>

      <hr className="my-6" />

      <h2 className="text-2xl font-bold mb-3">

        📄 Resumen

      </h2>

      <div className="bg-gray-100 rounded-lg p-4 whitespace-pre-line">

        {vacante.resumen}

      </div>

    </div>

  );

}