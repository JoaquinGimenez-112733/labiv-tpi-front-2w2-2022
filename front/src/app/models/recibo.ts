import { Empleado, EmpleadoDTO } from './empleado';

export interface Recibo {
  ano: number;
  mes: number;
  sueldoBruto: number;
  montoAntiguedad: number;
  montoJubilacion: number;
  montoObraSocial: number;
  montoFAC: number;
  empleado: { legajo: number; nombre: string; apellido: string };
}
