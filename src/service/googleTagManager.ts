import TagManager from "react-gtm-module-nonce-aware";
import Cookies from "js-cookie";

const GTMKey = import.meta.env.VITE_GOOGLE_TAG_MANAGER_KEY;
const STAGE = import.meta.env.VITE_STAGE;

export const inicializarTagManager = () => {
  TagManager.initialize({
    gtmId: GTMKey,
    events: {
      checkout: "checkout",
      intermedio: "intermedio",
      SIMbyb: "SIMbyb",
      purchase: "purchase",
    },
    nonce: "noncegenerated-at-runtime",
  });
};

export const getTagManagerCookie = () => {
  if (STAGE !== "prod") {
    Cookies.set("traffic_source_MOCK", "mock", { expires: 1 });
    return "traffic_source_MOCK";
  }
  return "traffic_source";
};
