import { useContext, useState } from "react";
import { postPuntajesDemre } from "../service/step3";
import "./steps-3/demreCss.css";
import { JwtContext } from "../providers/jwt-context";

interface DemreModalProps {
  show: boolean;
  setLoading: (loading: boolean) => void;
  setShow: (show: boolean) => void;
  setData: (data: boolean) => void;
  estudiante: object;
  cargarPuntajes: () => void;
  throwSnackError: (message: string, error: Error) => void;
  noPuntajes: boolean;
}

const DemreModal = ({
  show,
  setLoading,
  setShow,
  setData,
  estudiante,
  cargarPuntajes,
  throwSnackError,
  noPuntajes,
}: DemreModalProps) => {
  const showModal = show
    ? "modal modal--certifications-2 modal--in show"
    : "modal modal--certifications-2";
  const { jwt } = useContext(JwtContext);
  //   setTimeout(() => {
  //     setShow(false);
  //   }, 6000);
  let contraseña = "";
  const [load, setLoad] = useState(false);

  const cargaDatos = async () => {
    setLoad(true);
    console.log(estudiante);
    await postPuntajesDemre(
      estudiante.estudiante.id_estudiante,
      contraseña,
      jwt.jwt
    )
      .then(({ data }) => {
        setData(data.authorized_by_demre);
        throwSnackError("Contraseña Correcta");
        if (noPuntajes)
          throwSnackError("Usted no cuenta con ningun puntaje cargado", true);
        if (data.authorized_by_demre) cargarPuntajes(true);
        else throwSnackError("Contraseña Incorrecta", true);
        setShow(false);
      })
      .catch((error) => {
        console.error(error);
        throwSnackError("Contraseña Incorrecta", true);
      });
    setLoad(false);
    return;
  };

  return (
    <div className={showModal}>
      <div className="modal__back">
        <div className="modal__front">
          <div class="modal__box demre">
            <div
              class="modal__close"
              onClick={() => {
                setShow(false);
              }}
            >
              <span class="fa fa-close"> </span>
            </div>
            <div class="modal__header">
              <h4 class="modal__title">Ingrese contraseña Demre</h4>
            </div>
            <div class="modal__body">
              <div>
                <p>
                  Para visualizar tus puntajes reales debes ingresar tu
                  contraseña Demre
                </p>
              </div>
              <div class="form__element">
                <div>
                  <div class="form__input">
                    <input
                      type="password"
                      name="nomnbre"
                      placeholder="Contraseña"
                      onChange={(e) => {
                        contraseña = e.target.value;
                      }}
                    />
                  </div>
                  <div class="section__button mt-2">
                    <button
                      class="btn"
                      onClick={() => {
                        cargaDatos();
                      }}
                    >
                      {load ? (
                        <div class="spinner-border" role="status">
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      ) : (
                        "Cargar puntaje"
                      )}
                    </button>
                  </div>
                  <div class="olvidasteContra">
                    <a
                      href={"https://inscripcion.demre.cl/recuperaclave"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemreModal;
