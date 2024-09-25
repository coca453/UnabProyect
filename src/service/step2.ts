/* eslint-disable @typescript-eslint/no-explicit-any */
import APIS from "./apis";

// const url = 'https://d24nhxl4yamrul.cloudfront.net/backend_data/';

export const getColegios = async (flag: boolean) => {
  if (flag) {
    return {
      data: [
        {
          id_region: 5,
          nombre_region: "REGION DE VALPARAISO",
          comuna: [
            {
              id_comuna: 5101,
              nombre_comuna: "VALPARAISO",
              id_region: "5",
              colegio: [
                {
                  id_colegio: 465,
                  nombre_colegio: "COLEGIO BORDEMAR",
                  id_comuna: 5101,
                  id_tipo_colegio: 1,
                  rbd: null,
                  active: true,
                },
              ],
            },
          ],
        },
      ],
    };
  }
  return APIS.getColegios();
};
export const getCursos = async (flag: boolean) => {
  if (flag) {
    return {
      data: [
        { id_curso: 1, nombre_curso: "1° Medio" },
        { id_curso: 2, nombre_curso: "2° Medio" },
        { id_curso: 3, nombre_curso: "3° Medio" },
        { id_curso: 4, nombre_curso: "4° Medio" },
        { id_curso: 5, nombre_curso: "Egresado" },
      ],
    };
  }
  return APIS.getCursos();
};

export const postIniciarSimulacion = async (body: object, feria: string) => {
  if (feria.length > 1) {
    return APIS.simulacionStartFeria(JSON.stringify(body), feria);
  }
  return APIS.simulacionStart(JSON.stringify(body));
};

export const step2Carga = async (
  MOCK: boolean,
  setCursos: (curso: string) => void,
  setComunas: (comunas: string) => void,
  setColegios: (colegios: string) => void,
  setRegiones: (regiones: string) => void,
  setExtranjeroId: (idExtranjeros: string) => void,
  cargaDeciles: (deciles: string) => void
) => {
  getColegios(MOCK).then((regionesdata) => {
    const regionArray: any[] = [];
    const comunaArray: any[] = [];
    const colegioArray: any[] = [];
    regionesdata.data.data.map((region) => {
      let reg = {
        id_region: region.id_region,
        nombre_region: region.nombre_region,
      };
      regionArray.push(reg);
      if (region.nombre_region.toUpperCase() === "EXTRANJERO") {
        setExtranjeroId(region.id_region.toString());
      }
      region.comuna.map((comuna) => {
        let com = {
          id_comuna: comuna.id_comuna,
          id_region: comuna.id_region,
          nombre_comuna: comuna.nombre_comuna,
        };
        comunaArray.push(com);
        comuna.colegio.map((colegios) => {
          let col = {
            active: colegios.active,
            id_colegio: colegios.id_colegio,
            id_comuna: colegios.id_comuna,
            id_tipo_colegio: colegios.id_tipo_colegio,
            nombre_colegio: colegios.nombre_colegio,
          };
          colegioArray.push(col);
        });
      });
    });
    getCursos(MOCK).then((cursos) => {
      setCursos(cursos.data.data);
    });
    setComunas(comunaArray);
    setColegios(colegioArray);
    setRegiones(regionArray);
  });
  cargaDeciles();
};

export const getCertificaciones = async (idEstudiante: string, jwt: string) => {
  return APIS.getCertificaciones(idEstudiante, jwt);
};
