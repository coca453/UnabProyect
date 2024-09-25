import "./App.scss";

import { useEffect, useState, useContext } from "react";

import { getCertificaciones, step2Carga } from "./service/step2";
import {
  cargaTDocument,
  crearEstudiante,
  openingData,
  cargaEspejos,
} from "./service/step1";

import { JwtContext } from "./providers/jwt-context";
import { inicializarTagManager } from "./service/googleTagManager";
import TagManager from "react-gtm-module-nonce-aware";
import { Buffer } from "buffer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Steps1 from "./pages/steps-1";
import { step6Carga } from "./service/step6";
import { getDeciles } from "./service/step5";
import HeaderSteps from "./components/header-steps";
import Loader from "./pages/loader";
import ButtonsFotter from "./components/buttons-footer";
import FooterSteps from "./components/footer-steps";
import { IEstudiante } from "./interfaces/estudiante";

const TIPO_SIMULADOR = "Pregrado";

function App() {
  const PagesTitles = [
    "Identificación",
    "Identificación",
    "Puntajes y Promedios",
    "Puntajes y Promedios",
    "Datos Económicos",
    "Carrera y Sede",
    "Resultados",
  ];
  const MOCK = false;
  const ProgresBarWidths = [
    "",
    "0%",
    "16%",
    "33%",
    "48%",
    "64%",
    "80%",
    "100%",
  ];
  const [page, setPage] = useState(0);
  const [pageNext, SetPageNext] = useState(0);

  const { jwt, setJwt } = useContext(JwtContext);

  // Datos de Usuario
  const [ArrayMaterias, setArrayMaterias] = useState({});
  const [becas_estado, setBecasEstado] = useState("");
  const [cant_integrantes, setCantIntegrantes] = useState("");
  const [captcha, setCaptcha] = useState(false);
  const [carrera, setCarrera] = useState("");
  const [certificadoData, setCertificadoData] = useState(false);
  const [cursoArray, setCursoArray] = useState({});
  const [email, setEmail] = useState("");
  const [endSimulacion, setEndSimulacion] = useState(false);
  const [estudiante, setEstudiante] = useState<IEstudiante>();
  const [extranjeroid, setExtranjeroId] = useState("");
  const [feria, setFeria] = useState("");
  const [horario, setHorario] = useState("Diurno");
  const [ingreso_hogar, setIngresoHogar] = useState("");
  const [loading, setLoading] = useState(false);
  const [nueva_simulacion, setNuevaSimulacion] = useState(true);
  const [numDoc, setNumDoc] = useState("");
  const [periodo_demre, setPeriodoDemre] = useState(false);
  const [authorizedDemre, setAuthorizedDemre] = useState(false);
  const [cargarPuntaje, setCargarPuntaje] = useState(false);
  const [permitir_carga, setPermitirCarga] = useState(null);
  const [promedio, setPromedio] = useState("");
  const [sede, setSede] = useState("");
  const [simulacionEnd, setSimulacionEnd] = useState({});
  const [tipoDoc, setTipoDoc] = useState(1);
  const [utiliza_cae, setUtilizaCae] = useState("");

  //Arrays de datos
  const [carreras, setCarreras] = useState([]);
  const [colegios, setColegios] = useState([]);
  const [comunas, setComunas] = useState([]);
  const [cursos, setCursos] = useState([]);
  const [deciles, setDeciles] = useState([]);
  const [regiones, setRegiones] = useState([]);

  /*ALERTS CONST*/
  const [apellidoAlert, setApellidoAlert] = useState(false);
  const [becas_estadoAlert, setBecasEstadoAlert] = useState(false);
  const [cant_integrantesAlert, setCantIntegrantesAlert] = useState(false);
  const [captchaAlert, setCaptchaAlert] = useState(false);
  const [carreraAlert, setCarreraAlert] = useState(false);
  const [colegioAlert, setColegioAlert] = useState(false);
  const [comunaAlert, setComunaAlert] = useState(false);
  const [cursoAlert, setCursoAlert] = useState(false);
  const [emailAlert, setEmailAlert] = useState(false);
  const [errorSimulacion, SetErrorSimulacion] = useState({});
  const [errorSimulacionToggle, SeterrorSimulacionToggle] = useState(false);
  const [ingreso_hogarAlert, setIngresoHogarAlert] = useState(false);
  const [integrantes, setIntegrantes] = useState([]);
  const [nombreAlert, setNombreAlert] = useState(false);
  const [numDocAlert, setNumDocAlert] = useState(false);
  const [optionsDeciles, setOptions] = useState([]);
  const [promedioAlert, setPromedioAlert] = useState(false);
  const [regionAlert, setRegionAlert] = useState(false);
  const [sedeAlert, setSedeAlert] = useState(false);
  const [tdocument, setDocument] = useState({});
  const [espejo, setEspejo] = useState({});
  const [telefonoAlert, setTelefonoAlert] = useState(false);
  const [tipoDocAlert, setTipoDocAlert] = useState(false);
  const [utiliza_caeAlert, setUtilizaCaeAlert] = useState(false);
  const [noPuntajes, setNoPuntajes] = useState(false);

  //MODAL && VISUAL
  const [demreModal, setDemreModal] = useState(false);
  const [opening, setOpening] = useState(true);
  const [openingMsg, setOpeningMsg] = useState("");
  const [show, setShow] = useState(false);
  const [showCertificado, setShowCertificado] = useState(false);
  const [showCertificadoModal, setShowCertificadoModal] = useState(false);
  const [showInitButton, setShowInitButton] = useState(false);

  // INICIO PAGINA
  const startPageTagManager = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "checkout",
        pageType: "simulador-pregrado",
        ecommerce: {
          checkout: {
            actionField: {
              step: 1,
            },
          },
        },
      },
    });
  };

  // START FLUJO
  const startSimulacionPage0 = () => {
    TagManager.dataLayer({
      dataLayer: {
        event: "checkout",
        pageType: "simulador-pregrado",
        ecommerce: {
          checkout: {
            actionField: {
              step: 2,
            },
          },
        },
      },
    });
    SetPageNext(1);
  };

  // BEFORE STEP START
  const tagManagerStepper = (actualPage: number) => {
    switch (actualPage) {
      case 1:
        {
          const rutCompleto = numDoc
            .replace(/\./g, "")
            .replace(/-/g, "")
            .toLowerCase();

          // Utilizamos btoa en lugar de Buffer para convertir a base64
          const encodedRut = btoa(rutCompleto);

          TagManager.dataLayer({
            dataLayer: {
              event: "checkout",
              pageType: "simulador-pregrado",
              userid: encodedRut,
              ecommerce: {
                checkout: {
                  actionField: {
                    step: 3,
                  },
                },
              },
            },
          });
          break;
        }

        break;
      // case 2:
      //   const search_region_id = estudiante.estudiante.colegio?.comuna
      //     ?.id_region
      //     ? estudiante.estudiante.colegio?.comuna?.id_region
      //     : parseInt(extranjeroid);
      //   const actualRegion = regiones.find(
      //     (region) => region.id_region === search_region_id
      //   );
      //   const actualComuna = comunas.find(
      //     (comuna) =>
      //       comuna.id_comuna === estudiante.estudiante.colegio?.id_comuna
      //   );
      //   const actualColegio = colegios.find(
      //     (colegio) =>
      //       colegio.id_colegio === estudiante.estudiante.colegio?.id_colegio
      //   );

      //   TagManager.dataLayer({
      //     dataLayer: {
      //       event: "checkout",
      //       pageType: "simulador-pregrado",
      //       region: actualRegion.nombre_region,
      //       comuna: actualComuna?.nombre_comuna || "",
      //       colegio: actualColegio?.nombre_colegio || "",
      //       ecommerce: {
      //         checkout: {
      //           actionField: {
      //             step: 4,
      //           },
      //         },
      //       },
      //     },
      //   });

      //   break;
      // case 3:
      //   const materiasArrays = estudiante.estudiante.pruebas.map(
      //     ({ materias }) => materias
      //   );
      //   const materiaMaxPuntaje = materiasArrays
      //     .flat()
      //     .reduce(function (results, materia) {
      //       (results[materia.id_materia] =
      //         results[materia.id_materia] || []).push(materia.puntaje);
      //       return results;
      //     }, {});
      //   for (const [id, puntajes] of Object.entries(materiaMaxPuntaje)) {
      //     materiaMaxPuntaje[id] = Math.max(...puntajes);
      //   }

      //   TagManager.dataLayer({
      //     dataLayer: {
      //       event: "intermedio",
      //       pageType: "simulador-pregrado",
      //       nem: parseInt(promedio),
      //       total_score_matematicas_1: materiaMaxPuntaje[1],
      //       total_score_matematicas_2: materiaMaxPuntaje[2],
      //       total_score_historia: materiaMaxPuntaje[3],
      //       total_score_ciencias: materiaMaxPuntaje[4],
      //       total_score_lenguaje: materiaMaxPuntaje[5],
      //     },
      //   });

      //   break;
      // case 4:
      //   TagManager.dataLayer({
      //     dataLayer: {
      //       event: "checkout",
      //       pageType: "simulador-pregrado",
      //       ecommerce: {
      //         checkout: {
      //           actionField: {
      //             step: 5,
      //           },
      //         },
      //       },
      //     },
      //   });

      //   break;
      // case 5:
      //   const actualDecil = deciles[0].find(
      //     (decil) => decil.id_decil === parseInt(ingreso_hogar)
      //   );
      //   TagManager.dataLayer({
      //     dataLayer: {
      //       event: "checkout",
      //       pageType: "simulador-pregrado",
      //       tiene_cae: utiliza_cae,
      //       tiene_beca_estado: becas_estado,
      //       quintil_familia: actualDecil.numero_decil,
      //       integrantes_familia: parseInt(cant_integrantes),
      //       ecommerce: {
      //         checkout: {
      //           actionField: {
      //             step: 6,
      //           },
      //         },
      //       },
      //     },
      //   });
      //   break;
      default:
        break;
    }
  };

  // const laststepTagManager = (simulacionEndData) => {
  //   const search_region_id = estudiante.estudiante.colegio?.comuna?.id_region
  //     ? estudiante.estudiante.colegio?.comuna?.id_region
  //     : parseInt(extranjeroid);
  //   const actualRegionSIMbyb = regiones.find(
  //     (region) => region.id_region === search_region_id
  //   );
  //   const actualComunaSIMbyb = comunas.find(
  //     (comuna) => comuna.id_comuna === estudiante.estudiante.colegio?.id_comuna
  //   );
  //   const actualColegioSIMbyb = colegios.find(
  //     (colegio) =>
  //       colegio.id_colegio === estudiante.estudiante.colegio?.id_colegio
  //   );
  //   const materiasArrays = estudiante.estudiante.pruebas.map(
  //     ({ materias }) => materias
  //   );
  //   const materiaMaxPuntaje = materiasArrays
  //     .flat()
  //     .reduce(function (results, materia) {
  //       (results[materia.id_materia] = results[materia.id_materia] || []).push(
  //         materia.puntaje
  //       );
  //       return results;
  //     }, {});
  //   for (const [id, puntajes] of Object.entries(materiaMaxPuntaje)) {
  //     materiaMaxPuntaje[id] = Math.max(...puntajes);
  //   }
  //   const actualDecilSIMbyb = deciles[0].find(
  //     (decil) => decil.id_decil === parseInt(ingreso_hogar)
  //   );
  //   TagManager.dataLayer({
  //     dataLayer: {
  //       event: "SIMbyb",
  //       pageType: "simulador-pregrado",
  //       region: actualRegionSIMbyb.nombre_region,
  //       comuna: actualComunaSIMbyb?.nombre_comuna || "",
  //       colegio: actualColegioSIMbyb?.nombre_colegio || "",
  //       nem: parseInt(promedio),
  //       total_score_matematicas_1: materiaMaxPuntaje[1],
  //       total_score_matematicas_2: materiaMaxPuntaje[2],
  //       total_score_historia: materiaMaxPuntaje[3],
  //       total_score_ciencias: materiaMaxPuntaje[4],
  //       total_score_lenguaje: materiaMaxPuntaje[5],
  //       tiene_cae: utiliza_cae,
  //       tiene_beca_estado: becas_estado,
  //       quintil_familia: actualDecilSIMbyb.numero_decil,
  //       integrantes_familia: parseInt(cant_integrantes),
  //       seleccion_carrera_mw: [
  //         {
  //           id: simulacionEndData.simulacion.simulacion.id_programa,
  //           carrera: estudiante.estudiante.carrera,
  //           facultad: estudiante.estudiante.carrera,
  //           sede: estudiante.estudiante.carrera_sede,
  //           regimen: simulacionEndData.simulacion.simulacion.modalidad,
  //           valor_matricula:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_matricula_anual,
  //           valor_carrera_sin_beca:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_arancel_anual,
  //           valor_arancel_ref_cae:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_beca_cae,
  //           valor_mensual_carrera_sin_beca:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_mensual_con_becas,
  //           monto_cae_unab:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_beca_cae,
  //           monto_beca_unab:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_beca_arancel_exclusiva,
  //           mensualidad:
  //             simulacionEndData.simulacion.informacion_financiera
  //               .valor_mensual_con_becas,
  //         },
  //       ],
  //     },
  //   });
  //   TagManager.dataLayer({
  //     dataLayer: {
  //       event: "purchase",
  //       pageType: "simulador-pregrado",
  //       ecommerce: {
  //         transaction_id: estudiante.id_simulacion,
  //         affiliation: "simulador-pregrado",
  //         value: 0,
  //         tax: 0,
  //         shipping: 0,
  //         currency: "CLP",
  //         items: [
  //           {
  //             item_name: estudiante.estudiante.carrera,
  //             item_id: simulacionEndData.simulacion.simulacion.id_programa,
  //             price:
  //               simulacionEndData.simulacion.informacion_financiera
  //                 .valor_matricula_anual,
  //             item_brand: estudiante.estudiante.carrera_sede,
  //             item_category: estudiante.estudiante.carrera_sede,
  //             item_variant: simulacionEndData.simulacion.simulacion.modalidad,
  //             quantity: 1,
  //           },
  //         ],
  //       },
  //     },
  //   });
  // };

  const throwSnackError = (message: string, error: Error) => {
    if (error) toast.error(message);
    else toast.success(message);
  };

  const cargarPuntajes = () => {
    setCargarPuntaje(true);
    let prevTabla = Object.assign({}, cursoArray);
    prevTabla.promedioCargo = true;
    prevTabla.pruebas_validas.forEach((element, index) => {
      element.cargo = false;
      if (element.tiene_puntaje) {
        ArrayMaterias[index].forEach((materia, indej) => {
          element.tipo_pruebas_materias.forEach((tipo, indez) => {
            if (indej === indez) {
              tipo.materias.valor = materia;
            }
          });
        });
        element.cargo = true;
      }
    });
    setCursoArray(prevTabla);
  };

  //Inicio de Carga de Datos

  // //Funcion que recibe un idEstudiante y busca si tiene certificaciones y los datos
  const getCertificacion = async (idEstudiante: string) => {
    await getCertificaciones(idEstudiante, jwt.jwt).then((element) => {
      if (element.data.data.length > 0) setCertificadoData(element.data.data);
    });
  };

  const showCertificaciones = () => {
    setShow(true);
    getCertificacion(estudiante.estudiante.id_estudiante);
  };

  // //Carga de datos step 6
  // const fetchData = async () => {
  //   let obj;
  //   setEndSimulacion(true);
  //   await postSimulacionEnd(estudiante, jwt.jwt)
  //     .then((data) => {
  //       obj = data.data.data;
  //       obj.sede = sede;
  //       setSimulacionEnd(data.data.data);
  //       setEndSimulacion(false);
  //       setPage(7);
  //       SetPageNext(7);
  //       postSendCookie(estudiante, jwt.jwt);
  //       laststepTagManager(data.data.data);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       SetErrorSimulacion(err.response.data);
  //       setEndSimulacion(false);
  //       SeterrorSimulacionToggle(true);
  //       SetPageNext(6);
  //     });
  // };
  //Funcnion de Carga de datos de la pagina 2
  const fetchDataPage2 = async () => {
    // setLoading(true);
    console.log("llego aca");

    await crearEstudiante(numDoc, tipoDoc, email, feria)
      .then((e) => {
        setNuevaSimulacion(false);
        e.data;
        const estudiantes = e.data;
        if (estudiantes) {
          setEstudiante(estudiantes);
          setPage(2);
          setLoading(false);
        } else {
          setEstudiante(estudiante);
          setPage(2);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("error get", error);
        SetPageNext(0);
        setPage(0);
      });
  };
  // //Funcion de Carga de notas
  // const getNotas = async (data) => {
  //   let prueba = [];
  //   data.pruebas_validas.forEach((pruebas) => {
  //     let mat = [];
  //     pruebas.tipo_pruebas_materias.forEach((materias) => {
  //       mat.push(materias.materias.valor);
  //       materias.materias.valor = 0;
  //     });
  //     prueba.push(mat);
  //   });
  //   setArrayMaterias(prueba);
  // };
  // //Funcion de Carga de datos de la pagina 3
  // const fetchDataPage3 = async () => {
  //   if (nueva_simulacion) {
  //     setNuevaSimulacion(false);
  //     startSimulacion(estudiante, feria)
  //       .then((data) => {
  //         getCurso(
  //           estudiante.estudiante.id_curso,
  //           estudiante.estudiante.id_estudiante,
  //           jwt.jwt
  //         )
  //           .then((data) => {
  //             const tienePuntaje = data.data.pruebas_validas.filter(
  //               (prueba) => prueba.tiene_puntaje
  //             );
  //             setNoPuntajes(!tienePuntaje.length);
  //             setPeriodoDemre(data.data.periodo_demre);
  //             setPermitirCarga(data.data.permitir_carga);
  //             getNotas(data.data);
  //             setPromedio(data.data.ensenanza_media_mejor);
  //             if (data.data.ensenanza_media_mejor != null) {
  //               data.data.promedioBloquear = true;
  //             } else {
  //               data.data.promedioBloquear = false;
  //             }
  //             setCursoArray(data.data);
  //             setLoading(false);
  //             setPage(3);
  //           })
  //           .catch((error) => {
  //             console.error(error);
  //             setPage(2);
  //             SetPageNext(2);
  //             setLoading(false);
  //           });
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setPage(3);
  //         SetPageNext(3);
  //       });
  //   } else {
  //     getCurso(
  //       estudiante.estudiante.id_curso,
  //       estudiante.estudiante.id_estudiante,
  //       jwt.jwt
  //     )
  //       .then((data) => {
  //         const tienePuntaje = data.data.pruebas_validas.filter(
  //           (prueba) => prueba.tiene_puntaje
  //         );
  //         setNoPuntajes(!tienePuntaje.length);
  //         setPeriodoDemre(data.data.periodo_demre);
  //         setPermitirCarga(data.data.permitir_carga);
  //         getNotas(data.data);
  //         setPromedio(data.data.ensenanza_media_mejor);
  //         if (data.data.ensenanza_media_mejor != null) {
  //           data.data.promedioBloquear = true;
  //         } else {
  //           data.data.promedioBloquear = false;
  //         }
  //         setCursoArray(data.data);
  //         setLoading(false);
  //         setPage(3);
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setPage(2);
  //         SetPageNext(2);
  //         setLoading(false);
  //       });
  //   }
  // };
  //Carga de datos del Horario
  useEffect(() => {
    step6Carga(MOCK, setCarreras);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [horario]);
  //Carga de Colegio
  const cargaDeciles = () => {
    getDeciles(MOCK).then((data) => {
      let integrantesArray = [];
      let decilesArray = [];
      data.data.data.forEach((cant) => {
        let integrante = {
          option: cant.cantidad_personas,
          value: cant.cantidad_personas,
        };
        integrantesArray.push(integrante);
        decilesArray.push(cant.deciles);
      });
      setIntegrantes(integrantesArray);
      setDeciles(decilesArray);
    });
  };
  //Carga de datos de Deciles
  useEffect(() => {
    if (cant_integrantes !== "") {
      let newarray = deciles[cant_integrantes - 1].map((element) => {
        if (element.valor_hasta === undefined) {
          return {
            value: element.id_decil,
            option:
              "(Decil " +
              element.numero_decil +
              ") -> Entre $" +
              element.valor_desde.toLocaleString("es") +
              " o más",
            numero_decil: element.numero_decil,
          };
        }
        return {
          value: element.id_decil,
          option:
            "(Decil " +
            element.numero_decil +
            ") -> Entre $" +
            element.valor_desde.toLocaleString("es") +
            " y $" +
            element.valor_hasta.toLocaleString("es"),
          numero_decil: element.numero_decil,
        };
      });
      setOptions(newarray);
    }
  }, [cant_integrantes, deciles]);

  //Fin de Carga de Datos

  const getOpeningData = () => {
    openingData()
      .then((res) => {
        const openings = res.data.data;
        const openingPregrado = openings.find(
          (e) => e.tipo_simulador.tipo_simulador === TIPO_SIMULADOR
        );
        setOpening(openingPregrado.apertura);
        setOpeningMsg(openingPregrado.mensaje_cierre);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // const cleanEstudiante = (estudiante) => {
  //   const copiedEstudiante = JSON.parse(JSON.stringify(estudiante));
  //   delete copiedEstudiante.carrera;
  //   delete copiedEstudiante.carrera_sede;
  //   delete copiedEstudiante.id_carrera_modalidad_sede;
  //   delete copiedEstudiante.id_decil;
  //   delete copiedEstudiante.promedio_ensenanza_media;
  //   delete copiedEstudiante.pruebas;
  //   delete copiedEstudiante.sede_id;
  //   delete copiedEstudiante.total_integrantes;
  //   delete copiedEstudiante.usa_beca_cae;
  //   delete copiedEstudiante.usa_beca_estado;
  //   copiedEstudiante.email = email;
  //   return copiedEstudiante;
  // };

  const initPage = async () => {
    const feriaPath = window.location.pathname;
    setFeria(feriaPath);
    setLoading(false);
    getOpeningData();
    const {
      data: { data },
    } = await cargaEspejos(MOCK);
    if (feriaPath) {
      const espejoSelec = data.find((e) => `/${e.path_feria}` === feriaPath);
      setEspejo(espejoSelec);
      if (espejoSelec?.permitir_captcha === false) {
        setCaptcha(true);
      }
    }
    await cargaTDocument(MOCK, setDocument, setShowInitButton);
    await step2Carga(
      MOCK,
      setCursos,
      setComunas,
      setColegios,
      setRegiones,
      setExtranjeroId,
      cargaDeciles
    );
    inicializarTagManager();
    startPageTagManager();
    SetPageNext(1);
  };

  console.log(page);

  //Cambios de Step
  useEffect(() => {
    if (page === 0 && pageNext === 0) initPage();
    if (pageNext === 1) {
      setPage(1);
    }
    if (pageNext === 2) {
      fetchDataPage2();
      setCursoArray([]);
    }
    // if (pageNext === 3) {
    //   setLoading(true);
    //   const cleanedEstudiante = cleanEstudiante(estudiante.estudiante);
    //   putActualizarData(cleanedEstudiante, jwt.jwt)
    //     .then((e) => {
    //       fetchDataPage3(e.data.data);
    //     })
    //     .catch((error) => {
    //       setPage(2);
    //       SetPageNext(2);
    //       console.error(error);
    //     });
    // }
    // if (pageNext === 4) {
    //   setPage(4);
    //   setLoading(false);
    // }
    // if (pageNext === 5) {
    //   setCarrera("");
    //   setSede("");
    //   const est = estudiante;
    //   setEstudiante(est);
    //   SeterrorSimulacionToggle(false);
    //   setPage(5);
    // }
    // if (pageNext === 6) {
    //   setHorario("Diurno");
    //   setCarrera("");
    //   setSede("");
    //   const est = estudiante;
    //   est.estudiante.usa_beca_cae = true;
    //   if (utiliza_cae === "SI") {
    //     est.estudiante.usa_beca_cae = true;
    //   } else {
    //     est.estudiante.usa_beca_cae = false;
    //   }
    //   if (becas_estado === "SI") {
    //     est.estudiante.usa_beca_estado = true;
    //   } else {
    //     est.estudiante.usa_beca_estado = false;
    //   }
    //   est.estudiante.id_decil = ingreso_hogar;
    //   est.estudiante.total_integrantes = cant_integrantes;
    //   if (nueva_simulacion) {
    //     startSimulacion(estudiante, feria).then((data) => {
    //       est.id_simulacion = data.data.id_simulacion;
    //       setJwt(data.data);
    //     });
    //   }
    //   setEstudiante(est);
    //   setPage(6);
    // }
    // if (pageNext === 7) {
    //   SeterrorSimulacionToggle(false);
    //   let est = estudiante;
    //   try {
    //     if (carrera !== "" && sede !== "") {
    //       let carrerasObj = carreras.filter((carr) => {
    //         return (
    //           carr.id_carrera === parseInt(carrera) &&
    //           carr.modalidad.nombre_modalidad === horario
    //         );
    //       });
    //       let sedeObj = carrerasObj[0].carrera_modalidad_sede.filter(
    //         (element) => {
    //           return element.sede.id_sede === parseInt(sede);
    //         }
    //       );
    //       est.estudiante.id_carrera_modalidad_sede =
    //         sedeObj[0].id_carrera_modalidad_sede;
    //       est.estudiante.sede_id = sede;
    //       est.estudiante.carrera = carrerasObj[0].carrera.nombre_carrera;
    //       est.estudiante.carrera_sede = sedeObj[0].sede.nombre_sede;
    //       setEstudiante(est);
    //       fetchData();
    //     } else {
    //       setPage(6);
    //     }
    //   } catch (e) {
    //     console.error(e);
    //     setPage(6);
    //     SetPageNext(6);
    //   }
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNext]);

  // //loader en paginas 1 2 y 7
  // useEffect(() => {
  //   if ([7].includes(page)) {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //       setPage(page);
  //     }, 4000);
  //   }
  //   if (page === 3) {
  //   }
  //   if (page === 7) {
  //   }
  // }, [page]);

  //Inicio de Validaciones

  //Validacion de Mail
  const validarMail = (mail: string) => {
    // eslint-disable-next-line no-useless-escape
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    } else {
      setEmailAlert(true);
      return false;
    }
  };
  //Validacion de Rut
  const validacionesRut = {
    // Valida el rut con su cadena completa "XXXXXXXX-X"
    validaRut: function (rutCompleto) {
      rutCompleto = rutCompleto.replaceAll(".", "");
      if (!/^[0-9]+[-|‐]{1}[0-9kK]{1}$/.test(rutCompleto)) return false;
      var tmp = rutCompleto.split("-");
      var digv = tmp[1];
      var rut = tmp[0];
      // eslint-disable-next-line eqeqeq
      if (digv == "K") digv = "k";
      // eslint-disable-next-line eqeqeq
      return validacionesRut.dv(rut) == digv;
    },
    dv: function (T) {
      var M = 0,
        S = 1;
      for (; T; T = Math.floor(T / 10))
        S = (S + (T % 10) * (9 - (M++ % 6))) % 11;
      return S ? S - 1 : "k";
    },
  };

  const validarRut = (value: string) => {
    if (validacionesRut.validaRut(value)) {
      return true;
    } else {
      return false;
    }
  };
  //Funcion que valida el boton siguiente del footer y contiene todas las validaciones de la pagina
  const validation = (actualPage: number) => {
    switch (actualPage) {
      case 1:
        return validationPage1();
      // case 2:
      //   return validationPage2();
      // case 3:
      //   return validationPage3();
      // case 5:
      //   return validationPage5();
      // case 4:
      //   return true;
      // case 6:
      //   return validationPage6();
      default:
        break;
    }
  };

  //Funciones de Validaciones
  const validationPage1 = () => {
    let isOk = true;

    if (tipoDoc === "") {
      isOk = false;
      setTipoDocAlert(true);
    }

    if (!validarMail(email)) {
      isOk = false;
      setEmailAlert(true);
    }

    if (tipoDoc === 1) {
      if (!validarRut(numDoc)) {
        isOk = false;
        setNumDocAlert(true);
      }
    }

    if (!captcha) {
      isOk = false;
      setCaptchaAlert(true);
    }
    return isOk;
  };
  // const validationPage2 = () => {
  //   let isOk = true;
  //   if (estudiante.estudiante.nombre === "") {
  //     isOk = false;
  //     setNombreAlert(true);
  //   }

  //   if (estudiante.estudiante.apellido === "") {
  //     isOk = false;
  //     setApellidoAlert(true);
  //   }
  //   if (
  //     estudiante.estudiante.celular === "" ||
  //     estudiante.estudiante.celular.length !== 8
  //   ) {
  //     isOk = false;
  //     setTelefonoAlert(true);
  //   }

  //   if (estudiante.estudiante.colegio?.comuna?.id_region === "") {
  //     isOk = false;
  //     setRegionAlert(true);
  //   }
  //   if (
  //     estudiante.estudiante.colegio?.id_comuna === "" &&
  //     estudiante.estudiante.colegio?.comuna.id_region.toString() !==
  //       extranjeroid.toString()
  //   ) {
  //     isOk = false;
  //     setComunaAlert(true);
  //   }

  //   if (
  //     estudiante.estudiante.colegio?.id_colegio === "" &&
  //     estudiante.estudiante.colegio?.comuna.id_region.toString() !==
  //       extranjeroid.toString()
  //   ) {
  //     isOk = false;
  //     setColegioAlert(true);
  //   }

  //   if (estudiante.estudiante.id_curso === "") {
  //     isOk = false;
  //     setCursoAlert(true);
  //   }

  //   return isOk;
  // };
  // const validationPage3 = async () => {
  //   let isOk = true;
  //   setLoading(true);
  //   let simulaciones = estudiante;
  //   const prom = promedio;
  //   const pruebas = [];
  //   const tabla = {
  //     materias: [
  //       {
  //         id_materia: 1,
  //         nombre_materia: "Matemática 1",
  //         notas: [],
  //         notaMax: 0,
  //       },
  //       {
  //         id_materia: 2,
  //         nombre_materia: "Matematica 2",
  //         notas: [],
  //         notaMax: 0,
  //       },
  //       {
  //         id_materia: 3,
  //         nombre_materia: "Historia y CCSS",
  //         notas: [],
  //         notaMax: 0,
  //       },
  //       {
  //         id_materia: 4,
  //         nombre_materia: "Ciencias",
  //         notas: [],
  //         notaMax: 0,
  //       },
  //       {
  //         id_materia: 5,
  //         nombre_materia: "Comprensión Lectora",
  //         notas: [],
  //         notaMax: 0,
  //       },
  //     ],
  //   };
  //   cursoArray.pruebas_validas.forEach((tipo_prueba, index) => {
  //     let materia = [];
  //     tipo_prueba.tipo_pruebas_materias.forEach((prueba, indez) => {
  //       prueba.materias.valor =
  //         prueba.materias.valor === undefined || prueba.materias.valor === 0
  //           ? ArrayMaterias[index][indez]
  //           : prueba.materias.valor;
  //       materia.push({
  //         id_materia: prueba.id_materia,
  //         nombre_materia: prueba.materias.nombre_materia,
  //         puntaje: prueba.materias.valor === null ? 0 : prueba.materias.valor,
  //       });
  //       tabla.materias.forEach((element) => {
  //         if (prueba.materias.id_materia === element.id_materia) {
  //           element.required = prueba.materias.required;
  //         }
  //       });
  //     });
  //     pruebas.push({
  //       nombre_tipo_prueba:
  //         tipo_prueba.nombre_tipo_prueba + " " + tipo_prueba.periodo,
  //       id_tipo_prueba: tipo_prueba.id_tipo_prueba,
  //       materias: materia,
  //     });
  //   });

  //   simulaciones.estudiante.pruebas = pruebas;
  //   simulaciones.estudiante.promedio_ensenanza_media = prom;
  //   const tablaArray = [];
  //   simulaciones.estudiante.pruebas.forEach((prueba) => {
  //     let materiaArray = Array(6).fill(0);
  //     prueba.materias.forEach((materia, index) => {
  //       materiaArray[materia.id_materia] = materia.puntaje;
  //     });
  //     materiaArray = materiaArray.map((materia) =>
  //       materia === undefined || materia === null || materia === ""
  //         ? 0
  //         : materia
  //     );
  //     tablaArray.push(materiaArray);
  //   });
  //   tablaArray.forEach((item) => {
  //     item.forEach((materia, indez) => {
  //       for (let indej = 0; indej <= 4; indej++) {
  //         if (indez === tabla.materias[indej].id_materia) {
  //           tabla.materias[indej].notas.push(materia);
  //           if (tabla.materias[indej].notaMax <= materia) {
  //             tabla.materias[indej].notaMax = materia;
  //           }
  //         }
  //       }
  //     });
  //   });

  //   setEstudiante(simulaciones);
  //   isOk = await validacionPage4(tabla, simulaciones).then(setLoading(false));
  //   if (
  //     periodo_demre ||
  //     (prom >= 40 && prom <= 70) ||
  //     estudiante.estudiante.es_extranjero
  //   ) {
  //     isOk = isOk && true;
  //     setPromedioAlert(false);
  //   } else {
  //     isOk = false;
  //     setPromedioAlert(true);
  //   }
  //   return isOk;
  // };
  // //Funcion Validaciones de la pagina 3
  // const validacionPage4 = async (table, estudiante) => {
  //   let okey = true;
  //   let math = table.materias[0].notas.filter(
  //     (element) => element >= 100 && element <= 1000
  //   );
  //   let math2 = table.materias[1].notas.filter(
  //     (element) => element >= 100 && element <= 1000
  //   );
  //   let histCCSS = table.materias[2].notas.filter(
  //     (element) => element >= 100 && element <= 1000
  //   );
  //   let ciencia = table.materias[3].notas.filter(
  //     (element) => element >= 100 && element <= 1000
  //   );
  //   let comp = table.materias[4].notas.filter(
  //     (element) => element >= 100 && element <= 1000
  //   );

  //   let tabla = Object.assign({}, cursoArray);
  //   try {
  //     if (math.length + math2.length === 0) {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (materia.materias.nombre_materia === "Matemática 1") {
  //             materia.alert = true;
  //           }
  //           if (materia.materias.nombre_materia === "Matematica 2") {
  //             materia.alert = true;
  //           }
  //         });
  //       });
  //       okey = false;
  //     } else {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (materia.materias.nombre_materia === "Matemática 1") {
  //             materia.alert = false;
  //           }
  //           if (materia.materias.nombre_materia === "Matematica 2") {
  //             materia.alert = false;
  //           }
  //         });
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   try {
  //     if (histCCSS.length + ciencia.length === 0) {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (
  //             materia.materias.nombre_materia === "Historia y CCSS" ||
  //             materia.materias.nombre_materia === "Ciencias"
  //           ) {
  //             materia.alert = true;
  //           }
  //         });
  //       });
  //       okey = false;
  //     } else {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (
  //             materia.materias.nombre_materia === "Historia y CCSS" ||
  //             materia.materias.nombre_materia === "Ciencias"
  //           ) {
  //             materia.alert = false;
  //           }
  //         });
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   try {
  //     if (comp.length === 0) {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (materia.materias.nombre_materia === "Comprensión Lectora") {
  //             materia.alert = true;
  //           }
  //         });
  //       });
  //       okey = false;
  //     } else {
  //       tabla.pruebas_validas.forEach((elemento) => {
  //         elemento.tipo_pruebas_materias.forEach((materia) => {
  //           if (materia.materias.nombre_materia === "Comprensión Lectora") {
  //             materia.alert = false;
  //           }
  //         });
  //       });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  //   setCursoArray(tabla);
  //   return okey;
  // };
  // const validationPage5 = () => {
  //   let isOk = true;

  //   if (utiliza_cae === "") {
  //     isOk = false;
  //     setUtilizaCaeAlert(true);
  //   }

  //   if (becas_estado === "") {
  //     isOk = false;
  //     setBecasEstadoAlert(true);
  //   }

  //   if (cant_integrantes === "") {
  //     isOk = false;
  //     setCantIntegrantesAlert(true);
  //   }

  //   if (ingreso_hogar === "") {
  //     isOk = false;
  //     setIngresoHogarAlert(true);
  //   }
  //   return isOk;
  // };
  // const validationPage6 = () => {
  //   let isOk = true;

  //   if (carrera === "") {
  //     isOk = false;
  //     setCarreraAlert(true);
  //   }

  //   if (sede === "") {
  //     isOk = false;
  //     setSedeAlert(true);
  //   }
  //   return isOk;
  // };

  //Fin de Validaciones

  //Renderizado
  //Funciones de seteo de Steps

  console.log(estudiante);

  const Steps = () => {
    switch (page) {
      case 0:
        return <> </>;
      case 1:
        return (
          <Steps1
            tieneCaptcha={!(espejo?.permitir_captcha === false)}
            msg={openingMsg}
            opening={opening}
            captchaAlert={captchaAlert}
            email={email}
            emailAlert={emailAlert}
            numDoc={numDoc}
            numDocAlert={numDocAlert}
            setCaptcha={setCaptcha}
            setCaptchaAlert={setCaptchaAlert}
            setEmail={setEmail}
            setEmailAlert={setEmailAlert}
            setNumDoc={setNumDoc}
            setNumDocAlert={setNumDocAlert}
            setTipoDoc={setTipoDoc}
            setTipoDocAlert={setTipoDocAlert}
            tdocument={tdocument}
            tipoDoc={tipoDoc}
            tipoDocAlert={tipoDocAlert}
          />
        );
      case 2:
        return (
          <Steps2
            apellidoAlert={apellidoAlert}
            colegioAlert={colegioAlert}
            colegios={colegios}
            comunaAlert={comunaAlert}
            comunas={comunas}
            cursoAlert={cursoAlert}
            cursos={cursos}
            estudiante={estudiante}
            extranjeroid={extranjeroid}
            nombreAlert={nombreAlert}
            regionAlert={regionAlert}
            regiones={regiones}
            setApellidoAlert={setApellidoAlert}
            setColegioAlert={setColegioAlert}
            setComunaAlert={setComunaAlert}
            setCursoAlert={setCursoAlert}
            setEstudiante={setEstudiante}
            setNombreAlert={setNombreAlert}
            setRegionAlert={setRegionAlert}
            setTelefonoAlert={setTelefonoAlert}
            telefonoAlert={telefonoAlert}
          />
        );
      // case 3:
      //   return (
      //     <Steps3
      //       espejo={espejo}
      //       ArrayMaterias={ArrayMaterias}
      //       cursoArray={cursoArray}
      //       cursoSetArray={setCursoArray}
      //       estudiante={estudiante}
      //       extranjeroid={extranjeroid}
      //       periodo_demre={periodo_demre}
      //       permitir_carga={permitir_carga}
      //       promedio={promedio}
      //       promedioAlert={promedioAlert}
      //       setDemreModal={setDemreModal}
      //       setEstudiante={setEstudiante}
      //       setPromedio={setPromedio}
      //       setPromedioAlert={setPromedioAlert}
      //       cargarPuntaje={cargarPuntaje}
      //       setCargarPuntaje={(v) => setCargarPuntaje(v)}
      //       cargarPuntajes={cargarPuntajes}
      //     />
      //   );
      // case 4:
      //   return <Steps4 estudiante={estudiante} setLoading={setLoading} />;
      // case 5:
      //   return (
      //     <Steps5
      //       becas_estado={becas_estado}
      //       becas_estadoAlert={becas_estadoAlert}
      //       cant_integrantes={cant_integrantes}
      //       cant_integrantesAlert={cant_integrantesAlert}
      //       ingreso_hogar={ingreso_hogar}
      //       ingreso_hogarAlert={ingreso_hogarAlert}
      //       integrantes={integrantes}
      //       nombre={estudiante.estudiante.nombre}
      //       options={optionsDeciles}
      //       setBecasEstado={setBecasEstado}
      //       setBecasEstadoAlert={setBecasEstadoAlert}
      //       setCantIntegrantes={setCantIntegrantes}
      //       setCantIntegrantesAlert={setCantIntegrantesAlert}
      //       setIngresoHogar={setIngresoHogar}
      //       setIngresoHogarAlert={setIngresoHogarAlert}
      //       setUtilizaCae={setUtilizaCae}
      //       setUtilizaCaeAlert={setUtilizaCaeAlert}
      //       utiliza_cae={utiliza_cae}
      //       utiliza_caeAlert={utiliza_caeAlert}
      //     />
      //   );
      // case 6:
      //   return (
      //     <Steps6
      //       carrera={carrera}
      //       carreraAlert={carreraAlert}
      //       carreras={carreras}
      //       errorSimulacion={errorSimulacion}
      //       errorSimulacionToggle={errorSimulacionToggle}
      //       horario={horario}
      //       nombre={estudiante.estudiante.nombre}
      //       sede={sede}
      //       sedeAlert={sedeAlert}
      //       setCarrera={setCarrera}
      //       setCarreraAlert={setCarreraAlert}
      //       setHorario={setHorario}
      //       setSede={setSede}
      //       setSedeAlert={setSedeAlert}
      //     />
      //   );
      // case 7:
      //   return (
      //     <Steps7
      //       setNuevaSimulacion={setNuevaSimulacion}
      //       setPage={setPage}
      //       SetPageNext={SetPageNext}
      //       simulacionEnd={simulacionEnd}
      //     />
      //   );
    }
  };

  //Return Render
  return (
    <div className="App">
      {loading ? (
        <>
          <Loader page={pageNext} />
        </>
      ) : (
        <>
          {page === 0 ? null : (
            <>
              <HeaderSteps
                title={PagesTitles[page - 1]}
                page={page}
                setShow={showCertificaciones}
              />{" "}
            </>
          )}
          {<div className="section">{Steps()}</div>}
          {/* <Modal
            show={show}
            setShow={setShow}
            certificadoData={certificadoData}
            setShowCertificadoModal={setShowCertificadoModal}
            setShowCertificado={setShowCertificado}
          />
          <ToastContainer />
          {showCertificadoModal ? (
            <CertificadoModalSend
              show={showCertificado}
              setShow={setShowCertificado}
            ></CertificadoModalSend>
          ) : null}
          {demreModal ? (
            <DemreModal
              show={demreModal}
              setShow={setDemreModal}
              setData={setAuthorizedDemre}
              cargarPuntajes={cargarPuntajes}
              throwSnackError={throwSnackError}
              setLoading={setLoading}
              estudiante={estudiante}
              noPuntajes={noPuntajes}
            />
          ) : null} */}
          {page === 0 || page === 7 || !opening ? null : (
            <>
              <ButtonsFotter
                espejo={espejo}
                progressBar={ProgresBarWidths[page]}
                page={page}
                SetPageNext={SetPageNext}
                setPage={setPage}
                pagesLength={PagesTitles.length}
                setLoading={setLoading}
                validation={validation}
                loader={endSimulacion}
                setloader={setEndSimulacion}
                tagManagerStepper={tagManagerStepper}
                disableByDemre={
                  periodo_demre &&
                  espejo?.permitir_demre !== false &&
                  !authorizedDemre
                }
                setAuthorizedDemre={(e) => setAuthorizedDemre(e)}
              />
            </>
          )}
          {page === 0 ? null : (
            <>
              <FooterSteps />
            </>
          )}
        </>
      )}
      <Footer />
    </div>
  );
}

export default App;
