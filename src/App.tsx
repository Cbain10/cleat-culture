import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import CleatPage from './views/soccerView/cleatPage/CleatPage';
import ErrorPage from './views/errorPage/ErrorPage';
import CleatTable from './views/soccerView/cleatArchive/CleatArchive';
import Recommender from './views/soccerView/recommender/Recommender';
import { SoccerView } from './views/soccerView/SoccerView';
import { GamesView } from './views/gamesView/GamesView';
import { Hangman } from './views/gamesView/hangman/Hangman';
import { TerminalView } from './views/terminalView/TerminalView';

function App() {
  return (
    <CleatProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/terminal' element={<TerminalView />} />
            <Route path='/soccer' element={<SoccerView />} />
            <Route path='/soccer/archive' element={<CleatTable />} />
            <Route path='/soccer/archive/:id' element={<CleatPage />} />
            <Route path='/soccer/recommender/:id' element={<CleatPage />} />
            <Route path='/soccer/recommender' element={<Recommender />} />
            <Route path='/games' element={<GamesView />} />
            <Route path='/games/hangman' element={<Hangman />} />
            <Route path='*' element={<ErrorPage />} />
          </Routes>
        </div>
      </Router>
    </CleatProvider>
  );
}

export default App;

/*

  TODO
    Recommender
      navigate back from cleat page to same results
      change slider for styles

*/
