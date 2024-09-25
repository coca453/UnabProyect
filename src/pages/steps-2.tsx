import "../App.css";
import { useEffect, useState } from "react";
import { Colegio, IEstudiante } from "../interfaces/estudiante";
import Nombre from "../components/steps-2/nombre";
import Apellido from "../components/steps-2/apellido";
import Telefono from "../components/steps-2/telefono";

interface Steps2Props {
  apellidoAlert: boolean;
  colegioAlert: boolean;
  colegios: [];
  comunaAlert: boolean;
  comunas: [];
  cursoAlert: boolean;
  cursos: [];
  estudiante: IEstudiante;
  extranjeroid: number;
  loaderColegio: boolean;
  loaderComuna: boolean;
  nombreAlert: boolean;
  regionAlert: boolean;
  regiones: [];
  setApellidoAlert: (value: boolean) => void;
  setColegioAlert: (value: boolean) => void;
  setComunaAlert: (value: boolean) => void;
  setCursoAlert: (value: boolean) => void;
  setEstudiante: (value: object) => void;
  setNombreAlert: (value: boolean) => void;
  setRegionAlert: (value: boolean) => void;
  setTelefonoAlert: (value: boolean) => void;
  telefonoAlert: boolean;
}

const Steps2 = ({
  apellidoAlert,
  colegioAlert,
  colegios,
  comunaAlert,
  comunas,
  cursoAlert,
  cursos,
  estudiante,
  extranjeroid,
  loaderColegio,
  loaderComuna,
  nombreAlert,
  regionAlert,
  regiones,
  setApellidoAlert,
  setColegioAlert,
  setComunaAlert,
  setCursoAlert,
  setEstudiante,
  setNombreAlert,
  setRegionAlert,
  setTelefonoAlert,
  telefonoAlert,
}: Steps2Props) => {
  const [apellido, setApellido] = useState(estudiante.estudiante.apellido);
  const [colegio, setColegio] = useState(
    estudiante.estudiante.es_extranjero
      ? null
      : estudiante.estudiante.id_colegio
  );
  const [comuna, setComuna] = useState(
    estudiante.estudiante.es_extranjero
      ? null
      : estudiante.estudiante.colegio?.comuna.id_comuna
  );
  const [curso, setCurso] = useState(estudiante.estudiante.id_curso);
  const [loader, setLoader] = useState(false);
  const [nombre, setNombre] = useState(estudiante.estudiante.nombre);
  const [region, setRegion] = useState(
    estudiante.estudiante.es_extranjero
      ? extranjeroid
      : estudiante.estudiante.colegio?.comuna?.region?.id_region
  );
  const [telefono, setTelefono] = useState(estudiante.estudiante.celular);

  useEffect(() => {
    setLoader(true);
    const est = estudiante;

    if (extranjeroid === region) {
      est.estudiante.es_extranjero = true;
    } else {
      est.estudiante.es_extranjero = false;
    }
    est.estudiante.nombre = nombre || "";
    est.estudiante.apellido = apellido || "";
    est.estudiante.celular = telefono || "";
    est.estudiante.id_colegio = colegio;
    if (!estudiante.estudiante.es_extranjero) {
      const colegioOBJ: Colegio = {
        id_colegio: colegio,
        comuna: {
          id_comuna: comuna ?? null,
          region: {
            id_region: region ?? -1000,
          },
        },
      };
      est.estudiante.colegio = colegioOBJ;
    } else {
      setColegio(null);
      setComuna(null);
    }
    est.estudiante.id_curso = curso;
    setEstudiante(est);
    setLoader(false);
  }, [
    apellido,
    colegio,
    comuna,
    curso,
    estudiante,
    extranjeroid,
    nombre,
    region,
    setEstudiante,
    telefono,
  ]);
  return (
    <>
      {!loader ? (
        <div>
          <section className="section--steps">
            <div className="section__step">
              <div className="section__header">
                <h1 className="section__title">
                  Descubre nuestro simulador de becas
                </h1>
                <h2 className="section__description">
                  Ingresa tus datos para poder armar tu perfil y conocer tus
                  posibilidades
                </h2>
              </div>
              <div className="section__body">
                <div className="section__bg">
                  <div className="bg-steps"> </div>
                </div>
                <div className="section__wrap section__wrap--md">
                  <div className="cols">
                    <div className="col-xs-12 col-md-6">
                      <div className="section__form__box section__form__box--minheight">
                        <div className="section__form__title">
                          Información del estudiante
                        </div>
                        <Nombre
                          nombre={nombre}
                          setNombre={setNombre}
                          nombreAlert={nombreAlert}
                          setNombreAlert={setNombreAlert}
                        />
                        <Apellido
                          apellido={apellido}
                          setApellido={setApellido}
                          apellidoAlert={apellidoAlert}
                          setApellidoAlert={setApellidoAlert}
                        />

                        <Telefono
                          telefono={telefono}
                          setTelefono={setTelefono}
                          telefonoAlert={telefonoAlert}
                          setTelefonoAlert={setTelefonoAlert}
                        />
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                      <div className="section__form__box section__form__box--minheight">
                        <div className="section__form__title">
                          Información del colegio
                        </div>
                        <Region
                          region={region}
                          setRegion={setRegion}
                          regionAlert={regionAlert}
                          setRegionAlert={setRegionAlert}
                          regiones={regiones}
                          setColegio={setColegio}
                          setComuna={setComuna}
                        />
                        {region !== "" &&
                        region !== extranjeroid &&
                        region !== undefined ? (
                          <>
                            <Comuna
                              region={region}
                              comuna={comuna}
                              setComuna={setComuna}
                              comunaAlert={comunaAlert}
                              setComunaAlert={setComunaAlert}
                              comunas={comunas}
                              loaderComuna={loaderComuna}
                            />
                          </>
                        ) : null}
                        {comuna !== "" &&
                        region !== extranjeroid &&
                        region !== undefined ? (
                          <>
                            <Colegio
                              colegio={colegio}
                              comuna={comuna}
                              setColegio={setColegio}
                              colegioAlert={colegioAlert}
                              setColegioAlert={setColegioAlert}
                              colegios={colegios}
                              loaderColegio={loaderColegio}
                            />
                          </>
                        ) : null}
                        <Curso
                          cursos={cursos}
                          curso={curso}
                          setCurso={setCurso}
                          cursoAlert={cursoAlert}
                          setCursoAlert={setCursoAlert}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : null}
    </>
  );
};

export default Steps2;
