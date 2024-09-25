import unabImage from "../img/logo-unab.webp";

interface HeaderProps {
  title: string;
  isHomeScreen: boolean;
}

const Header = ({ title, isHomeScreen }: HeaderProps) => {
  return (
    <header className="header g-0">
      <div className={isHomeScreen ? "wrap-2 bg-steps-2" : "wrap"}>
        <div className={isHomeScreen ? "wrap-flex-2" : "wrap-flex"}>
          <div className={isHomeScreen ? "headerImg" : ""}>
            <img
              className="img-fluid img-unab"
              src={unabImage}
              alt="logo-unab"
              width={170}
              height={60}
            />
          </div>
          {isHomeScreen && (
            <h1 className="HomePageHeadertitle">
              <span className="HomePageHeadertitleTop">
                ¡Conoce tu carrera!
              </span>
              <span className="HomePageHeadertitleSub">
                Simula con tu puntaje y obtén una beca
              </span>
            </h1>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
