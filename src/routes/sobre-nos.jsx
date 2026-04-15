import React from "react";

const SobreNos = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="text-xl sm:text-2xl mt-4 text-zinc-700">
        Sobre a nossa plataforma
      </div>

      <div className="max-w-3xl mx-auto mt-4">
        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Introdução
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          Nossa plataforma foi criada para tornar o planejamento de viagens mais
          simples, rápido e acessível. Conectamos viajantes a milhares de
          hotéis, apartamentos, pousadas e acomodações únicas em diversos
          destinos.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          O que fazemos
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          Nosso objetivo é ajudar pessoas a encontrar o lugar perfeito para se
          hospedar, oferecendo uma grande variedade de opções para diferentes
          estilos de viagem e orçamentos. Com uma interface simples e um sistema
          de reservas seguro, os usuários podem comparar preços, explorar
          destinos e reservar acomodações em poucos minutos.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Por que usar nossa plataforma
        </h2>
        <ul className="text-sm sm:text-base text-zinc-500 list-disc pl-5 mt-2 space-y-1">
          <li>Grande variedade de acomodações</li>
          <li>Comparação fácil de preços</li>
          <li>Reservas rápidas e seguras</li>
          <li>Avaliações de hóspedes reais</li>
          <li>Opções para diferentes orçamentos</li>
        </ul>
      </div>
    </div>
  );
};

export default SobreNos;