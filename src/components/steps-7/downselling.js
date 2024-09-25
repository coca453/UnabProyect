import "../../App.css";

import React, { useState, useRef, useEffect, useContext } from "react";
import { EmitirCertificacion, sendByMailCertificacion } from "../../service/step7";
import { JwtContext } from '../../providers/jwt-context';

const CardDowselling = ({
  carrera,
  setIsOk,
  setShowAlert,
  setAlertMsg,
  enableCertificado,
}) => {
  const titlesGrey = ['Beca arancel exclusiva', 'Beca Bicentenario (sujeta a asignación definitiva)', 'Crédito CAE', 'Beca vocación profesor'];
  const { jwt } = useContext(JwtContext);
  const [loader, setLoader] = useState(false);
  const [loader1, setLoader1] = useState(false);
  function formatCurrency(currency) {
    return `$ ${currency.toLocaleString()}`;
  }
  return (
    <div class="section__card">
      <h3 class="section__card__title">
        {carrera.nombre} - Sede {carrera.sede}
      </h3>
      <div class="section__card__subtitle">Precio regular sin descuento </div>
      <div class="section__pricing">
        <div class="section__price">
          <div class="section__text">Valor matrícula </div>
          <div class="section__value">{carrera.valor_matricula}</div>
        </div>
        <div class="section__price">
          <div class="section__text">Valor Carrera anual </div>
          <div class="section__value">{carrera.valor_carrera_anual}</div>
        </div>
      </div>
      <div class="section__card__subtitle">Descuentos </div>
      <div class="section__values">
        {carrera.becas.map((beca) => {
          return (
            <div class="section__value">
              <div class="section__value__title">
                <div className={titlesGrey.includes(beca.nombre_descuento) ? 'title_grey section__value__title' : 'section__value__title'}>
                  {beca.nombre_descuento}
                </div>
                <span>{beca.descripcion}</span>
              </div>
              <div class="section__value__value">
                - {formatCurrency(beca.valor_descuento)}
              </div>
            </div>
          );
        })}
      </div>

      <div class="section__values section__values--dark">
        <div class="section__card__subtitle">Total a pagar </div>
        <div class="section__value">
          <div class="section__value__title">Matrícula con Beca</div>
          <div class="section__value__value">
            {carrera.matricula_beca}
          </div>
        </div>
        <div class="section__value">
          <div class="section__value__title">Carrera anual con Beca</div>
          <div class="section__value__value">{carrera.carrera_anual_beca}</div>
        </div>
        <div class="section__value">
          <div class="section__value__title">Carrera mensual con Beca <span>Calculado en 10 cuotas</span></div>

          <div class="section__value__value">{carrera.carrera_mensual_beca}</div>
        </div>
      </div>
      <div class="section__values__bottons">
        <div
          send-mail-info=""
          class="btn btn--gray enviar_info"
          onClick={() => {
            setAlertMsg(undefined);
            setShowAlert(true);
            setLoader(true);
            sendByMailCertificacion(carrera.id_certificado, jwt.jwt)
              .then(() => {
                setIsOk(true);
                setShowAlert(true);
                setAlertMsg("Información enviada.");
              })
              .catch(function (error) {
                console.error(error);
                setIsOk(false);
                setAlertMsg("No se pudo enviar el certificado.");
              })
              .finally(() => {
                setLoader(false);
              });
          }}
        >
          Enviar a mi correo
          {loader ? (
            <>
              <p className="alert_loader">Cargando...</p>
            </>
          ) : null}
        </div>
        {enableCertificado ? (
          <>
            {" "}

            <div
              send-mail-info=""
              class="btn btn--red enviar_info"
              onClick={() => {
                setAlertMsg(undefined);
                setShowAlert(true)
                setLoader1(true);
                EmitirCertificacion(carrera.id_certificado, jwt.jwt)
                  .then(() => {
                    setIsOk(true);
                    setShowAlert(true);
                    setAlertMsg("Certificado Emitido.");
                  })
                  .catch(function (error) {
                    console.error(error);
                    setIsOk(false);
                    setAlertMsg("No se pudo emitir el certificado");
                  })
                  .finally(() => {
                    setLoader1(false);
                  });
              }}
            >
              Emitir Certificado
              {loader1 ? (
                <>
                  <p className="alert_loader">Cargando...</p>
                </>
              ) : null}
            </div>
          </>
        ) : null}

      </div>
    </div>
  );
};

const Downselling = ({
  downselling,
  setShowLoader,
  setIsOk,
  setShowAlert,
  setAlertMsg,
  loader,
  enableCertificado,
}) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div class="section__slider">
      <div class="slider slider-dir-right">
        <div class="slides">
          <div class="slider-slides">
            <div>
              <CardDowselling
                carrera={downselling[counter % downselling.length]}
                setShowAlert={setShowAlert}
                loader={loader}
                setShowLoader={setShowLoader}
                setAlertMsg={setAlertMsg}
                setIsOk={setIsOk}
                enableCertificado={enableCertificado}
              ></CardDowselling>
            </div>
          </div>
        </div>
        <div class="slider-navigation">
          <div
            class="slider-nav slider-nav-left"
            onClick={() => setCounter((ncounter) => ncounter + 1)}
          >
            <span class="fa fa-angle-left"></span>
          </div>
          <div
            class="slider-nav slider-nav-right"
            onClick={() => setCounter((ncounter) => ncounter + 1)}
          >
            <span class="fa fa-angle-right"></span>
          </div>
        </div>
        <div class="slider-bullets">
          <div class="slider-bullets-limit">
            <div class="slider-bullet"></div>
            <div class="slider-bullet"></div>
            <div class="slider-bullet"></div>
            <div class="slider-bullet"></div>
            <div class="slider-bullet slider-bullet-current"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Downselling;