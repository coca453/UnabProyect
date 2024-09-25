const capitalizar = (val: string) => {
  const str2 = val.charAt(0).toUpperCase() + val.slice(1);
  return str2;
};

interface NombreProps {
  nombre: string;
  setNombre: (nombre: string) => void;
  nombreAlert: boolean;
  setNombreAlert: (nombreAlert: boolean) => void;
}

const Nombre = ({
  nombre,
  setNombre,
  nombreAlert,
  setNombreAlert,
}: NombreProps) => {
  return (
    <>
      <div className="form__element">
        <div className="form__title">
          Nombre
          {nombreAlert ? (
            <>
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
            </>
          ) : null}
        </div>
        <div className="form__input">
          <input
            type="text"
            name="nomnbre"
            placeholder="Ingrese su nombre completo"
            value={nombre}
            onChange={(e) => {
              if (e.target.value.match("^[a-zA-Z ]*$") != null) {
                setNombre(capitalizar(e.target.value));
                setNombreAlert(false);
              } else {
                setNombreAlert(true);
              }
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Nombre;
