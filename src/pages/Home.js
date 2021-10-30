import { Cards } from '../components/Cards.js';

import './Home.css';

function Home() {
  return (
    <div>
      <header>
        <h2>calcular a quantidade de tinta necessária para pintar uma sala</h2>
      </header>
      <div>
        <Cards />
      </div>
      <footer className="rodape">
        Desafio desenvolvido por Esio Nascimento
      </footer>
    </div>
  );
}

export default Home;
