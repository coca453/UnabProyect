import React from "react";
import { useEffect, useState } from "react";
import "../App.css";
import DinamicInput from "../components/steps-3/dinamicInput";
import Tooltip from "../components/steps-5/tooltip";

import TextInput from "../components/steps-3/text-input";
import Title from "../components/steps-3/title";

const tooltip1 = [
  {
    titulo: "Promedio enseñanza media",
    desc: "Corresponde al promedio de todos los cursos de 1º a 4º medio. Si aún no tienes tu promedio total, ingresa un estimado de cuánto crees que podrías obtener.",
  },
];

function Steps3({
  espejo,
  cursoArray,
  cursoSetArray,
  estudiante,
  periodo_demre,
  permitir_carga,
  promedio,
  promedioAlert,
  setDemreModal,
  setPromedio,
  setPromedioAlert,
  ArrayMaterias,
  cargarPuntaje,
  setCargarPuntaje,
  cargarPuntajes,
}) {
  const [disable, setDisable] = useState(false);
  let validPeriodoDemre = periodo_demre;
  if (espejo?.permitir_demre === false)
    validPeriodoDemre = espejo?.permitir_demre;
  const inputCss = {
    1: "col-xs-12 col-md-12",
    2: "col-xs-12 col-md-6",
    3: "col-xs-12 col-md-4",
    4: "col-xs-12 col-md-3",
    5: "col-xs-12 col-md-2",
    6: "col-xs-12 col-md-1",
  };
  const inpuCss = inputCss[cursoArray.pruebas_validas.length];

  useEffect(() => {
    let prev = Object.assign({}, cursoArray);
    prev.promedioCargo = true;
    cursoSetArray(prev);
    setCargarPuntaje(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [promedio]);

  return (
    <div>
      <section className="section--steps">
        <div class="section__step">
          <div className="section__header">
            <h1 class="section__title">
              <strong>{estudiante.estudiante.nombre}</strong>, de acuerdo a tus
              ensayos
            </h1>
            <h2 class="section__description">
              ¿Qué puntaje crees que podrías obtener en la PAES?
            </h2>
            <div class="section__button mt-2">
              {validPeriodoDemre ? (
                <>
                  <button
                    class="btn"
                    onClick={() => {
                      setDemreModal(true);
                    }}
                  >
                    Cargar puntaje
                  </button>
                </>
              ) : (
                !!cursoArray.pruebas_validas.filter(
                  (curso) => curso.tiene_puntaje
                ).length && (
                  <>
                    <button
                      class="btn"
                      onClick={() => {
                        cargarPuntajes(true);
                      }}
                    >
                      Cargar puntaje
                    </button>
                  </>
                )
              )}
            </div>
          </div>
          <div class="section__body">
            <div class="section__bg">
              <div class="bg-steps"> </div>
            </div>
            <div class="section__wrap section__wrap--lg">
              <div class="cols">
                <div class="col-xs-12">
                  <div class="section__form__box section__form__box--360">
                    <div class="section__form__box__header">
                      <Title
                        subtitle={"Ingresa Puntajes"}
                        title={"Promedio enseñanza media"}
                      />
                      <Tooltip textos={tooltip1} step={3} />
                    </div>
                    <TextInput
                      val={promedio}
                      setChange={setPromedio}
                      value={promedio}
                      titulo={"Promedio"}
                      tipo={"promedio"}
                      alert={promedioAlert}
                      setAlert={setPromedioAlert}
                      isDisabled={
                        periodo_demre ||
                        disable ||
                        estudiante.estudiante.es_extranjero ||
                        cursoArray.promedioBloquear
                      }
                    ></TextInput>
                  </div>
                </div>
                {cursoArray.pruebas_validas.map((element, index) => {
                  return (
                    <>
                      <DinamicInput
                        table={cursoArray}
                        setChange={cursoSetArray}
                        index={index}
                        id_estudiante={estudiante.id_estudiante}
                        periodo_demre={periodo_demre}
                        permitir_carga={permitir_carga}
                        setDisable={setDisable}
                        cargar={cargarPuntaje}
                        setPromedio={setPromedio}
                        inputStyle={inpuCss}
                        setCargarPuntaje={setCargarPuntaje}
                      ></DinamicInput>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps3;
