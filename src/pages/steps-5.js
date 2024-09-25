import "../App.css";
import Checkbox from "../components/steps-5/checkbox";
import Select from "../components/steps-5/select";
import React from "react";

const tooltip1 = [
  {
    titulo: "CAE:",
    desc: "El Crédito con Garantía Estatal (Crédito CAE) es una alternativa de financiamiento para estudiantes que iniciarán o continuarán una carrera de pregrado en instituciones acreditadas que formen parte del Sistema de Crédito para Estudios Superiores",
  },
];

const tooltip2 = [
  {
    titulo: "Becas del estado",
    desc: "Corresponde a un apoyo económico al que puedes acceder dependiendo de tu puntaje y factores socioeconómicos, entre otros. Pueden cubrir tu carrera de manera parcial o total y no debes devolverlo al terminar la Universidad.",
  },
];
const tooltip3 = [
  {
    titulo: "¿Cuántos integrantes viven en tu casa?",
    desc: "Debes incluir a todas las personas que viven contigo actualmente.",
  },
];
const tooltip4 = [
  {
    titulo: "¿Ingreso total mensual de tu hogar?",
    desc: "Debes indicar el monto total de ingresos que existen en tu hogar actualmente.",
  },
];
const textos_checkbox = {
  cae: { title: "¿Crees que vas a utilizar CAE?" },
  becas: { title: "¿Crees que pedirás becas del estado?" },
};

function Steps5({
  becas_estado,
  becas_estadoAlert,
  cant_integrantes,
  cant_integrantesAlert,
  ingreso_hogar,
  ingreso_hogarAlert,
  integrantes,
  nombre,
  options,
  setBecasEstado,
  setBecasEstadoAlert,
  setCantIntegrantes,
  setCantIntegrantesAlert,
  setIngresoHogar,
  setIngresoHogarAlert,
  setUtilizaCae,
  setUtilizaCaeAlert,
  utiliza_cae,
  utiliza_caeAlert,
}) {
  return (
    <div>
      <section className="section--steps">
        <div class="section__step">
          <div className="section__header">
            <h1 class="section__title">
              <strong>{nombre}</strong>, ya vamos terminando...
            </h1>
            <h2 class="section__description">
              Completa estos datos, que nos ayudarán a calcular el valor de tu
              carrera.{" "}
            </h2>
          </div>
          <div class="section__body">
            <div class="section__bg">
              <div class="bg-steps"> </div>
            </div>
            <div class="section__wrap section__wrap--md">
              <div class="cols">
                <div class="col-xs-12 col-md-6">
                  <div class="section__form__box section__form__box--minheight-2">
                    <div class="section__form__title">Información créditos</div>
                    <div class="form__element__checkbox form__element__checkbox--info">
                      <Checkbox
                        textos={textos_checkbox}
                        tipo="cae"
                        step={4}
                        tooltip={tooltip1}
                        val={utiliza_cae}
                        setChange={setUtilizaCae}
                        alert={utiliza_caeAlert}
                        setAlert={setUtilizaCaeAlert}
                        isStep4={true}
                      />
                    </div>
                    <div class="form__element__checkbox form__element__checkbox--info">
                      <Checkbox
                        textos={textos_checkbox}
                        tipo="becas"
                        step={4}
                        tooltip={tooltip2}
                        val={becas_estado}
                        setChange={setBecasEstado}
                        alert={becas_estadoAlert}
                        setAlert={setBecasEstadoAlert}
                        isStep4={true}
                      />
                    </div>
                  </div>
                </div>
                <div class="col-xs-12 col-md-6">
                  <div class="section__form__box section__form__box--minheight-2">
                    <div class="section__form__title">Información familiar</div>
                    <div class="form__element form__element--info">
                      <Select
                        options={integrantes}
                        titulo="¿Cuántos integrantes viven en tu casa?"
                        tipo={"integrantes"}
                        step={4}
                        tooltip={tooltip3}
                        val={cant_integrantes}
                        setChange={setCantIntegrantes}
                        alert={cant_integrantesAlert}
                        setAlert={setCantIntegrantesAlert}
                      />
                    </div>
                    <div class="form__element form__element--info">
                      <Select
                        options={options}
                        titulo="¿Ingreso total mensual de tu hogar?"
                        tipo={"ingreso_total"}
                        step={4}
                        tooltip={tooltip4}
                        val={ingreso_hogar}
                        setChange={setIngresoHogar}
                        alert={ingreso_hogarAlert}
                        setAlert={setIngresoHogarAlert}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps5;
