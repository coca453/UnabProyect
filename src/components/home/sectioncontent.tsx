import personas from "../../img/personas.avif";

interface SectionContentProps {
  start: () => void;
  showInitButton: boolean;
}

const SectionContent = ({ start, showInitButton }: SectionContentProps) => {
  return (
    <div className="section__content_container">
      <div className="section__content_home">
        <div className="section__img_home">
          <img src={personas} alt="personas-gif" width={200} height={200} />
        </div>
        <div className="section__action_home">
          <h2 className="section__action_title">
            Prepárate para el proceso de admisión 2024
            <br />e ingresa a la carrera que siempre quisiste
          </h2>
          <button
            className={!showInitButton ? "btn_a_disabled" : "btn_a"}
            onClick={start}
            disabled={!showInitButton}
          >
            Comencemos{"  "}
            <span
              className={
                !showInitButton ? "fa fa-spinner" : "fa fa-long-arrow-right"
              }
            ></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionContent;
