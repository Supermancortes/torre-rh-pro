"use client";
import { Empresa } from "@/types/Empresa";
import { useState, useEffect } from "react";

import { Vacante } from "@/types/Vacante";
import TarjetaVacante from "@/app/components/TarjetaVacante";
export default function NuevaVacante() {
 const [resumen, setResumen] = useState("");

const [vacante, setVacante] = useState("");
  const [sueldoDiario, setSueldoDiario] = useState("");
  const [sueldoSemanal, setSueldoSemanal] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [turno, setTurno] = useState("");
  const [sexo, setSexo] = useState("");
const [edad, setEdad] = useState("");
const [reingreso, setReingreso] = useState("");
const [infonavit, setInfonavit] = useState("");
const [empresas, setEmpresas] = useState<Empresa[]>([]);

const [empresaId, setEmpresaId] = useState(0);
const [vacantes, setVacantes] = useState<Vacante[]>([]);
useEffect(() => {

  const empresasGuardadas = localStorage.getItem("empresas");

  if (empresasGuardadas) {

    setEmpresas(JSON.parse(empresasGuardadas));

  }

}, []);

useEffect(() => {

  const vacantesGuardadas = localStorage.getItem("vacantes");

  if (vacantesGuardadas) {
    setVacantes(JSON.parse(vacantesGuardadas));
  }

}, []);

function guardarVacante() {

if (empresaId === 0) {
  alert("Selecciona una empresa");
  return;
}
const nuevaVacante: Vacante = {
  id: Date.now(),
  empresaId: Number(empresaId),
  nombre: vacante,
  sueldoDiario: Number(sueldoDiario),
  sueldoSemanal: Number(sueldoSemanal),
  turno: turno,
  sexo: sexo,
  edad: edad,
  reingreso: reingreso,
  infonavit: infonavit,
resumen: resumen,

};

const nuevasVacantes = [...vacantes, nuevaVacante];

setVacantes(nuevasVacantes);

localStorage.setItem(
  "vacantes",
  JSON.stringify(nuevasVacantes)
);
  }
  return (
    <main className="min-h-screen bg-gray-100 flex justify-center py-10">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          📋 Nueva Vacante
        </h1>
<div className="mb-6">
  <label className="block font-semibold mb-2">
    Empresa
  </label>

  <select
    value={empresaId}
    onChange={(e) => setEmpresaId(Number(e.target.value))}
    className="w-full border rounded-lg p-3"
  >
    <option value={0}>
  Seleccione una empresa...
</option>

    {empresas.map((empresa) => (
      <option
        key={empresa.id}
        value={empresa.id}
      >
        {empresa.nombre}
      </option>
    ))}

  </select>
</div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Nombre de la Vacante
          </label>

          <input
            type="text"
            value={vacante}
            onChange={(e) => setVacante(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sueldo Diario
          </label>

          <input
            type="number"
            value={sueldoDiario}
            onChange={(e) => setSueldoDiario(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sueldo Semanal
          </label>

          <input
            type="number"
            value={sueldoSemanal}
            onChange={(e) => setSueldoSemanal(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Municipio
          </label>

          <input
            type="text"
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div className="mb-8">
          <label className="block font-semibold mb-2">
            Turno
           <div className="mb-6">
  <label className="block font-semibold mb-2">
    Resumen de la Vacante
  </label>

  <textarea
    value={resumen}
    onChange={(e) => setResumen(e.target.value)}
    rows={6}
    className="w-full border rounded-lg p-3"
    placeholder="Escribe aquí el resumen completo de la vacante..."
  />
</div> 
          </label>

          <input
            type="text"
            value={turno}
            onChange={(e) => setTurno(e.target.value)}
            className="w-full border rounded-lg p-3"
          />
        </div>

   <button
  onClick={guardarVacante}
  className="w-full bg-blue-700 text-white font-bold rounded-lg p-4"
>
          💾 Guardar Vacante
        </button>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Vacantes registradas
</h2>

<div className="space-y-4">

  {vacantes.map((vacante, index) => (

    <TarjetaVacante
      key={index}
      vacante={vacante}
    />

  ))}

</div>
      </div>

    </main>
  );

}