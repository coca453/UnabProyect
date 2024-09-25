const CertificadoModalSend = ({ show, setShow }) => {
  const showModal = show
    ? "modal modal--certifications-2 modal--in show"
    : "modal modal--certifications-2";

  setTimeout(() => {
    setShow(false);
  }, 6000);

  return (
    <div className={showModal}>
      <div className="modal__back">
        <div className="modal__front">
          <div class="modal__box">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Mis certificados emitidos
                </h5>
              </div>
              <div class="modal__body">
                <p>Certificado Enviado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificadoModalSend;
