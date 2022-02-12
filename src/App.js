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

  //API Fetching
 
    async function GrabCoordinates(search){
      const URL = `https://api.opentripmap.com/0.1/en/places/geoname?name=${search}&country=US&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`
      const options = {
        method: "GET"
      }
      console.log('searched URL isssisis', URL)
  
      const response = await fetch(URL, options)
      const coordinates = await response.json()
      console.log('coordinates', coordinates)
      LocationResults(coordinates)
    }



    async function LocationResults(coordinates){
    const URL = `https://api.opentripmap.com/0.1/en/places/radius?radius=500&lon=${coordinates.lon}&lat=${coordinates.lat}&limit=30&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`
    const options = {
      method: "GET"
    }
    console.log('searched lon lat url is', URL)
    const response = await fetch(URL, options)
    const results = await response.json()
    console.log('final search results', results.features)
  }

  
  
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
        <Route path='/search' element={<Search GrabCoordinates={GrabCoordinates}/>} />
        <Route path='/search/:id' element={<SearchDetails />} />
        <Route path='/adventures/update/:id' element={<AddStop />} />
        
      </Routes>
    </div>
  );
}

export default App;
