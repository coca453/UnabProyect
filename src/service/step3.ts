import APIS from "./apis";

export const startSimulacion = async (estudiante: any, feria: any) => {
  const postObject = {
    email: estudiante.estudiante.email,
    id_tipo_documento: estudiante.estudiante.id_tipo_documento,
    numero_documento: estudiante.estudiante.numero_documento,
  };

  if (feria !== "") {
    return APIS.simulacionStartFeria(JSON.stringify(postObject), feria);
  }

  return APIS.simulacionStart(JSON.stringify(postObject));
};

export const postActualizarData = (estudiante, jwt) => {
  return APIS.postActualizarData(estudiante, jwt);
};

export const putActualizarData = (estudiante, jwt) => {
  return APIS.putActualizarData(estudiante, jwt);
};

export const getCurso = async (curso, id_estudiante, jwt) => {
  return APIS.getCurso(curso, id_estudiante, jwt);
};

function getMejoresPuntajes(pruebasIngresadas) {
  const final_scores = {
    matematica_1: 0,
    matematica_2: 0,
    historia_ccss: 0,
    ciencias: 0,
    comp_lectora: 0,
  };

  const materias_id = {
    1: "matematica_1",
    2: "matematica_2",
    4: "historia_ccss",
    5: "ciencias",
    6: "comp_lectora",
  };

  pruebasIngresadas.forEach((prueba) => {
    prueba.materias.forEach((materia) => {
      let nombre_materia = materias_id[materia.id_materia];

      if (materia.puntaje > final_scores[nombre_materia]) {
        final_scores[nombre_materia] = materia.puntaje;
      }
    });
  });

  return final_scores;
}

export const getPuntajes = (id_estudiante, id_tipo_prueba, jwt) => {
  return APIS.getPuntajes(id_estudiante, id_tipo_prueba, jwt);
};

export const postPuntajesDemre = (id_estudiante, contraseña, jwt) => {
  const postObject = {
    password: contraseña,
    id_estudiante: id_estudiante,
  };
  return APIS.postPuntajesDemre(JSON.stringify(postObject), jwt);
};
