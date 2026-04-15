import React, { useState, useEffect } from "react";
import bg from "../assets/hotel.jpg";
import { IoSearch } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";

import hotel from "../assets/resort.jpg";
import hotel2 from "../assets/opcao1.jpg";
import hotel3 from "../assets/opcao2.jpg";
import hotel4 from "../assets/opcao3.jpg";

const Home = () => {
  const imagens = [hotel, hotel2, hotel3, hotel4];

  const [index, setIndex] = useState(0);
  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [estadoSelecionado, setEstadoSelecionado] = useState("");
  const [cidadeSelecionada, setCidadeSelecionada] = useState("");

  const proxima = () => {
    setIndex((prev) => (prev + 1) % imagens.length);
  };

  const anterior = () => {
    setIndex((prev) => (prev === 0 ? imagens.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagens.length]);

  useEffect(() => {
    fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
      .then((res) => res.json())
      .then((data) => {
        const ordenados = data.sort((a, b) => a.nome.localeCompare(b.nome));
        setEstados(ordenados);
      });
  }, []);

  useEffect(() => {
    if (!estadoSelecionado) return;

    fetch(
      `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${estadoSelecionado}/municipios`,
    )
      .then((res) => res.json())
      .then((data) => {
        setCidades(data);
      });
  }, [estadoSelecionado]);

  return (
    <div>
      {/* banner */}
      <div
        className="relative w-full h-72 sm:h-96 md:h-125 bg-cover bg-center flex flex-col items-center justify-center text-center px-4"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold">
          Onde você quer ir?
        </h1>

        <p className="relative text-zinc-50 mt-2 text-sm sm:text-base max-w-xl">
          Escolha o Estado e a cidade para encontrar os melhores resorts.
        </p>

        <div className="relative flex flex-col sm:flex-row items-center justify-center p-4 gap-3 w-full max-w-2xl">
          {/* ESTADOS */}
          <select
            className="w-full sm:w-auto cursor-pointer text-sm bg-zinc-300 rounded-md px-3 py-2"
            value={estadoSelecionado}
            onChange={(e) => {
              setEstadoSelecionado(e.target.value);
              setCidadeSelecionada("");
            }}
          >
            <option value="">Selecione um Estado</option>

            {estados.map((estado) => (
              <option key={estado.id} value={estado.sigla}>
                {estado.nome}
              </option>
            ))}
          </select>

          {/* CIDADES */}
          <select
            className="w-full sm:w-auto cursor-pointer text-sm bg-zinc-300 rounded-md px-3 py-2"
            value={cidadeSelecionada}
            onChange={(e) => setCidadeSelecionada(e.target.value)}
            disabled={!estadoSelecionado}
          >
            <option value="">Selecione uma cidade</option>

            {cidades.map((cidade) => (
              <option key={cidade.id} value={cidade.nome}>
                {cidade.nome}
              </option>
            ))}
          </select>

          <button className="w-full sm:w-auto justify-center cursor-pointer text-sm bg-orange-500 text-white rounded-md px-3 py-2 hover:bg-orange-600 transition flex items-center">
            <IoSearch size={18} className="mr-2" />
            Pesquisar resorts
          </button>
        </div>
      </div>

      {/* featured resort */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          {/* texto */}
          <div className="w-full md:w-1/2">
            <div className="text-sm sm:text-base font-bold text-zinc-500/70">
              RESORT EM DESTAQUE
            </div>

            <div className="text-xl sm:text-2xl font-semibold mt-2">
              Ecoresort Praia do Forte Bahia
            </div>

            <div className="text-sm mt-1">Hotel qualidade 5 estrelas</div>

            <div className="my-4 text-zinc-800 space-y-4 text-sm sm:text-base">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
                necessitatibus eos delectus consequuntur eveniet.
              </p>

              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
                corrupti doloribus enim similique voluptatem eos ullam, error ad
                voluptatum optio distinctio iusto sint. Lorem, ipsum dolor sit
                amet consectetur adipisicing elit. Fugiat recusandae odit
                corporis rem beatae facere voluptatem unde!
              </p>
            </div>

            <button className="w-full sm:w-auto justify-center cursor-pointer text-sm bg-orange-500 text-white rounded-md px-4 py-2 hover:bg-orange-600 transition flex items-center">
              Solicitar reserva
              <IoMdArrowRoundForward size={20} className="ml-2" />
            </button>
          </div>

          {/* carrossel */}
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg group">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {imagens.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt="Resort"
                  className="w-full h-64 sm:h-72 md:h-80 object-cover shrink-0"
                />
              ))}
            </div>

            <button
              onClick={anterior}
              className="cursor-pointer absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
            >
              ←
            </button>

            <button
              onClick={proxima}
              className="cursor-pointer absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white p-2 rounded-full opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
