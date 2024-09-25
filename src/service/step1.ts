import APIS from "./apis";

// const url = 'https://d24nhxl4yamrul.cloudfront.net/backend_data/';

export const getTDocuments = async (flag: boolean) => {
  if (flag) {
    return {
      data: [
        { id_tipo_documento: 2, tipo_documento: "Pasaporte" },
        { id_tipo_documento: 1, tipo_documento: "RUT" },
      ],
    };
  }
  return APIS.getTiposDocumentos();
};
export const getEspejos = async (flag: boolean) => {
  if (flag) {
    return {
      data: {
        data: [
          {
            espejo: "nombre",
            path: "/nombre",
            captcha: false,
            periodoDemre: false,
          },
          {
            espejo: "nombre2",
            path: "/nombre2",
            captcha: true,
            periodoDemre: true,
          },
        ],
      },
    };
  }
  return APIS.getEspejos();
};
export const openingData = () => {
  return APIS.getOpeningData();
};

export const crearEstudiante = async (
  DOCUMENTO: string,
  tipo_documento: number,
  email: string,
  feria: string
) => {
  const postObject = {
    email: email,
    id_tipo_documento: tipo_documento,
    numero_documento: DOCUMENTO,
  };

  if (feria.length > 1) {
    return APIS.simulacionStartFeria(JSON.stringify(postObject), feria);
  }

  return APIS.simulacionStart(JSON.stringify(postObject));
};

export const cargaTDocument = async (
  MOCK: boolean,
  setDocument: (value: string) => void, // Aquí indicas que setDocument es una función que recibe un string
  setShowInitButton: (value: boolean) => void // Aquí indicas que setShowInitButton es una función que recibe un booleano
) => {
  await getTDocuments(MOCK).then((data) => {
    setDocument(data.data.data); // Establecer el documento
    setShowInitButton(true); // Mostrar el botón de inicio
  });
};

export const cargaEspejos = async (MOCK: boolean) => getEspejos(MOCK);
