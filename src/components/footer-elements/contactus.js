import React from "react";
import whatsappImg from "../../img/whatsapp.webp";

const ContactUsFooter = () => {
  return (
    <>
      <div className="footer__wp">
        <div className="footer__info">
          <h5 className="footer__title">¿Tienes dudas?</h5>
          <div className="footer__text">Contáctanos</div>
        </div>
        <div className="footer__icon">
          <a
            href="https://api.whatsapp.com/send?phone=56946171786"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <img
              src={whatsappImg}
              alt="whatsapp-contact"
              width={45}
              height={45}
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactUsFooter;
