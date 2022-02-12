//DEPENDENCIES
import './App.css';
import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

//COMPONENTS
import AllAdventures from './components/AllAdventures';
import AdventureDetails from './components/AdventureDetails';
import NewAdventure from './components/NewAdventure';
import Search from './components/Search';
import SearchDetails from './components/SearchDetails';
import Navigation from './components/Navigation';
import AddStop from './components/AddStop';
function HomePage(){
  return(<>
    <h1>Home Page</h1>
    {/* <Link to="/adventures">All Adventures</Link>
    <Link to="/adventures/new">New Adventure</Link>
    <Link to="/search">Search for Cool Places</Link> */}
  </>)
}



function App() {
  //MAIN DATA STATE
  const [adventures, setAdventures] = useState([])
  const navigate = useNavigate()
  

  //FUNCTIONS
  
  //Fetch all present data on load
  
  const handleFetch = async () => {
    //URL will have to be the heroku address that I deploy the backend to
    const URL = "http://localhost:8000/adventures/"
    fetch(URL).then(resp => {
      return resp.json()
      .then(data => {
        console.log('handlefetch', data)
        setAdventures(data)
      })
    })
  }

  //HandleFetch function call
  useEffect(() => {
    handleFetch()
  }, [])

  async function DeleteAdventure(id){
    
    //URL will need to be the heroku backend server
    const DURL = `http://localhost:8000/adventures/${id}`
    try{
      const response = await fetch(DURL, { method: "DELETE" })
      const deletedAdventure = await response.json()
      const updatedAdventureList = adventures.filter(adventure => adventure._id !== deletedAdventure._id)
      setAdventures(updatedAdventureList)
      navigate('/adventures')

    }catch(err) {
      console.log('deleting errrror', err)
    }
  }

  console.log('current main data state', adventures)
  return (
    <div className="App">
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adventures' element={<AllAdventures adventures={adventures} />} />
        <Route path='/adventures/new' element={<NewAdventure adventures={adventures} setAdventures={setAdventures}/>} />
        <Route path='/adventures/:id' element={<AdventureDetails DeleteAdventure={DeleteAdventure}/>} />
        <Route path='/search' element={<Search />} />
        <Route path='/search/:id' element={<SearchDetails />} />
        <Route path='/adventures/update/:id' element={<AddStop />} />
        
      </Routes>
    </div>
  );
}

export default App;
