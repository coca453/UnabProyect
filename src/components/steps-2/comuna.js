import React from "react";

const Comuna = ({
  comuna,
  region,
  setComuna,
  comunaAlert,
  setComunaAlert,
  comunas,
  loaderComuna,
}) => {
  const comunasArray = comunas.filter((comunas) => comunas.id_region == region);

  const options = () => {
    return comunasArray.map((com, i) => {
      return (
        <option key={i + "-" + com.nombre_comuna} value={com.id_comuna}>
          {com.nombre_comuna}
        </option>
      );
    });
  };
  return (
    <>
      {loaderComuna ? (
        <>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <p style={{ marginTop: "3px" }}>Cargando..</p>
            <div className="spinner-border text-info" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="form__element">
            <div className="form__title">
              Comuna
              {comunaAlert ? (
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
              <select
                name="comuna"
                value={comuna}
                onChange={(e) => {
                  setComuna(e.target.value);
                  setComunaAlert(false);
                }}
              >
                <option value="">Seleccione la comuna</option>
                {options()}
              </select>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Comuna;
