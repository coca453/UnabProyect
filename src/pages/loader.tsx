import "../App.scss";
import rocket from "../assets/img/rocket.avif";

interface Props {
  page: {
    page: number;
  };
}

const Loader = ({ page }: Props) => {
  return (
    <div className="loader loader--reload">
      <div className="section__bg">
        <div className="bg-steps"> </div>
      </div>
      <div className="loader__body">
        <div className="loader__icon center">
          {" "}
          <img alt="loader" src={rocket} width={190} height={190} />
        </div>
        <div className="loader__title">
          {page.page === 7 ? "Tu futuro está cerca de despegar" : "Cargando..."}
        </div>
        <p className="loader__description">
          {page.page === 7 ? "Estamos calculando tu resultado" : ""}
        </p>
      </div>
    </div>
  );
};

export default Loader;
