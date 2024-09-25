import { createContext, useReducer, useEffect, ReactNode } from "react";

const initialState = {};

const reducer = (jwt: object, newJwt: object) => {
  if (!newJwt) {
    localStorage.removeItem("jwt");
    return initialState;
  }
  return { ...jwt, ...newJwt };
};

const localState = JSON.parse(localStorage.getItem("jwt") || "{}");

const JwtContext = createContext({});

interface JwtProviderProps {
  children: ReactNode;
}

const JwtProvider = ({ children }: JwtProviderProps) => {
  const [jwt, setJwt] = useReducer(reducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem("jwt", JSON.stringify(jwt));
  }, [jwt]);

  return (
    <JwtContext.Provider value={{ jwt, setJwt }}>
      {children}
    </JwtContext.Provider>
  );
};

export { JwtContext, JwtProvider };
