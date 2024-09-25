import React from "react";
import unabImage from "../assets/img/logo-unab-dark.webp";
import misCertificados from "../assets/img/file.webp";

interface HeaderStepsProps {
  title: string;
  page: number;
  setShow: () => void;
}

const HeaderSteps = ({ title, page, setShow }: HeaderStepsProps) => {
  const headerCertification =
    "header__certifications header__certifications--show";
  return (
    <>
      <header className="header--min">
        <div className="header__wrap">
          <div className="header__flex">
            <div className="header__logo">
              <img
                className="img-fluid img-unab"
                src={unabImage}
                alt="logo-unab"
                width={170}
                height={60}
              />
            </div>
            <div className="header__info">
              <span>{title}</span>
            </div>
            {page > 1 ? (
              <div className={headerCertification} onClick={setShow}>
                <div className="header__img">
                  <img
                    className="header__img"
                    src={misCertificados}
                    alt="mis-certificados"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="header__text">MIS CERTIFICADOS</div>
              </div>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderSteps;
