import { lazy } from "react";

export const modelos = {
  enfermedadCoronaria: {
    Modelo1: lazy(() => import("./enfermedadCoronaria/modelo1/Modelo1.jsx")),
    Modelo2: lazy(() => import("./enfermedadCoronaria/modelo2/Modelo2.jsx")),
    Modelo3: lazy(() => import("./enfermedadCoronaria/modelo3/Modelo3.jsx")),
    Modelo4: lazy(() => import("./enfermedadCoronaria/modelo4/Modelo4.jsx")),
  },
};
