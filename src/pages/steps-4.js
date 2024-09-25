import React from "react";

function Steps4({ estudiante, setLoading }) {
  setLoading(false);
  const tabla = {
    materias: [
      {
        id_materia: 1,
        nombre_materia: "Matemática 1",
        notas: [],
        notaMax: 0,
        order: 1,
      },
      {
        id_materia: 2,
        nombre_materia: "Matematica 2",
        notas: [],
        notaMax: 0,
        order: 2,
      },
      {
        id_materia: 3,
        nombre_materia: "Historia y CCSS",
        notas: [],
        notaMax: 0,
        order: 3,
      },
      {
        id_materia: 8,
        nombre_materia: "Ciencias",
        notas: [],
        notaMax: 0,
        order: 4,
      },
      {
        id_materia: 10,
        nombre_materia: "Comprensión Lectora",
        notas: [],
        notaMax: 0,
        order: 5,
      },
    ],
  };
  const notasMax = Array(5).fill(0);
  const CargarNotasMax = () => {
    estudiante.estudiante.pruebas.forEach((prueba) => {
      prueba.materias.forEach((materia, index) => {
        if (notasMax[index] < materia.puntaje) {
          notasMax[index] = materia.puntaje;
        }
      });
    });
  };

  // Función para obtener los nombres de las materias
  const obtenerNombresMaterias = () => {
    const materias = new Set();
    estudiante.estudiante.pruebas.forEach((prueba) => {
      prueba.materias.forEach((materia) => {
        materias.add(materia.nombre_materia);
      });
    });
    return Array.from(materias);
  };

  //  Función para obtener las puntuaciones de las pruebas para cada materia
  const obtenerPuntuacionesPorMateria = (tipoPruebaIndex) => {
    return estudiante.estudiante.pruebas.map(
      (tipoPrueba) => tipoPrueba.materias[tipoPruebaIndex].puntaje
    );
  };
  CargarNotasMax();

  return (
    <div>
      <section className="section--steps">
        <div className="section__step">
          <div className="section__header">
            <h1 className="section__title">
              <strong>Resumen de tus puntajes</strong>
            </h1>
            <h2 className="section__description">
              Usamos tus máximos puntajes para la simulación
            </h2>
          </div>
          <div className="section__body">
            <div className="section__bg">
              <div className="bg-steps"> </div>
            </div>
            <div className="section__wrap section__wrap--md">
              <table className="table table-striped">
                <thead>
                  <tr className="thead-color">
                    <th className="thead-color">Materia</th>
                    {estudiante.estudiante.pruebas.map((element) => {
                      return <th>{element.nombre_tipo_prueba}</th>;
                    })}
                    <th>
                      <span>PUNTAJE FINAL</span>
                      <div className="table__info">
                        <div className="table__circle">
                          <span>i</span>
                        </div>
                        <div className="table__tooltip">
                          <h5>Puntaje final: </h5>
                          <p>
                            El puntaje final de postulación se calcula
                            considerando el máximo puntaje obtenido en las
                            pruebas para cada materia.{" "}
                          </p>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {obtenerNombresMaterias().map((nombreMateria, indez) => {
                    return (
                      <tr key={indez}>
                        <td>{nombreMateria}</td>
                        {estudiante.estudiante.pruebas.map((pruebas, index) => {
                          return (
                            <td>
                              {obtenerPuntuacionesPorMateria(indez)[index]}
                            </td>
                          );
                        })}
                        <td>{notasMax[indez]}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps4;
