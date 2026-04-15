import React from "react";

const contato = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="text-xl sm:text-2xl mt-4 text-zinc-700">
        Entre em contato
      </div>

      <div className="max-w-3xl mx-auto mt-4">
        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">Email</h2>
        <p className="text-sm sm:text-base text-zinc-500">
          suporte@plataformadeviagens.com
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">Telefone</h2>
        <p className="text-sm sm:text-base text-zinc-500">
          (11) 4000-0000
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Horário de atendimento
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          Atendimento disponível todos os dias, das 8h às 20h.
        </p>
      </div>
    </div>
  );
};

export default contato;