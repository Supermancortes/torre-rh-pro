"use client";

import { useState, useEffect } from "react";

import { Empresa } from "@/types/Empresa";
import { Vacante } from "@/types/Vacante";
import { Candidato } from "@/types/Candidato";

export default function NuevoCandidato() {

  
  const [nombre, setNombre] = useState("");

const [telefono, setTelefono] = useState("");

const [empresaId, setEmpresaId] = useState(0);

const [vacanteId, setVacanteId] = useState(0);

const [empresas, setEmpresas] = useState<Empresa[]>([]);

const [vacantes, setVacantes] = useState<Vacante[]>([]);

const [candidatos, setCandidatos] = useState<Candidato[]>([]);

const [candidatoEditando, setCandidatoEditando] = useState<number | null>(null);

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

useEffect(() => {

  const candidatosGuardados = localStorage.getItem("candidatos");

  if (candidatosGuardados) {
    setCandidatos(JSON.parse(candidatosGuardados));
  }

}, []);

function guardarCandidato() {

  if (nombre.trim() === "") {
    alert("Escribe el nombre del candidato");
    return;
  }

  if (telefono.trim() === "") {
    alert("Escribe el teléfono");
    return;
  }
const nuevoCandidato: Candidato = {
  id: Date.now(),
  nombre,
  telefono,
  empresaId,
  vacanteId,
  municipio: "",
  edad: "",
  sexo: "",
  transporte: "",
  horaCita: "",
  lugarPresentacion: "",
  estatus: "Pendiente",
  observaciones: "",
};

let nuevosCandidatos = [...candidatos];

if (candidatoEditando !== null) {

  nuevosCandidatos[candidatoEditando] = nuevoCandidato;

  setCandidatoEditando(null);

} else {

  nuevosCandidatos.push(nuevoCandidato);

}

setCandidatos(nuevosCandidatos);

localStorage.setItem(
  "candidatos",
  JSON.stringify(nuevosCandidatos)
);

alert("Candidato guardado correctamente.");

setNombre("");
setTelefono("");
setEmpresaId(0);
setVacanteId(0);

}
return (

  <main className="min-h-screen bg-gray-100 flex justify-center py-10">

    <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">

      <h1 className="text-4xl font-bold text-blue-700 mb-8">
        👤 Nuevo Candidato
      </h1>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Nombre completo
        </label>

        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border rounded-lg p-3"
          placeholder="Nombre del candidato"
        />
      </div>

      <div className="mb-6">
        <label className="block font-semibold mb-2">
          Teléfono
        </label>

        <input
          type="text"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="w-full border rounded-lg p-3"
          placeholder="81xxxxxxxx"
        />
      </div>

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
          Vacante
        </label>

        <select
          value={vacanteId}
          onChange={(e) => setVacanteId(Number(e.target.value))}
          className="w-full border rounded-lg p-3"
        >
          <option value={0}>
            Seleccione una vacante...
          </option>

          {vacantes
            .filter((vacante) => vacante.empresaId === empresaId)
            .map((vacante) => (
              <option
                key={vacante.id}
                value={vacante.id}
              >
                {vacante.nombre}
              </option>
            ))}
        </select>
      </div>

      <button
        onClick={guardarCandidato}
        className="w-full bg-blue-700 text-white font-bold rounded-lg p-4 hover:bg-blue-800"
      >
        {
  candidatoEditando === null
    ? "💾 Guardar Candidato"
    : "💾 Actualizar Candidato"
}
      </button>

    </div>

  </main>

);
}