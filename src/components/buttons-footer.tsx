import React from "react";

import "./buttons-footer.scss";

interface ButtonsFotterProps {
  espejo: boolean;
  setAuthorizedDemre: React.Dispatch<React.SetStateAction<boolean>>;
  disableByDemre: boolean;
  progressBar: string;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  pagesLength: number;
  validation: (page: number) => Promise<boolean>;
  SetPageNext: React.Dispatch<React.SetStateAction<number>>;
  loader: boolean;
  setloader: React.Dispatch<React.SetStateAction<boolean>>;
  tagManagerStepper: (page: number) => void;
}

const ButtonsFotter = ({
  espejo,
  setAuthorizedDemre,
  disableByDemre,
  progressBar,
  page,
  setPage,
  pagesLength,
  validation,
  SetPageNext,
  loader,
  setloader,
  tagManagerStepper,
}: ButtonsFotterProps) => {
  const isAllowedToPass = async () => {
    if (await validation(page)) {
      console.log("entro");
      console.log(page);

      tagManagerStepper(page);
      SetPageNext((currentPage) => currentPage + 1);
    }
  };
  const isDisabled = page === 3 ? disableByDemre : false;
  return (
    <>
      <div className="section__footer  footer-buttons ">
        <div className="py-2 section__buttons flex">
          <button
            type="button"
            className="boton boton--gray p-3 m-2 fs-4"
            disabled={loader}
            onClick={() => {
              setAuthorizedDemre(false);
              SetPageNext((currentPage) => currentPage - 1);
            }}
          >
            Volver
          </button>
          <button
            type="button"
            className="boton boton--primario p-3 m-2 fs-4"
            disabled={loader || isDisabled}
            onClick={() => {
              setAuthorizedDemre(false);
              isAllowedToPass();
            }}
          >
            {loader ? (
              <>
                <div className="spinner"></div>
              </>
            ) : (
              <>
                <div>Siguiente</div>
              </>
            )}
          </button>
        </div>
        <div className="section__progress">
          <div className="section__number">
            {page}/{pagesLength}
          </div>
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: progressBar }}
              aria-valuenow={progressBar}
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonsFotter;
