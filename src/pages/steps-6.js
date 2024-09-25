import "../App.css";

import sun from "../img/sun.webp";
import moon from "../img/moon.webp";
import { useEffect, useState } from "react";
import Select from "../components/steps-6/select";
import React from "react";

const Requi = (carre) => {
  let html = "";
  let descripcionPromedio = "";
  let isPedagogia = false;
  try {
    carre.carreraT.forEach((carr) => {
      if (
        carr.matematica_2_requerida &&
        parseInt(carre.carre) === carr.id_carrera
      ) {
        html = `Recuerda que para postular a esta carrera debes rendir la prueba de matemáticas M2`;
      }
      if (carr.es_pedagogia && parseInt(carre.carre) === carr.id_carrera) {
        isPedagogia = true;
        html = `Recuerda que para postular a carreras de pedagogías debes cumplir uno de los siguientes requisitos:`;
        descripcionPromedio = `Tener un promedio de notas de la educación media dentro del 30% de tu establecimiento educacional.`;
      }
    });
  } catch (e) {
    console.error(e);
  }

  if (html.length > 0) {
    return (
      <>
        <div class="-lg">
          <div class="section__form__box">
            <div class="section__form__title">Condiciones</div>
            {isPedagogia ? (
              <>
                <p>{html}</p>
                <p>
                  Tener una <b>PAES válida</b> y obtener puntaje <b>promedio</b>{" "}
                  entre las pruebas de <b>Compresión Lectora y Matemáticas </b>
                  igual o superior al percentil 50. como referencia se considera
                  un puntaje <b>igual o mayor</b> 500 puntos.
                </p>
                <p>{descripcionPromedio}</p>
              </>
            ) : (
              <>
                <p>{html}</p>
              </>
            )}
          </div>
        </div>
      </>
    );
  } else {
    return;
  }
};

function Steps6({
  carrera,
  carreraAlert,
  carreras,
  errorSimulacion,
  errorSimulacionToggle,
  horario,
  nombre,
  sede,
  sedeAlert,
  setCarrera,
  setCarreraAlert,
  setHorario,
  setSede,
  setSedeAlert,
}) {
  const [styleDiurno, setStyleDiurno] = useState("btn_");
  const [styleVispertino, setStyleVispertino] = useState("btn_");
  const [styleIconDiurno, setStyleIconDiurno] = useState("icon_button");
  const [styleIconVispertino, setStyleIconVispertino] = useState("icon_button");
  const diurno = "Diurno";
  const vespertino = "Vespertino";
  const [array_carreras, setArray] = useState(
    carreras
      .filter((c) => c.modalidad.nombre_modalidad === diurno)
      .map((c) => {
        return {
          option: c.carrera.nombre_carrera,
          value: c.id_carrera,
          optionSedes: c.carrera_modalidad_sede,
        };
      })
  );
  const [sedesoptions, setSedes] = useState([]);
  const [loaderSedes, setLoaderSedes] = useState(false);
  const checkIsActive = (val) => {
    if (val === "") {
      setStyleDiurno("btn_focus");
      setStyleVispertino("btn_");
    }
    if (val === "Diurno") {
      setStyleDiurno("btn_focus");
      setStyleVispertino("btn_");
      setStyleIconDiurno("icon_button_focus");
      setStyleIconVispertino("icon_button");
    } else {
      setStyleDiurno("btn_");
      setStyleVispertino("btn_focus");
      setStyleIconDiurno("icon_button");
      setStyleIconVispertino("icon_button_focus");
    }
  };

  useEffect(() => {
    checkIsActive(horario);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setSede("");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carrera]);
  useEffect(() => {
    if (carrera !== "") {
      setLoaderSedes(true);
      try {
        let sedes = carreras
          .find(
            (c) =>
              c.id_carrera === parseInt(carrera) &&
              c.modalidad.nombre_modalidad === horario
          )
          .carrera_modalidad_sede.map((s) => {
            return {
              option: s.sede.nombre_sede,
              value: s.sede.id_sede,
            };
          });
        const sedesOrdenadas = sedes.sort((a, b) =>
          a.option.toLowerCase() > b.option.toLowerCase() ? 1 : -1
        );

        setSedes(sedesOrdenadas);
      } catch (e) {
        console.error(e);
      }
      setLoaderSedes(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [carrera]);

  const handleChangeHorario = (val) => {
    try {
      setHorario(val);
      setSedes([]);
      setSede("");
      setCarrera("");
      checkIsActive(val);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div>
      <section className="section--steps">
        <div class="section__step">
          <div class="section__header">
            <h1 class="section__title">
              <strong>{nombre}</strong>, lo más importante
            </h1>
            <h2 class="section__description">¿Qué carrera quieres estudiar?</h2>
            <div className="wrapper_buttons">
              <button
                className={styleDiurno}
                onClick={() => {
                  handleChangeHorario("Diurno"); /* 2 id modalidad*/
                  setArray(
                    carreras
                      .filter((c) => c.modalidad.nombre_modalidad === diurno)
                      .map((c) => {
                        return {
                          option: c.carrera.nombre_carrera,
                          value: c.id_carrera,
                          optionSedes: c.carrera_modalidad_sede,
                        };
                      })
                  );
                }}
              >
                <img
                  className={styleIconDiurno}
                  alt="opcion-diurna"
                  width={30}
                  height={30}
                  src={sun}
                />
                <label>{diurno}</label>
              </button>
              <button
                className={styleVispertino}
                onClick={() => {
                  handleChangeHorario("Vespertino"); /* 1 id modalidad*/
                  setArray(
                    carreras
                      .filter(
                        (c) => c.modalidad.nombre_modalidad === vespertino
                      )
                      .map((c) => {
                        return {
                          option: c.carrera.nombre_carrera,
                          value: c.id_carrera,
                          optionSedes: c.carrera_modalidad_sede,
                        };
                      })
                  );
                }}
              >
                <img
                  className={styleIconVispertino}
                  alt="opcion-vespertina"
                  width={30}
                  height={30}
                  src={moon}
                />
                <label>{vespertino}</label>
              </button>
            </div>
          </div>
          <div class="section__body">
            <div class="section__bg">
              <div class="bg-steps"></div>
            </div>
            <div class="section__wrap">
              <div class="row">
                <div
                  className={
                    errorSimulacionToggle
                      ? "col-xs-12 col-lg-6 mt-2"
                      : "col-xs-12 col-lg-12 mt-2"
                  }
                >
                  <div class="section__form__box">
                    <div class="section__form__title">Carrera</div>
                    <Select
                      titulo="Selecciona tu carrera"
                      options={array_carreras}
                      tipo="carrera"
                      val={carrera}
                      setChange={setCarrera}
                      alert={carreraAlert}
                      setAlert={setCarreraAlert}
                    />
                    <Select
                      loader={loaderSedes}
                      titulo="Selecciona tu sede"
                      options={sedesoptions}
                      tipo="sede"
                      val={sede}
                      setChange={setSede}
                      alert={sedeAlert}
                      setAlert={setSedeAlert}
                    />
                  </div>
                </div>
                {errorSimulacionToggle ? (
                  <div className="col-xs-12 col-lg-6 mt-2">
                    <div class="section__form__box">
                      <div class="section__form__title">Requerimiento</div>
                      <div class="form__input">
                        {errorSimulacion.error.error_message}
                      </div>
                    </div>
                  </div>
                ) : null}
                <div class="col-12 mt-2">
                  {carrera !== "" ? (
                    <>
                      <Requi carre={carrera} carreraT={carreras} />
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Steps6;
