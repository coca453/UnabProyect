import { useContext } from "react";
import APIS from "../service/apis";
import { JwtContext } from "../providers/jwt-context";

const Modal = ({
  show,
  setShow,
  certificadoData,
  setShowCertificadoModal,
  setShowCertificado,
}) => {
  const { jwt } = useContext(JwtContext);
  const showModal = show
    ? "modal modal--certifications-2 modal--in show"
    : "modal modal--certifications-2";

  const enviarCertificado = (id) => {
    APIS.sendCertificado({}, id, jwt.jwt)
      .catch((error) => {
        console.log(error);
      })
      .then((data) => {});

    // axios
    //   .post(url + id)
    //   .catch((error) => {
    //     console.log(error);
    //   })
    //   .then((data) => {});
  };

  return (
    <div className={showModal}>
      <div className="modal__back">
        <div className="modal__front">
          <div className="modal__box">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Mis certificados emitidos
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={() => {
                    setShow(false);
                  }}
                ></button>
              </div>
              <div className="modal__body">
                <div className="modal__table">
                  <table>
                    <thead>
                      <tr>
                        <th>Carrera</th>
                        <th>Sede</th>
                        <th>Generar certificado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {certificadoData.length > 0 ? (
                        certificadoData.map((element) => {
                          return (
                            <tr>
                              <td>{element.carrera}</td>
                              <td>{element.sede}</td>
                              <td>
                                {" "}
                                <a
                                  onClick={() => {
                                    enviarCertificado(element.id_certificado);
                                    setShow(false);
                                    setShowCertificado(true);
                                    setShowCertificadoModal(true);
                                  }}
                                >
                                  <span className="fa fa-file"></span>Enviar a
                                  mi correo
                                </a>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td>No Existen Certificados Emitidos</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
