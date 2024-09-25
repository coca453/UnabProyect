import "../App.css";
import React from "react";
import { useEffect, useState } from "react";

import peoples from "../img/peoples.webp";
import Bill from "../components/steps-7/Bill";
import MoreInformation from "../components/steps-7/MoreInformation";
import Downselling from "../components/steps-7/downselling";

import Alert from "../components/alert";

function formatCurrency(currency) {
  return `$ ${currency.toLocaleString()}`;
}

const cargarCarrera = (simulacion) => {
  const estudiante = simulacion.simulacion.datos_estudiante;
  const carreraElegida = {};
  const downselling = [];
  carreraElegida.becas = simulacion.simulacion.becas;
  carreraElegida.carrera_anual_beca = formatCurrency(
    simulacion.simulacion.informacion_financiera.valor_anual_con_becas
  ); //Carrera anual con Beca
  carreraElegida.carrera_mensual_beca = formatCurrency(
    simulacion.simulacion.informacion_financiera.valor_mensual_con_becas
  ); // Carrera anual con Beca
  carreraElegida.id_certificado =
    simulacion.simulacion.certificado.id_certificado;
  carreraElegida.matricula_beca = formatCurrency(
    simulacion.simulacion.informacion_financiera.valor_matricula_anual -
      simulacion.simulacion.informacion_financiera.valor_beca_matricula_unab
  ); // Matrícula con Beca
  carreraElegida.nombre = simulacion.simulacion.simulacion.nombre_carrera;
  carreraElegida.puntaje_ponderado =
    simulacion.simulacion.simulacion.puntaje_ponderado;
  carreraElegida.sede = simulacion.simulacion.simulacion.sede;
  carreraElegida.valor_carrera_anual = formatCurrency(
    simulacion.simulacion.informacion_financiera.valor_arancel_anual
  ); // Valor Carrera anual
  carreraElegida.valor_matricula = formatCurrency(
    simulacion.simulacion.informacion_financiera.valor_matricula_anual
  ); // Valor matrícula
  if (simulacion.downselling.length > 0) {
    simulacion.downselling.forEach((element) => {
      let downsellingCarrera = {};
      downsellingCarrera.becas = element.becas;
      downsellingCarrera.carrera_anual_beca = formatCurrency(
        element.informacion_financiera.valor_anual_con_becas
      ); //Carrera anual con Beca
      downsellingCarrera.carrera_mensual_beca = formatCurrency(
        element.informacion_financiera.valor_mensual_con_becas
      ); // Carrera anual con Beca
      downsellingCarrera.id_certificado = element.certificado.id_certificado;
      downsellingCarrera.matricula_beca = formatCurrency(
        element.informacion_financiera.valor_matricula_anual -
          element.informacion_financiera.valor_beca_matricula_unab
      ); // Matrícula con Beca
      downsellingCarrera.nombre = element.simulacion.nombre_carrera;
      downsellingCarrera.sede = element.simulacion.sede;
      downsellingCarrera.valor_carrera_anual = formatCurrency(
        element.informacion_financiera.valor_arancel_anual
      ); // Valor Carrera anual
      downsellingCarrera.valor_matricula = formatCurrency(
        element.informacion_financiera.valor_matricula_anual
      ); // Valor matrícula
      downselling.push(downsellingCarrera);
    });
  }
  const carrera = {
    estudiante,
    carreraElegida,
    downselling,
  };
  return carrera;
};

function Steps7({ nombre, simulacionEnd, SetPageNext, setNuevaSimulacion }) {
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [message, setAlertMsg] = useState("");
  const [loader, setShowLoader] = useState(false);
  const [loader1, setShowLoader1] = useState(false);
  const [isOk, setIsOk] = useState(false);

  const [carrera, setCarrera] = useState();

  useEffect(() => {
    setCarrera(cargarCarrera(simulacionEnd));
    setLoading(true);
  }, [simulacionEnd]);

  useEffect(() => {
    setIsOk(false);
  }, [showAlert]);

  return (
    <div>
      <section class="section--finish">
        {showAlert ? (
          <>
            <Alert
              show={showAlert}
              setShow={setShowAlert}
              isOk={isOk}
              message={message}
            />
          </>
        ) : null}
        {loading ? (
          <>
            <div class="section__header">
              <h1 class="h2 section__title">
                ¡Felicitaciones{" "}
                <strong>
                  {carrera.estudiante.nombre +
                    " " +
                    carrera.estudiante.apellido}{" "}
                </strong>
                !
              </h1>
              <p class="section__description">
                Tu puntaje ponderado es:{" "}
                {carrera.carreraElegida.puntaje_ponderado} puntos{" "}
              </p>
              <p class="section__description">
                {simulacionEnd.simulacion.simulacion.estado_postulacion}{" "}
                {carrera.carreraElegida.nombre} - Sede{" "}
                {carrera.carreraElegida.sede}{" "}
              </p>
              <p class="section__info">
                *Cálculo en base al puntaje de corte del año pasado. Admisión
                final sujeta a condiciones.
              </p>
              <div class="section__people">
                {" "}
                <img src={peoples} alt="peoples" width={800} height={200} />
              </div>
            </div>
            <div class="section__body">
              <div class="section__bg">
                <div class="bg-steps"> </div>
              </div>
              <Bill
                carrera={carrera.carreraElegida}
                isSlider={simulacionEnd.permitir_envio}
                setShowAlert={setShowAlert}
                loader={loader}
                setShowLoader={setShowLoader}
                loader1={loader1}
                setShowLoader1={setShowLoader1}
                setAlertMsg={setAlertMsg}
                setIsOk={setIsOk}
                showButtons={false}
              />
            </div>
            {carrera.downselling.length > 0 ? (
              <div class="section__body">
                <div class="section__body__header">
                  <h2 class="h3 section__title">
                    <strong> {nombre} </strong> ¿Te gustaría ver más opciones?
                  </h2>
                  <p class="section__description">
                    Revisa más alternativas para ti
                  </p>
                </div>
                <Downselling
                  downselling={carrera.downselling}
                  setShowAlert={setShowAlert}
                  loader={loader}
                  setShowLoader={setShowLoader}
                  loader1={loader1}
                  setShowLoader1={setShowLoader1}
                  setAlertMsg={setAlertMsg}
                  setIsOk={setIsOk}
                  enableCertificado={simulacionEnd.permitir_envio}
                />
              </div>
            ) : null}
            <div class="section__footer">
              <div class="section__back">
                <div
                  class="btn btn--white"
                  onClick={() => {
                    setNuevaSimulacion(true);
                    SetPageNext(6);
                  }}
                >
                  Volver a simular
                </div>
              </div>
              <MoreInformation />
            </div>
          </>
        ) : null}
      </section>
    </div>
  );
}

export default Steps7;
