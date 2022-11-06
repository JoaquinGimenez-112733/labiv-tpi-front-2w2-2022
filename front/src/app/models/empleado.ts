export interface Empleado {
  legajo: number;
  nombre: string;
  apellido: string;
  fechaNacimiento: Date;
  antiguedad: number;
  area: string;
  sueldoBruto: number;
}

export interface EmpleadoDTO {
  legajo: number;
  nombre: string;
  apellido: string;
}
