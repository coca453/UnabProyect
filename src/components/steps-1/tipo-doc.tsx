interface DocumentType {
  id_tipo_documento: number;
  tipo_documento: string;
}

interface TipoDocProps {
  tipoDoc: number;
  setTipoDoc: (value: number) => void;
  tipoDocAlert: boolean;
  setTipoDocAlert: (value: boolean) => void;
  tdocument: DocumentType[]; // Specify the correct type here
  numDoc: string;
  setNumDoc: (value: string) => void;
}

const TipoDoc = ({
  tipoDoc,
  setTipoDoc,
  tipoDocAlert,
  setTipoDocAlert,
  tdocument,
  numDoc,
  setNumDoc,
}: TipoDocProps) => {
  return (
    <>
      <div className="form__element">
        <div className="form__title">
          Tipo de documento
          {tipoDocAlert && (
            <div className="flex">
              <div className="validationErrorText">tipo documento inválido</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                className="bi bi-exclamation-diamond-fill error_icon"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#FF0000"
                  d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
                />
              </svg>
            </div>
          )}
        </div>
        <div className="form__input">
          <select
            value={tipoDoc} // Controlled component
            onChange={(e) => {
              setTipoDoc(Number(e.target.value));
              setTipoDocAlert(false);
              if (numDoc !== "") {
                setNumDoc("");
              }
            }}
          >
            <option value="" key={"0"}>
              Seleccione Rut o Pasaporte
            </option>
            {tdocument.map((e) => (
              <option value={e.id_tipo_documento} key={e.id_tipo_documento}>
                {e.tipo_documento}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default TipoDoc;
