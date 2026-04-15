import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./routes/home.jsx";
import Contato from "./routes/contato.jsx";
import ComoReservar from "./routes/como-reservar.jsx";
import Informacoes from "./routes/informacoes.jsx";
import SobreNos from "./routes/sobre-nos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "como-reservar",
        element: <ComoReservar />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "informacoes",
        element: <Informacoes />,
      },
      {
        path: "sobre-nos",
        element: <SobreNos />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen w-full">
      <RouterProvider router={router} />
    </div>
  </StrictMode>
);