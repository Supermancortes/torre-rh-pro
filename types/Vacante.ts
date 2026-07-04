export interface Vacante {
  id: number;
  empresaId: number;
  nombre: string;
  sueldoDiario: number;
  sueldoSemanal: number;
  turno: string;
  sexo: string;
  edad: string;
  reingreso: string;
  infonavit: string;
  resumen: string;
  estado: "Activa" | "Reclutamiento Intensivo" | "Pausada" | "Cubierta" | "Cancelada";
  
}