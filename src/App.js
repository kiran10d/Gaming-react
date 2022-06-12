import Header from './components/header/Header';
import SideNav from './components/sideNav/SideNav';
import NewGames from './components/newGames/NewGames';
import GameDetails from './components/gameDetails/GameDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <SideNav />
      <div className="App">
        <Routes>
          <Route path="/" element={<NewGames />} />
          <Route path="/:id" element={<GameDetails />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
