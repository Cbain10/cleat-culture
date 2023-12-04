import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import CleatPage from './views/cleatPage/CleatPage';
import ErrorPage from './views/errorPage/ErrorPage';
import CleatTable from './views/cleatArchive/CleatArchive';
import Chooser from './views/chooser/Chooser';
import { SoccerView } from './views/soccerView/SoccerView';
import { GamesView } from './views/gamesView/GamesView';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/soccer' element={<SoccerView />} />
          <Route path='/soccer/archive' element={<CleatTable />} />
          <Route path='/soccer/cleat/:id' element={<CleatPage />} />
          <Route path='/soccer/recommender' element={<Chooser />} />
          <Route path='/games' element={<GamesView />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
