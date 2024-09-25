import ReactGA from "react-ga4";

const GAKey = process.env.REACT_APP_GOOGLE_ANALYTICS_KEY;

export const inicializarAnalytic = () => {
  ReactGA.initialize(GAKey);
};
