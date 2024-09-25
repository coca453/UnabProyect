import "../App.scss";
import Captcha from "../components/steps-1/captcha";
import Email from "../components/steps-1/email";
import NumDoc from "../components/steps-1/num-doc";
import TipoDoc from "../components/steps-1/tipo-doc";

interface DocumentType {
  id_tipo_documento: number;
  tipo_documento: string;
}

interface Steps1Props {
  tieneCaptcha: boolean;
  captcha: string;
  captchaAlert: boolean;
  email: string;
  emailAlert: boolean;
  numDoc: string;
  numDocAlert: boolean;
  setCaptcha: (value: boolean) => void;
  setCaptchaAlert: (value: boolean) => void;
  setEmail: (value: string) => void;
  setEmailAlert: (value: boolean) => void;
  setNumDoc: (value: string) => void;
  setNumDocAlert: (value: boolean) => void;
  setTipoDoc: (value: number) => void;
  setTipoDocAlert: (value: boolean) => void;
  tdocument: DocumentType[];
  tipoDoc: number;
  tipoDocAlert: boolean;
  msg: string;
  opening: boolean;
}

function Steps1({
  tieneCaptcha,
  captchaAlert,
  email,
  emailAlert,
  numDoc,
  numDocAlert,
  setCaptcha,
  setCaptchaAlert,
  setEmail,
  setEmailAlert,
  setNumDoc,
  setNumDocAlert,
  setTipoDoc,
  setTipoDocAlert,
  tdocument,
  tipoDoc,
  tipoDocAlert,
  msg,
  opening,
}: Steps1Props) {
  return (
    <div>
      <section className="section--steps">
        <div className="section__step">
          {!opening ? (
            <div className="section__header margin">
              <h2 className="section__title">
                <strong>{msg}</strong>
              </h2>
            </div>
          ) : (
            <>
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
                <div className="section__wrap">
                  <div className="section__form__box">
                    <div className="section__form__title">
                      Información del estudiante
                    </div>
                    {/* <TipoDoc .....*/}

                    <TipoDoc
                      tdocument={tdocument}
                      tipoDoc={tipoDoc}
                      setTipoDoc={setTipoDoc}
                      tipoDocAlert={tipoDocAlert}
                      setTipoDocAlert={setTipoDocAlert}
                      numDoc={numDoc}
                      setNumDoc={setNumDoc}
                    />

                    {/* <NumDoc */}
                    <NumDoc
                      numDoc={numDoc}
                      setNumDoc={setNumDoc}
                      numDocAlert={numDocAlert}
                      setNumDocAlert={setNumDocAlert}
                      tipoDoc={tipoDoc}
                    />
                    {/* <Email */}
                    <Email
                      email={email}
                      setEmail={setEmail}
                      emailAlert={emailAlert}
                      setEmailAlert={setEmailAlert}
                    />
                    {tieneCaptcha && (
                      <Captcha
                        setCaptcha={setCaptcha}
                        captchaAlert={captchaAlert}
                        setCaptchaAlert={setCaptchaAlert}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}

export default Steps1;
