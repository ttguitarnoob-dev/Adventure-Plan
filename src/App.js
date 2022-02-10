//DEPENDENCIES
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'

//COMPONENTS
import AllAdventures from './components/AllAdventures';
import AdventureDetails from './components/AdventureDetails';
import NewAdventure from './components/NewAdventure';
import Search from './components/Search';
import SearchDetails from './components/SearchDetails';

//FUNCTIONS
function HomePage(){
  return(<>
    <h1>Home Page</h1>
    <Link to="/adventures">All Adventures</Link>
    <Link to="/adventures/new">New Adventure</Link>
    <Link to="/search">Search for Cool Places</Link>
  </>)
}

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adventures' element={<AllAdventures />} />
        <Route path='/adventures/new' element={<NewAdventure />} />
        <Route path='/adventures/:id' element={<AdventureDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:id' element={<SearchDetails />} />
      </Routes>
    </div>
  );
}

export default App;
