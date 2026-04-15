import React from "react";
import { Outlet, Link } from "react-router-dom";
import { GrInstagram } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { BsWhatsapp } from "react-icons/bs";
import { BsFillTelephoneFill } from "react-icons/bs";

const App = () => {
  return (
    <div className="bg-zinc-100 w-full min-h-screen flex flex-col">
      {/* Header */}
      <div className="bg-zinc-300 w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-bold text-2xl sm:text-3xl">
            Logo
          </Link>

          <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <li>
              <Link
                to="/sobre-nos"
                className="text-sm text-gray-600 hover:text-gray-950 hover:underline"
              >
                Sobre nós
              </Link>
            </li>

            <li>
              <Link
                to="/como-reservar"
                className="text-sm text-gray-600 hover:text-gray-950 hover:underline"
              >
                Como reservar
              </Link>
            </li>

            <li>
              <Link
                to="/informacoes"
                className="text-sm text-gray-600 hover:text-gray-950 hover:underline"
              >
                Informações
              </Link>
            </li>

            <li>
              <Link
                to="/contato"
                className="text-sm text-gray-600 hover:text-gray-950 hover:underline"
              >
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Conteúdo */}
      <main className="grow">
        <Outlet />
      </main>

      {/* Footer */}
      <div className="bg-zinc-300 w-full">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link to="/" className="font-bold text-lg sm:text-xl">
            Logo
          </Link>

          <ul className="flex gap-5 text-lg">
            <li className="hover:text-zinc-700">
              <Link to="/contato">
                <BsFillTelephoneFill />
              </Link>
            </li>

            <li className="hover:text-zinc-700">
              <a
                href="https://web.whatsapp.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsWhatsapp />
              </a>
            </li>

            <li className="hover:text-zinc-700">
              <a
                href="https://www.facebook.com/?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook />
              </a>
            </li>

            <li className="hover:text-zinc-700">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GrInstagram />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;