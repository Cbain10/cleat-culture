import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './views/home/Home';
import CleatPage from './views/cleatPage/CleatPage';
import ErrorPage from './views/errorPage/ErrorPage';
import CleatTable from './views/cleatArchive/CleatArchive';
import Chooser from './views/chooser/Chooser';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cleat-table' element={<CleatTable />} />
          <Route path='/cleat/:id' element={<CleatPage />} />
          <Route path='/chooser' element={<Chooser />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
