function Home() {
  return (
    <div style={{ textAlign: "center", margin: "0 auto", maxWidth: "800px" }}>
      <h1>TripsNews: O começo!</h1>
      <div>
        <p>
          Devo confessar que a minha ideia inicial com o TripsNews, era fazer
          com que fosse uma página simples para mostrar notícias sobre viagens,
          que pudesse influenciar pessoas a viajarem por conta do conteúdo
          mostrado. Mas creio que posso chegar muito além disso. Vem ai a minha
          ideia McDonald's:
        </p>

        <h2>Propósito do TripsNews:</h2>
        <ul style={{ textAlign: "justify", display: "inline-block" }}>
          <li>
            Mostrar novidades/notícias sobre viagens nacionais e internacionais.
          </li>
          <li>
            Demonstrar pontos turísticos destas viagens, restaurantes,
            hotéis/casas/apartamentos disponíveis.
          </li>
          <li>
            Ser um lugar onde pessoas que fizeram essas viagens compartilhem
            suas experiências.
          </li>
          <li>
            Pessoas conseguirem postar novos conteúdos de uma viagem em
            específico, por exemplo, algo que acontece em uma época do ano.
            <ul>
              <li>
                Gramado é um ótimo exemplo disso, onde todo natal, a cidade é
                enfeitada, mudando totalmente o clima.
              </li>
            </ul>
          </li>
          <li>
            Mostrar temperatura, clima do tempo de cada cidade da viagem
            específica.
          </li>
        </ul>

        <p>
          Perfil do Usuário: Pessoas que se interessam por viagens e querem
          conhecer um pouco o que cada lugar pode proporcionar.
        </p>
      </div>
    </div>
  );
}

export default Home;
