import axiosApiInstance from "./axios.ts";
import cloudfrontApiInstance from "./axiosCloudfront.ts";

const options = { crossDomain: true };
const APIS = {
  simulacionEnd: async (obj: string, jwt: string) => {
    return axiosApiInstance.post(`/pregrado/simulacion/end`, obj, {
      ...options,
      headers: { authorization: jwt },
    });
  },
  simulacionStart: async (obj: string) => {
    return axiosApiInstance.post(`/pregrado/simulacion/start`, obj);
  },
  simulacionStartFeria: async (obj: string, feria: string) => {
    return axiosApiInstance.post(`/pregrado/simulacion/start${feria}`, obj);
  },
  getOpeningData: async () => {
    return cloudfrontApiInstance.get(`/backend_data/aperturas.json`);
  },
  getColegios: async () => {
    return cloudfrontApiInstance.get(`/backend_data/colegios.json`);
  },
  getCursos: async () => {
    return cloudfrontApiInstance.get(`/backend_data/cursos.json`);
  },
  getCertificaciones: async (idEstudiante: string, jwt: string) => {
    return axiosApiInstance.get(`/pregrado/carrito/${idEstudiante}`, {
      headers: { authorization: jwt },
    });
  },
  getCurso: async (curso: string, id_estudiante: string, jwt: string) => {
    return axiosApiInstance.get(`/pregrado/pruebas/${curso}/${id_estudiante}`, {
      headers: { authorization: jwt },
    });
  },
  getPuntajes: async (
    id_estudiante: string,
    id_tipo_prueba: string,
    jwt: string
  ) => {
    return axiosApiInstance.get(
      `/puntajes/${id_estudiante}/${id_tipo_prueba}`,
      { headers: { authorization: jwt } }
    );
  },
  postPuntajesDemre: async (obj: string, jwt: string) => {
    return axiosApiInstance.post(`/pregrado/demre`, obj, {
      headers: { authorization: jwt },
    });
  },
  postActualizarData: async (obj: string, jwt: string) => {
    return axiosApiInstance.post(`/pregrado/estudiante`, obj, {
      headers: { authorization: jwt },
    });
  },
  putActualizarData: async (obj: string, jwt: string) => {
    return axiosApiInstance.put(`/pregrado/estudiante`, obj, {
      headers: { authorization: jwt },
    });
  },
  getTiposDocumentos: async () => {
    return cloudfrontApiInstance.get(`/backend_data/tipos_documento.json`);
  },
  getEspejos: async () => {
    return cloudfrontApiInstance.get(`/backend_data/ferias.json`);
  },
  getDecilesPregrado: async () => {
    return cloudfrontApiInstance.get(`/backend_data/deciles_pregrado.json`);
  },
  getCarreras: async () => {
    return cloudfrontApiInstance.get(`/backend_data/carreras_pregrado.json`);
  },
  sendCertificado: async (obj: string, certificado: string, jwt: string) => {
    return axiosApiInstance.post(
      `/pregrado/certificado/enviar/${certificado}`,
      obj,
      { ...options, headers: { authorization: jwt } }
    );
  },
  sendByMailCertificacion: async (idCertificacion: string, jwt: string) => {
    return axiosApiInstance.post(
      `pregrado/enviar_informacion/${idCertificacion}`,
      {},
      { headers: { authorization: jwt } }
    );
  },
  EmitirCertificacion: async (idCertificacion: string, jwt: string) => {
    return axiosApiInstance.post(
      `/pregrado/certificado/enviar/${idCertificacion}`,
      {},
      { headers: { authorization: jwt } }
    );
  },
  sendFPC: async (body: string, jwt: string) => {
    return axiosApiInstance.post(`/pregrado/cookie/`, body, {
      headers: { authorization: jwt },
    });
  },
};

export default APIS;
