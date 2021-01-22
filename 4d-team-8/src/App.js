import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Player from './components/Player/Player';

function App() {
  return (
    <div className="app">
      <Header />
      <Sidebar />
      <Player />
    </div>
  );
}

export default App;
