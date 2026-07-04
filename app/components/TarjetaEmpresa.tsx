import { Empresa } from "@/types/Empresa";
import { Agencia } from "@/types/Agencia";

interface Props {
  empresa: Empresa;
  agencia?: Agencia;
  onEditar?: () => void;
  onEliminar?: () => void;
}

export default function TarjetaEmpresa({
  empresa,
  agencia,
  onEditar,
  onEliminar,
}: Props) {

  return (
    <div className="border rounded-xl p-4 shadow bg-white">

      <h3 className="text-xl font-bold text-blue-700">
        🏭 {empresa.nombre}
      </h3>

      <p>
        🤝 <strong>Agencia:</strong>{" "}
        {agencia ? agencia.nombre : "Sin agencia"}
      </p>

      <p>
        📍 <strong>Municipio:</strong> {empresa.municipio}
      </p>

      <p>
        🚌 <strong>Transporte:</strong> {empresa.transporte}
      </p>

      <p>
        🍽️ <strong>Comedor:</strong> {empresa.comedor}
      </p>
<div className="flex gap-3 mt-4">

  <button
    onClick={onEditar}
    className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600"
  >
    ✏️ Editar
  </button>

  <button
    onClick={onEliminar}
    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
  >
    🗑 Eliminar
  </button>

</div>

    </div>
  );
}