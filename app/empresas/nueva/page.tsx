"use client";
import { useState, useEffect } from "react";

import { Empresa } from "@/types/Empresa";
import { Agencia } from "@/types/Agencia";

import TarjetaEmpresa from "../../components/TarjetaEmpresa";

export default function NuevaEmpresa() {
  
  const [nombreEmpresa, setNombreEmpresa] = useState("");

  const [municipio, setMunicipio] = useState("");

  const [transporte, setTransporte] = useState("Sí");

  const [comedor, setComedor] = useState("Sí");

  const [agencias, setAgencias] = useState<Agencia[]>([]);

const [agenciaId, setAgenciaId] = useState(0);

  const [empresas, setEmpresas] = useState<Empresa[]>([]);

  const [empresaEditando, setEmpresaEditando] = useState<number | null>(null);

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

function guardarEmpresa() {

  // if (agenciaId === 0) {
//   alert("Selecciona una agencia");
//   return;
// }
  const nuevaEmpresa = {
  id: Date.now(),
  nombre: nombreEmpresa,
  agenciaId: 0,
  municipio: municipio,
  transporte: transporte,
  comedor: comedor,
};
  let nuevasEmpresas = [...empresas];

  if (empresaEditando !== null) {

    nuevasEmpresas[empresaEditando] = nuevaEmpresa;

    setEmpresaEditando(null);

  } else {

    nuevasEmpresas.push(nuevaEmpresa);

  }

  setEmpresas(nuevasEmpresas);

  localStorage.setItem(
    "empresas",
    JSON.stringify(nuevasEmpresas)
  );

  alert("Empresa guardada: " + nombreEmpresa);

  setNombreEmpresa("");
  setMunicipio("");
  setTransporte("Sí");
  setComedor("Sí");

}

function eliminarEmpresa(index: number) {

  const nuevasEmpresas = empresas.filter((_, i) => i !== index);

  setEmpresas(nuevasEmpresas);

  localStorage.setItem(
    "empresas",
    JSON.stringify(nuevasEmpresas)
  );

}

function editarEmpresa(index: number) {

  const empresa = empresas[index];

  setNombreEmpresa(empresa.nombre);

  setMunicipio(empresa.municipio);

  setTransporte(empresa.transporte);

  setComedor(empresa.comedor);

  setEmpresaEditando(index);

}

return (

    <main className="min-h-screen bg-gray-100 flex justify-center py-10">

      <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-2xl">

        <h1 className="text-4xl font-bold text-blue-700 mb-8">
          🏭 Nueva Empresa
        </h1>

        {/*  */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Nombre de la Empresa
          </label>

          <input
            type="text"
            placeholder="Ejemplo: Lenovo"
            value={nombreEmpresa}
            onChange={(e) => setNombreEmpresa(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          />

        </div>
{/* Agencia */}

<div className="mb-6">

  <label className="block font-semibold mb-2">
    Agencia
  </label>

  <select
    value={agenciaId}
    onChange={(e) => setAgenciaId(Number(e.target.value))}
    className="w-full border border-gray-300 rounded-lg p-3"
  >

    <option value={0}>
      Seleccione una agencia...
    </option>

    {agencias.map((agencia) => (

      <option
        key={agencia.id}
        value={agencia.id}
      >
        {agencia.nombre}
      </option>

    ))}

  </select>

</div>

        {/* Municipio */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Municipio
          </label>

          <select
            value={municipio}
            onChange={(e) => setMunicipio(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          >

            <option>Seleccione...</option>

            <option>Apodaca</option>
            <option>Pesquería</option>
            <option>Guadalupe</option>
            <option>Escobedo</option>
            <option>Monterrey</option>
            <option>Santa Catarina</option>
            <option>San Nicolás</option>
            <option>Ciénega de Flores</option>
            <option>Salinas Victoria</option>

          </select>
        </div>

        {/* Transporte */}
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Transporte
          </label>

          <select
            value={transporte}
            onChange={(e) => setTransporte(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          >

            <option>Sí</option>
            <option>No</option>

          </select>
        </div>

        {/* Comedor */}
        <div className="mb-8">
          <label className="block font-semibold mb-2">
            Comedor
          </label>

          <select
            value={comedor}
            onChange={(e) => setComedor(e.target.value)}
            className="w-full border border-gray-300 rounded-lg p-3"
          >

            <option>Sí</option>
            <option>No</option>

          </select>
        </div>

        <button
          onClick={guardarEmpresa}
          className="w-full bg-blue-700 text-white font-bold rounded-lg p-4 hover:bg-blue-800"
        >
          {empresaEditando === null
  ? "💾 Guardar Empresa"
  : "💾 Actualizar Empresa"}
          
        </button>
        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-4">
          Empresas registradas
        </h2>

        <div className="space-y-4">

          {empresas.map((empresa, index) => (

   <TarjetaEmpresa
    key={empresa.id}
    empresa={empresa}
    onEliminar={() => eliminarEmpresa(index)}
    onEditar={() => editarEmpresa(index)}
/>

))}

        </div>
       </div>
    </main>
  );

}