import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Player from "./components/Player/Player";
import Cards from "./components/Cards/Cards";

import cardData from "./data/data.json";
import chillHeader from "./assets/images/header_and_tags.png";

function App() {
  console.log(cardData);
  return (
    <div className="app">
      <Header />
      <Sidebar />

      <div className="chill">
        <img className="app__image" src={chillHeader} />

        <div class="cards-container">
          {cardData.data.map((card) => {
            return <Cards id={card.id} data={card} />;
          })}
        </div>
      </div>
      <Player />
    </div>
  );
}

export default App;
