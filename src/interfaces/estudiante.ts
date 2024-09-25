export interface IEstudiante {
  id_simulacion: number;
  estudiante: Estudiante;
  jwt: string;
}

export interface Estudiante {
  apellido: string;
  celular: string;
  colegio: Colegio | null;
  email: string;
  es_extranjero: boolean;
  fecha_nacimiento: null;
  id_colegio: number | null;
  id_curso: number;
  id_estudiante: number;
  id_financiamiento_carrera: null;
  id_nivel_estudios: null;
  id_region_egreso: null;
  id_situacion_laboral: null;
  id_tipo_documento: number;
  nombre: string;
  nuevo_estudiante: boolean;
  numero_documento: string;
}

export interface Colegio {
  id_colegio: number | null;
  comuna: Comuna;
}

export interface Comuna {
  id_comuna: number | null;
  region: Region;
}

export interface Region {
  id_region: number;
}
