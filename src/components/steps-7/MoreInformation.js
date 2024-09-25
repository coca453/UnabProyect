import React, { useState } from 'react'

const MoreInformation = () => {
    const[seemore,setSeeMore] = useState(true)
return (
    <>
    <div class="section__footer__info"> 
            <h4 class="section__title">
                Información importante que debes saber
            </h4>
            <p class="section__description">
                Para que tu certificado de beca sea válido debes:
            </p>
            <div class="section__content__more">
            
                <ul> 
                    {seemore ? <>
                        
                            <li>
                                Estar convocado en la UNAB.
                            </li>
                            <li>
                                Haber ingresado correctamente los datos socioeconómicos
                            </li>
                    </> : <>
                            <li>
                                Esta simulación de beneficios se aplica sólo a alumnos cuya vía de postulación sea mediante el sistema de ACCESO, excluyendo cambios de carrera posteriores.
                            </li>
                            <li>
                                El certificado de simulación del beneficio solo será válido si se basa en los puntajes válidos del proceso de Admisión ACCESO 2024. Cualquier simulación que utilice puntajes ficticios será automáticamente descalificada sin posibilidad de apelación. Asimismo, es esencial que se haya proporcionado correctamente la información socioeconómica en el apartado de ingreso familiar, incluyendo el número de participantes del hogar y el decil correspondiente.
                            </li>
                            <li>
                                El beneficio de la Beca Arancel y/o Matricula se hará efectivo si y solo si el alumno postula a la Universidad Andrés Bello a través del sistema de ACCESO y estar seleccionado en ella en la primera lista de convocados, resultados que serán informados en la publicación final de postulaciones a las universidades adscritas para el proceso de Admisión ACCESO 2024.
                            </li>
                            <li>
                                La asignación definitiva de las Becas entregadas por el MINEDUC que el estudiante pueda obtener de acuerdo con la presente simulación estará condicionada a los requisitos establecidos en el sitio web https://portal.beneficiosestudiantiles.cl/ y sus resultados en la página web https://resultados.beneficiosestudiantiles.cl/. De obtener el beneficio posteriormente a la asignación original (es decir, vía acreditación socioeconómica) se invalidará el resultado del beneficio presentado en este certificado inapelablemente.
                            </li>
                            <li>
                                La beca fomento regional es un beneficio de rebaja de arancel en la colegiatura anual durante toda la carrera para alumnos egresados de colegios de todas las regiones, exceptuando la Metropolitana, que deseen estudiar en la sede de Viña del Mar. Dicho beneficio está incorporado al simulador de Becas y Beneficios, el que se reflejará en el arancel final que estipula el certificado válidamente emitido por el sistema. Debido a esto, al momento de efectuar la matrícula se deberá acreditar el colegio del cual se egresó al momento de simular. La aplicación de este beneficio no excluye la asignación de otras becas internas, y no es aplicable ni extensible para un cambio de sede.
                            </li>
                            <li>
                                Las becas de arancel otorgadas por la Universidad Andrés Bello se mantendrán por la duración formal de la carrera publicada en la Oferta Académica 2024, según su plan de estudios, condicionado a que el estudiante cumpla con el requisito académicos que se indican a continuación: a) Contar con un 60% de progreso académico (*) el primer año de carrera. b) Contar con un 70% de progreso académico (*) desde segundo año de carrera en adelante. (*) Se define por Progreso Académico como la cantidad total de asignaturas efectivamente cursadas y aprobadas (Historia Académica) respecto al total de asignaturas que el estudiante debe tener cursado según la cantidad de semestres en la malla curricular.
                            </li>
                            <li>
                                Las condiciones de pérdida de aquellos beneficios internos que sean mantenidos por la duración formal de la carrera publicada en la Oferta Académica 2024, Son las siguientes: a) Mantención del estudiante en la carrera de origen, sede y jornada. b) No descontinuar estudios (retiro temporal o definitivo).
                            </li>
                            <li>
                                La política de asignación de becas será revisada anualmente.
                            </li>
                            <li>
                                IMPORTANTE: (No obtendrán beneficio aquellos postulantes que registren matrícula anterior con beneficios internos en la misma carrera en la Universidad Andrés Bello). Para hacer válido estos beneficios, la información declarada en el presente certificado deberá ser fidedigna, cumpliendo en su totalidad lo declarado por el postulante. La Beca Arancel de colegiatura será calculada en base al puntaje promedio entre Lenguaje y Matemática 1, no al ponderado solicitado para la selección a la carrera convocada.)
                            </li>
                    </>}
                </ul>
            </div>
            <a class="section__more" onClick={()=>setSeeMore(!seemore)}>
               {seemore ? "Ver más" : "Ver menos"}
                <span class="fa fa-angle-down" ></span>
            </a>
        </div>
    </>
)
}

export default MoreInformation