import Cookies from "js-cookie";
import APIS from "../service/apis";
import { getTagManagerCookie } from "../service/googleTagManager";

export const postSimulacionEnd = (estudiante, jwt) => {
  const postObject = {
    postSimulacionEnd,
    promedio_ens_media: parseFloat(
      estudiante.estudiante.promedio_ensenanza_media
    ),
    id_carrera_modalidad_sede: parseInt(
      estudiante.estudiante.id_carrera_modalidad_sede
    ),
    id_estudiante: estudiante.estudiante.id_estudiante,
    id_decil: parseInt(estudiante.estudiante.id_decil),
    id_simulacion: estudiante.id_simulacion,
    total_integrantes: parseInt(estudiante.estudiante.total_integrantes),
    usa_beca_estado: estudiante.estudiante.usa_beca_estado,
    usa_beca_cae: estudiante.estudiante.usa_beca_cae,
    id_curso: estudiante.estudiante.id_curso,
    pruebas: estudiante.estudiante.pruebas,
  };
  return APIS.simulacionEnd(JSON.stringify(postObject), jwt);
};
export const postSendCookie = (estudiante, jwt) => {
  console.log("postSendCookie", estudiante, jwt);
  console.log(estudiante.estudiante);

  const cookie = Cookies.get(getTagManagerCookie());
  const postObject = {
    tipo_documento: estudiante.estudiante.id_tipo_documento.toString(),
    nro_documento: estudiante.estudiante.numero_documento,
    cookie: cookie,
  };
  console.log(postObject);

  return APIS.sendFPC(JSON.stringify(postObject), jwt);
};

export const sendByMailCertificacion = (idCertificacion, jwt) => {
  return APIS.sendByMailCertificacion(idCertificacion, jwt);
};
export const EmitirCertificacion = (idCertificacion, jwt) => {
  return APIS.EmitirCertificacion(idCertificacion, jwt);
};
