import { Candidato } from "@/types/Candidato";

interface Props {
  candidato: Candidato;
  onEditar: () => void;
  onEliminar: () => void;
}

export default function TarjetaCandidato({
  candidato,
  onEditar,
  onEliminar,
}: Props) {

  return (
    <div className="border rounded-xl p-4 shadow bg-white">

      <h3 className="text-xl font-bold text-blue-700">
        👤 {candidato.nombre}
      </h3>

      <p>
        📱 <strong>Teléfono:</strong> {candidato.telefono}
      </p>

      <p>
        🟡 <strong>Estatus:</strong> {candidato.estatus}
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