import Title from "./title";
import Tooltip from "./tooltip";
import { useEffect, useState } from "react";
import { getPuntajes } from "../../service/step3";

const DinamicInput = ({
  table,
  setChange,
  index,
  id_estudiante,
  periodo_demre,
  permitir_carga,
  setDisable,
  setPromedio,
  inputStyle,
  cargar,
  setCargarPuntaje,
}) => {
  const titulo =
    table.pruebas_validas[index].nombre_tipo_prueba +
    " " +
    table.pruebas_validas[index].periodo;
  const regExp = /^(1000|[1-9]\d{0,2}|0)$/;
  const handleChange = (val, i) => {
    setCargarPuntaje(true);
    let prevState = Object.assign({}, table);
    let tabla = prevState.pruebas_validas[index];
    tabla.tipo_pruebas_materias[i].alert = false;
    tabla.tipo_pruebas_materias[i].materias.valor = val;
    tabla.cargo = true;
    prevState.pruebas_validas[index] = tabla;
    setChange(prevState);
  };
  const handleBlur = (val, i) => {
    let a = 100;
    let b = 1000;
    let prevState = Object.assign({}, table);
    setCargarPuntaje(true);
    prevState.pruebas_validas[index].cargo = true;

    if (/^[a-zA-Z]*$/.test(val)) {
      prevState.pruebas_validas[index].tipo_pruebas_materias[i].materias.valor =
        null;
      setChange(prevState);
      return;
    }
    if (val >= a && val <= b) {
      prevState.pruebas_validas[index].tipo_pruebas_materias[i].materias.valor =
        val;
      setChange(prevState);
    } else {
      prevState.pruebas_validas[index].tipo_pruebas_materias[i].materias.valor =
        null;
      setChange(prevState);
    }
  };

  const [isDisabled, setIsDisabled] = useState(false);
  return (
    <>
      <div className={inputStyle}>
        <div class="section__form__box section__form__box--minheight-3">
          <div class="section__form__box__header">
            <Title title={titulo} subtitle={"Ingresa puntajes simulados"} />
            <Tooltip
              textos={table.pruebas_validas[index].descripcion_prueba}
              step={3}
            />
          </div>
          <div class="section__form__box__body">
            {table.pruebas_validas[index].tipo_pruebas_materias.map(
              (element, index_) => {
                return (
                  <>
                    <div class="form__element">
                      <div class="form__title">
                        {element.materias.nombre_materia}
                        {element.alert ? (
                          <>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              class="bi bi-exclamation-diamond-fill error_icon"
                              viewBox="0 0 16 16"
                            >
                              <path fill="#FF0000" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg>
                          </>
                        ) : null}
                      </div>
                      <div class="form__input">
                        <input
                          number="points"
                          name="#"
                          disabled={
                            periodo_demre ||
                            isDisabled ||
                            table.pruebas_validas[index].tiene_puntaje
                          }
                          placeholder={"100 a 1.000 pts"}
                          value={
                            element.materias.valor === null ||
                            element.materias.valor === 0 ||
                            isNaN(element.materias.valor)
                              ? ""
                              : element.materias.valor
                          }
                          onChange={(e) => {
                            if (
                              regExp.test(e.target.value) ||
                              e.target.value === ""
                            ) {
                              let val = e.target.value;
                              handleChange(parseInt(val), index_);
                            } else {
                              e.target.value = "";
                              handleChange(null, index_);
                            }
                          }}
                          onBlur={(e) => {
                            if (regExp.test(e.target.value)) {
                              let val = e.target.value;
                              handleBlur(parseInt(val), index_);
                            } else {
                              e.target.value = "";
                              handleBlur(null, index_);
                            }
                          }}
                        />
                      </div>
                    </div>
                  </>
                );
              }
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DinamicInput;
