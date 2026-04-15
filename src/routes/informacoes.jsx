import React from "react";

const informacoes = () => {
  return (
    <div className="px-4 sm:px-6 lg:px-12">
      <div className="text-xl sm:text-2xl mt-4 text-zinc-700">
        Informações importantes
      </div>

      <div className="max-w-3xl mx-auto mt-4">
        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Sobre as reservas
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          As reservas são confirmadas após a finalização do pagamento. Um e-mail
          com todos os detalhes será enviado automaticamente.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Políticas de cancelamento
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          As políticas de cancelamento podem variar de acordo com cada
          hospedagem. Recomendamos sempre verificar as regras antes de finalizar
          a reserva.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Formas de pagamento
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          Nossa plataforma aceita diferentes métodos de pagamento, garantindo
          segurança e praticidade durante o processo de reserva.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Avaliações
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          As avaliações disponíveis na plataforma são feitas por hóspedes que já
          se hospedaram nos locais listados, ajudando outros viajantes a tomar
          decisões com mais confiança.
        </p>

        <h2 className="text-base sm:text-lg text-zinc-700 mt-4">
          Segurança
        </h2>
        <p className="text-sm sm:text-base text-zinc-500">
          Trabalhamos para garantir um ambiente seguro para todos os usuários,
          com sistemas de pagamento protegidos e anúncios verificados.
        </p>
      </div>
    </div>
  );
};

export default informacoes;