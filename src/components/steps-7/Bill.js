import { useContext } from "react";
import mailIcon from "../../img/mail.webp";
import download from "../../img/download.webp";
import {
  EmitirCertificacion,
  sendByMailCertificacion,
} from "../../service/step7";
import { JwtContext } from "../../providers/jwt-context";

function formatCurrency(currency) {
  return `$ ${currency.toLocaleString()}`;
}
const titlesGrey = [
  "Beca arancel exclusiva",
  "Beca Bicentenario (sujeta a asignación definitiva)",
  "Crédito CAE",
  "Beca vocación profesor",
];
const descsYellow = ["Beca arancel exclusiva"];
const Bill = ({
  carrera,
  isSlider,
  setShowAlert,
  setShowLoader,
  loader,
  setShowLoader1,
  loader1,
  setAlertMsg,
  setIsOk,
  showButtons,
}) => {
  const { jwt } = useContext(JwtContext);
  return (
    <>
      <div class="section__card">
        {isSlider ? (
          <>
            <h3 class={showButtons ? "buttons_title" : "title_single_bill"}>
              {showButtons ? (
                <>
                  <svg
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#1e75db"
                    class="bi bi-arrow-left-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
                  </svg>
                </>
              ) : null}
              {carrera.nombre} - {carrera.sede}
              {showButtons ? (
                <>
                  <svg
                    data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next"
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#1e75db"
                    class="bi bi-arrow-right-circle-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                  </svg>
                </>
              ) : null}
            </h3>
          </>
        ) : (
          <>
            <h3 class="section__card__title">{carrera.nombre}</h3>
          </>
        )}

        <div class="section__card__subtitle">Precio regular sin descuento</div>
        <div class="section__pricing">
          <div class="section__price">
            <div class="section__text">Valor matrícula</div>
            <div class="section__value">{carrera.valor_matricula}</div>
          </div>
          <div class="section__price">
            <div class="section__text">Valor Carrera anual</div>
            <div class="section__value">{carrera.valor_carrera_anual}</div>
          </div>
        </div>

        {/* Descuentos */}
        <div class="section__card__subtitle">Descuentos</div>
        <div class="section__values">
          {carrera.becas?.map((beca) => {
            return (
              <>
                <div class="section__value">
                  <div
                    className={
                      titlesGrey.includes(beca.nombre_descuento)
                        ? "title_grey section__value__title"
                        : "section__value__title"
                    }
                  >
                    {beca.nombre_descuento}
                    <span
                      className={
                        descsYellow.includes(beca.nombre_descuento)
                          ? "highlight"
                          : ""
                      }
                    >
                      {beca.descripcion}
                    </span>
                  </div>
                  <div class="section__value__value">
                    - {formatCurrency(beca.valor_descuento)}
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {/* total a pagar */}
        <div class="section__values section__values--dark">
          <div class="section__card__subtitle">Total a pagar</div>
          <div class="section__value">
            <div class="section__value__title">Matrícula con Beca</div>
            <div class="section__value__value">{carrera.matricula_beca}</div>
          </div>
          <div class="section__value">
            <div class="section__value__title">Carrera anual con Beca</div>
            <div class="section__value__value">
              {carrera.carrera_anual_beca}
            </div>
          </div>
          <div class="section__value">
            <div class="section__value__title">
              Carrera mensual con Beca<span>Calculado en 10 cuotas</span>
            </div>
            <div class="section__value__value">
              {carrera.carrera_mensual_beca}
            </div>
          </div>
        </div>
      </div>
      <>
        <div class="section__actions ">
          <div
            class="section__action button_cert section__button_unab "
            onClick={() => {
              setAlertMsg(undefined);
              setShowAlert(true);
              setShowLoader(true);
              sendByMailCertificacion(carrera.id_certificado, jwt.jwt)
                .then(() => {
                  setIsOk(true);
                  setShowAlert(true);
                  setAlertMsg("Información enviada.");
                })
                .catch(function (error) {
                  setIsOk(false);
                  setAlertMsg("No se pudo enviar el certificado");
                })
                .finally(() => {
                  setShowLoader(false);
                });
            }}
          >
            <div class="section__icon">
              <img
                alt="enviar-al-correo"
                width={15}
                height={15}
                src={mailIcon}
              />
            </div>
            <div class="section__text">
              <div class="">
                Enviar a mi correo
                {loader ? (
                  <>
                    <p className="alert_loader">Cargando...</p>
                  </>
                ) : null}
              </div>
            </div>
          </div>
          {isSlider ? (
            <>
              <div
                class="section__action button_cert section__button_unab section__button_unab__red section__action--red"
                onClick={() => {
                  setAlertMsg(undefined);
                  setShowAlert(true);
                  setShowLoader1(true);
                  EmitirCertificacion(carrera.id_certificado, jwt.jwt)
                    .then(() => {
                      setIsOk(true);
                      setShowAlert(true);
                      setAlertMsg("Certificado emitido.");
                    })
                    .catch(function (error) {
                      setAlertMsg("No se pudo emitir el certificado");
                    })
                    .finally(() => {
                      setIsOk(false);
                      setShowLoader1(false);
                    });
                }}
              >
                <div class="section__icon section__icon__img">
                  <img
                    className="section_img_icon"
                    alt="emitir-certificado"
                    width={15}
                    height={15}
                    src={download}
                  />
                </div>
                <div class="section__text">
                  <div class="section__text ">
                    Emitir Certificado
                    {loader1 ? (
                      <>
                        <p className="alert_loader">Cargando...</p>
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </>
    </>
  );
};

export default Bill;
