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
<div className='homely'>
<div className='homelabel'>
    <h1>Puddle Jumper!</h1>
    <p>Welcome to Puddle Jumper!  Make an adventure itinerary and make sure it will make everyone jealous!</p>
</div>
</div>

  </>)
}



function App() {
  const [adventures, setAdventures] = useState([])
  const [search, setSearch] = useState()
  const navigate = useNavigate()
  

  //FUNCTIONS

  //API Fetching
 
    async function GrabCoordinates(search){
      const URL = `https://api.opentripmap.com/0.1/en/places/geoname?name=${search}&country=US&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`
      const options = {
        method: "GET"
      }
      const response = await fetch(URL, options)
      const coordinates = await response.json()
      LocationResults(coordinates)
    }



    async function LocationResults(coordinates){
    const URL = `https://api.opentripmap.com/0.1/en/places/radius?radius=500&lon=${coordinates.lon}&lat=${coordinates.lat}&limit=50&apikey=${process.env.REACT_APP_OPEN_TRIP_API_KEY}`
    const options = {
      method: "GET"
    }
    const response = await fetch(URL, options)
    const results = await response.json()
    setSearch(results.features)
  }

  
  
  //Fetch all present data on load
  
  const handleFetch = async () => {
    //URL will have to be the heroku address that I deploy the backend to
    const URL = "https://puddle-jumper.herokuapp.com/adventures/"
    fetch(URL).then(resp => {
      return resp.json()
      .then(data => {
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
    const DURL = `https://puddle-jumper.herokuapp.com/adventures/${id}`
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
  return (
    <div className="App">
    <Navigation />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/adventures' element={<AllAdventures adventures={adventures} />} />
        <Route path='/adventures/new' element={<NewAdventure adventures={adventures} setAdventures={setAdventures}/>} />
        <Route path='/adventures/:id' element={<AdventureDetails DeleteAdventure={DeleteAdventure}/>} />
        <Route path='/search' element={<Search search={search} GrabCoordinates={GrabCoordinates}/>} />
        <Route path='/search/:id' element={<SearchDetails adventures={adventures}/>} />
        <Route path='/adventures/update/:id' element={<AddStop />} />
      </Routes>
    </div>
  );
}

export default App;
