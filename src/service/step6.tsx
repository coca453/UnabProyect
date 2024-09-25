import APIS from "./apis";

export const getCarreras = async (flag: boolean) => {
  if (flag) {
    return {
      data: [
        {
          carrera: {
            nombre_carrera: "Arquitectura",
          },
          id_modalidad: 2,
          id_carrera: 1,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 1,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
            {
              id_carrera_modalidad_sede: 2,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 2,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 3,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Artes Visuales",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 3,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 4,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 5,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 6,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 7,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Bachillerato en Ciencias",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 5,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 9,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Biología Marina",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 6,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 10,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Bioquímica",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: true,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 8,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 11,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 12,
              sede: {
                id_sede: 6,
                nombre_sede: "Los Leones - Providencia",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Contador Auditor",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: true,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 9,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 13,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Contador Auditor - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 10,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 14,
              sede: {
                id_sede: 1,
                nombre_sede: "Bellavista - Providencia",
              },
            },
            {
              id_carrera_modalidad_sede: 15,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 16,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 141,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Derecho",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 11,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 17,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 18,
              sede: {
                id_sede: 1,
                nombre_sede: "Bellavista - Providencia",
              },
            },
            {
              id_carrera_modalidad_sede: 19,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Derecho - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 13,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 20,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Diseño de juegos digitales",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 15,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 21,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Diseño de Vestuario y Textil",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 16,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 22,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Diseño Gráfico",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 17,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 23,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 24,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 25,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Administración en Ecoturismo",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 18,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 26,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 27,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Pedagogía Educación Física",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 20,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 29,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 30,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Educación General Básica Mención Orientación y Convivencia Escolar",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 22,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 31,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Educación Musical",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 23,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 32,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 33,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Educación Parvularia",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 24,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 34,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Educación Parvularia - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 25,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 35,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 36,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 37,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Enfermería",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 26,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 38,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 39,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 40,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Fonoaudiología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 27,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 41,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 42,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 43,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Geología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 28,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 44,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Ambiental",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 30,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 45,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 32,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 48,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil en Minas",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 33,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 51,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 52,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 53,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil Industrial",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 34,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 54,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 55,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil Informática",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 35,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 56,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 57,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 58,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 59,
              sede: {
                id_sede: 1,
                nombre_sede: "Bellavista - Providencia",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Comercial",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 37,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 60,
              sede: {
                id_sede: 6,
                nombre_sede: "Los Leones - Providencia",
              },
            },
            {
              id_carrera_modalidad_sede: 61,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Administración de Empresas",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 38,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 62,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 63,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 64,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Ingeniería en Administración de Empresas - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 39,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 65,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Ingeniería en Administración Hotelera Internacional",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 40,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 66,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Automatización y Robótica",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 41,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 67,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Ingeniería en Automatización y Robótica - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 42,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 68,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 69,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Biotecnología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 43,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 70,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 71,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Computación e Informática",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 44,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 72,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Ingeniería en Computación e Informática - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 45,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 73,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Construcción",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 50,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 74,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Logística y Transporte - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 51,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 75,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 76,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Marina Mercante",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 57,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 77,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 78,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería en Turismo y Hotelería",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 58,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 79,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Física",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 60,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 80,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Industrial",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: false,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 61,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 81,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 82,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Industrial - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 62,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 83,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 84,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 85,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Kinesiología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 63,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 86,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Licenciatura en Astronomía",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 64,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 87,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Biología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 66,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 88,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Licenciatura en Física",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 67,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 89,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Licenciatura en Historia",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 68,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 91,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Licenciatura en Letras",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 69,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 92,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Química",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 70,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 93,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 94,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 95,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Medicina",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 71,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 96,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 97,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 98,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Medicina Veterinaria",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 72,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 99,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 100,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 101,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Nutrición y Dietética con Mención Gestión y Calidad",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 73,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 102,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 103,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 104,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Obstetricia",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 74,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 105,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 106,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 107,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Odontología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 75,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 108,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 109,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 110,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera:
              "Pedagogía en Inglés para la enseñanza básica y media",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 76,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 111,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Periodismo",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 79,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 112,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 113,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 114,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Psicología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 80,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 115,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 116,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Psicopedagogía",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 81,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 117,
              sede: {
                id_sede: 8,
                nombre_sede: "Creativo - Recoleta",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Publicidad",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 82,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 118,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 119,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 120,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Química y Farmacia",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 83,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 121,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Sociología",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 84,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 123,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 124,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 125,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Tecnología Médica",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 85,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 126,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 127,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 128,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Terapia Ocupacional",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 86,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 129,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 130,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Trabajo Social",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 88,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 132,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil Industrial - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 89,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 133,
              sede: {
                id_sede: 1,
                nombre_sede: "Bellavista - Providencia",
              },
            },
            {
              id_carrera_modalidad_sede: 134,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Comercial - Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 1,
          id_carrera: 93,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 135,
              sede: {
                id_sede: 4,
                nombre_sede: "República - Santiago",
              },
            },
            {
              id_carrera_modalidad_sede: 136,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
            {
              id_carrera_modalidad_sede: 137,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Psicología-Vespertino",
          },
          modalidad: {
            nombre_modalidad: "Vespertino",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 94,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 138,
              sede: {
                id_sede: 2,
                nombre_sede: "Casona - Las Condes",
              },
            },
            {
              id_carrera_modalidad_sede: 139,
              sede: {
                id_sede: 5,
                nombre_sede: "Viña del Mar",
              },
            },
            {
              id_carrera_modalidad_sede: 140,
              sede: {
                id_sede: 3,
                nombre_sede: "Concepción - Talcahuano",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Entrenador Deportivo",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: true,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
        {
          id_modalidad: 2,
          id_carrera: 95,
          carrera_modalidad_sede: [
            {
              id_carrera_modalidad_sede: 142,
              sede: {
                id_sede: 7,
                nombre_sede: "Antonio Varas - Santiago",
              },
            },
          ],
          carrera: {
            nombre_carrera: "Ingeniería Civil Eléctrica",
          },
          modalidad: {
            nombre_modalidad: "Diurno",
          },
          historia_requerida: false,
          ciencias_requerida: true,
          matematica_2_requerida: false,
          es_pedagogia: false,
        },
      ],
    };
  }
  return APIS.getCarreras();
};

export const step6Carga = (MOCK: boolean, setCarreras: ([]: any) => void) => {
  getCarreras(MOCK).then((carreras) => {
    setCarreras(carreras.data.data);
  });
};
