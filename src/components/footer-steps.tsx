import whatsappImg from "../assets/img/whatsapp.webp";
import phoneImg from "../assets/img/phone.webp";

const FooterSteps = () => {
  return (
    <>
      <footer className="footer--steps">
        <div className="footer__wrap">
          <div className="cols">
            <h4 className="footer__title">¿Tienes dudas?</h4>
            <div className="footer__flex">
              <div className="col-xs-12 col-lg-3"></div>
              <div className="col-xs-6 col-lg-3">
                <div className="footer__wp">
                  <div className="footer__icon">
                    <a
                      href="https://api.whatsapp.com/send?phone=56946171786"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={whatsappImg}
                        alt="whatsapp-contact"
                        width={45}
                        height={45}
                      />
                    </a>
                  </div>
                  <div className="footer__text">
                    <a
                      href="https://api.whatsapp.com/send?phone=56946171786"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whatsapp
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-6 col-lg-3">
                <div className="footer__wp">
                  <div className="footer__icon">
                    <a
                      href="https://api.whatsapp.com/send?phone=56946171786"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={phoneImg}
                        alt="phone-contact"
                        width={45}
                        height={45}
                      />
                    </a>
                  </div>
                  <div className="footer__text">
                    <a
                      href="https://api.whatsapp.com/send?phone=56946171786"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      600 228 6262
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-lg-3"></div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterSteps;
