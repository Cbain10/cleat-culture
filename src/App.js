import './App.css';
import CleatTable from './components/cleatTable/CleatTable';
import Sorting from './components/sortingDropdown/Sorting';
import Title from './components/title/Title';

function App() {
  return (
    <div className="App">
      <Title></Title>
      <Sorting></Sorting>
      <CleatTable></CleatTable>
    </div>
  );
}

export default App;
